export function bootstrapJs() {
  return `
const docs = window.__DOCS__;
const navItems = window.__NAV_ITEMS__;
const WORKS_CANVAS_KEY = "aiTerminalWorksInfiniteCanvas";
const docMap = new Map(docs.map((doc) => [doc.path.toLowerCase(), doc]));
const output = document.getElementById("terminalOutput");
const form = document.getElementById("terminalForm");
const input = document.getElementById("terminalInput");
const appGrid = document.getElementById("appGrid");
const newFileBtn = document.getElementById("newFileBtn");
const worksAddFileBtn = document.getElementById("worksAddFileBtn");
const worksCanvasRecordsBtn = document.getElementById("worksCanvasRecordsBtn");
const homeCanvasBtn = document.getElementById("homeCanvasBtn");
const worksFilesGrid = document.getElementById("worksFilesGrid");
const deleteFileBtn = document.getElementById("deleteFileBtn");
const selectionActions = document.getElementById("selectionActions");
const selectionCount = document.getElementById("selectionCount");
const selectionDeleteBtn = document.getElementById("selectionDeleteBtn");
const desktopHelpDocsBtn = document.getElementById("desktopHelpDocsBtn");
const clock = document.getElementById("clock");
const launchTarget = document.getElementById("launchTarget");
const hero = document.getElementById("hero");
const terminalLines = document.getElementById("terminalLines");
const heroCta = document.getElementById("heroCta");
const heroAuthActions = document.getElementById("heroAuthActions");
const heroLoginBtn = document.getElementById("heroLoginBtn");
const heroRegisterBtn = document.getElementById("heroRegisterBtn");
const registerModal = document.getElementById("registerModal");
const registerForm = document.getElementById("registerForm");
const registerCloseBtn = document.getElementById("registerCloseBtn");
const registerFeedback = document.getElementById("registerFeedback");
const topbarLogoutBtn = document.getElementById("topbarLogoutBtn");
const pillNav = document.getElementById("pillNav");
const osBoard = document.getElementById("osBoard");
const desktopSurface = document.getElementById("desktopSurface");
const agentBoardList = document.getElementById("agentBoardList");
const agentCategoryCollapseBtn = document.getElementById("agentCategoryCollapseBtn");
const desktopSearchStatus = document.getElementById("desktopSearchStatus");
const agentInsightTitle = document.getElementById("agentInsightTitle");
const agentInsightDesc = document.getElementById("agentInsightDesc");
const agentInsightCode = document.getElementById("agentInsightCode");
const agentInsightPriority = document.getElementById("agentInsightPriority");
const agentInsightOwner = document.getElementById("agentInsightOwner");
const agentInsightProject = document.getElementById("agentInsightProject");
const agentInsightDeadline = document.getElementById("agentInsightDeadline");
const agentInsightStatus = document.getElementById("agentInsightStatus");
const agentInsightTags = document.getElementById("agentInsightTags");
const agentInsightAdvice = document.getElementById("agentInsightAdvice");
const agentAdviceOpenBtn = document.getElementById("agentAdviceOpenBtn");
const resourceTokenValue = document.getElementById("resourceTokenValue");
const resourceTokenProgress = document.getElementById("resourceTokenProgress");
const resourceTokenPercent = document.getElementById("resourceTokenPercent");
const resourceModelValue = document.getElementById("resourceModelValue");
const resourceModelProgress = document.getElementById("resourceModelProgress");
const resourceModelPercent = document.getElementById("resourceModelPercent");
const announcementCount = document.getElementById("announcementCount");
const announcementList = document.getElementById("announcementList");
const statAgentCount = document.getElementById("statAgentCount");
const statActiveAgentCount = document.getElementById("statActiveAgentCount");
const statConversationCount = document.getElementById("statConversationCount");
const statApiRequestCount = document.getElementById("statApiRequestCount");
const statUserCount = document.getElementById("statUserCount");
const transitionOverlay = document.getElementById("transitionOverlay");
const tabs = ["home", "works", "system"];
const PROJECT_STATE_ENDPOINT = "/api/project-state";
const RUNTIME_STATS_ENDPOINT = "/api/runtime-stats";
const ANNOUNCEMENTS_ENDPOINT = "/api/announcements";
const MODEL_SETTINGS_ENDPOINT = "/api/model-settings";
const AGENT_CHAT_ENDPOINT = "/api/agent-chat";
const SERVER_STORAGE_ENABLED = location.protocol === "http:" || location.protocol === "https:";
const DESKTOP_ITEMS_KEY = "aiTerminalDesktopItems";
const DESKTOP_ITEMS_BACKUP_KEY = "aiTerminalDesktopItemsBackup";
const DASHBOARD_LAYOUT_VERSION_KEY = "aiTerminalAgentDashboardLayout";
const AGENT_VIEW_MODE_KEY = "aiTerminalAgentViewMode";
const AGENT_CATEGORY_COLLAPSED_KEY = "aiTerminalAgentCategoriesCollapsed";
const AGENT_CATEGORY_STATE_KEY = "aiTerminalAgentCategoryState";
const REGISTRATION_REQUESTS_KEY = "kb-registration-requests";
const supportedFileTypes = [
  { value: "md", label: "Markdown" },
  { value: "txt", label: "Text" },
  { value: "json", label: "JSON" },
  { value: "csv", label: "CSV" },
  { value: "html", label: "HTML" },
  { value: "pdf", label: "PDF" }
];
let launched = false;
let typingDone = false;
let winZ = 20;
let openCount = 0;
let selectedDesktopId = null;
let selectedDesktopIds = new Set();
let isMarqueeSelecting = false;
let agentOrbitPhase = Math.PI / 2;
let agentOrbitFrame = 0;
let agentOrbitLast = 0;
let agentOrbitPaused = false;
let agentOrbitDragging = false;
let agentOrbitNeedsLayout = true;
let desktopResizeFrame = 0;
let agentDisplayMode = localStorage.getItem(AGENT_VIEW_MODE_KEY) === "grid" ? "grid" : "orbit";
let activeAgentCategory = "all";
let agentStatusFilter = "all";
let agentSortOrder = "newest";
let desktopSearchQuery = "";
let agentCategoriesCollapsed = localStorage.getItem(AGENT_CATEGORY_COLLAPSED_KEY) === "true";
let agentCategoryState = loadAgentCategoryState();
let agentCategoryClickTimer = 0;
let returningToIntro = false;
let expandingToDesktop = false;
let returnProgress = 0;
let returnTargetRect = null;
let desktopScale = 1;
const HIDDEN_WORKS_CATEGORIES_KEY = "aiTerminalHiddenWorksCategoriesV2";
let desktopItems = loadDesktopItems();
try {
  if (localStorage.getItem(DASHBOARD_LAYOUT_VERSION_KEY) !== "dashboard-v3") {
    desktopItems.forEach((item) => {
      if (!item.parentId) item.autoArrange = true;
    });
    const migratedItems = JSON.stringify(desktopItems);
    localStorage.setItem(DESKTOP_ITEMS_KEY, migratedItems);
    localStorage.setItem(DESKTOP_ITEMS_BACKUP_KEY, migratedItems);
    localStorage.setItem(DASHBOARD_LAYOUT_VERSION_KEY, "dashboard-v3");
  }
} catch (error) {}
let hiddenWorksCategories = loadHiddenWorksCategories();
let serverProjectState = null;
let projectStateHydrating = false;
let projectStateSaveTimer = 0;

const fortunes = [
  "找到你喜欢的事，然后让它杀死你。 - Bukowski",
  "The best way to predict the future is to invent it. - Alan Kay",
  "A year from now you may wish you had started today. - Karen Lamb",
  "Simplicity is the ultimate sophistication. - Leonardo da Vinci"
];

let agentModelOptions = [];
let activeModelSettings = {
  preset: "",
  presetLabel: "",
  defaultModel: "",
  models: [],
  modelOptions: [],
  connections: [],
  ready: false
};
window.__WORKBENCH_MODEL_AVAILABILITY__ = {
  ready: false,
  models: [],
  message: "工作台模型不可用，请先接入 API/模型设置"
};

function normalizeAgentModelValue(value) {
  return String(value || "").trim().replace(/^Open WebUI\\s*\\/\\s*/i, "");
}

async function requestProjectJson(endpoint, options = {}) {
  let response;
  try {
    response = await fetch(endpoint, {
      ...options,
      headers: {
        Accept: "application/json",
        ...(options.headers || {})
      }
    });
  } catch (error) {
    throw new Error("无法连接项目 API 服务，请检查线上服务状态");
  }
  const contentType = String(response.headers.get("content-type") || "").toLowerCase();
  const text = await response.text();
  if (!contentType.includes("application/json")) {
    const looksLikeHtml = /^\\s*<!doctype html|^\\s*<html/i.test(text);
    throw new Error(looksLikeHtml
      ? "线上 API 服务未启用，请检查宝塔 /api/ 反向代理"
      : "项目 API 返回格式异常");
  }
  let payload;
  try {
    payload = JSON.parse(text);
  } catch (error) {
    throw new Error("项目 API 返回了无效 JSON");
  }
  if (!response.ok || payload?.ok === false) {
    throw new Error(payload?.message || "项目 API 请求失败");
  }
  return payload;
}

function configuredModelOptions(settings = activeModelSettings) {
  if (!settings.ready) return [];
  return (Array.isArray(settings.modelOptions) ? settings.modelOptions : [])
    .map((option) => normalizeAgentModelValue(option?.value))
    .filter(Boolean);
}

function resolveAgentModelValue(value) {
  const current = normalizeAgentModelValue(value);
  const configured = configuredModelOptions();
  if (!configured.length) return "";
  const exact = configured.find((option) => option.toLowerCase() === current.toLowerCase());
  return exact || "";
}

function agentModelDisplayName(value) {
  const model = resolveAgentModelValue(value);
  const configuredOption = activeModelSettings.modelOptions.find((option) => (
    normalizeAgentModelValue(option?.value) === model
  ));
  if (configuredOption?.label) return configuredOption.label;
  const aliases = {
    "kimi-k3": "Kimi K3"
  };
  const bareModel = model.includes("::") ? model.split("::").slice(1).join("::") : model;
  return aliases[bareModel.toLowerCase()] || bareModel || "未接入模型";
}

const agentKnowledgeOptions = [
  "PPT 模板与品牌规范",
  "当前项目知识库",
  "全站知识库",
  "作品集知识库",
  "私人知识库",
  "文件夹知识库",
  "无知识库"
];

const agentToolOptions = [
  "PPT大纲",
  "模板排版",
  "图表信息页",
  "图片页",
  "演讲备注",
  "PPTX导出",
  "RAG检索",
  "文件编辑",
  "总结",
  "步骤拆解",
  "代码说明",
  "视觉分析",
  "灵感整理",
  "方案生成",
  "文件归档",
  "项目问答",
  "目录整理",
  "复盘",
  "计划",
  "长期记忆",
  "权限",
  "数据看板",
  "成员"
];

const terminalData = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "> Clink AI" },
  { type: "blank" },
  { type: "cmd", text: "cat about.md" },
  { type: "out", text: "> 终端风 AI 个人知识库" },
  { type: "out", text: "  Markdown / RAG / personal OS" },
  { type: "blank" },
  { type: "cmd", text: 'echo "1 person + AI = 1 team"' },
  { type: "gold", text: "> 1 person + AI = 1 team" },
  { type: "blank" },
  { type: "cmd", text: "open clink-ai.app", cursor: true }
];

renderDesktopItems();
renderWorksFiles();
hydrateProjectStateFromServer();
refreshWorkbenchData();
setInterval(refreshWorkbenchData, 30000);

window.addEventListener("workbench-status-filter", (event) => {
  agentStatusFilter = event.detail || "all";
  renderDesktopItems();
});
window.addEventListener("workbench-sort-order", (event) => {
  agentSortOrder = event.detail || "newest";
  renderDesktopItems();
});
window.addEventListener("workbench-model-settings-updated", (event) => {
  applyPublicModelSettings(event.detail || {});
  renderDesktopItems();
});
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) refreshWorkbenchData();
});

function numberText(value) {
  return new Intl.NumberFormat("zh-CN").format(Math.max(0, Number(value || 0)));
}

function animateStatValue(element, targetValue, delay = 0) {
  if (!element) return;
  const target = Math.max(0, Math.round(Number(targetValue || 0)));
  const current = Number(String(element.dataset.value ?? element.textContent ?? "0").replace(/,/g, "")) || 0;
  if (element.dataset.target === String(target) && !element.classList.contains("is-counting")) return;
  element.dataset.target = String(target);
  if (element._countFrame) cancelAnimationFrame(element._countFrame);
  if (element._countDelay) clearTimeout(element._countDelay);
  element.classList.remove("is-counting");
  void element.offsetWidth;
  element.classList.add("is-counting");
  element._countDelay = setTimeout(() => {
    const startedAt = performance.now();
    const duration = 1350;
    const tick = (now) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(current + (target - current) * eased);
      element.textContent = numberText(nextValue);
      element.dataset.value = String(nextValue);
      if (progress < 1) {
        element._countFrame = requestAnimationFrame(tick);
      } else {
        element.textContent = numberText(target);
        element.dataset.value = String(target);
        element.classList.remove("is-counting");
        element._countFrame = 0;
      }
    };
    element._countFrame = requestAnimationFrame(tick);
  }, delay);
}

function percentage(value, quota) {
  if (!quota) return 0;
  return Math.min(100, Math.max(0, Number(value || 0) / quota * 100));
}

function relativeTime(value) {
  const timestamp = Date.parse(value || "");
  if (!Number.isFinite(timestamp)) return "";
  const seconds = Math.max(0, Math.round((Date.now() - timestamp) / 1000));
  if (seconds < 60) return "刚刚";
  if (seconds < 3600) return Math.floor(seconds / 60) + " 分钟前";
  if (seconds < 86400) return Math.floor(seconds / 3600) + " 小时前";
  return Math.floor(seconds / 86400) + " 天前";
}

function applyRuntimeStats(stats = {}) {
  const tokenQuota = 5000000;
  const modelQuota = 300000;
  const tokenRate = percentage(stats.tokenUsage, tokenQuota);
  const modelRate = percentage(stats.modelCalls, modelQuota);
  if (resourceTokenValue) resourceTokenValue.innerHTML = numberText(stats.tokenUsage) + " <em>/ " + numberText(tokenQuota) + "</em>";
  if (resourceTokenProgress) resourceTokenProgress.style.width = tokenRate.toFixed(1) + "%";
  if (resourceTokenPercent) resourceTokenPercent.textContent = tokenRate.toFixed(1) + "%";
  if (resourceModelValue) resourceModelValue.innerHTML = numberText(stats.modelCalls) + " <em>/ " + numberText(modelQuota) + "</em>";
  if (resourceModelProgress) resourceModelProgress.style.width = modelRate.toFixed(1) + "%";
  if (resourceModelPercent) resourceModelPercent.textContent = modelRate.toFixed(1) + "%";
  animateStatValue(statAgentCount, stats.agentCount, 0);
  animateStatValue(statActiveAgentCount, visibleDesktopItems().filter((item) => normalizeAgentProfile(item.agent, item).status === "running" && !item.parentId).length, 80);
  animateStatValue(statConversationCount, stats.conversations, 160);
  animateStatValue(statApiRequestCount, stats.apiRequests, 240);
  animateStatValue(statUserCount, 1, 320);
}

function renderAnnouncements(items = []) {
  if (announcementCount) announcementCount.textContent = items.length + " 条";
  if (!announcementList) return;
  announcementList.innerHTML = items.length
    ? items.slice(0, 3).map((item) => '<div class="agent-announcement-row"><i></i><span title="' + escapeHtml(item.content || item.title) + '">' + escapeHtml(item.title) + '</span><time>' + escapeHtml(relativeTime(item.createdAt)) + '</time></div>').join("")
    : '<div class="agent-announcement-empty">暂无公告</div>';
  window.dispatchEvent(new CustomEvent("workbench-announcements-updated"));
}

function applyPublicModelSettings(settings = {}) {
  const modelOptions = Array.isArray(settings.modelOptions)
    ? settings.modelOptions
      .map((option) => ({
        value: normalizeAgentModelValue(option?.value),
        label: String(option?.label || option?.model || "").trim(),
        connectionId: String(option?.connectionId || ""),
        model: String(option?.model || "")
      }))
      .filter((option) => option.value && option.label)
    : [];
  const ready = Boolean(settings.ready && modelOptions.length);
  activeModelSettings = {
    preset: String(settings.preset || ""),
    presetLabel: String(settings.presetLabel || ""),
    defaultModel: normalizeAgentModelValue(settings.defaultModel),
    models: Array.isArray(settings.models)
      ? settings.models.map(normalizeAgentModelValue).filter(Boolean)
      : [],
    availableModels: Array.isArray(settings.availableModels)
      ? settings.availableModels.map(normalizeAgentModelValue).filter(Boolean)
      : [],
    modelOptions,
    connections: Array.isArray(settings.connections) ? settings.connections : [],
    ready
  };
  const configured = configuredModelOptions(activeModelSettings);
  agentModelOptions = configured;
  const availability = {
    ready: Boolean(ready && configured.length),
    models: configured,
    message: ready && configured.length ? "" : "工作台模型不可用，请先接入 API/模型设置"
  };
  window.__WORKBENCH_MODEL_AVAILABILITY__ = availability;
  window.dispatchEvent(new CustomEvent("workbench-model-availability-sync", { detail: availability }));
}

async function refreshWorkbenchData() {
  if (!SERVER_STORAGE_ENABLED) return;
  const requests = [
    fetch(RUNTIME_STATS_ENDPOINT).then((response) => response.json()).then((payload) => payload.ok && applyRuntimeStats(payload.data)),
    fetch(ANNOUNCEMENTS_ENDPOINT).then((response) => response.json()).then((payload) => payload.ok && renderAnnouncements(payload.data)),
    requestProjectJson(MODEL_SETTINGS_ENDPOINT).then((payload) => {
      applyPublicModelSettings(payload.data);
      renderDesktopItems();
    })
  ];
  await Promise.allSettled(requests);
}

window.__WORKBENCH_BRIDGE__ = {
  loadModelSettings: async () => {
    return requestProjectJson(MODEL_SETTINGS_ENDPOINT);
  },
  saveModelSettings: async (settings) => {
    const data = {
      ...settings,
      adminToken: getAdminTokenValue()
    };
    return requestProjectJson(MODEL_SETTINGS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  },
  discoverModels: async (settings) => {
    const data = {
      ...settings,
      adminToken: getAdminTokenValue()
    };
    return await new Promise((resolve, reject) => {
      const frameName = "model-catalog-frame-" + Date.now();
      const frame = document.createElement("iframe");
      const form = document.createElement("form");
      const field = document.createElement("input");
      frame.name = frameName;
      frame.hidden = true;
      form.hidden = true;
      form.method = "POST";
      form.action = "/api/model-catalog-form";
      form.target = frameName;
      field.type = "hidden";
      field.name = "payload";
      field.value = JSON.stringify(data);
      form.appendChild(field);
      document.body.append(frame, form);
      const cleanup = () => {
        window.removeEventListener("message", onMessage);
        frame.remove();
        form.remove();
      };
      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error("模型检测超时"));
      }, 20000);
      const onMessage = (event) => {
        if (event.origin !== location.origin || event.source !== frame.contentWindow || event.data?.type !== "model-catalog-loaded") return;
        clearTimeout(timeout);
        const payload = event.data.payload || {};
        cleanup();
        if (!payload.ok) reject(new Error(payload.message || "模型检测失败"));
        else resolve(payload);
      };
      window.addEventListener("message", onMessage);
      form.submit();
    });
  }
};

function currentTab() {
  const tab = location.hash.replace("#", "");
  return tabs.includes(tab) ? tab : "home";
}

function applyScrollLock() {
  document.documentElement.classList.toggle("scroll-unlocked", currentTab() !== "home" || launched);
  document.body.classList.toggle("desktop-mode", currentTab() === "home" && launched);
  updateDesktopScale();
}

function updateDesktopScale() {
  const designWidth = 1396;
  const compact = window.innerHeight < 860;
  const minimumDesignHeight = compact ? 840 : 930;
  const topbarHeight = 47;
  const navReserve = compact ? 66 : 80;
  const sidePadding = Math.max(24, Math.min(48, window.innerWidth * 0.028));
  const widthScale = (window.innerWidth - sidePadding) / designWidth;
  const availableHeight = Math.max(420, window.innerHeight - topbarHeight - navReserve);
  const heightScale = availableHeight / minimumDesignHeight;
  desktopScale = Math.max(0.62, Math.min(1.25, widthScale, heightScale));
  const designHeight = Math.max(minimumDesignHeight, availableHeight / desktopScale);
  const boardHeight = designHeight * desktopScale;
  const availableTop = topbarHeight + 10;
  const maxTop = Math.max(availableTop, window.innerHeight - navReserve - boardHeight);
  const top = Math.max(availableTop, Math.min(62, maxTop));
  document.documentElement.style.setProperty("--desktop-scale", desktopScale.toFixed(4));
  document.documentElement.style.setProperty("--desktop-top", top.toFixed(1) + "px");
  document.documentElement.style.setProperty("--desktop-board-height", designHeight.toFixed(1) + "px");
  document.documentElement.classList.toggle("desktop-compact", compact);
  agentOrbitNeedsLayout = true;
}

function scheduleDesktopResize() {
  if (desktopResizeFrame) return;
  desktopResizeFrame = requestAnimationFrame(() => {
    desktopResizeFrame = 0;
    updateDesktopScale();
    updateNavIndicator();
    if (document.body.classList.contains("desktop-mode")) {
      layoutAgentOrbitCards(true);
    }
  });
}

function scaledPointerDelta(delta) {
  return delta / Math.max(desktopScale, 0.52);
}

function updateNavIndicator() {
  const activeButton = pillNav.querySelector("button.active");
  const indicator = pillNav.querySelector(".pill-nav-indicator");
  if (!activeButton || !indicator) return;
  const navRect = pillNav.getBoundingClientRect();
  const buttonRect = activeButton.getBoundingClientRect();
  pillNav.style.setProperty("--nav-x", buttonRect.left - navRect.left + "px");
  pillNav.style.setProperty("--nav-w", buttonRect.width + "px");
}

function switchTab(tab) {
  tabs.forEach((name) => {
    document.getElementById("page-" + name).classList.toggle("active", name === tab);
  });
  pillNav.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tab);
  });
  updateNavIndicator();
  requestAnimationFrame(updateNavIndicator);
  window.scrollTo(0, 0);
  requestAnimationFrame(() => window.scrollTo(0, 0));
  applyScrollLock();
}

function renderIntroLine(item) {
  const line = document.createElement("div");
  line.className = "intro-line";
  if (item.type === "blank") {
    line.innerHTML = "&nbsp;";
  } else if (item.type === "cmd") {
    line.innerHTML = '<span class="prompt">$ </span>' + escapeHtml(item.text) + (item.cursor ? '<span class="cursor" id="mainCursor"></span>' : "");
  } else if (item.type === "gold") {
    line.innerHTML = '<span style="background:#f4d758;color:#1e5ba8;font-weight:800;padding:2px 7px;border-radius:3px">' + escapeHtml(item.text) + "</span>";
  } else {
    line.textContent = item.text;
  }
  terminalLines.appendChild(line);
  return line;
}

function finishIntro() {
  typingDone = true;
  syncLaunchAuthState();
  updateNavIndicator();
  requestAnimationFrame(updateNavIndicator);
  if (new URLSearchParams(location.search).get("launch") === "1" && hasAdminToken()) {
    requestAnimationFrame(() => launch());
  }
}

function syncLaunchAuthState() {
  const loggedIn = hasAdminToken();
  heroCta.classList.toggle("visible", loggedIn);
  heroCta.classList.toggle("hidden", !loggedIn);
  heroAuthActions.hidden = false;
  heroAuthActions.classList.toggle("visible", !loggedIn && currentTab() === "home" && !launched);
  pillNav.classList.toggle("hidden-during-intro", !loggedIn);
  syncAdminOnlyVisibility();
}

function startIntro() {
  if (shouldAutoLaunchDesktop()) {
    directLaunchDesktop();
    return;
  }
  let delay = 0;
  terminalData.forEach((item) => {
    const line = renderIntroLine(item);
    delay += item.type === "blank" ? 150 : 260;
    setTimeout(() => line.classList.add("visible"), delay);
    delay += item.type === "cmd" ? 360 : 120;
  });
  setTimeout(finishIntro, delay + 350);
}

function shouldAutoLaunchDesktop() {
  return new URLSearchParams(location.search).get("launch") === "1" && hasAdminToken() && currentTab() === "home";
}

function directLaunchDesktop() {
  typingDone = true;
  launched = true;
  returningToIntro = false;
  expandingToDesktop = false;
  returnProgress = 0;
  returnTargetRect = null;
  resetReturnStyles();
  hero.classList.add("launched");
  document.body.classList.add("desktop-mode");
  document.body.classList.remove("desktop-returning", "return-stable");
  heroCta.classList.remove("visible");
  heroCta.classList.add("hidden");
  transitionOverlay.classList.remove("active");
  syncLaunchAuthState();
  applyScrollLock();
  renderDesktopItems();
  updateNavIndicator();
  requestAnimationFrame(updateNavIndicator);
  window.scrollTo(0, 0);
  document.documentElement.classList.remove("auto-launching");
  setTimeout(() => input.focus(), 80);
}

pillNav.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-tab]");
  if (button) location.hash = button.dataset.tab;
});

window.addEventListener("hashchange", () => switchTab(currentTab()));
window.addEventListener("resize", scheduleDesktopResize, { passive: true });
document.addEventListener("wheel", (event) => {
  if (event.target.closest(".os-window")) {
    event.stopImmediatePropagation();
  }
}, { capture: true, passive: true });

document.addEventListener("click", (event) => {
  const tabTrigger = event.target.closest("[data-tab]");
  if (tabTrigger) {
    location.hash = tabTrigger.dataset.tab;
    return;
  }

  if (event.target.closest("#appGrid .app-card")) return;

  const windowTrigger = event.target.closest("[data-window]");
  if (windowTrigger) {
    openWindow(windowTrigger.dataset.window);
    return;
  }

  const trigger = event.target.closest("[data-command]");
  if (!trigger) return;
  appendCommand(trigger.dataset.command);
  runCommand(trigger.dataset.command);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  submitInput();
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    submitInput();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !launched && currentTab() === "home" && document.activeElement !== input) {
    launch();
  }
});

launchTarget.addEventListener("click", launch);
heroCta.addEventListener("click", launch);
heroLoginBtn.addEventListener("click", redirectToLoginBeforeDesktop);
heroRegisterBtn.addEventListener("click", openRegisterModal);
registerCloseBtn.addEventListener("click", closeRegisterModal);
registerModal.addEventListener("click", (event) => {
  if (event.target === registerModal) closeRegisterModal();
});
registerForm.addEventListener("submit", submitRegistrationRequest);
topbarLogoutBtn.addEventListener("click", logoutFromDesktop);
agentAdviceOpenBtn.addEventListener("click", () => {
  const visibleItems = visibleDesktopItems().filter((item) => !item.parentId);
  const selectedItem = visibleItems.find((item) => selectedDesktopIds.has(item.id)) || visibleItems[0];
  if (selectedItem) {
    setDesktopSelection([selectedItem.id], false);
    openAgentChatWindow(selectedItem);
  }
});
window.addEventListener("workbench-agent-category-change", (event) => {
  updateSelectedAgentInsight({ categoryId: String(event.detail || "uncategorized") });
});
window.addEventListener("workbench-agent-model-change", (event) => {
  updateSelectedAgentInsight({ model: String(event.detail || "") });
});
window.addEventListener("workbench-agent-knowledge-change", (event) => {
  updateSelectedAgentInsight({ knowledge: String(event.detail || "") });
});
window.addEventListener("workbench-agent-edit-save", (event) => {
  const values = event.detail || {};
  const item = desktopItems.find((entry) => entry.id === values.id) || selectedAgentInsightItem();
  if (!item) return;
  const agent = normalizeAgentProfile(item.agent, item);
  item.label = String(values.label || item.label || "未命名智能体").trim();
  agent.role = String(values.role || agent.role).trim();
  agent.model = String(values.model || agent.model);
  agent.knowledge = String(values.knowledge || agent.knowledge);
  agent.tools = Array.isArray(values.tools) && values.tools.length ? values.tools : agent.tools;
  agent.categoryId = String(values.categoryId || agent.categoryId || "uncategorized");
  agentCategoryState.custom.forEach((category) => {
    category.itemIds = (Array.isArray(category.itemIds) ? category.itemIds : []).filter((id) => id !== item.id);
    if (category.id === agent.categoryId) category.itemIds.push(item.id);
  });
  item.agent = agent;
  saveAgentCategoryState();
  saveDesktopItems();
  syncOpenAgentWindow(item);
  renderDesktopItems();
});
window.addEventListener("workbench-agent-create-save", (event) => {
  const values = event.detail || {};
  const label = String(values.label || "新建智能体").trim();
  const id = "agent-" + Date.now();
  const categoryId = String(values.categoryId || "uncategorized");
  const item = {
    id,
    label,
    path: id + ".md",
    index: String(desktopItems.length + 1).padStart(2, "0"),
    kind: "doc",
    windowId: "",
    x: 80,
    y: 120,
    autoArrange: true,
    source: "desktop",
    fileType: "md",
    sourceUrl: "",
    content: "# " + label + "\\n\\n" + String(values.role || "通用智能体"),
    agent: {
      role: String(values.role || "通用智能体").trim(),
      model: String(values.model || agentModelOptions[0] || ""),
      knowledge: String(values.knowledge || "MD · " + label),
      tools: Array.isArray(values.tools) && values.tools.length ? values.tools : agentToolOptions.slice(0, 3),
      initials: agentInitials(label),
      status: "running",
      categoryId
    }
  };
  desktopItems.push(item);
  agentCategoryState.custom.forEach((category) => {
    if (category.id === categoryId) {
      category.itemIds = Array.isArray(category.itemIds) ? category.itemIds : [];
      category.itemIds.push(id);
    }
  });
  activeAgentCategory = categoryId === "all" ? "all" : categoryId;
  saveAgentCategoryState();
  saveDesktopItems();
  setDesktopSelection([id], false);
  renderDesktopItems();
});
window.addEventListener("workbench-agent-delete", (event) => {
  const itemId = String(event.detail?.id || "");
  if (!itemId || !desktopItems.some((item) => item.id === itemId)) return;
  setDesktopSelection([itemId], false);
  deleteSelectedDesktopItems();
});
agentInsightTags.addEventListener("click", (event) => {
  const button = event.target.closest("[data-agent-skill]");
  if (!button) return;
  const item = selectedAgentInsightItem();
  if (!item) return;
  const agent = normalizeAgentProfile(item.agent, item);
  let selectedTools = [...agent.tools];
  const skill = button.dataset.agentSkill;
  if (selectedTools.includes(skill)) {
    if (selectedTools.length === 1) return;
    selectedTools = selectedTools.filter((tool) => tool !== skill);
  } else {
    selectedTools = [skill, ...selectedTools];
  }
  updateSelectedAgentInsight({ tools: selectedTools });
});
window.addEventListener("workbench-agent-category-create-request", () => openAgentCategoryDialog());
window.addEventListener("workbench-agent-category-delete-request", (event) => {
  deleteAgentCategory(String(event.detail?.id || ""));
});
window.addEventListener("workbench-agent-view-change", (event) => {
  setAgentDisplayMode(event.detail);
});
agentCategoryCollapseBtn.addEventListener("click", () => {
  agentCategoriesCollapsed = !agentCategoriesCollapsed;
  localStorage.setItem(AGENT_CATEGORY_COLLAPSED_KEY, String(agentCategoriesCollapsed));
  applyAgentCategoryCollapse();
});
agentBoardList.addEventListener("click", (event) => {
  const trigger = event.target.closest(".agent-board-item");
  if (!trigger) return;
  const categoryId = trigger.dataset.category || "all";
  clearTimeout(agentCategoryClickTimer);
  agentCategoryClickTimer = setTimeout(() => {
    activeAgentCategory = categoryId;
    renderDesktopItems();
  }, 220);
});
agentBoardList.addEventListener("dblclick", (event) => {
  const trigger = event.target.closest(".agent-board-item");
  if (!trigger) return;
  event.preventDefault();
  clearTimeout(agentCategoryClickTimer);
  openAgentCategoryDialog(trigger.dataset.category || "all");
});

appGrid.addEventListener("click", (event) => {
  if (appGrid.dataset.orbitDragging === "true") {
    appGrid.dataset.orbitDragging = "";
    return;
  }
  if (appGrid.dataset.dragging === "true") {
    appGrid.dataset.dragging = "";
    return;
  }
  if (appGrid.dataset.marquee === "true") {
    appGrid.dataset.marquee = "";
    return;
  }
  const chatButton = event.target.closest(".agent-chat-btn");
  if (chatButton) {
    event.preventDefault();
    event.stopPropagation();
    const item = desktopItems.find((entry) => entry.id === chatButton.dataset.id);
    if (item) {
      setDesktopSelection([item.id], false);
      openAgentChatWindow(item);
    }
    return;
  }
  const card = event.target.closest(".app-card");
  if (!card) {
    setDesktopSelection([]);
    return;
  }
  setDesktopSelection([card.dataset.id], false);
});

appGrid.addEventListener("pointerover", (event) => {
  const card = event.target.closest(".agent-card");
  if (agentDisplayMode !== "orbit" || agentOrbitDragging || !card || card.contains(event.relatedTarget)) return;
  appGrid.querySelectorAll(".agent-card.orbit-hovered").forEach((node) => node.classList.remove("orbit-hovered"));
  card.classList.add("orbit-hovered");
  agentOrbitPaused = true;
});

appGrid.addEventListener("pointerout", (event) => {
  const card = event.target.closest(".agent-card");
  if (agentDisplayMode !== "orbit" || agentOrbitDragging || !card || card.contains(event.relatedTarget)) return;
  card.classList.remove("orbit-hovered");
  const nextCard = event.relatedTarget?.closest?.(".agent-card");
  if (nextCard) {
    nextCard.classList.add("orbit-hovered");
    agentOrbitPaused = true;
    return;
  }
  agentOrbitPaused = false;
});

appGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest(".agent-card");
  if (!card || event.target.closest(".agent-chat-btn")) return;
  event.preventDefault();
  setDesktopSelection([card.dataset.id], false);
});

appGrid.addEventListener("dblclick", (event) => {
  if (event.target.closest(".agent-chat-btn")) return;
  const card = event.target.closest(".app-card");
  if (!card) return;
  const item = desktopItems.find((entry) => entry.id === card.dataset.id);
  if (!item) return;
  if (item.kind === "link" && item.url) {
    window.open(item.url, "_blank");
    return;
  }
  if (card.dataset.window) {
    openWindow(card.dataset.window);
    return;
  }
  if (card.dataset.folder) {
    openDesktopFolderWindow(item);
    return;
  }
  openDocumentWindow(item);
});

appGrid.addEventListener("pointerdown", (event) => {
  if (event.target.closest(".agent-chat-btn")) return;
  const card = event.target.closest(".app-card");
  if (!card || !document.body.classList.contains("desktop-mode")) return;
  if (card.classList.contains("agent-card")) return;
  const item = desktopItems.find((entry) => entry.id === card.dataset.id);
  if (!item) return;
  if (!selectedDesktopIds.has(item.id)) setDesktopSelection([item.id], false);
  const dragIds = selectedDesktopIds.has(item.id) ? [...selectedDesktopIds] : [item.id];
  const dragItems = dragIds.map((id) => desktopItems.find((entry) => entry.id === id)).filter(Boolean);
  const dragCards = dragIds.map((id) => appGrid.querySelector('.app-card[data-id="' + id + '"]')).filter(Boolean);
  const startPositions = new Map(dragItems.map((entry) => [entry.id, { x: Number(entry.x) || 0, y: Number(entry.y) || 0 }]));
  const startX = event.clientX;
  const startY = event.clientY;
  let nextDeltaX = 0;
  let nextDeltaY = 0;
  let moved = false;
  let frame = 0;
  let folderTargetId = "";
  dragCards.forEach((node) => node.classList.add("dragging", "realtime-drag"));
  const clearFolderTargets = () => {
    appGrid.querySelectorAll(".folder-drop-target").forEach((node) => node.classList.remove("folder-drop-target"));
  };
  const move = (moveEvent) => {
    moved = true;
    nextDeltaX = scaledPointerDelta(moveEvent.clientX - startX);
    nextDeltaY = scaledPointerDelta(moveEvent.clientY - startY);
    dragCards.forEach((node) => {
      node.style.pointerEvents = "none";
    });
    const targetCard = document.elementFromPoint(moveEvent.clientX, moveEvent.clientY)?.closest('.app-card[data-folder]');
    dragCards.forEach((node) => {
      node.style.pointerEvents = "";
    });
    folderTargetId = targetCard && !dragIds.includes(targetCard.dataset.id) ? targetCard.dataset.id : "";
    clearFolderTargets();
    if (folderTargetId) targetCard.classList.add("folder-drop-target");
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      dragCards.forEach((node) => {
        const origin = startPositions.get(node.dataset.id);
        if (!origin) return;
        const point = clampDesktopPoint(origin.x + nextDeltaX, origin.y + nextDeltaY);
        const targetX = point.x;
        const targetY = point.y;
        node.style.transform = "translate3d(" + (targetX - origin.x) + "px," + (targetY - origin.y) + "px,0)";
      });
    });
  };
  const up = () => {
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", up);
    if (frame) cancelAnimationFrame(frame);
    if (moved) {
      if (folderTargetId) {
        moveItemsIntoFolder(dragItems, folderTargetId);
      } else {
        dragItems.forEach((entry) => {
          const origin = startPositions.get(entry.id);
          if (!origin) return;
          const point = clampDesktopPoint(origin.x + nextDeltaX, origin.y + nextDeltaY);
          entry.x = point.x;
          entry.y = point.y;
          entry.autoArrange = false;
        });
      }
      appGrid.dataset.dragging = "true";
      saveDesktopItems();
    }
    clearFolderTargets();
    dragCards.forEach((node) => {
      const entry = desktopItems.find((candidate) => candidate.id === node.dataset.id);
      node.style.transform = "";
      node.style.pointerEvents = "";
      if (entry) {
        node.style.left = entry.x + "px";
        node.style.top = entry.y + "px";
      }
      node.classList.remove("dragging", "realtime-drag");
    });
    if (moved) renderDesktopItems();
  };
  document.addEventListener("pointermove", move);
  document.addEventListener("pointerup", up);
});

appGrid.addEventListener("pointerdown", (event) => {
  if (!document.body.classList.contains("desktop-mode")) return;
  if (event.button !== 0 || event.target.closest(".app-card") || event.target.closest(".desktop-tools") || event.target.closest(".os-window")) return;
  const surfaceRect = desktopSurface.getBoundingClientRect();
  const startX = event.clientX;
  const startY = event.clientY;
  const startOrbitPhase = agentOrbitPhase;
  let selectionBox = null;
  let moved = false;
  let frame = 0;
  let nextBox = { left: startX, top: startY, width: 0, height: 0 };
  let selecting = false;
  let gestureMode = "";
  const startOrbitDrag = () => {
    if (gestureMode === "orbit") return;
    gestureMode = "orbit";
    moved = true;
    agentOrbitDragging = true;
    agentOrbitPaused = true;
    appGrid.classList.add("orbit-dragging");
    appGrid.querySelectorAll(".agent-card.orbit-hovered").forEach((card) => card.classList.remove("orbit-hovered"));
  };
  const startSelecting = () => {
    if (selecting) return;
    gestureMode = "select";
    selecting = true;
    moved = true;
    isMarqueeSelecting = true;
    setDesktopSelection([], false, false);
    selectionBox = document.createElement("div");
    selectionBox.className = "selection-box";
    selectionBox.style.width = "0px";
    selectionBox.style.height = "0px";
    selectionBox.style.transform = "translate3d(" + (startX - surfaceRect.left) + "px," + (startY - surfaceRect.top) + "px,0)";
    desktopSurface.appendChild(selectionBox);
  };
  const paint = () => {
    frame = 0;
    if (!selectionBox) return;
    selectionBox.style.transform = "translate3d(" + (nextBox.left - surfaceRect.left) + "px," + (nextBox.top - surfaceRect.top) + "px,0)";
    selectionBox.style.width = nextBox.width + "px";
    selectionBox.style.height = nextBox.height + "px";
    const box = { left: nextBox.left, top: nextBox.top, right: nextBox.left + nextBox.width, bottom: nextBox.top + nextBox.height };
    const ids = Array.from(appGrid.querySelectorAll(".app-card")).filter((card) => {
      const rect = card.getBoundingClientRect();
      return rect.left < box.right && rect.right > box.left && rect.top < box.bottom && rect.bottom > box.top;
    }).map((card) => card.dataset.id);
    setDesktopSelection(ids, false, false);
  };
  const move = (moveEvent) => {
    const deltaX = moveEvent.clientX - startX;
    const deltaY = moveEvent.clientY - startY;
    if (!gestureMode && Math.hypot(deltaX, deltaY) < 8) return;
    if (!gestureMode && agentDisplayMode === "orbit" && Math.abs(deltaX) > Math.abs(deltaY) * 1.15) {
      startOrbitDrag();
    }
    if (!gestureMode) startSelecting();
    if (gestureMode === "orbit") {
      moveEvent.preventDefault();
      agentOrbitPhase = startOrbitPhase + deltaX * 0.008;
      agentOrbitNeedsLayout = true;
      layoutAgentOrbitCards(true);
      return;
    }
    startSelecting();
    const left = Math.min(startX, moveEvent.clientX);
    const top = Math.min(startY, moveEvent.clientY);
    const width = Math.abs(deltaX);
    const height = Math.abs(deltaY);
    nextBox = { left, top, width, height };
    if (!frame) frame = requestAnimationFrame(paint);
  };
  const up = () => {
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", up);
    document.removeEventListener("pointercancel", up);
    if (gestureMode === "orbit") {
      agentOrbitDragging = false;
      agentOrbitPaused = false;
      agentOrbitLast = 0;
      appGrid.classList.remove("orbit-dragging");
      appGrid.dataset.orbitDragging = "true";
      setTimeout(() => {
        if (appGrid.dataset.orbitDragging === "true") appGrid.dataset.orbitDragging = "";
      }, 0);
      return;
    }
    if (frame) {
      cancelAnimationFrame(frame);
      paint();
    }
    if (selectionBox) selectionBox.remove();
    isMarqueeSelecting = false;
    if (moved && selectedDesktopIds.size === 0) {
      setDesktopSelection([], false);
    } else {
      updateSelectionActions();
    }
    if (moved) appGrid.dataset.marquee = "true";
  };
  document.addEventListener("pointermove", move);
  document.addEventListener("pointerup", up);
  document.addEventListener("pointercancel", up);
});

window.addEventListener("workbench-agent-search-change", (event) => {
  desktopSearchQuery = String(event.detail || "");
  renderDesktopItems();
});
newFileBtn.addEventListener("click", () => {
  window.dispatchEvent(new CustomEvent("workbench-agent-create-open", {
    detail: { categoryId: activeAgentCategory }
  }));
});
worksAddFileBtn.addEventListener("click", () => openEditorWindow(null, document.body, "works"));
homeCanvasBtn.addEventListener("click", () => openWorksInfiniteCanvas());
desktopHelpDocsBtn?.addEventListener("click", () => openHelpDocsWindow());
worksCanvasRecordsBtn?.addEventListener("click", () => openWorksInfiniteCanvas());
deleteFileBtn.addEventListener("click", () => {
  deleteSelectedDesktopItems();
});
selectionDeleteBtn.addEventListener("click", () => {
  deleteSelectedDesktopItems();
});

function deleteSelectedDesktopItems() {
  const items = getSelectedDesktopItems();
  if (!items.length) return;
  items.forEach((item) => {
    const openDoc = document.querySelector('.os-window[data-doc="' + normalizePath(item.path) + '"]');
    if (openDoc) openDoc.remove();
  });
  const deleteIds = new Set(items.map((item) => item.id));
  desktopItems = desktopItems.filter((entry) => !deleteIds.has(entry.id));
  setDesktopSelection([], false);
  saveDesktopItems();
  renderDesktopItems();
  renderWorksFiles();
}

worksFilesGrid.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".works-file-delete");
  if (deleteButton) {
    event.stopPropagation();
    deleteWorksFile(deleteButton.closest(".works-file-card")?.dataset.id);
    return;
  }
  const card = event.target.closest(".works-file-card");
  if (!card) return;
  if (card.dataset.dragging === "true") {
    card.dataset.dragging = "";
    return;
  }
  if (card.dataset.longPressed === "true") {
    card.dataset.longPressed = "";
    return;
  }
  const item = desktopItems.find((entry) => entry.id === card.dataset.id);
  if (item) openEditorWindow(item, document.body, "works");
});

worksFilesGrid.addEventListener("pointerdown", (event) => {
  const card = event.target.closest(".works-file-card");
  if (!card || event.target.closest(".works-file-delete")) return;
  event.preventDefault();
  card.setPointerCapture?.(event.pointerId);
  const startX = event.clientX;
  const startY = event.clientY;
  let moved = false;
  let dragGhost = null;
  const timer = setTimeout(() => {
    worksFilesGrid.querySelectorAll(".works-file-card").forEach((node) => {
      if (node !== card) node.classList.remove("delete-ready");
    });
    card.classList.add("delete-ready");
    card.dataset.longPressed = "true";
  }, 520);
  const moveGhost = (x, y) => {
    if (!dragGhost) return;
    dragGhost.style.left = x + "px";
    dragGhost.style.top = y + "px";
  };
  const move = (moveEvent) => {
    if (moved || Math.hypot(moveEvent.clientX - startX, moveEvent.clientY - startY) < 10) return;
    moved = true;
    clearTimeout(timer);
    card.classList.add("dragging");
    dragGhost = card.cloneNode(true);
    dragGhost.classList.remove("dragging", "delete-ready");
    dragGhost.classList.add("works-drag-ghost");
    dragGhost.removeAttribute("data-id");
    document.body.appendChild(dragGhost);
    moveGhost(moveEvent.clientX, moveEvent.clientY);
  };
  const trackMove = (moveEvent) => {
    window.__lastWorksPointerX = moveEvent.clientX;
    window.__lastWorksPointerY = moveEvent.clientY;
    move(moveEvent);
    moveGhost(moveEvent.clientX, moveEvent.clientY);
    document.querySelectorAll(".works-category").forEach((categoryCard) => {
      categoryCard.classList.toggle("drag-over", moved && categoryCard === document.elementFromPoint(moveEvent.clientX, moveEvent.clientY)?.closest(".works-category"));
    });
  };
  const clear = () => {
    clearTimeout(timer);
    card.releasePointerCapture?.(event.pointerId);
    if (moved) {
      card.dataset.dragging = "true";
      card.classList.remove("dragging");
      const target = document.elementFromPoint(window.__lastWorksPointerX || startX, window.__lastWorksPointerY || startY)?.closest(".works-category");
      if (target) assignWorksFileCategory(card.dataset.id, target.dataset.workCategory);
      document.querySelectorAll(".works-category").forEach((categoryCard) => categoryCard.classList.remove("drag-over"));
    }
    if (dragGhost) dragGhost.remove();
    document.removeEventListener("pointermove", trackMove);
    document.removeEventListener("pointerup", clear);
    document.removeEventListener("pointercancel", clear);
  };
  document.addEventListener("pointermove", trackMove);
  document.addEventListener("pointerup", clear);
  document.addEventListener("pointercancel", clear);
});

document.querySelectorAll(".works-category").forEach((categoryCard) => {
  categoryCard.addEventListener("click", (event) => {
    const deleteButton = event.target.closest(".works-category-delete");
    if (deleteButton) {
      event.stopPropagation();
      deleteWorksCategory(categoryCard.dataset.workCategory);
      return;
    }
    if (categoryCard.dataset.longPressed === "true") {
      categoryCard.dataset.longPressed = "";
      return;
    }
    openWorksCategoryWindow(categoryCard.dataset.workCategory);
  });
  categoryCard.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".works-category-delete")) return;
    let moved = false;
    const startX = event.clientX;
    const startY = event.clientY;
    const timer = setTimeout(() => {
      document.querySelectorAll(".works-category").forEach((node) => {
        if (node !== categoryCard) node.classList.remove("delete-ready");
      });
      categoryCard.classList.add("delete-ready");
      categoryCard.dataset.longPressed = "true";
    }, 520);
    const track = (moveEvent) => {
      if (Math.hypot(moveEvent.clientX - startX, moveEvent.clientY - startY) > 8) {
        moved = true;
        clearTimeout(timer);
      }
    };
    const clear = () => {
      clearTimeout(timer);
      if (moved) categoryCard.dataset.longPressed = "";
      document.removeEventListener("pointermove", track);
      document.removeEventListener("pointerup", clear);
      document.removeEventListener("pointercancel", clear);
    };
    document.addEventListener("pointermove", track);
    document.addEventListener("pointerup", clear);
    document.addEventListener("pointercancel", clear);
  });
});

document.addEventListener("pointerdown", (event) => {
  if (event.target.closest(".works-category")) return;
  document.querySelectorAll(".works-category.delete-ready").forEach((node) => node.classList.remove("delete-ready"));
});

document.getElementById("backToTopLink").addEventListener("click", () => {
  triggerLoop();
});
document.getElementById("loopLink").addEventListener("click", () => {
  triggerLoop();
});

function launch() {
  if (!typingDone) {
    terminalLines.querySelectorAll(".intro-line").forEach((line) => line.classList.add("visible"));
    finishIntro();
    return;
  }
  if (launched || currentTab() !== "home") return;
  if (!hasAdminToken()) {
    syncLaunchAuthState();
    return;
  }
  returningToIntro = false;
  returnProgress = 0;
  returnTargetRect = null;
  document.body.classList.remove("desktop-returning", "return-stable");
  resetReturnStyles();
  launched = true;
  heroCta.classList.remove("visible");
  heroCta.classList.add("hidden");
  const cursor = document.getElementById("mainCursor");
  if (cursor) cursor.remove();
  const launching = renderIntroLine({ type: "out", text: "> launching..." });
  launching.classList.add("visible");
  const progress = renderIntroLine({ type: "out", text: "[████████████] 100%" });
  progress.classList.add("visible");
  transitionOverlay.classList.add("active");
  setTimeout(() => {
    hero.classList.add("launched");
    document.body.classList.add("desktop-mode");
    pillNav.classList.remove("hidden-during-intro");
    applyScrollLock();
    window.scrollTo(0, 0);
    transitionOverlay.classList.remove("active");
    setTimeout(() => input.focus(), 250);
  }, 420);
}

function hasAdminToken() {
  return document.cookie.split(";").some((item) => item.trim().startsWith("Admin-Token=")) || Boolean(localStorage.getItem("Admin-Token"));
}

function getAdminTokenValue() {
  const cookie = document.cookie.split(";").map((item) => item.trim()).find((item) => item.startsWith("Admin-Token="));
  return cookie ? decodeURIComponent(cookie.split("=").slice(1).join("=")) : localStorage.getItem("Admin-Token") || "";
}

function isAdminUser() {
  const token = getAdminTokenValue();
  if (!token.startsWith("member-token-")) return false;
  const account = decodeURIComponent(token.replace("member-token-", ""));
  try {
    const members = JSON.parse(localStorage.getItem("kb-admin-members") || "[]");
    return Array.isArray(members) && members.some((member) => (
      member.account === account
      && member.status === "启用"
      && member.role === "管理员"
    ));
  } catch (error) {
    return false;
  }
}

function syncAdminOnlyVisibility() {
  const loggedIn = hasAdminToken();
  document.querySelectorAll("[data-admin-only]").forEach((node) => {
    node.classList.toggle("admin-only-hidden", !isAdminUser());
  });
  document.querySelectorAll("[data-guest-only]").forEach((node) => {
    node.classList.toggle("guest-only-hidden", loggedIn);
  });
  document.querySelectorAll("[data-logged-in-only]").forEach((node) => {
    node.classList.toggle("logged-in-only-hidden", !loggedIn);
  });
}

function redirectToLoginBeforeDesktop() {
  const returnUrl = new URL(location.href);
  returnUrl.searchParams.set("launch", "1");
  returnUrl.hash = "home";
  location.href = "./admin/index.html#/login?redirect=" + encodeURIComponent(returnUrl.href);
}

function logoutFromDesktop() {
  document.cookie = "Admin-Token=; Max-Age=0; path=/";
  localStorage.removeItem("Admin-Token");
  launched = false;
  returningToIntro = false;
  expandingToDesktop = false;
  returnProgress = 0;
  hero.classList.remove("launched");
  document.body.classList.remove("desktop-mode", "desktop-returning", "return-stable");
  heroCta.classList.remove("visible");
  heroCta.classList.add("hidden");
  pillNav.classList.add("hidden-during-intro");
  resetReturnStyles();
  syncLaunchAuthState();
  window.scrollTo(0, 0);
}

function openRegisterModal() {
  registerFeedback.textContent = "";
  registerModal.hidden = false;
  setTimeout(() => document.getElementById("registerName").focus(), 30);
}

function closeRegisterModal() {
  registerModal.hidden = true;
}

function loadRegistrationRequests() {
  try {
    const saved = JSON.parse(localStorage.getItem(REGISTRATION_REQUESTS_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

function submitRegistrationRequest(event) {
  event.preventDefault();
  const name = document.getElementById("registerName").value.trim();
  const account = document.getElementById("registerAccount").value.trim();
  const password = document.getElementById("registerPassword").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const message = document.getElementById("registerMessage").value.trim();
  if (!name || !account || !password || !email) {
    registerFeedback.textContent = "请填写姓名、账号、密码和邮箱。";
    return;
  }
  const requests = loadRegistrationRequests();
  const duplicate = requests.some((item) => item.account === account && item.status === "待审核");
  if (duplicate) {
    registerFeedback.textContent = "该账号已有待审核申请，请等待管理员处理。";
    return;
  }
  requests.unshift({
    id: "req-" + Date.now(),
    name,
    account,
    password,
    email,
    message,
    role: "编辑者",
    status: "待审核",
    createdAt: new Date().toLocaleString("zh-CN", { hour12: false })
  });
  localStorage.setItem(REGISTRATION_REQUESTS_KEY, JSON.stringify(requests));
  registerForm.reset();
  registerFeedback.textContent = "申请已提交，等待管理员审核。";
  setTimeout(closeRegisterModal, 900);
}

function returnToIntroFromDesktop() {
  finishReturnToIntro();
}

function updateReturnProgress(deltaY) {
  if (!returningToIntro && deltaY <= 0) return;
  returningToIntro = true;
  expandingToDesktop = false;
  hero.classList.remove("launched");
  heroCta.classList.remove("hidden");
  heroCta.classList.add("visible");
  pillNav.classList.add("hidden-during-intro");
  document.body.classList.add("desktop-returning");
  if (!returnTargetRect) returnTargetRect = measureLaunchTarget();
  returnProgress = Math.max(0, Math.min(1, returnProgress + deltaY / 1800));
  applyReturnProgress();
  if (returnProgress <= 0) {
    cancelReturnToIntro();
    return;
  }
  if (returnProgress >= 1) finishReturnToIntro();
}

function updateExpandProgress(deltaY) {
  if (!expandingToDesktop) {
    expandingToDesktop = true;
    returningToIntro = true;
    returnProgress = 1;
    returnTargetRect = measureLaunchTarget();
    hero.classList.remove("launched");
    heroCta.classList.remove("hidden");
    heroCta.classList.add("visible");
    pillNav.classList.add("hidden-during-intro");
    document.body.classList.remove("return-stable");
    document.body.classList.add("desktop-mode", "desktop-returning");
  }
  returnProgress = Math.max(0, Math.min(1, returnProgress + deltaY / 1800));
  applyReturnProgress();
  if (returnProgress <= 0) {
    finishExpandToDesktop();
    return;
  }
  if (returnProgress >= 1) cancelExpandToIntro();
}

function applyReturnProgress() {
  const eased = 1 - Math.pow(1 - returnProgress, 2);
  const shell = document.querySelector(".site-shell");
  const macbook = document.querySelector("#launchTarget");
  const rect = returnTargetRect || measureLaunchTarget();
  const scaleX = 1 + (rect.width / window.innerWidth - 1) * eased;
  const scaleY = 1 + (rect.height / window.innerHeight - 1) * eased;
  const translateX = rect.left * eased;
  const translateY = rect.top * eased;
  const macScale = 1.86 - eased * 0.86;
  const macOpacity = 0.28 + eased * 0.72;
  shell.style.transform = "translate3d(" + translateX.toFixed(1) + "px," + translateY.toFixed(1) + "px,0) scale(" + scaleX.toFixed(4) + "," + scaleY.toFixed(4) + ")";
  shell.style.opacity = "0";
  shell.style.borderRadius = (18 * eased).toFixed(1) + "px";
  macbook.style.transform = "scale(" + macScale.toFixed(3) + ")";
  macbook.style.opacity = String(macOpacity.toFixed(3));
  setIntroTerminalOpacity(Math.max(0, (eased - 0.34) / 0.66));
}

function measureLaunchTarget() {
  const macbook = document.querySelector("#launchTarget");
  const previousTransform = macbook.style.transform;
  const previousOpacity = macbook.style.opacity;
  macbook.style.transform = "";
  macbook.style.opacity = "";
  const rect = macbook.getBoundingClientRect();
  macbook.style.transform = previousTransform;
  macbook.style.opacity = previousOpacity;
  return { left: rect.left, top: rect.top, width: rect.width, height: rect.height };
}

function cancelReturnToIntro() {
  returningToIntro = false;
  expandingToDesktop = false;
  returnProgress = 0;
  returnTargetRect = null;
  hero.classList.add("launched");
  heroCta.classList.remove("visible");
  heroCta.classList.add("hidden");
  pillNav.classList.remove("hidden-during-intro");
  document.body.classList.remove("desktop-returning");
  resetReturnStyles();
}

function cancelExpandToIntro() {
  launched = false;
  returningToIntro = false;
  expandingToDesktop = false;
  returnProgress = 0;
  hero.classList.remove("launched");
  heroCta.classList.remove("hidden");
  heroCta.classList.add("visible");
  pillNav.classList.add("hidden-during-intro");
  document.body.classList.add("return-stable");
  document.body.classList.remove("desktop-mode", "desktop-returning");
  document.documentElement.classList.remove("scroll-unlocked");
  resetReturnStyles();
}

function finishExpandToDesktop() {
  launched = true;
  returningToIntro = false;
  expandingToDesktop = false;
  returnProgress = 0;
  hero.classList.add("launched");
  heroCta.classList.remove("visible");
  heroCta.classList.add("hidden");
  pillNav.classList.remove("hidden-during-intro");
  document.body.classList.remove("desktop-returning", "return-stable");
  document.body.classList.add("desktop-mode");
  resetReturnStyles();
  applyScrollLock();
  window.scrollTo(0, 0);
  setTimeout(() => input.focus(), 250);
}

function finishReturnToIntro() {
  returningToIntro = true;
  returnProgress = 1;
  setDesktopSelection([], false);
  document.querySelectorAll(".os-window.product-window-centered").forEach((win) => win.remove());
  hero.classList.remove("launched");
  heroCta.classList.remove("hidden");
  heroCta.classList.add("visible");
  pillNav.classList.add("hidden-during-intro");
  document.body.classList.add("desktop-returning");
  if (!returnTargetRect) returnTargetRect = measureLaunchTarget();
  applyReturnProgress();
  window.scrollTo(0, 0);
  setTimeout(() => {
    launched = false;
    document.body.classList.add("return-stable");
    document.body.classList.remove("desktop-mode", "desktop-returning");
    document.documentElement.classList.remove("scroll-unlocked");
    resetReturnStyles();
    applyScrollLock();
    returningToIntro = false;
    expandingToDesktop = false;
    returnProgress = 0;
    returnTargetRect = null;
  }, 180);
}

function resetReturnStyles() {
  const shell = document.querySelector(".site-shell");
  const macbook = document.querySelector("#launchTarget");
  shell.style.transform = "";
  shell.style.opacity = "";
  shell.style.borderRadius = "";
  macbook.style.transform = "";
  macbook.style.opacity = "";
  setIntroTerminalOpacity("");
  returnTargetRect = null;
}

function setIntroTerminalOpacity(value) {
  document.querySelectorAll(".mini-terminal > *").forEach((node) => {
    node.style.opacity = value;
  });
}
`;
}
