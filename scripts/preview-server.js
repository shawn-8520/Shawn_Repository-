import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { createHash, createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { fileURLToPath } from "node:url";
import { modelPresets } from "../src/config/model-presets.js";
import {
  contentTypeFor,
  loadPrivateEnv,
  readRequestBody,
  sendHtml,
  sendJson,
} from "./server/http-utils.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../outputs");
const projectRoot = path.resolve(__dirname, "..");

loadPrivateEnv(path.resolve(__dirname, "../.env"));
loadPrivateEnv(path.resolve(__dirname, "../.env.local"));

const dataDir = path.resolve(process.env.PROJECT_DATA_DIR || path.join(projectRoot, "data"));
const projectStatePath = path.join(dataDir, "project-state.json");
const runtimeStatsPath = path.join(dataDir, "runtime-stats.json");
const announcementsPath = path.join(dataDir, "announcements.json");
const modelSettingsPath = path.join(dataDir, "model-settings.json");
const chatHistoryPath = path.join(dataDir, "chat-history.json");
const membersPath = path.join(dataDir, "members.json");
const registrationRequestsPath = path.join(dataDir, "registration-requests.json");
const port = Number(process.env.PORT || 8099);
const host = "127.0.0.1";
const adminAccount = String(process.env.CLINK_ADMIN_ACCOUNT || "").trim();
const adminPassword = String(process.env.CLINK_ADMIN_PASSWORD || "");
const authSecret = String(process.env.CLINK_AUTH_SECRET || "");
const authTokenLifetimeMs = 7 * 24 * 60 * 60 * 1000;
const aiHordeJobs = new Map();

function secureTextEqual(actual, expected) {
  const actualHash = createHash("sha256").update(String(actual)).digest();
  const expectedHash = createHash("sha256").update(String(expected)).digest();
  return timingSafeEqual(actualHash, expectedHash);
}

function authIsConfigured() {
  return Boolean(adminAccount && adminPassword && authSecret.length >= 32);
}

function createAdminToken(account) {
  const accountPart = Buffer.from(account, "utf8").toString("base64url");
  const expiresAt = Date.now() + authTokenLifetimeMs;
  const payload = `v1.${accountPart}.${expiresAt}`;
  const signature = createHmac("sha256", authSecret).update(payload).digest("base64url");
  return `admin-token-${payload}.${signature}`;
}

function verifyAdminToken(token) {
  if (!authIsConfigured() || !String(token).startsWith("admin-token-v1.")) return null;
  const parts = String(token).slice("admin-token-".length).split(".");
  if (parts.length !== 4) return null;
  const [version, accountPart, expiresAtText, signature] = parts;
  const expiresAt = Number(expiresAtText);
  if (version !== "v1" || !Number.isFinite(expiresAt) || expiresAt <= Date.now()) return null;
  const payload = `${version}.${accountPart}.${expiresAtText}`;
  const expected = createHmac("sha256", authSecret).update(payload).digest("base64url");
  if (!secureTextEqual(signature, expected)) return null;
  try {
    const account = Buffer.from(accountPart, "base64url").toString("utf8");
    return account === adminAccount ? account : null;
  } catch {
    return null;
  }
}

function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(String(password), salt, 64).toString("hex");
  return `scrypt$${salt}$${hash}`;
}

function verifyPassword(password, stored) {
  const [algorithm, salt, expectedHex] = String(stored || "").split("$");
  if (algorithm !== "scrypt" || !salt || !expectedHex) return false;
  try {
    const actual = scryptSync(String(password), salt, 64);
    const expected = Buffer.from(expectedHex, "hex");
    return actual.length === expected.length && timingSafeEqual(actual, expected);
  } catch {
    return false;
  }
}

function createMemberToken(member) {
  const accountPart = Buffer.from(member.account, "utf8").toString("base64url");
  const rolePart = Buffer.from(member.role, "utf8").toString("base64url");
  const expiresAt = Date.now() + authTokenLifetimeMs;
  const payload = `v1.${accountPart}.${rolePart}.${expiresAt}`;
  const signature = createHmac("sha256", authSecret).update(payload).digest("base64url");
  return `member-token-${payload}.${signature}`;
}

function verifyMemberToken(token) {
  if (!authIsConfigured() || !String(token).startsWith("member-token-v1.")) return null;
  const parts = String(token).slice("member-token-".length).split(".");
  if (parts.length !== 5) return null;
  const [version, accountPart, rolePart, expiresAtText, signature] = parts;
  const expiresAt = Number(expiresAtText);
  if (version !== "v1" || !Number.isFinite(expiresAt) || expiresAt <= Date.now()) return null;
  const expected = createHmac("sha256", authSecret)
    .update(`${version}.${accountPart}.${rolePart}.${expiresAtText}`)
    .digest("base64url");
  if (!secureTextEqual(signature, expected)) return null;
  try {
    const account = Buffer.from(accountPart, "base64url").toString("utf8");
    const role = Buffer.from(rolePart, "base64url").toString("utf8");
    const member = readMembers().members.find((item) => item.account === account && item.status === "启用");
    return member && member.role === role && ["管理员", "编辑者"].includes(member.role) ? member : null;
  } catch {
    return null;
  }
}

function sessionFromToken(token) {
  const admin = verifyAdminToken(token);
  if (admin) return { account: admin, name: admin, role: "管理员", source: "environment" };
  const member = verifyMemberToken(token);
  return member ? { ...member, source: "member" } : null;
}

function tokenFromRequest(req, requestUrl, payload) {
  const authorization = String(req.headers.authorization || "");
  const bearerToken = authorization.toLowerCase().startsWith("bearer ") ? authorization.slice(7).trim() : "";
  return String(
    req.headers["x-token"]
    || req.headers["x-admin-token"]
    || bearerToken
    || requestUrl?.searchParams.get("token")
    || payload?.adminToken
    || ""
  );
}

function cleanImportedText(text) {
  return String(text || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function titleFromUrl(url) {
  try {
    const parsed = new URL(url);
    const last = decodeURIComponent(parsed.pathname.split("/").filter(Boolean).pop() || parsed.hostname);
    return last.replace(/[-_]+/g, " ").trim() || parsed.hostname;
  } catch {
    return "链接收藏";
  }
}

function matchMeta(html, selector) {
  const attr = selector.startsWith("property=") ? "property" : "name";
  const value = selector.split("=")[1];
  const pattern = new RegExp(`<meta[^>]+${attr}=["']${value}["'][^>]+content=["']([^"']*)["'][^>]*>`, "i");
  const reverse = new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+${attr}=["']${value}["'][^>]*>`, "i");
  return html.match(pattern)?.[1] || html.match(reverse)?.[1] || "";
}

function extractReadableContent(html, url) {
  const title = cleanImportedText(matchMeta(html, "property=og:title") || html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || titleFromUrl(url));
  const description = cleanImportedText(matchMeta(html, "name=description") || matchMeta(html, "property=og:description"));
  const articleHtml = html.match(/<article[\s\S]*?<\/article>/i)?.[0] || html.match(/<main[\s\S]*?<\/main>/i)?.[0] || html.match(/<body[\s\S]*?<\/body>/i)?.[0] || html;
  const blockMatches = [...articleHtml.matchAll(/<(h1|h2|h3|p|li|blockquote|pre)[^>]*>([\s\S]*?)<\/\1>/gi)]
    .map((match) => cleanImportedText(match[2]))
    .filter((text) => text.length > 24);
  const body = blockMatches.length ? blockMatches.join("\n\n") : cleanImportedText(articleHtml);
  return { title, description, body: body.slice(0, 20000), fetched: true, method: "local-proxy" };
}

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), options.timeout || 12000);
  try {
    return await fetch(url, {
      signal: controller.signal,
      redirect: "follow",
      method: options.method || "GET",
      body: options.body,
      headers: {
        "User-Agent": "Mozilla/5.0 AppleWebKit/537.36 Clink-AI Link Importer",
        "Accept": "text/html,application/xhtml+xml,text/plain;q=0.9,*/*;q=0.8",
        ...(options.headers || {})
      }
    });
  } finally {
    clearTimeout(timer);
  }
}

