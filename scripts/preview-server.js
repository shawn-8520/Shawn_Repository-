import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { createHash, createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { fileURLToPath } from "node:url";
import { modelPresets } from "../src/config/model-presets.js";

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

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml"
};

function sendJson(res, status, payload) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-Admin-Token, X-Token"
  });
  res.end(JSON.stringify(payload));
}

function sendHtml(res, status, html) {
  res.writeHead(status, {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(html);
}

function loadPrivateEnv(filePath) {
  if (!fs.existsSync(filePath)) return;
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const index = trimmed.indexOf("=");
    const key = trimmed.slice(0, index).trim();
    const value = trimmed.slice(index + 1).trim().replace(/^["']|["']$/g, "");
    if (key && process.env[key] === undefined) process.env[key] = value;
  }
}

function secureTextEqual(actual, expected) {
  const actualHash = createHash("sha256").update(String(actual)).digest();
  const expectedHash = createHash("sha256").update(String(expected)).digest();
  return timingSafeEqual(actualHash, expectedHash);
}

function authIsConfigured() {
  return authSecret.length >= 32 && Boolean((adminAccount && adminPassword) || readMembers().length);
}

function createAdminToken(account) {
  const accountPart = Buffer.from(account, "utf8").toString("base64url");
  const expiresAt = Date.now() + authTokenLifetimeMs;
  const payload = `v1.${accountPart}.${expiresAt}`;
  const signature = createHmac("sha256", authSecret).update(payload).digest("base64url");
  return `admin-token-${payload}.${signature}`;
}

function verifyAdminToken(token) {
  if (authSecret.length < 32 || !String(token).startsWith("admin-token-v1.")) return null;
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
    return account.trim() || null;
  } catch {
    return null;
  }
}

function tokenFromRequest(req, requestUrl, payload) {
  return String(
    req.headers["x-token"]
    || req.headers["x-admin-token"]
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

function readRequestBody(req, limit = 2 * 1024 * 1024) {
  return new Promise((resolve, reject) => {
    let size = 0;
    let body = "";
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > limit) {
        reject(new Error("请求数据过大"));
        req.destroy();
        return;
      }
      body += chunk;
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
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
  if (filePath === modelSettingsPath) fs.chmodSync(filePath, 0o600);
}

function readCollection(filePath) {
  if (!fs.existsSync(filePath)) return [];
  try {
    const value = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function writeCollection(filePath, value) {
  fs.mkdirSync(dataDir, { recursive: true });
  const tempPath = filePath + ".tmp";
  fs.writeFileSync(tempPath, JSON.stringify(value, null, 2), { encoding: "utf8", mode: 0o600 });
  fs.renameSync(tempPath, filePath);
  fs.chmodSync(filePath, 0o600);
}

function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const digest = scryptSync(String(password), salt, 64).toString("hex");
  return `scrypt$${salt}$${digest}`;
}

function verifyPassword(password, encoded) {
  const [algorithm, salt, expectedHex] = String(encoded || "").split("$");
  if (algorithm !== "scrypt" || !salt || !/^[a-f0-9]{128}$/i.test(expectedHex || "")) return false;
  const actual = scryptSync(String(password), salt, 64);
  const expected = Buffer.from(expectedHex, "hex");
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

function normalizeRole(role) {
  const value = String(role || "").trim();
  if (["管理员", "admin"].includes(value)) return "管理员";
  if (["访客", "只读成员", "viewer"].includes(value)) return "访客";
  return "编辑者";
}

function roleKey(role) {
  if (normalizeRole(role) === "管理员") return "admin";
  if (normalizeRole(role) === "访客") return "viewer";
  return "editor";
}

function normalizeStatus(status) {
  return ["停用", "disabled"].includes(String(status || "").trim()) ? "停用" : "启用";
}

function validateAccount(account) {
  const value = String(account || "").trim();
  if (!/^[A-Za-z0-9_.@-]{3,64}$/.test(value)) throw new Error("账号需为 3-64 位字母、数字或 ._@-");
  return value;
}

function validatePassword(password, required = true) {
  const value = String(password || "");
  if (!value && !required) return "";
  if (value.length < 6 || value.length > 128) throw new Error("密码长度需为 6-128 位");
  return value;
}

function readMembers() {
  return readCollection(membersPath);
}

function writeMembers(members) {
  writeCollection(membersPath, members);
}

function readRegistrationRequests() {
  return readCollection(registrationRequestsPath);
}

function writeRegistrationRequests(requests) {
  writeCollection(registrationRequestsPath, requests);
}

function publicMember(member) {
  return {
    id: String(member.id || ""),
    name: String(member.name || ""),
    account: String(member.account || ""),
    email: String(member.email || ""),
    role: normalizeRole(member.role),
    status: normalizeStatus(member.status),
    lastActive: String(member.lastActive || "从未登录"),
    createdAt: String(member.createdAt || ""),
    hasPassword: Boolean(member.passwordHash)
  };
}

function publicRegistrationRequest(request) {
  return {
    id: String(request.id || ""),
    name: String(request.name || ""),
    account: String(request.account || ""),
    email: String(request.email || ""),
    message: String(request.message || ""),
    role: normalizeRole(request.role),
    status: String(request.status || "待审核"),
    createdAt: String(request.createdAt || "")
  };
}

function memberForAccount(account) {
  const normalized = String(account || "").trim().toLowerCase();
  return readMembers().find((member) => String(member.account || "").trim().toLowerCase() === normalized) || null;
}

function accountExists(account, exceptMemberId = "") {
  const normalized = String(account || "").trim().toLowerCase();
  if (adminAccount && adminAccount.toLowerCase() === normalized) return true;
  return readMembers().some((member) => member.id !== exceptMemberId && String(member.account || "").trim().toLowerCase() === normalized);
}

function identityForAccount(account) {
  if (adminAccount && account === adminAccount) {
    return { account, name: account, email: "", role: "管理员", status: "启用", source: "environment" };
  }
  const member = memberForAccount(account);
  if (!member || normalizeStatus(member.status) !== "启用") return null;
  return { ...member, source: "member" };
}

function requireAdmin(req, payload) {
  const token = tokenFromRequest(req, null, payload);
  const privateToken = String(process.env.CLINK_API_ADMIN_TOKEN || "");
  if (privateToken && token === privateToken) return true;
  const account = verifyAdminToken(token);
  if (account && roleKey(identityForAccount(account)?.role) === "admin") return true;
  if (String(process.env.CLINK_ALLOW_LEGACY_MEMBER_TOKENS || "").toLowerCase() !== "true") return false;
  if (!token.startsWith("member-token-")) return false;
  const legacyAccount = decodeURIComponent(token.replace("member-token-", ""));
  const adminAccounts = String(process.env.CLINK_ADMIN_ACCOUNTS || "admin")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  return adminAccounts.includes(legacyAccount);
}

function defaultRuntimeStats() {
  return {
    version: 1,
    apiRequests: 0,
    modelCalls: 0,
    tokenUsage: 0,
    conversations: 0,
    lastUpdatedAt: ""
  };
}

function recordRuntimeUsage(patch = {}) {
  const current = readJsonFile(runtimeStatsPath, defaultRuntimeStats());
  for (const key of ["apiRequests", "modelCalls", "tokenUsage", "conversations"]) {
    const delta = Number(patch[key] || 0);
    current[key] = Math.max(0, Number(current[key] || 0) + (Number.isFinite(delta) ? delta : 0));
  }
  current.lastUpdatedAt = new Date().toISOString();
  writeJsonFile(runtimeStatsPath, current);
  return current;
}

function projectStorageBytes() {
  return [projectStatePath, runtimeStatsPath, announcementsPath, modelSettingsPath, chatHistoryPath, membersPath, registrationRequestsPath]
    .reduce((total, filePath) => total + (fs.existsSync(filePath) ? fs.statSync(filePath).size : 0), 0);
}

function readRuntimeStats() {
  const stats = readJsonFile(runtimeStatsPath, defaultRuntimeStats());
  const projectState = readProjectState();
  return {
    ...stats,
    agentCount: Array.isArray(projectState.desktopItems)
      ? projectState.desktopItems.filter((item) => !item.parentId).length
      : 0,
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
      const account = String(payload.username || "").trim();
      const password = String(payload.password || "");
      const environmentAdminValid = Boolean(adminAccount && adminPassword)
        && secureTextEqual(account, adminAccount)
        && secureTextEqual(password, adminPassword);
      const member = memberForAccount(account);
      const memberValid = Boolean(member)
        && normalizeStatus(member.status) === "启用"
        && verifyPassword(password, member.passwordHash);
      if (authSecret.length < 32 || (!environmentAdminValid && !memberValid)) {
        sendJson(res, 200, {
          code: 60204,
          message: authIsConfigured() ? "账号或密码错误" : "服务器尚未配置管理员账号"
        });
        return;
      }
      if (memberValid) {
        const members = readMembers();
        const index = members.findIndex((item) => item.id === member.id);
        if (index >= 0) {
          members[index] = { ...members[index], lastActive: new Date().toISOString() };
          writeMembers(members);
        }
      }
      sendJson(res, 200, { code: 20000, data: { token: createAdminToken(environmentAdminValid ? adminAccount : member.account) } });
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
    const account = verifyAdminToken(tokenFromRequest(req, requestUrl));
    const identity = identityForAccount(account);
    if (!identity) {
      sendJson(res, 200, { code: 50008, message: "登录已失效，请重新登录" });
      return;
    }
    sendJson(res, 200, {
      code: 20000,
      data: {
        roles: [roleKey(identity.role)],
        introduction: identity.role,
        avatar: "",
        name: identity.name || identity.account
      }
    });
    return;
  }
  if (requestUrl.pathname === "/api/auth/logout") {
    sendJson(res, 200, { code: 20000, data: "success" });
    return;
  }
  if (requestUrl.pathname === "/api/members/migrate" && req.method === "POST") {
    try {
      const payload = JSON.parse((await readRequestBody(req)) || "{}");
      if (!requireAdmin(req, payload)) throw new Error("仅管理员可迁移成员");
      const members = readMembers();
      const knownAccounts = new Set([
        adminAccount.toLowerCase(),
        ...members.map((member) => String(member.account || "").trim().toLowerCase())
      ].filter(Boolean));
      let importedMembers = 0;
      for (const input of Array.isArray(payload.members) ? payload.members : []) {
        try {
          const account = validateAccount(input.account);
          const password = validatePassword(input.password);
          if (knownAccounts.has(account.toLowerCase())) continue;
          members.unshift({
            id: `member-${Date.now()}-${randomBytes(4).toString("hex")}`,
            name: String(input.name || account).trim().slice(0, 80),
            account,
            passwordHash: hashPassword(password),
            email: String(input.email || "").trim().slice(0, 160),
            role: normalizeRole(input.role),
            status: normalizeStatus(input.status),
            lastActive: String(input.lastActive || "从未登录"),
            createdAt: new Date().toISOString()
          });
          knownAccounts.add(account.toLowerCase());
          importedMembers += 1;
        } catch {
          // Skip invalid legacy records instead of blocking the remaining migration.
        }
      }
      if (importedMembers) writeMembers(members);
      const requests = readRegistrationRequests();
      const pendingAccounts = new Set(requests.filter((item) => item.status === "待审核").map((item) => String(item.account || "").toLowerCase()));
      let importedRequests = 0;
      for (const input of Array.isArray(payload.registrationRequests) ? payload.registrationRequests : []) {
        try {
          if (String(input.status || "待审核") !== "待审核") continue;
          const account = validateAccount(input.account);
          const password = validatePassword(input.password);
          if (knownAccounts.has(account.toLowerCase()) || pendingAccounts.has(account.toLowerCase())) continue;
          requests.unshift({
            id: `request-${Date.now()}-${randomBytes(4).toString("hex")}`,
            name: String(input.name || account).trim().slice(0, 80),
            account,
            passwordHash: hashPassword(password),
            email: String(input.email || "").trim().slice(0, 160),
            message: String(input.message || "").trim().slice(0, 500),
            role: "编辑者",
            status: "待审核",
            createdAt: new Date().toISOString()
          });
          pendingAccounts.add(account.toLowerCase());
          importedRequests += 1;
        } catch {
          // Skip invalid legacy registration records.
        }
      }
      if (importedRequests) writeRegistrationRequests(requests);
      sendJson(res, 200, { code: 20000, data: { importedMembers, importedRequests } });
    } catch (error) {
      sendJson(res, 200, { code: 40000, message: error.message || "旧成员迁移失败" });
    }
    return;
  }
  if (requestUrl.pathname === "/api/members") {
    try {
      if (!requireAdmin(req)) throw new Error("仅管理员可管理成员");
      if (req.method === "GET") {
        sendJson(res, 200, { code: 20000, data: readMembers().map(publicMember) });
        return;
      }
      if (req.method === "POST") {
        const payload = JSON.parse((await readRequestBody(req)) || "{}");
        const account = validateAccount(payload.account);
        if (accountExists(account)) throw new Error("该账号已存在");
        const password = validatePassword(payload.password);
        const member = {
          id: `member-${Date.now()}-${randomBytes(4).toString("hex")}`,
          name: String(payload.name || account).trim().slice(0, 80),
          account,
          passwordHash: hashPassword(password),
          email: String(payload.email || "").trim().slice(0, 160),
          role: normalizeRole(payload.role),
          status: normalizeStatus(payload.status),
          lastActive: "从未登录",
          createdAt: new Date().toISOString()
        };
        const members = readMembers();
        members.unshift(member);
        writeMembers(members);
        sendJson(res, 200, { code: 20000, data: publicMember(member) });
        return;
      }
      sendJson(res, 405, { code: 40500, message: "Method Not Allowed" });
    } catch (error) {
      sendJson(res, 200, { code: 40000, message: error.message || "成员操作失败" });
    }
    return;
  }
  const memberRoute = requestUrl.pathname.match(/^\/api\/members\/([^/]+)$/);
  if (memberRoute) {
    try {
      const payload = req.method === "PUT" ? JSON.parse((await readRequestBody(req)) || "{}") : {};
      if (!requireAdmin(req, payload)) throw new Error("仅管理员可管理成员");
      const memberId = decodeURIComponent(memberRoute[1]);
      const members = readMembers();
      const index = members.findIndex((member) => member.id === memberId);
      if (index < 0) throw new Error("成员不存在");
      if (req.method === "DELETE") {
        members.splice(index, 1);
        writeMembers(members);
        sendJson(res, 200, { code: 20000, data: "success" });
        return;
      }
      if (req.method === "PUT") {
        const account = validateAccount(payload.account);
        if (accountExists(account, memberId)) throw new Error("该账号已存在");
        const password = validatePassword(payload.password, false);
        const updated = {
          ...members[index],
          name: String(payload.name || account).trim().slice(0, 80),
          account,
          email: String(payload.email || "").trim().slice(0, 160),
          role: normalizeRole(payload.role),
          status: normalizeStatus(payload.status),
          ...(password ? { passwordHash: hashPassword(password) } : {})
        };
        members[index] = updated;
        writeMembers(members);
        sendJson(res, 200, { code: 20000, data: publicMember(updated) });
        return;
      }
      sendJson(res, 405, { code: 40500, message: "Method Not Allowed" });
    } catch (error) {
      sendJson(res, 200, { code: 40000, message: error.message || "成员操作失败" });
    }
    return;
  }
  if (requestUrl.pathname === "/api/registration-requests") {
    try {
      if (req.method === "GET") {
        if (!requireAdmin(req)) throw new Error("仅管理员可查看注册申请");
        sendJson(res, 200, { code: 20000, data: readRegistrationRequests().map(publicRegistrationRequest) });
        return;
      }
      if (req.method === "POST") {
        const payload = JSON.parse((await readRequestBody(req)) || "{}");
        const name = String(payload.name || "").trim().slice(0, 80);
        const account = validateAccount(payload.account);
        const password = validatePassword(payload.password);
        const email = String(payload.email || "").trim().slice(0, 160);
        if (!name || !email) throw new Error("请填写姓名和邮箱");
        if (accountExists(account)) throw new Error("该账号已存在");
        const requests = readRegistrationRequests();
        if (requests.some((item) => item.status === "待审核" && String(item.account).toLowerCase() === account.toLowerCase())) {
          throw new Error("该账号已有待审核申请");
        }
        const request = {
          id: `request-${Date.now()}-${randomBytes(4).toString("hex")}`,
          name,
          account,
          passwordHash: hashPassword(password),
          email,
          message: String(payload.message || "").trim().slice(0, 500),
          role: "编辑者",
          status: "待审核",
          createdAt: new Date().toISOString()
        };
        requests.unshift(request);
        writeRegistrationRequests(requests);
        sendJson(res, 200, { code: 20000, data: publicRegistrationRequest(request) });
        return;
      }
      sendJson(res, 405, { code: 40500, message: "Method Not Allowed" });
    } catch (error) {
      sendJson(res, 200, { code: 40000, message: error.message || "注册申请操作失败" });
    }
    return;
  }
  const registrationActionRoute = requestUrl.pathname.match(/^\/api\/registration-requests\/([^/]+)\/(approve|reject)$/);
  if (registrationActionRoute && req.method === "POST") {
    try {
      const payload = JSON.parse((await readRequestBody(req)) || "{}");
      if (!requireAdmin(req, payload)) throw new Error("仅管理员可审核注册申请");
      const requestId = decodeURIComponent(registrationActionRoute[1]);
      const action = registrationActionRoute[2];
      const requests = readRegistrationRequests();
      const index = requests.findIndex((item) => item.id === requestId);
      if (index < 0) throw new Error("注册申请不存在");
      if (requests[index].status !== "待审核") throw new Error("该申请已处理");
      if (action === "approve") {
        const request = requests[index];
        if (accountExists(request.account)) throw new Error("该账号已存在，无法重复同意");
        const member = {
          id: `member-${Date.now()}-${randomBytes(4).toString("hex")}`,
          name: request.name,
          account: request.account,
          passwordHash: request.passwordHash,
          email: request.email,
          role: normalizeRole(payload.role || request.role),
          status: "启用",
          lastActive: "从未登录",
          createdAt: new Date().toISOString()
        };
        const members = readMembers();
        members.unshift(member);
        writeMembers(members);
        requests[index] = { ...request, status: "已同意", passwordHash: "", processedAt: new Date().toISOString() };
      } else {
        requests[index] = { ...requests[index], status: "已拒绝", passwordHash: "", processedAt: new Date().toISOString() };
      }
      writeRegistrationRequests(requests);
      sendJson(res, 200, { code: 20000, data: publicRegistrationRequest(requests[index]) });
    } catch (error) {
      sendJson(res, 200, { code: 40000, message: error.message || "审核注册申请失败" });
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
        if (!requireAdmin(req, payload)) {
          sendJson(res, 403, { ok: false, message: "仅管理员可修改模型配置" });
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
      if (!requireAdmin(req, payload)) throw new Error("仅管理员可修改模型配置");
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
      if (!requireAdmin(req, payload)) throw new Error("仅管理员可检测模型");
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
      const data = await callConfiguredModel(payload);
      sendJson(res, 200, { ok: true, data });
    } catch (error) {
      sendJson(res, 400, { ok: false, message: error.message || "模型调用失败" });
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
    res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
    res.end(data);
  });
});

server.listen(port, host, () => {
  console.log(`Clink AI preview: http://${host}:${port}/ai-terminal-kb.html`);
});
