import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { modelPresets } from "../src/config/model-presets.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../outputs");
const projectRoot = path.resolve(__dirname, "..");
const dataDir = path.resolve(process.env.PROJECT_DATA_DIR || path.join(projectRoot, "data"));
const projectStatePath = path.join(dataDir, "project-state.json");
const runtimeStatsPath = path.join(dataDir, "runtime-stats.json");
const announcementsPath = path.join(dataDir, "announcements.json");
const modelSettingsPath = path.join(dataDir, "model-settings.json");
const chatHistoryPath = path.join(dataDir, "chat-history.json");
const port = Number(process.env.PORT || 8099);
const host = "127.0.0.1";

loadPrivateEnv(path.resolve(__dirname, "../.env"));
loadPrivateEnv(path.resolve(__dirname, "../.env.local"));

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
    "Access-Control-Allow-Headers": "Content-Type, X-Admin-Token"
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

function requireAdmin(req, payload) {
  const token = String(req.headers["x-admin-token"] || payload?.adminToken || "");
  const privateToken = String(process.env.CLINK_API_ADMIN_TOKEN || "");
  if (privateToken && token === privateToken) return true;
  if (!token.startsWith("member-token-")) return false;
  const account = decodeURIComponent(token.replace("member-token-", ""));
  const adminAccounts = String(process.env.CLINK_ADMIN_ACCOUNTS || "admin")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  return adminAccounts.includes(account);
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
  return [projectStatePath, runtimeStatsPath, announcementsPath, modelSettingsPath, chatHistoryPath]
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