async function readViaJina(url) {
  const readerUrl = "https://r.jina.ai/http://" + url.replace(/^https?:\/\//i, "");
  const response = await fetchWithTimeout(readerUrl, { timeout: 15000 });
  if (!response.ok) throw new Error("reader " + response.status);
  const markdown = (await response.text()).trim();
  if (!markdown || markdown.length < 80) throw new Error("reader empty");
  const title = markdown.match(/^Title:\s*(.+)$/m)?.[1]?.trim() || markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() || titleFromUrl(url);
  const description = markdown.match(/^Description:\s*(.+)$/m)?.[1]?.trim() || "已通过正文提取通道读取。";
  return {
    title,
    description,
    body: markdown.replace(/^Title:.*$/m, "").replace(/^URL Source:.*$/m, "").replace(/^Markdown Content:.*$/m, "").trim().slice(0, 20000),
    fetched: true,
    method: "reader-fallback"
  };
}

async function importLink(url) {
  const parsed = new URL(url);
  try {
    const response = await fetchWithTimeout(parsed.href);
    if (!response.ok) throw new Error("HTTP " + response.status);
    const text = await response.text();
    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("text/html") || /<html|<article|<main|<p[\s>]/i.test(text)) {
      const extracted = extractReadableContent(text, parsed.href);
      if (extracted.body.length > 40 || extracted.title !== titleFromUrl(parsed.href) || extracted.description) {
        return { url: parsed.href, ...extracted };
      }
    }
    const body = cleanImportedText(text).slice(0, 20000);
    if (body.length > 80) {
      return {
        url: parsed.href,
        title: titleFromUrl(parsed.href),
        description: contentType || "文本内容",
        body,
        fetched: true,
        method: "local-proxy"
      };
    }
    throw new Error("empty content");
  } catch (error) {
    try {
      return { url: parsed.href, ...(await readViaJina(parsed.href)) };
    } catch {
      return {
        url: parsed.href,
        title: titleFromUrl(parsed.href),
        description: "该页面需要登录、权限、反爬验证，或内容由客户端动态渲染。本地服务未能直接读取全文。",
        body: "",
        fetched: false,
        method: "blocked"
      };
    }
  }
}

function readProjectState() {
  if (!fs.existsSync(projectStatePath)) {
    return {
      version: 1,
      updatedAt: "",
      desktopItems: null,
      hiddenWorksCategories: null,
      worksCanvas: null
    };
  }
  const state = JSON.parse(fs.readFileSync(projectStatePath, "utf8"));
  return {
    version: 1,
    updatedAt: "",
    desktopItems: null,
    hiddenWorksCategories: null,
    worksCanvas: null,
    ...state
  };
}

function normalizeProjectState(payload) {
  const state = payload?.data && typeof payload.data === "object" ? payload.data : payload;
  return {
    version: 1,
    updatedAt: new Date().toISOString(),
    desktopItems: Array.isArray(state?.desktopItems) ? state.desktopItems : [],
    hiddenWorksCategories: Array.isArray(state?.hiddenWorksCategories) ? state.hiddenWorksCategories : [],
    worksCanvas: state?.worksCanvas && typeof state.worksCanvas === "object" ? state.worksCanvas : null
  };
}

function writeProjectState(state) {
  fs.mkdirSync(dataDir, { recursive: true });
  const tempPath = projectStatePath + ".tmp";
  fs.writeFileSync(tempPath, JSON.stringify(state, null, 2), "utf8");
  fs.renameSync(tempPath, projectStatePath);
}

function readJsonFile(filePath, fallback) {
  if (!fs.existsSync(filePath)) return structuredClone(fallback);
  try {
    return { ...structuredClone(fallback), ...JSON.parse(fs.readFileSync(filePath, "utf8")) };
  } catch {
    return structuredClone(fallback);
  }
}

function writeJsonFile(filePath, value) {
  fs.mkdirSync(dataDir, { recursive: true });
  const tempPath = filePath + ".tmp";
  fs.writeFileSync(tempPath, JSON.stringify(value, null, 2), "utf8");
  fs.renameSync(tempPath, filePath);
  if ([modelSettingsPath, membersPath, registrationRequestsPath].includes(filePath)) fs.chmodSync(filePath, 0o600);
}

function defaultMembers() {
  return { version: 1, members: [], updatedAt: "" };
}

function readMembers() {
  const data = readJsonFile(membersPath, defaultMembers());
  return { ...defaultMembers(), ...data, members: Array.isArray(data.members) ? data.members : [] };
}

function writeMembers(members) {
  writeJsonFile(membersPath, { version: 1, members, updatedAt: new Date().toISOString() });
}

function defaultRegistrationRequests() {
  return { version: 1, requests: [], updatedAt: "" };
}

function readRegistrationRequests() {
  const data = readJsonFile(registrationRequestsPath, defaultRegistrationRequests());
  return { ...defaultRegistrationRequests(), ...data, requests: Array.isArray(data.requests) ? data.requests : [] };
}

function writeRegistrationRequests(requests) {
  writeJsonFile(registrationRequestsPath, { version: 1, requests, updatedAt: new Date().toISOString() });
}

function validateAccount(value) {
  const account = String(value || "").trim();
  if (!/^[A-Za-z0-9_.-]{3,40}$/.test(account)) throw new Error("账号需为 3-40 位字母、数字、点、短横线或下划线");
  return account;
}

function validatePassword(value, required = true) {
  const password = String(value || "");
  if (required && password.length < 6) throw new Error("密码至少需要 6 位");
  if (password && password.length < 6) throw new Error("密码至少需要 6 位");
  return password;
}

function publicMember(member) {
  return {
    id: member.id,
    name: member.name,
    account: member.account,
    email: member.email,
    role: member.role,
    status: member.status,
    lastActive: member.lastActive || "尚未登录",
    createdAt: member.createdAt || "",
    updatedAt: member.updatedAt || "",
    passwordConfigured: Boolean(member.passwordHash)
  };
}

function publicRegistrationRequest(request) {
  return {
    id: request.id,
    name: request.name,
    account: request.account,
    email: request.email,
    message: request.message,
    role: request.role,
    status: request.status,
    createdAt: request.createdAt,
    reviewedAt: request.reviewedAt || "",
    passwordConfigured: Boolean(request.passwordHash)
  };
}

function normalizeMemberInput(input = {}, current = null) {
  const account = validateAccount(input.account ?? current?.account);
  const password = validatePassword(input.password, !current);
  const name = String(input.name ?? current?.name ?? "").trim().slice(0, 60);
  const email = String(input.email ?? current?.email ?? "").trim().slice(0, 120);
  if (!name || !email) throw new Error("请填写姓名和邮箱");
  const role = ["管理员", "编辑者"].includes(input.role) ? input.role : (["管理员", "编辑者"].includes(current?.role) ? current.role : "编辑者");
  const status = input.status === "停用" ? "停用" : "启用";
  return {
    id: current?.id || `member-${Date.now()}-${randomBytes(3).toString("hex")}`,
    name,
    account,
    email,
    role,
    status,
    passwordHash: password ? hashPassword(password) : current?.passwordHash,
    lastActive: current?.lastActive || "尚未登录",
    createdAt: current?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

function requireAdmin(req, payload) {
  const token = tokenFromRequest(req, null, payload);
  const privateToken = String(process.env.CLINK_API_ADMIN_TOKEN || "");
  if (privateToken && token === privateToken) return true;
  return sessionFromToken(token)?.role === "管理员";
}

function requireModelManager(req, payload) {
  const token = tokenFromRequest(req, null, payload);
  const privateToken = String(process.env.CLINK_API_ADMIN_TOKEN || "");
  if (privateToken && token === privateToken) return true;
  return ["管理员", "编辑者"].includes(sessionFromToken(token)?.role);
}

function requireAuthenticatedUser(req, payload) {
  const token = tokenFromRequest(req, null, payload);
  const privateToken = String(process.env.CLINK_API_ADMIN_TOKEN || "");
  if (privateToken && token === privateToken) return { account: "system", role: "管理员" };
  return sessionFromToken(token);
}

function defaultRuntimeStats() {
  return {
    version: 2,
    apiRequests: 0,
    modelCalls: 0,
    tokenUsage: 0,
    conversations: 0,
    daily: {},
    snapshots: {},
    lastUpdatedAt: ""
  };
}

const statisticsTimeZone = String(process.env.CLINK_TIME_ZONE || "Asia/Shanghai");

function statisticsDateKey(value = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: statisticsTimeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(value);
}

function previousStatisticsDateKey() {
  return statisticsDateKey(new Date(Date.now() - 24 * 60 * 60 * 1000));
}

function normalizeRuntimeStats(value = {}) {
  return {
    ...defaultRuntimeStats(),
    ...value,
    version: 2,
    daily: value.daily && typeof value.daily === "object" ? value.daily : {},
    snapshots: value.snapshots && typeof value.snapshots === "object" ? value.snapshots : {}
  };
}

function dailyRuntimeBucket(stats, dateKey = statisticsDateKey()) {
  const existing = stats.daily[dateKey] || {};
  const bucket = {
    apiRequests: Math.max(0, Number(existing.apiRequests || 0)),
    modelCalls: Math.max(0, Number(existing.modelCalls || 0)),
    tokenUsage: Math.max(0, Number(existing.tokenUsage || 0)),
    conversations: Math.max(0, Number(existing.conversations || 0)),
    users: Array.isArray(existing.users) ? [...new Set(existing.users.map(String).filter(Boolean))] : []
  };
  stats.daily[dateKey] = bucket;
  return bucket;
}

function pruneRuntimeHistory(stats, keepDays = 90) {
  for (const collection of [stats.daily, stats.snapshots]) {
    const keys = Object.keys(collection).sort().reverse();
    for (const key of keys.slice(keepDays)) delete collection[key];
  }
}

function recordRuntimeUsage(patch = {}) {
  const current = normalizeRuntimeStats(readJsonFile(runtimeStatsPath, defaultRuntimeStats()));
  const daily = dailyRuntimeBucket(current);
  for (const key of ["apiRequests", "modelCalls", "tokenUsage", "conversations"]) {
    const delta = Number(patch[key] || 0);
    const safeDelta = Number.isFinite(delta) ? delta : 0;
    current[key] = Math.max(0, Number(current[key] || 0) + safeDelta);
    daily[key] = Math.max(0, Number(daily[key] || 0) + safeDelta);
  }
  current.lastUpdatedAt = new Date().toISOString();
  pruneRuntimeHistory(current);
  writeJsonFile(runtimeStatsPath, current);
  return current;
}

function recordRuntimeUser(account) {
  const normalizedAccount = String(account || "").trim();
  if (!normalizedAccount) return;
  const current = normalizeRuntimeStats(readJsonFile(runtimeStatsPath, defaultRuntimeStats()));
  const daily = dailyRuntimeBucket(current);
  if (!daily.users.includes(normalizedAccount)) daily.users.push(normalizedAccount);
  current.lastUpdatedAt = new Date().toISOString();
  pruneRuntimeHistory(current);
  writeJsonFile(runtimeStatsPath, current);
}

function projectStorageBytes() {
  return [projectStatePath, runtimeStatsPath, announcementsPath, modelSettingsPath, chatHistoryPath, membersPath, registrationRequestsPath]
    .reduce((total, filePath) => total + (fs.existsSync(filePath) ? fs.statSync(filePath).size : 0), 0);
}

function readRuntimeStats() {
  const stats = normalizeRuntimeStats(readJsonFile(runtimeStatsPath, defaultRuntimeStats()));
  const projectState = readProjectState();
  const agents = Array.isArray(projectState.desktopItems)
    ? projectState.desktopItems.filter((item) => !item.parentId)
    : [];
  const dateKey = statisticsDateKey();
  const previousDateKey = previousStatisticsDateKey();
  const daily = dailyRuntimeBucket(stats, dateKey);
  const previousDaily = stats.daily[previousDateKey];
  const snapshot = {
    agentCount: agents.length,
    activeAgentCount: agents.filter((item) => item?.agent?.status === "running").length,
    userCount: daily.users.length
  };
  stats.snapshots[dateKey] = snapshot;
  const previousSnapshot = stats.snapshots[previousDateKey];
  const comparison = (current, previous, hasPrevious) => ({ current, previous: hasPrevious ? previous : 0, hasPrevious });
  pruneRuntimeHistory(stats);
  writeJsonFile(runtimeStatsPath, stats);
  return {
    ...stats,
    apiRequests: daily.apiRequests,
    conversations: daily.conversations,
    agentCount: snapshot.agentCount,
    activeAgentCount: snapshot.activeAgentCount,
    userCount: snapshot.userCount,
    comparisons: {
      agentCount: comparison(snapshot.agentCount, previousSnapshot?.agentCount, Boolean(previousSnapshot)),
      activeAgentCount: comparison(snapshot.activeAgentCount, previousSnapshot?.activeAgentCount, Boolean(previousSnapshot)),
      conversations: comparison(daily.conversations, previousDaily?.conversations, Boolean(previousDaily)),
      apiRequests: comparison(daily.apiRequests, previousDaily?.apiRequests, Boolean(previousDaily)),
      userCount: comparison(daily.users.length, previousDaily?.users?.length, Boolean(previousDaily))
    },
    storageBytes: projectStorageBytes()
  };
}

function defaultAnnouncements() {
  return {
    version: 1,
    items: [],
    updatedAt: ""
  };
}

function normalizeAnnouncement(input = {}) {
  const title = String(input.title || "").trim().slice(0, 120);
  const content = String(input.content || "").trim().slice(0, 1000);
  if (!title) throw new Error("请填写公告标题");
  return {
    id: String(input.id || `announcement-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`),
    title,
    content,
    status: input.status === "draft" ? "draft" : "published",
    createdAt: input.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

function publicAnnouncements() {
  const data = readJsonFile(announcementsPath, defaultAnnouncements());
  return data.items
    .filter((item) => item.status === "published")
    .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
}

function defaultChatHistory() {
  return {
    version: 1,
    conversations: [],
    updatedAt: ""
  };
}

function normalizeChatMessages(messages = []) {
  return (Array.isArray(messages) ? messages : [])
    .slice(-60)
    .map((message, index) => ({
      id: String(message?.id || `message-${Date.now()}-${index}`),
      role: message?.role === "user" ? "user" : "assistant",
      content: String(message?.content || "").trim().slice(0, 20000),
      createdAt: String(message?.createdAt || new Date().toISOString())
    }))
    .filter((message) => message.content);
}

function normalizeConversation(input = {}) {
  const agentId = String(input.agentId || "").trim().slice(0, 160);
  if (!agentId) throw new Error("缺少智能体标识");
  const messages = normalizeChatMessages(input.messages);
  return {
    id: String(input.id || `conversation-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`),
    agentId,
    agentLabel: String(input.agentLabel || "智能体").trim().slice(0, 120),
    title: String(input.title || messages.find((message) => message.role === "user")?.content || "新对话").trim().slice(0, 40),
    messages,
    createdAt: String(input.createdAt || new Date().toISOString()),
    updatedAt: new Date().toISOString()
  };
}

function defaultModelSettings() {
  return {
    version: 2,
    connections: [],
    defaultConnectionId: "",
    defaultModel: "",
    updatedAt: ""
  };
}

const modelPresetCatalog = Object.fromEntries(
  Object.entries(modelPresets).map(([id, preset]) => [
    id,
    {
      label: preset.label,
      baseUrl: preset.baseUrl,
      model: preset.defaultModel
    }
  ])
);

function inferModelPreset(settings = {}) {
  const model = String(settings.defaultModel || "").trim();
  return Object.entries(modelPresetCatalog).find(([, item]) => item.model === model)?.[0] || "";
}

function modelConnectionId() {
  return `model-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function migrateModelSettings(settings = {}) {
  if (Number(settings.version) >= 2 && Array.isArray(settings.connections)) {
    return { ...defaultModelSettings(), ...settings };
  }
  if (!settings.baseUrl && !settings.apiKey && !settings.defaultModel) return defaultModelSettings();
  const id = String(settings.id || "model-migrated");
  const connection = {
    id,
    owner: settings.owner || "personal",
    provider: settings.provider || "openai-compatible",
    preset: settings.preset || inferModelPreset(settings),
    presetLabel: settings.presetLabel || "",
    baseUrl: settings.baseUrl || "",
    apiKey: settings.apiKey || "",
    defaultModel: settings.defaultModel || "",
    models: Array.isArray(settings.models) ? settings.models : [],
    availableModels: Array.isArray(settings.availableModels) ? settings.availableModels : [],
    verified: Boolean(settings.verified),
    verifiedAt: settings.verifiedAt || "",
    updatedAt: settings.updatedAt || ""
  };
  return {
    version: 2,
    connections: [connection],
    defaultConnectionId: id,
    defaultModel: connection.defaultModel,
    updatedAt: settings.updatedAt || ""
  };
}

function readModelSettings() {
  return migrateModelSettings(readJsonFile(modelSettingsPath, defaultModelSettings()));
}

function sanitizeBaseUrl(value) {
  const url = new URL(String(value || "").trim());
  if (!["http:", "https:"].includes(url.protocol)) throw new Error("API 地址仅支持 http/https");
  return url.href.replace(/\/+$/, "");
}

function publicModelConnection(connection = {}) {
  const preset = connection.preset || inferModelPreset(connection);
  const presetDefinition = modelPresetCatalog[preset];
  return {
    id: connection.id || "",
    owner: connection.owner || "personal",
    provider: connection.provider || "openai-compatible",
    preset,
    presetLabel: connection.presetLabel || presetDefinition?.label || "",
    baseUrl: connection.baseUrl || "",
    hasApiKey: Boolean(connection.apiKey),
    maskedKey: connection.apiKey ? `••••••••${connection.apiKey.slice(-4)}` : "",
    defaultModel: connection.defaultModel || "",
    models: Array.isArray(connection.models) ? connection.models : [],
    availableModels: Array.isArray(connection.availableModels) ? connection.availableModels : [],
    ready: Boolean(connection.baseUrl && connection.apiKey && connection.verified),
    verifiedAt: connection.verifiedAt || "",
    updatedAt: connection.updatedAt || ""
  };
}

function publicModelSettings(settings = readModelSettings()) {
  const registry = migrateModelSettings(settings);
  const connections = registry.connections.map(publicModelConnection);
  const readyConnections = connections.filter((connection) => connection.ready);
  const active = readyConnections.find((connection) => connection.id === registry.defaultConnectionId) || readyConnections[0] || connections[0] || {};
  const modelOptions = readyConnections.flatMap((connection) => (
    connection.availableModels.map((model) => ({
      value: `${connection.id}::${model}`,
      model,
      connectionId: connection.id,
      label: `${connection.presetLabel || connection.provider} / ${model}`
    }))
  ));
  return {
    version: 2,
    connections,
    modelOptions,
    defaultConnectionId: active.id || "",
    provider: active.provider || "openai-compatible",
    preset: active.preset || "",
    presetLabel: active.presetLabel || "",
    baseUrl: active.baseUrl || "",
    hasApiKey: Boolean(active.hasApiKey),
    maskedKey: active.maskedKey || "",
    defaultModel: active.defaultModel || "",
    models: modelOptions.map((option) => option.value),
    availableModels: modelOptions.map((option) => option.value),
    ready: modelOptions.length > 0,
    verifiedAt: active.verifiedAt || "",
    updatedAt: registry.updatedAt || ""
  };
}

function normalizeModelConnection(input = {}, current = {}) {
  const presetId = String(input.preset || current.preset || inferModelPreset(current)).trim();
  const preset = modelPresetCatalog[presetId];
  if (!preset) throw new Error("请选择有效的模型预设");
  const baseUrl = input.baseUrl !== undefined && String(input.baseUrl || "").trim()
    ? sanitizeBaseUrl(input.baseUrl)
    : sanitizeBaseUrl(preset.baseUrl);
  const apiKey = input.apiKey === "" || input.apiKey === undefined ? current.apiKey : String(input.apiKey).trim();
  return {
    id: String(input.connectionId || current.id || modelConnectionId()),
    owner: input.owner === "platform" ? "platform" : (current.owner || "personal"),
    provider: "openai-compatible",
    preset: presetId,
    presetLabel: preset.label,
    baseUrl,
    apiKey,
    defaultModel: preset.model,
    models: [preset.model],
    availableModels: [],
    verified: false,
    verifiedAt: "",
    updatedAt: new Date().toISOString()
  };
}

async function verifyModelSettings(settings) {
  if (!settings.baseUrl || !settings.apiKey || !settings.defaultModel) {
    throw new Error("请完整填写 API 地址、密钥和默认模型");
  }
  const providerModels = await fetchProviderModels(settings);
  const configured = [...new Set([settings.defaultModel, ...settings.models].filter(Boolean))];
  const providerSet = new Set(providerModels);
  const availableModels = configured.filter((model) => providerSet.has(model));
  if (!availableModels.includes(settings.defaultModel)) {
    throw new Error(`模型预设“${settings.presetLabel}”与当前 API 不匹配，请检查 API 地址或更换预设`);
  }
  return {
    ...settings,
    availableModels,
    verified: true,
    verifiedAt: new Date().toISOString()
  };
}

function mergeModelConnection(registry, connection) {
  const connections = registry.connections.filter((item) => item.id !== connection.id);
  connections.push(connection);
  return {
    version: 2,
    connections,
    defaultConnectionId: String(registry.defaultConnectionId || connection.id),
    defaultModel: String(registry.defaultModel || connection.defaultModel),
    updatedAt: new Date().toISOString()
  };
}

async function fetchProviderModels(settings) {
  if (!settings.baseUrl || !settings.apiKey) {
    throw new Error("请完整填写 API 地址和密钥");
  }
  const response = await fetchWithTimeout(`${settings.baseUrl}/models`, {
    timeout: 20000,
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${settings.apiKey}`
    }
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload?.error?.message || `模型接入校验失败 (${response.status})`);
  }
  const providerModels = Array.isArray(payload?.data)
    ? payload.data.map((item) => String(item?.id || "").trim()).filter(Boolean)
    : [];
  if (!providerModels.length) throw new Error("接口未返回可用模型，请检查 API 地址");
  return [...new Set(providerModels)];
}

async function callConfiguredModel(payload) {
  const registry = readModelSettings();
  const publicSettings = publicModelSettings(registry);
  if (!publicSettings.ready) {
    throw new Error("工作台模型不可用，请先接入 API/模型设置");
  }
  const messages = Array.isArray(payload.messages) ? payload.messages.slice(-20) : [];
  if (!messages.length) throw new Error("对话内容不能为空");
  const requestedModel = String(payload.model || "").trim();
  const [requestedConnectionId, requestedModelId] = requestedModel.includes("::")
    ? requestedModel.split("::", 2)
    : ["", requestedModel];
  const readyConnections = registry.connections.filter((connection) => publicModelConnection(connection).ready);
  const settings = readyConnections.find((connection) => (
    connection.id === requestedConnectionId
    && connection.availableModels.includes(requestedModelId)
  )) || readyConnections.find((connection) => (
    connection.availableModels.includes(requestedModelId)
  )) || readyConnections.find((connection) => connection.id === registry.defaultConnectionId) || readyConnections[0];
  if (!settings) throw new Error("所选模型连接不可用，请重新选择模型");
  const model = settings.availableModels.includes(requestedModelId) ? requestedModelId : settings.defaultModel;
  const requestBody = {
    model,
    messages,
    stream: false
  };
  if (model === "kimi-k3" || model.endsWith("/kimi-k3")) {
    requestBody.reasoning_effort = "high";
    requestBody.temperature = 1;
    requestBody.top_p = 0.95;
  }
  const response = await fetchWithTimeout(`${settings.baseUrl}/chat/completions`, {
    timeout: 60000,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${settings.apiKey}`
    },
    method: "POST",
    body: JSON.stringify(requestBody)
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data?.error?.message || `模型请求失败 (${response.status})`);
  const usage = data.usage || {};
  recordRuntimeUsage({
    apiRequests: 1,
    modelCalls: 1,
    conversations: 1,
    tokenUsage: Number(usage.total_tokens || 0)
  });
  return {
    text: data?.choices?.[0]?.message?.content || "",
    model: data.model || model,
    usage
  };
}

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url || "/", `http://${host}:${port}`);
  if (req.method === "OPTIONS") {
    sendJson(res, 200, { ok: true });
    return;
  }
  if (requestUrl.pathname === "/api/health") {
    sendJson(res, 200, {
      ok: true,
      data: {
        service: "clink-ai-api",
        status: "ready"
      }
    });
    return;
  }
  if (requestUrl.pathname === "/api/auth/login") {
    if (req.method !== "POST") {
      sendJson(res, 405, { code: 40500, message: "Method Not Allowed" });
      return;
    }
    try {
      const payload = JSON.parse((await readRequestBody(req)) || "{}");
      const username = String(payload.username || "").trim();
      const password = String(payload.password || "");
      const valid = authIsConfigured()
        && secureTextEqual(username, adminAccount)
        && secureTextEqual(password, adminPassword);
      if (valid) {
        recordRuntimeUser(adminAccount);
        sendJson(res, 200, { code: 20000, data: { token: createAdminToken(adminAccount) } });
        return;
      }
      const memberData = readMembers();
      const member = memberData.members.find((item) => item.account === username && item.status === "启用" && item.role !== "访客");
      if (!member || !verifyPassword(password, member.passwordHash)) {
        sendJson(res, 200, {
          code: 60204,
          message: authIsConfigured() ? "账号或密码错误" : "服务器尚未配置管理员账号"
        });
        return;
      }
      member.lastActive = new Date().toISOString();
      member.updatedAt = member.lastActive;
      writeMembers(memberData.members);
      recordRuntimeUser(member.account);
      sendJson(res, 200, { code: 20000, data: { token: createMemberToken(member) } });
    } catch (error) {
      sendJson(res, 400, { code: 40000, message: error.message || "登录请求无效" });
    }
    return;
  }
  if (requestUrl.pathname === "/api/auth/info") {
    if (req.method !== "GET") {
      sendJson(res, 405, { code: 40500, message: "Method Not Allowed" });
      return;
    }
    const session = sessionFromToken(tokenFromRequest(req, requestUrl));
    if (!session) {
      sendJson(res, 200, { code: 50008, message: "登录已失效，请重新登录" });
      return;
    }
    recordRuntimeUser(session.account);
    sendJson(res, 200, {
      code: 20000,
      data: {
        roles: [session.role === "管理员" ? "admin" : session.role === "编辑者" ? "editor" : "viewer"],
        introduction: session.role === "管理员" ? "知识库管理员" : "知识库成员",
        avatar: "",
        name: session.name || session.account,
        account: session.account,
        role: session.role
      }
    });
    return;
  }
  if (requestUrl.pathname === "/api/auth/logout") {
    sendJson(res, 200, { code: 20000, data: "success" });
    return;
  }
  if (requestUrl.pathname === "/api/auth/register") {
    if (req.method !== "POST") {
      sendJson(res, 405, { code: 40500, message: "Method Not Allowed" });
      return;
    }
    try {
      const payload = JSON.parse((await readRequestBody(req)) || "{}");
      const account = validateAccount(payload.account);
      const password = validatePassword(payload.password);
      const name = String(payload.name || "").trim().slice(0, 60);
      const email = String(payload.email || "").trim().slice(0, 120);
      const message = String(payload.message || "").trim().slice(0, 500);
      if (!name || !email) throw new Error("请填写姓名和邮箱");
      const memberData = readMembers();
      if (memberData.members.some((item) => item.account === account)) throw new Error("该账号已存在");
      const requestData = readRegistrationRequests();
      if (requestData.requests.some((item) => item.account === account && item.status === "待审核")) {
        throw new Error("该账号已有待审核申请");
      }
      const registration = {
        id: `registration-${Date.now()}-${randomBytes(3).toString("hex")}`,
        name,
        account,
        email,
        message,
        role: "编辑者",
        status: "待审核",
        passwordHash: hashPassword(password),
        createdAt: new Date().toISOString(),
        reviewedAt: ""
      };
      requestData.requests.unshift(registration);
      writeRegistrationRequests(requestData.requests);
      sendJson(res, 200, { code: 20000, data: publicRegistrationRequest(registration), message: "注册申请已提交，请等待管理员审核" });
    } catch (error) {
      sendJson(res, 200, { code: 40000, message: error.message || "注册申请提交失败" });
    }
    return;
  }
  if (requestUrl.pathname === "/api/admin/members" && req.method === "GET") {
    if (!requireAdmin(req)) {
      sendJson(res, 200, { code: 50003, message: "仅管理员可查看成员" });
      return;
    }
    sendJson(res, 200, { code: 20000, data: readMembers().members.filter((member) => member.role !== "访客").map(publicMember) });
    return;
  }
  if (requestUrl.pathname === "/api/admin/members" && req.method === "POST") {
    try {
      const payload = JSON.parse((await readRequestBody(req)) || "{}");
      if (!requireAdmin(req, payload)) throw new Error("仅管理员可新增成员");
      const data = readMembers();
      const member = normalizeMemberInput(payload);
      if (data.members.some((item) => item.account === member.account)) throw new Error("该账号已存在");
      data.members.unshift(member);
      writeMembers(data.members);
      sendJson(res, 200, { code: 20000, data: publicMember(member), message: "成员创建成功" });
    } catch (error) {
      sendJson(res, 200, { code: 40000, message: error.message || "成员创建失败" });
    }
    return;
  }
  const memberRoute = requestUrl.pathname.match(/^\/api\/admin\/members\/([^/]+)$/);
  if (memberRoute && ["PUT", "DELETE"].includes(req.method)) {
    try {
      const payload = req.method === "PUT" ? JSON.parse((await readRequestBody(req)) || "{}") : {};
      if (!requireAdmin(req, payload)) throw new Error("仅管理员可管理成员");
      const data = readMembers();
      const index = data.members.findIndex((item) => item.id === decodeURIComponent(memberRoute[1]));
      if (index < 0) throw new Error("成员不存在");
      if (req.method === "DELETE") {
        const [removed] = data.members.splice(index, 1);
        writeMembers(data.members);
        sendJson(res, 200, { code: 20000, data: publicMember(removed), message: "成员已删除" });
      } else {
        const updated = normalizeMemberInput(payload, data.members[index]);
        if (data.members.some((item, itemIndex) => itemIndex !== index && item.account === updated.account)) throw new Error("该账号已存在");
        data.members[index] = updated;
        writeMembers(data.members);
        sendJson(res, 200, { code: 20000, data: publicMember(updated), message: "成员已更新" });
      }
    } catch (error) {
      sendJson(res, 200, { code: 40000, message: error.message || "成员操作失败" });
    }
    return;
  }
  if (requestUrl.pathname === "/api/admin/registrations" && req.method === "GET") {
    if (!requireAdmin(req)) {
      sendJson(res, 200, { code: 50003, message: "仅管理员可查看注册申请" });
      return;
    }
    sendJson(res, 200, { code: 20000, data: readRegistrationRequests().requests.map(publicRegistrationRequest) });
    return;
  }
  const registrationRoute = requestUrl.pathname.match(/^\/api\/admin\/registrations\/([^/]+)\/(approve|reject)$/);
  if (registrationRoute && req.method === "POST") {
    try {
      const payload = JSON.parse((await readRequestBody(req)) || "{}");
      if (!requireAdmin(req, payload)) throw new Error("仅管理员可审核注册申请");
      const registrations = readRegistrationRequests();
      const registration = registrations.requests.find((item) => item.id === decodeURIComponent(registrationRoute[1]));
      if (!registration) throw new Error("注册申请不存在");
      if (registration.status !== "待审核") throw new Error("该申请已处理");
      if (registrationRoute[2] === "approve") {
        const members = readMembers();
        if (members.members.some((item) => item.account === registration.account)) throw new Error("该账号已存在");
        const now = new Date().toISOString();
        members.members.unshift({
          id: `member-${Date.now()}-${randomBytes(3).toString("hex")}`,
          name: registration.name,
          account: registration.account,
          email: registration.email,
          role: ["管理员", "编辑者"].includes(payload.role) ? payload.role : "编辑者",
          status: "启用",
          passwordHash: registration.passwordHash,
          lastActive: "尚未登录",
          createdAt: now,
          updatedAt: now
        });
        writeMembers(members.members);
        registration.status = "已同意";
      } else {
        registration.status = "已拒绝";
      }
      registration.reviewedAt = new Date().toISOString();
      writeRegistrationRequests(registrations.requests);
      sendJson(res, 200, { code: 20000, data: publicRegistrationRequest(registration), message: registration.status });
    } catch (error) {
      sendJson(res, 200, { code: 40000, message: error.message || "审核失败" });
    }
    return;
  }
  if (requestUrl.pathname === "/api/import-link") {
    const target = requestUrl.searchParams.get("url") || "";
    try {
      if (!/^https?:\/\//i.test(target)) throw new Error("只支持 http/https 链接");
      const data = await importLink(target);
      recordRuntimeUsage({ apiRequests: 1 });
      sendJson(res, 200, { ok: true, ...data });
    } catch (error) {
      sendJson(res, 400, { ok: false, message: error.message || "链接读取失败" });
    }
    return;
  }
  if (requestUrl.pathname === "/api/project-state") {
    try {
      if (req.method === "GET") {
        sendJson(res, 200, { ok: true, data: readProjectState() });
        return;
      }
      if (req.method === "POST" || req.method === "PUT") {
        const body = await readRequestBody(req);
        const payload = JSON.parse(body || "{}");
        const state = normalizeProjectState(payload);
        writeProjectState(state);
        recordRuntimeUsage({ apiRequests: 1 });
        sendJson(res, 200, { ok: true, data: state });
        return;
      }
      sendJson(res, 405, { ok: false, message: "Method Not Allowed" });
    } catch (error) {
      sendJson(res, 400, {
        ok: false,
        message: error.message || "项目数据读写失败"
      });
    }
    return;
  }
  if (requestUrl.pathname === "/api/runtime-stats") {
    if (req.method !== "GET") {
      sendJson(res, 405, { ok: false, message: "Method Not Allowed" });
      return;
    }
    const session = sessionFromToken(tokenFromRequest(req, requestUrl));
    if (session) recordRuntimeUser(session.account);
    sendJson(res, 200, { ok: true, data: readRuntimeStats() });
    return;
  }
  if (requestUrl.pathname === "/api/model-settings") {
    try {
      if (req.method === "GET") {
        sendJson(res, 200, { ok: true, data: publicModelSettings() });
        return;
      }
      if (req.method === "PUT" || req.method === "POST") {
        const payload = JSON.parse((await readRequestBody(req)) || "{}");
        if (!requireModelManager(req, payload)) {
          sendJson(res, 403, { ok: false, message: "仅管理员或编辑者可修改模型配置" });
          return;
        }
        const registry = readModelSettings();
        const current = registry.connections.find((item) => item.id === payload.connectionId) || {};
        const connection = await verifyModelSettings(normalizeModelConnection(payload, current));
        const settings = mergeModelConnection(registry, connection);
        writeJsonFile(modelSettingsPath, settings);
        recordRuntimeUsage({ apiRequests: 1 });
        sendJson(res, 200, { ok: true, data: publicModelSettings(settings) });
        return;
      }
      sendJson(res, 405, { ok: false, message: "Method Not Allowed" });
    } catch (error) {
      sendJson(res, 400, { ok: false, message: error.message || "模型配置保存失败" });
    }
    return;
  }
  if (requestUrl.pathname === "/api/model-settings-form") {
    try {
      if (req.method !== "POST") {
        sendHtml(res, 405, "<!doctype html><title>Method Not Allowed</title>");
        return;
      }
      const form = new URLSearchParams((await readRequestBody(req)) || "");
      const payload = JSON.parse(form.get("payload") || "{}");
      if (!requireModelManager(req, payload)) throw new Error("仅管理员或编辑者可修改模型配置");
      const registry = readModelSettings();
      const current = registry.connections.find((item) => item.id === payload.connectionId) || {};
      const connection = await verifyModelSettings(normalizeModelConnection(payload, current));
      const settings = mergeModelConnection(registry, connection);
      writeJsonFile(modelSettingsPath, settings);
      recordRuntimeUsage({ apiRequests: 1 });
      const result = JSON.stringify({ ok: true, data: publicModelSettings(settings) }).replace(/</g, "\\u003c");
      sendHtml(res, 200, `<!doctype html><meta charset="utf-8"><script>parent.postMessage({type:"model-settings-saved",payload:${result}},location.origin)<\/script>`);
    } catch (error) {
      const result = JSON.stringify({ ok: false, message: error.message || "模型配置保存失败" }).replace(/</g, "\\u003c");
      sendHtml(res, 400, `<!doctype html><meta charset="utf-8"><script>parent.postMessage({type:"model-settings-saved",payload:${result}},location.origin)<\/script>`);
    }
    return;
  }
  if (requestUrl.pathname === "/api/model-catalog-form") {
    try {
      if (req.method !== "POST") {
        sendHtml(res, 405, "<!doctype html><title>Method Not Allowed</title>");
        return;
      }
      const form = new URLSearchParams((await readRequestBody(req)) || "");
      const payload = JSON.parse(form.get("payload") || "{}");
      if (!requireModelManager(req, payload)) throw new Error("仅管理员或编辑者可检测模型");
      const registry = readModelSettings();
      const current = registry.connections.find((item) => item.id === payload.connectionId) || {};
      const connection = normalizeModelConnection(payload, current);
      const models = await fetchProviderModels(connection);
      const result = JSON.stringify({ ok: true, data: { models } }).replace(/</g, "\\u003c");
      sendHtml(res, 200, `<!doctype html><meta charset="utf-8"><script>parent.postMessage({type:"model-catalog-loaded",payload:${result}},location.origin)<\/script>`);
    } catch (error) {
      const result = JSON.stringify({ ok: false, message: error.message || "模型检测失败" }).replace(/</g, "\\u003c");
      sendHtml(res, 400, `<!doctype html><meta charset="utf-8"><script>parent.postMessage({type:"model-catalog-loaded",payload:${result}},location.origin)<\/script>`);
    }
    return;
  }
  if (requestUrl.pathname === "/api/agent-chat") {
    try {
      if (req.method !== "POST") {
        sendJson(res, 405, { ok: false, message: "Method Not Allowed" });
        return;
      }
      const payload = JSON.parse((await readRequestBody(req)) || "{}");
      const session = requireAuthenticatedUser(req, payload);
      if (!session) {
        sendJson(res, 401, { ok: false, message: "请登录后使用管理员配置的共享模型" });
        return;
      }
      const data = await callConfiguredModel(payload);
      sendJson(res, 200, { ok: true, data });
    } catch (error) {
      sendJson(res, 400, { ok: false, message: error.message || "模型调用失败" });
    }
    return;
  }
  if (requestUrl.pathname === "/api/canvas-openai/v1/chat/completions") {
    try {
      if (req.method !== "POST") {
        sendJson(res, 405, { ok: false, message: "Method Not Allowed" });
        return;
      }
      const payload = JSON.parse((await readRequestBody(req)) || "{}");
      const session = requireAuthenticatedUser(req, payload);
      if (!session) {
        sendJson(res, 401, { error: { message: "请登录后使用项目共享 API" } });
        return;
      }
      const data = await callConfiguredModel(payload);
      const responsePayload = {
        id: `canvas-${Date.now()}`,
        object: "chat.completion",
        choices: [{ index: 0, message: { role: "assistant", content: data.text || "" }, finish_reason: "stop" }]
      };
      if (payload.stream) {
        res.writeHead(200, { "Content-Type": "text/event-stream; charset=utf-8", "Cache-Control": "no-cache" });
        res.end(`data: ${JSON.stringify({ choices: [{ index: 0, delta: { content: data.text || "" }, finish_reason: null }] })}\n\ndata: [DONE]\n\n`);
      } else {
        sendJson(res, 200, responsePayload);
      }
    } catch (error) {
      sendJson(res, 400, { error: { message: error.message || "共享模型调用失败" } });
    }
    return;
  }
  const aiHordeJobMatch = requestUrl.pathname.match(/^\/api\/canvas-openai\/v1\/images\/jobs\/([^/]+)$/);
  if (aiHordeJobMatch) {
    try {
      if (req.method !== "GET" && req.method !== "DELETE") {
        sendJson(res, 405, { error: { message: "Method Not Allowed" } });
        return;
      }
      const session = requireAuthenticatedUser(req);
      if (!session) {
        sendJson(res, 401, { error: { message: "请登录后查询图片任务" } });
        return;
      }
      const jobId = decodeURIComponent(aiHordeJobMatch[1]);
      // 任务状态由 AI Horde 保存；本地仅缓存归属，服务重启后仍允许凭任务 ID 查询。
      const job = aiHordeJobs.get(jobId) || { account: session.account, prompt: "" };
      if (job.account && job.account !== session.account) {
        sendJson(res, 404, { error: { message: "图片任务不存在或已过期" } });
        return;
      }
      if (req.method === "DELETE") {
        const cancelResponse = await fetch(`https://aihorde.net/api/v2/generate/status/${encodeURIComponent(jobId)}`, {
          method: "DELETE",
          headers: { apikey: "0000000000" }
        });
        if (!cancelResponse.ok) throw new Error("取消 AI Horde 任务失败");
        aiHordeJobs.delete(jobId);
        sendJson(res, 200, { status: "cancelled", data: [] });
        return;
      }
      const statusResponse = await fetch(`https://aihorde.net/api/v2/generate/status/${encodeURIComponent(jobId)}`);
      const status = await statusResponse.json();
      if (!statusResponse.ok) throw new Error(status.message || "AI Horde 状态查询失败");
      if (status.generations?.[0]?.img) {
        aiHordeJobs.delete(jobId);
        sendJson(res, 200, { status: "completed", data: [{ url: status.generations[0].img, revised_prompt: job.prompt }] });
        return;
      }
      if (status.faulted) {
        aiHordeJobs.delete(jobId);
        sendJson(res, 200, { status: "failed", message: status.message || "AI Horde 生成失败", data: [] });
        return;
      }
      sendJson(res, 200, {
        status: Number(status.processing || 0) > 0 ? "processing" : "queued",
        queue_position: status.queue_position ?? null,
        eta_seconds: status.wait_time ?? null,
        data: []
      });
    } catch (error) {
      sendJson(res, 400, { error: { message: error.message || "图片任务查询失败" } });
    }
    return;
  }
  if (requestUrl.pathname === "/api/canvas-openai/v1/images/generations") {
    try {
      if (req.method !== "POST") {
        sendJson(res, 405, { error: { message: "Method Not Allowed" } });
        return;
      }
      const payload = JSON.parse((await readRequestBody(req)) || "{}");
      const session = requireAuthenticatedUser(req, payload);
      if (!session) {
        sendJson(res, 401, { error: { message: "请登录后使用项目共享图片模型" } });
        return;
      }
      const requestedModel = String(payload.model || "");
      if (!["pollinations/flux", "pollinations/kontext", "aihorde/sdxl-text2img", "aihorde/sdxl-img2img"].includes(requestedModel)) {
        sendJson(res, 400, { error: { message: "当前共享图片模型不支持该模型" } });
        return;
      }
      const prompt = String(payload.prompt || "").trim();
      if (!prompt) {
        sendJson(res, 400, { error: { message: "图片提示词不能为空" } });
        return;
      }
      const size = String(payload.size || "1024x1024").match(/^(\d{2,4})x(\d{2,4})$/);
      const width = size ? Math.min(Number(size[1]), 1536) : 1024;
      const height = size ? Math.min(Number(size[2]), 1536) : 1024;
      const referenceImage = Array.isArray(payload.image) ? payload.image[0] : payload.image;
      if (referenceImage && !/^https?:\/\//i.test(String(referenceImage)) && !/^data:image\//i.test(String(referenceImage))) {
        sendJson(res, 400, { error: { message: "图生图参考图必须是可访问的图片 URL" } });
        return;
      }
      if (requestedModel === "aihorde/sdxl-img2img" || requestedModel === "aihorde/sdxl-text2img") {
        if (!referenceImage && requestedModel === "aihorde/sdxl-img2img") {
          sendJson(res, 400, { error: { message: "AI Horde 图生图需要参考图" } });
          return;
        }
        let sourceImage;
        if (referenceImage && /^data:image\//i.test(String(referenceImage))) {
          sourceImage = String(referenceImage).split(",", 2)[1] || "";
        } else if (referenceImage) {
          const sourceResponse = await fetch(String(referenceImage));
          if (!sourceResponse.ok) throw new Error(`参考图无法读取（HTTP ${sourceResponse.status}）`);
          const sourceBuffer = Buffer.from(await sourceResponse.arrayBuffer());
          sourceImage = sourceBuffer.toString("base64");
        }
        if (referenceImage && !sourceImage) throw new Error("参考图内容为空");
        const [width, height] = [Math.min(1024, Number(size?.[1] || 512)), Math.min(1024, Number(size?.[2] || 512))];
        const hordeParams = { width, height, steps: 20, n: 1 };
        if (sourceImage) {
          hordeParams.denoising_strength = 0.7;
          hordeParams.source_image = sourceImage;
          hordeParams.source_processing = "img2img";
        }
        const hordeResponse = await fetch("https://aihorde.net/api/v2/generate/async", {
          method: "POST",
          headers: { "Content-Type": "application/json", apikey: "0000000000" },
          body: JSON.stringify({ prompt, models: ["AlbedoBase XL (SDXL)"], params: hordeParams, nsfw: false, censor_nsfw: true })
        });
        const hordeJob = await hordeResponse.json();
        if (!hordeResponse.ok || !hordeJob.id) throw new Error(hordeJob.message || "AI Horde 请求失败");
        aiHordeJobs.set(String(hordeJob.id), { account: session.account, createdAt: Date.now(), prompt });
        sendJson(res, 200, {
          status: "queued",
          job_id: String(hordeJob.id),
          queue_position: hordeJob.queue_position ?? null,
          eta_seconds: hordeJob.wait_time ?? null,
          data: []
        });
        return;
      }
      const model = "flux";
      const imageParam = referenceImage ? `&image=${encodeURIComponent(String(referenceImage))}` : "";
      const negativePrompt = "watermark, logo, signature, text, caption, username, brand mark";
      const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${width}&height=${height}&nologo=true&enhance=false&negative_prompt=${encodeURIComponent(negativePrompt)}&model=${model}${imageParam}`;
      sendJson(res, 200, { created: Math.floor(Date.now() / 1000), data: [{ url: imageUrl, revised_prompt: prompt }] });
    } catch (error) {
      sendJson(res, 400, { error: { message: error.message || "免费图片模型调用失败" } });
    }
    return;
  }
  if (requestUrl.pathname === "/api/agent-conversations") {
    try {
      const store = readJsonFile(chatHistoryPath, defaultChatHistory());
      if (req.method === "GET") {
        const agentId = String(requestUrl.searchParams.get("agentId") || "");
        const conversations = store.conversations
          .filter((item) => !agentId || item.agentId === agentId)
          .sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
        sendJson(res, 200, { ok: true, data: conversations });
        return;
      }
      if (req.method === "POST" || req.method === "PUT") {
        const payload = JSON.parse((await readRequestBody(req)) || "{}");
        const conversation = normalizeConversation(payload);
        const index = store.conversations.findIndex((item) => item.id === conversation.id);
        if (index >= 0) {
          conversation.createdAt = store.conversations[index].createdAt;
          store.conversations[index] = conversation;
        } else {
          store.conversations.push(conversation);
        }
        store.updatedAt = new Date().toISOString();
        writeJsonFile(chatHistoryPath, store);
        recordRuntimeUsage({ apiRequests: 1 });
        sendJson(res, 200, { ok: true, data: conversation });
        return;
      }
      if (req.method === "DELETE") {
        const id = String(requestUrl.searchParams.get("id") || "");
        store.conversations = store.conversations.filter((item) => item.id !== id);
        store.updatedAt = new Date().toISOString();
        writeJsonFile(chatHistoryPath, store);
        recordRuntimeUsage({ apiRequests: 1 });
        sendJson(res, 200, { ok: true });
        return;
      }
      sendJson(res, 405, { ok: false, message: "Method Not Allowed" });
    } catch (error) {
      sendJson(res, 400, { ok: false, message: error.message || "对话记录读写失败" });
    }
    return;
  }
  if (requestUrl.pathname === "/api/announcements") {
    try {
      const store = readJsonFile(announcementsPath, defaultAnnouncements());
      if (req.method === "GET") {
        const data = requireAdmin(req)
          ? store.items.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)))
          : publicAnnouncements();
        sendJson(res, 200, { ok: true, data });
        return;
      }
      if (!requireAdmin(req)) {
        sendJson(res, 403, { ok: false, message: "仅管理员可管理公告" });
        return;
      }
      if (req.method === "POST" || req.method === "PUT") {
        const payload = JSON.parse((await readRequestBody(req)) || "{}");
        const item = normalizeAnnouncement(payload);
        const index = store.items.findIndex((entry) => entry.id === item.id);
        if (index >= 0) store.items[index] = item;
        else store.items.push(item);
        store.updatedAt = new Date().toISOString();
        writeJsonFile(announcementsPath, store);
        recordRuntimeUsage({ apiRequests: 1 });
        sendJson(res, 200, { ok: true, data: item });
        return;
      }
      if (req.method === "DELETE") {
        const id = requestUrl.searchParams.get("id") || "";
        store.items = store.items.filter((item) => item.id !== id);
        store.updatedAt = new Date().toISOString();
        writeJsonFile(announcementsPath, store);
        recordRuntimeUsage({ apiRequests: 1 });
        sendJson(res, 200, { ok: true });
        return;
      }
      sendJson(res, 405, { ok: false, message: "Method Not Allowed" });
    } catch (error) {
      sendJson(res, 400, { ok: false, message: error.message || "公告管理失败" });
    }
    return;
  }

  const decoded = decodeURIComponent(requestUrl.pathname === "/" ? "/ai-terminal-kb.html" : requestUrl.pathname);
  const file = path.normalize(path.join(root, decoded));
  if (!file.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  fs.readFile(file, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "Content-Type": contentTypeFor(file) });
    res.end(data);
  });
});

server.listen(port, host, () => {
  console.log(`Clink AI preview: http://${host}:${port}/ai-terminal-kb.html`);
});
