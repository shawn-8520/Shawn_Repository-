export function desktopAgentsJs() {
  return `
function defaultDesktopItems() {
  const items = navItems.map(([label, path, index], itemIndex) => {
    const windowMap = {
      "Design Skill": "win-design-skill",
      "Work With Me": "win-work",
      "网页进化史": "win-website-history"
    };
    const point = desktopRightSlot(itemIndex);
    return {
      id: "item-" + index,
      label,
      path,
      index,
      kind: windowMap[label] ? "window" : "doc",
      windowId: windowMap[label] || "",
      x: point.x,
      y: point.y,
      autoArrange: true,
      content: "",
      agent: agentProfileFor({ label, path, index, kind: windowMap[label] ? "window" : "doc" })
    };
  });
  const pptPoint = desktopRightSlot(items.length);
  items.push({
    id: "agent-ppt-general",
    label: "通用PPT生成",
    path: "clink-ppt-agent.md",
    index: String(items.length + 1).padStart(2, "0"),
    kind: "doc",
    windowId: "",
    x: pptPoint.x,
    y: pptPoint.y,
    autoArrange: true,
    fileType: "md",
    content: "# 通用PPT生成\\n\\n结合 Presenton、PPTAgent 的工作流能力，并由 PptxGenJS 输出可编辑 PPTX。",
    agent: {
      role: "演示文稿生成智能体",
      model: "Qwen3",
      knowledge: "PPT 模板与品牌规范",
      tools: ["PPT大纲", "模板排版", "图表信息页", "图片页", "演讲备注", "PPTX导出"],
      initials: "PPT",
      status: "running",
      categoryId: "uncategorized"
    }
  });
  if (isAdminUser()) {
    const adminPoint = desktopRightSlot(items.length);
    items.push({
      id: "item-admin",
      label: "后台管理",
      path: "admin.html",
      index: String(items.length + 1).padStart(2, "0"),
      kind: "link",
      url: "./admin.html",
      x: adminPoint.x,
      y: adminPoint.y,
      autoArrange: true,
      fileType: "html",
      content: "登录页面、成员权限控制、数据概览监控",
      agent: agentProfileFor({ label: "后台管理", path: "admin.html", kind: "link", fileType: "html" })
    });
  }
  return items;
}

function normalizeDesktopItem(item, fallbackIndex) {
  const id = String(item?.id || "custom-" + Date.now() + "-" + fallbackIndex);
  const type = normalizeFileType(item?.fileType || extensionFromPath(item?.path || ""));
  const label = String(item?.label || item?.title || "未命名");
  return {
    ...item,
    id,
    label,
    path: String(item?.path || id + "." + type),
    index: String(item?.index || fallbackIndex + 1).padStart(2, "0"),
    kind: item?.kind || "doc",
    windowId: item?.windowId || "",
    x: Number(item?.x) || 80,
    y: Number(item?.y) || 120,
    autoArrange: true,
    fileType: type,
    content: String(item?.content || ""),
    createdAt: item?.createdAt || new Date(Date.now() - fallbackIndex * 86400000).toISOString(),
    agent: normalizeAgentProfile(item?.agent, { ...item, id, label, path: item?.path || id + "." + type, fileType: type, kind: item?.kind || "doc" })
  };
}

function normalizeDesktopItemsCollection(saved, persistCleanup) {
  const defaults = defaultDesktopItems();
  if (!Array.isArray(saved) || !saved.length) return defaults;
  const cleanupLabels = new Set([
    "作品集拖入修复验证-临时",
    "作品集分类最终验证-临时",
    "作品集分类拖入验证-临时",
    "作品集分类拖拽测试文件",
    "作品集分类测试文件"
  ]);
  let changed = false;
  const normalized = saved
    .filter((item) => {
      const keep = !cleanupLabels.has(item.label);
      if (!keep) changed = true;
      return keep;
    })
    .map((item, index) => {
      if (item.autoArrange !== true) changed = true;
      const normalizedItem = normalizeDesktopItem(item, index);
      if (!item.path || !item.label || !item.id) changed = true;
      return normalizedItem;
    });
  const byId = new Map(normalized.map((item) => [item.id, item]));
  const merged = defaults.map((item) => {
    if (!byId.has(item.id)) return item;
    const savedItem = byId.get(item.id);
    return { ...item, ...savedItem, autoArrange: savedItem.autoArrange === false ? false : true };
  });
  defaults.forEach((item) => byId.delete(item.id));
  const cleaned = [...merged, ...[...byId.values()]];
  if (cleaned.length !== normalized.length) changed = true;
  if (changed && persistCleanup) {
    try {
      localStorage.setItem(DESKTOP_ITEMS_KEY, JSON.stringify(cleaned));
      localStorage.setItem(DESKTOP_ITEMS_BACKUP_KEY, JSON.stringify(cleaned));
    } catch (error) {}
  }
  return cleaned;
}

function loadDesktopItems() {
  try {
    const primary = JSON.parse(localStorage.getItem(DESKTOP_ITEMS_KEY) || "null");
    const backup = JSON.parse(localStorage.getItem(DESKTOP_ITEMS_BACKUP_KEY) || "null");
    const saved = Array.isArray(primary) && primary.length ? primary : Array.isArray(backup) && backup.length ? backup : primary;
    if (Array.isArray(saved) && saved.length) return normalizeDesktopItemsCollection(saved, true);
  } catch (error) {}
  return defaultDesktopItems();
}

function desktopRightSlot(itemIndex) {
  const bounds = desktopCanvasBounds(itemIndex + 1);
  const metrics = desktopGridMetrics(bounds.width);
  const cols = metrics.cols;
  const col = itemIndex % cols;
  const row = Math.floor(itemIndex / cols);
  return {
    x: Math.min(bounds.maxX, metrics.left + col * metrics.colWidth),
    y: Math.min(bounds.maxY, metrics.top + row * metrics.rowHeight)
  };
}

function applyDesktopRightLayout() {
  const arrangedItems = desktopItems.filter((item) => !item.parentId);
  arrangedItems.forEach((item, index) => {
    if (item.autoArrange === false) return;
    const point = desktopRightSlot(index);
    item.x = point.x;
    item.y = point.y;
    item.autoArrange = true;
  });
  desktopItems.forEach((item) => {
    const point = clampDesktopPoint(Number(item.x) || 8, Number(item.y) || 42);
    item.x = point.x;
    item.y = point.y;
  });
}

function desktopCanvasBounds(itemCount = 0) {
  const width = Math.max(360, appGrid?.clientWidth || desktopSurface?.clientWidth || window.innerWidth);
  const height = Math.max(420, appGrid?.clientHeight || desktopSurface?.clientHeight || window.innerHeight);
  const metrics = desktopGridMetrics(width);
  const arrangedCount = itemCount || visibleDesktopItems().filter((item) => !item.parentId).length || desktopItems.filter((item) => !item.parentId).length || 1;
  const rows = Math.max(1, Math.ceil(arrangedCount / metrics.cols));
  const virtualHeight = Math.max(height, metrics.top + rows * metrics.rowHeight + 30);
  return {
    width,
    height: virtualHeight,
    maxX: Math.max(8, width - metrics.cardWidth - 8),
    maxY: Math.max(42, virtualHeight - metrics.cardHeight - 14),
    virtualHeight
  };
}

function clampDesktopPoint(x, y) {
  const bounds = desktopCanvasBounds();
  return {
    x: Math.max(8, Math.min(bounds.maxX, x)),
    y: Math.max(42, Math.min(bounds.maxY, y))
  };
}

function desktopGridMetrics(width) {
  const left = 14;
  const top = 72;
  const cardWidth = 150;
  const usableWidth = Math.max(1, width - left - 14);
  const compactFiveColumnStep = Math.max(156, Math.floor(usableWidth / 5));
  const colWidth = width >= 780 ? compactFiveColumnStep : 166;
  const rowHeight = 188;
  return {
    left,
    top,
    colWidth,
    rowHeight,
    cardWidth,
    cardHeight: 168,
    cols: Math.max(1, Math.floor((width - left) / colWidth))
  };
}

function saveDesktopItems() {
  try {
    const payload = JSON.stringify(desktopItems);
    localStorage.setItem(DESKTOP_ITEMS_KEY, payload);
    localStorage.setItem(DESKTOP_ITEMS_BACKUP_KEY, payload);
  } catch (error) {}
  scheduleProjectStateSave();
}

function loadHiddenWorksCategories() {
  try {
    const saved = JSON.parse(localStorage.getItem(HIDDEN_WORKS_CATEGORIES_KEY) || "[]");
    return Array.isArray(saved) ? new Set(saved) : new Set();
  } catch (error) {
    return new Set();
  }
}

function saveHiddenWorksCategories() {
  try {
    localStorage.setItem(HIDDEN_WORKS_CATEGORIES_KEY, JSON.stringify([...hiddenWorksCategories]));
  } catch (error) {}
  scheduleProjectStateSave();
}

function currentWorksCanvasStateForSync() {
  try {
    const state = JSON.parse(localStorage.getItem(WORKS_CANVAS_KEY) || "null");
    if (state?.layers?.length && state?.cards?.length) return state;
  } catch (error) {}
  return null;
}

function projectStateSnapshot() {
  return {
    version: 1,
    desktopItems,
    hiddenWorksCategories: [...hiddenWorksCategories],
    worksCanvas: currentWorksCanvasStateForSync()
  };
}

function cacheProjectStateLocally(state) {
  try {
    localStorage.setItem(DESKTOP_ITEMS_KEY, JSON.stringify(state.desktopItems || desktopItems));
    localStorage.setItem(DESKTOP_ITEMS_BACKUP_KEY, JSON.stringify(state.desktopItems || desktopItems));
    localStorage.setItem(HIDDEN_WORKS_CATEGORIES_KEY, JSON.stringify(state.hiddenWorksCategories || [...hiddenWorksCategories]));
    if (state.worksCanvas) localStorage.setItem(WORKS_CANVAS_KEY, JSON.stringify(state.worksCanvas));
  } catch (error) {}
}

async function hydrateProjectStateFromServer() {
  if (!SERVER_STORAGE_ENABLED) return;
  projectStateHydrating = true;
  try {
    const response = await fetch(PROJECT_STATE_ENDPOINT, { headers: { Accept: "application/json" } });
    const payload = await response.json();
    if (!response.ok || payload.ok === false) throw new Error(payload.message || "服务器数据读取失败");
    const state = payload.data || {};
    serverProjectState = state;
    const hasServerData = Array.isArray(state.desktopItems) || Array.isArray(state.hiddenWorksCategories) || !!state.worksCanvas;
    if (Array.isArray(state.desktopItems) && state.desktopItems.length) {
      desktopItems = normalizeDesktopItemsCollection(state.desktopItems, false);
    }
    if (Array.isArray(state.hiddenWorksCategories)) {
      hiddenWorksCategories = new Set(state.hiddenWorksCategories);
    }
    if (state.worksCanvas?.layers?.length && state.worksCanvas?.cards?.length) {
      localStorage.setItem(WORKS_CANVAS_KEY, JSON.stringify(state.worksCanvas));
    }
    cacheProjectStateLocally(projectStateSnapshot());
    renderDesktopItems();
    renderWorksFiles();
    renderWorksCanvas();
    projectStateHydrating = false;
    if (!hasServerData) scheduleProjectStateSave(0);
  } catch (error) {
    projectStateHydrating = false;
    console.warn("Project state server sync unavailable:", error.message || error);
  }
}

function scheduleProjectStateSave(delay = 350) {
  if (!SERVER_STORAGE_ENABLED || projectStateHydrating) return;
  clearTimeout(projectStateSaveTimer);
  projectStateSaveTimer = setTimeout(saveProjectStateToServer, delay);
}

async function saveProjectStateToServer() {
  if (!SERVER_STORAGE_ENABLED || projectStateHydrating) return;
  const state = projectStateSnapshot();
  cacheProjectStateLocally(state);
  try {
    const response = await fetch(PROJECT_STATE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ data: state })
    });
    const payload = await response.json();
    if (!response.ok || payload.ok === false) throw new Error(payload.message || "服务器数据保存失败");
    serverProjectState = payload.data || state;
  } catch (error) {
    console.warn("Project state save failed, kept local backup:", error.message || error);
  }
}

function renderWorksCategories() {
  document.querySelectorAll(".works-category").forEach((card) => {
    card.hidden = hiddenWorksCategories.has(card.dataset.workCategory);
    if (card.hidden) card.classList.remove("delete-ready", "drag-over");
  });
}

function applyAgentDisplayMode() {
  const gridMode = agentDisplayMode === "grid";
  appGrid.classList.toggle("grid-view", gridMode);
  appGrid.classList.toggle("orbit-view", !gridMode);
  window.__WORKBENCH_AGENT_VIEW_MODE__ = agentDisplayMode;
  window.dispatchEvent(new CustomEvent("workbench-agent-view-sync", { detail: agentDisplayMode }));
}

function setAgentDisplayMode(mode) {
  agentDisplayMode = mode === "grid" ? "grid" : "orbit";
  agentOrbitPaused = false;
  appGrid.querySelectorAll(".agent-card.orbit-hovered").forEach((card) => card.classList.remove("orbit-hovered"));
  localStorage.setItem(AGENT_VIEW_MODE_KEY, agentDisplayMode);
  applyAgentDisplayMode();
  agentOrbitNeedsLayout = true;
  if (agentDisplayMode === "orbit") layoutAgentOrbitCards(true);
}

function layoutAgentOrbitCards(force = false) {
  if (agentDisplayMode !== "orbit") return;
  const cards = [...appGrid.querySelectorAll(".agent-card")];
  const total = cards.length;
  if (!total) return;
  if (!force && !agentOrbitNeedsLayout) return;
  agentOrbitNeedsLayout = false;
  const radiusX = Math.min(300, Math.max(215, appGrid.clientWidth * 0.34));
  const radiusY = Math.min(102, Math.max(72, appGrid.clientHeight * 0.16));
  cards.forEach((card, index) => {
    const angle = agentOrbitPhase + index / total * Math.PI * 2;
    const depth = (Math.sin(angle) + 1) / 2;
    const x = Math.cos(angle) * radiusX;
    const y = Math.sin(angle) * radiusY;
    const z = depth * 160 - 70;
    const scale = 0.72 + depth * 0.28;
    const opacity = 0.52 + depth * 0.48;
    const tilt = Math.cos(angle) * -16;
    card.style.setProperty("--orbit-x", x.toFixed(2) + "px");
    card.style.setProperty("--orbit-y", y.toFixed(2) + "px");
    card.style.setProperty("--orbit-z", z.toFixed(2) + "px");
    card.style.setProperty("--orbit-scale", scale.toFixed(3));
    card.style.setProperty("--orbit-opacity", opacity.toFixed(3));
    card.style.setProperty("--orbit-tilt", tilt.toFixed(2) + "deg");
    card.style.setProperty("--orbit-order", String(120 + Math.round(depth * 260)));
  });
}

function animateAgentOrbit(timestamp) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!agentOrbitLast) agentOrbitLast = timestamp;
  const delta = Math.min(48, timestamp - agentOrbitLast);
  agentOrbitLast = timestamp;
  const shouldAnimate = !document.hidden && document.body.classList.contains("desktop-mode") && agentDisplayMode === "orbit" && !agentOrbitPaused && !reducedMotion;
  if (shouldAnimate) {
    agentOrbitPhase += delta * 0.00007;
    if (agentOrbitPhase > Math.PI * 2000) agentOrbitPhase %= Math.PI * 2;
    agentOrbitNeedsLayout = true;
  }
  layoutAgentOrbitCards();
  agentOrbitFrame = requestAnimationFrame(animateAgentOrbit);
}

agentOrbitFrame = requestAnimationFrame(animateAgentOrbit);

function loadAgentCategoryState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(AGENT_CATEGORY_STATE_KEY) || "{}");
    return {
      names: parsed?.names && typeof parsed.names === "object" ? parsed.names : {},
      custom: Array.isArray(parsed?.custom) ? parsed.custom.filter((entry) => entry?.id && entry?.label) : [],
      hidden: Array.isArray(parsed?.hidden) ? parsed.hidden.map(String) : []
    };
  } catch (error) {
    return { names: {}, custom: [], hidden: [] };
  }
}

function saveAgentCategoryState() {
  localStorage.setItem(AGENT_CATEGORY_STATE_KEY, JSON.stringify(agentCategoryState));
}

function agentCategories() {
  const rules = [
    { id: "life", defaultLabel: "人生系统", infer: (item) => /人生|私人|个人/.test(item.label || "") },
    { id: "tutorial", defaultLabel: "部门教程", infer: (item) => /教程|部署|build|网页|域名/i.test(item.label || "") },
    { id: "ai-life", defaultLabel: "和AI搭档生活", infer: (item) => /AI|搭档|Work/i.test(item.label || "") },
    { id: "media", defaultLabel: "Cola+OB自媒体", infer: (item) => /Cola|OB/i.test(item.label || "") },
    { id: "psychology", defaultLabel: "心理学书库", infer: (item) => /心理/.test(item.label || "") }
  ];
  const explicitCategory = (item) => String(item?.agent?.categoryId || "");
  const builtIn = [
    { id: "all", defaultLabel: "全部智能体", match: () => true },
    ...rules.map((entry) => ({
      id: entry.id,
      defaultLabel: entry.defaultLabel,
      match: (item) => explicitCategory(item) ? explicitCategory(item) === entry.id : entry.infer(item)
    })),
    {
      id: "uncategorized",
      defaultLabel: "未分类",
      match: (item) => explicitCategory(item)
        ? explicitCategory(item) === "uncategorized"
        : !rules.some((entry) => entry.infer(item))
    }
  ]
    .filter((entry) => !agentCategoryState.hidden.includes(entry.id) || entry.id === "all" || entry.id === "uncategorized")
    .map((entry) => ({ ...entry, label: agentCategoryState.names[entry.id] || entry.defaultLabel }));
  const custom = agentCategoryState.custom.map((entry) => {
    const ids = new Set(Array.isArray(entry.itemIds) ? entry.itemIds : []);
    return {
      id: entry.id,
      label: entry.label,
      match: (item) => explicitCategory(item) ? explicitCategory(item) === entry.id : ids.has(item.id),
      custom: true
    };
  });
  return [...builtIn, ...custom];
}

function agentCategoryForItem(item) {
  const categories = agentCategories().filter((category) => category.id !== "all");
  const explicit = String(item?.agent?.categoryId || "");
  return categories.find((category) => category.id === explicit)
    || categories.find((category) => category.custom && category.match(item))
    || categories.find((category) => category.match(item))
    || categories.find((category) => category.id === "uncategorized");
}

function activeAgentCategoryDefinition() {
  const categories = agentCategories();
  return categories.find((category) => category.id === activeAgentCategory) || categories[0];
}

function deleteAgentCategory(categoryId) {
  if (!categoryId || categoryId === "all" || categoryId === "uncategorized") return;
  const customCategory = agentCategoryState.custom.find((entry) => entry.id === categoryId);
  if (customCategory) {
    agentCategoryState.custom = agentCategoryState.custom.filter((entry) => entry.id !== categoryId);
  } else if (!agentCategoryState.hidden.includes(categoryId)) {
    agentCategoryState.hidden.push(categoryId);
  }
  delete agentCategoryState.names[categoryId];
  desktopItems.forEach((item) => {
    if (String(item?.agent?.categoryId || "") !== categoryId) return;
    item.agent = { ...normalizeAgentProfile(item.agent, item), categoryId: "uncategorized" };
  });
  if (activeAgentCategory === categoryId) activeAgentCategory = "all";
  saveAgentCategoryState();
  saveDesktopItems();
  renderDesktopItems();
}

function openAgentCategoryDialog(categoryId = "") {
  document.querySelector(".agent-category-dialog")?.remove();
  const category = categoryId ? agentCategories().find((entry) => entry.id === categoryId) : null;
  const editing = Boolean(category);
  const win = document.createElement("div");
  win.className = "os-window agent-category-dialog";
  win.style.zIndex = ++winZ;
  const bar = document.createElement("div");
  bar.className = "os-window-bar";
  bar.innerHTML = "<i></i><i></i><i></i><span>" + (editing ? "修改分类名称" : "新建智能体分类") + "</span>";
  const body = document.createElement("div");
  body.className = "os-body";
  const deleteButton = editing && !["all", "uncategorized"].includes(categoryId) ? '<button class="agent-category-delete danger" type="button">删除</button>' : "";
  body.innerHTML = '<label for="agentCategoryNameInput">分类名称</label><input id="agentCategoryNameInput" class="agent-category-name-input" maxlength="24" value="' + escapeHtml(category?.label || "") + '" placeholder="输入分类名称"><small class="agent-category-dialog-feedback">' + (editing ? "修改后左侧分类名称会立即同步。" : "新分类创建后会显示在左侧分类列表。") + '</small><div class="agent-category-dialog-actions' + (deleteButton ? " has-delete" : "") + '">' + deleteButton + '<button class="agent-category-cancel" type="button">取消</button><button class="agent-category-save primary" type="button">' + (editing ? "保存修改" : "创建分类") + "</button></div>";
  win.appendChild(bar);
  win.appendChild(body);
  const close = () => win.remove();
  bar.querySelector("i").addEventListener("click", close);
  body.querySelector(".agent-category-cancel").addEventListener("click", close);
  body.querySelector(".agent-category-delete")?.addEventListener("click", () => {
    deleteAgentCategory(categoryId);
    close();
  });
  const save = () => {
    const input = body.querySelector(".agent-category-name-input");
    const feedback = body.querySelector(".agent-category-dialog-feedback");
    const label = input.value.trim();
    if (!label) {
      feedback.textContent = "请输入分类名称。";
      input.focus();
      return;
    }
    if (editing) {
      const custom = agentCategoryState.custom.find((entry) => entry.id === categoryId);
      if (custom) custom.label = label;
      else agentCategoryState.names[categoryId] = label;
    } else {
      const id = "custom-category-" + Date.now();
      agentCategoryState.custom.push({ id, label, itemIds: [] });
      activeAgentCategory = id;
    }
    saveAgentCategoryState();
    renderDesktopItems();
    close();
  };
  body.querySelector(".agent-category-save").addEventListener("click", save);
  body.querySelector(".agent-category-name-input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") save();
    if (event.key === "Escape") close();
  });
  document.body.appendChild(win);
  centerWindow(win);
  requestAnimationFrame(() => body.querySelector(".agent-category-name-input")?.focus());
}

function searchableAgentText(item) {
  const agent = normalizeAgentProfile(item.agent, item);
  return [
    item.label,
    item.path,
    item.content,
    item.fileType,
    item.kind,
    agent.role,
    agent.model,
    agent.knowledge,
    ...(agent.tools || [])
  ].filter(Boolean).join(" ").toLocaleLowerCase();
}

function matchesAgentSearch(item, query) {
  const tokens = query.toLocaleLowerCase().split(/\s+/).filter(Boolean);
  if (!tokens.length) return true;
  const searchable = searchableAgentText(item);
  return tokens.every((token) => searchable.includes(token));
}

function sortAgentItems(items) {
  return [...items].sort((a, b) => {
    if (agentSortOrder === "oldest") return String(a.createdAt || "").localeCompare(String(b.createdAt || ""));
    if (agentSortOrder === "name-asc") return String(a.label || "").localeCompare(String(b.label || ""), "zh-CN");
    if (agentSortOrder === "name-desc") return String(b.label || "").localeCompare(String(a.label || ""), "zh-CN");
    return String(b.createdAt || "").localeCompare(String(a.createdAt || ""));
  });
}

function applyAgentCategoryCollapse() {
  osBoard.classList.toggle("agent-categories-collapsed", agentCategoriesCollapsed);
  agentCategoryCollapseBtn.setAttribute("aria-expanded", String(!agentCategoriesCollapsed));
  agentCategoryCollapseBtn.title = agentCategoriesCollapsed ? "展开智能体分类" : "收起智能体分类";
  agentCategoryCollapseBtn.textContent = agentCategoriesCollapsed ? "» 展开" : "« 收起";
}

function renderDesktopItems() {
  syncAdminOnlyVisibility();
  applyDesktopRightLayout();
  applyAgentCategoryCollapse();
  const query = desktopSearchQuery.trim();
  const allItems = visibleDesktopItems().filter((item) => !item.parentId);
  const category = activeAgentCategoryDefinition();
  const visible = sortAgentItems(allItems
    .filter(category.match)
    .filter((item) => agentStatusFilter === "all" || normalizeAgentProfile(item.agent, item).status === agentStatusFilter)
    .filter((item) => matchesAgentSearch(item, query)));
  desktopSearchStatus.textContent = query || activeAgentCategory !== "all" || agentStatusFilter !== "all"
    ? "找到 " + visible.length + " 个智能体"
    : "";
  const bounds = desktopCanvasBounds();
  appGrid.style.height = bounds.virtualHeight + "px";
  appGrid.style.minHeight = bounds.virtualHeight + "px";
  if (visible.length && !visible.some((item) => selectedDesktopIds.has(item.id))) {
    selectedDesktopIds = new Set([visible[0].id]);
    selectedDesktopId = visible[0].id;
  }
  appGrid.innerHTML = visible.length
    ? visible.map((item, index) => renderAppCard(item, index, visible.length)).join("")
    : '<div class="agent-search-empty"><strong>没有匹配的智能体</strong><span>请调整搜索词，或切换左侧智能体分类。</span></div>';
  applyAgentDisplayMode();
  agentOrbitNeedsLayout = true;
  layoutAgentOrbitCards(true);
  renderAgentDashboard(visible, allItems);
}

function visibleDesktopItems() {
  return desktopItems.filter((item) => item.id !== "item-admin" || isAdminUser());
}

function selectedAgentInsightItem() {
  const itemId = agentInsightCode?.dataset.itemId;
  return desktopItems.find((item) => item.id === itemId)
    || visibleDesktopItems().find((item) => selectedDesktopIds.has(item.id) && !item.parentId)
    || visibleDesktopItems().find((item) => !item.parentId);
}

function renderAgentInsightSkills(selectedTools) {
  if (!agentInsightTags) return;
  const selected = new Set(Array.isArray(selectedTools) ? selectedTools : []);
  const skills = [...new Set([...selected, ...agentToolOptions].filter(Boolean))];
  agentInsightTags.innerHTML = skills.map((skill) => {
    const active = selected.has(skill);
    const onlySelected = active && selected.size === 1;
    return '<button type="button" data-agent-skill="' + escapeHtml(skill) + '" aria-pressed="' + String(active) + '"' + (onlySelected ? ' aria-label="' + escapeHtml(skill) + '，至少保留一个工具"' : "") + '>' + escapeHtml(skill) + '</button>';
  }).join("");
}

function syncOpenAgentWindow(item) {
  const win = document.querySelector('.os-window[data-agent-window="' + item.id + '"]');
  if (!win) return;
  const agent = normalizeAgentProfile(item.agent, item);
  const modelSelect = win.querySelector(".agent-model-select");
  const knowledgeSelect = win.querySelector(".agent-knowledge-select");
  const toolSelect = win.querySelector(".agent-tool-select");
  if (modelSelect) modelSelect.value = agent.model;
  if (knowledgeSelect) knowledgeSelect.value = agent.knowledge;
  if (toolSelect) {
    Array.from(toolSelect.options).forEach((option) => {
      option.selected = agent.tools.includes(option.value);
    });
  }
  const summaryModel = win.querySelector(".agent-summary-model");
    if (summaryModel) summaryModel.textContent = agentModelDisplayName(agent.model);
}

function updateSelectedAgentInsight(changes) {
  const item = selectedAgentInsightItem();
  if (!item) return;
  const agent = normalizeAgentProfile(item.agent, item);
  if (changes.model) agent.model = changes.model;
  if (changes.knowledge) agent.knowledge = changes.knowledge;
  if (Array.isArray(changes.tools) && changes.tools.length) agent.tools = changes.tools;
  if (Object.prototype.hasOwnProperty.call(changes, "categoryId")) {
    agent.categoryId = String(changes.categoryId || "uncategorized");
    agentCategoryState.custom.forEach((category) => {
      category.itemIds = (Array.isArray(category.itemIds) ? category.itemIds : []).filter((id) => id !== item.id);
      if (category.id === agent.categoryId) category.itemIds.push(item.id);
    });
    saveAgentCategoryState();
  }
  item.agent = agent;
  saveDesktopItems();
  syncOpenAgentWindow(item);
  renderDesktopItems();
}

function renderAgentDashboard(visibleItems, allItems) {
  const items = Array.isArray(visibleItems) ? visibleItems : visibleDesktopItems().filter((item) => !item.parentId);
  const categoryItems = Array.isArray(allItems) ? allItems : visibleDesktopItems().filter((item) => !item.parentId);
  if (agentBoardList) {
    const categoryRows = agentCategories().map((row) => {
      const count = categoryItems.filter(row.match).length;
      return { id: row.id, label: row.label, count, active: row.id === activeAgentCategory };
    });
    window.__WORKBENCH_AGENT_CATEGORIES__ = categoryRows;
    window.dispatchEvent(new CustomEvent("workbench-agent-categories-sync", { detail: categoryRows }));
    const activeCategory = categoryRows.find((row) => row.active) || categoryRows[0];
    const categoryActionsPayload = {
      id: activeCategory?.id || "all",
      label: activeCategory?.label || "全部智能体",
      canDelete: !["all", "uncategorized"].includes(activeCategory?.id || "all")
    };
    window.__WORKBENCH_AGENT_CATEGORY_ACTIONS__ = categoryActionsPayload;
    window.dispatchEvent(new CustomEvent("workbench-agent-category-actions-sync", { detail: categoryActionsPayload }));
  }
  const selected = items.find((item) => selectedDesktopIds.has(item.id)) || items[0];
  if (selected) {
    const agent = normalizeAgentProfile(selected.agent, selected);
    const selectedIndex = Math.max(0, items.findIndex((item) => item.id === selected.id));
    const priority = selected.kind === "folder" || /后台|系统|总控/.test(selected.label || "") ? "高优先级" : selectedIndex % 3 === 0 ? "推荐" : "标准";
    const deadlineDay = String(12 + selectedIndex % 15).padStart(2, "0");
    if (agentInsightCode) agentInsightCode.dataset.itemId = selected.id;
    if (agentInsightTitle) agentInsightTitle.textContent = selected.label || "未命名智能体";
    if (agentInsightDesc) agentInsightDesc.textContent = agent.role + "已连接 " + agentModelDisplayName(agent.model) + "，可调用 " + agent.tools.slice(0, 3).join("、") + "。";
    if (agentInsightCode) agentInsightCode.textContent = "AGT-2026-" + String(selectedIndex + 1).padStart(3, "0");
    if (agentInsightPriority) agentInsightPriority.textContent = priority;
    if (agentInsightOwner) agentInsightOwner.textContent = "当前登录成员";
    if (agentInsightProject) agentInsightProject.textContent = selected.kind === "folder" ? selected.label : agent.role;
    if (agentInsightDeadline) agentInsightDeadline.textContent = "2026-08-" + deadlineDay + " 18:00";
    const selectedCategory = agentCategoryForItem(selected);
    const categoryPayload = {
      value: selectedCategory?.id || "uncategorized",
      options: agentCategories()
        .filter((category) => category.id !== "all")
        .map((category) => ({ value: category.id, label: category.label }))
    };
    window.__WORKBENCH_AGENT_CATEGORY__ = categoryPayload;
    window.dispatchEvent(new CustomEvent("workbench-agent-category-sync", { detail: categoryPayload }));
    const modelPayload = {
      value: resolveAgentModelValue(agent.model),
      options: agentModelOptions.map((option) => ({
        value: option,
        label: agentModelDisplayName(option)
      }))
    };
    const knowledgePayload = {
      value: agent.knowledge,
      options: [...new Set([agent.knowledge, ...agentKnowledgeChoices(selected)].filter(Boolean))].map((option) => ({ value: option, label: option }))
    };
    window.__WORKBENCH_AGENT_MODEL__ = modelPayload;
    window.__WORKBENCH_AGENT_KNOWLEDGE__ = knowledgePayload;
    window.dispatchEvent(new CustomEvent("workbench-agent-model-sync", { detail: modelPayload }));
    window.dispatchEvent(new CustomEvent("workbench-agent-knowledge-sync", { detail: knowledgePayload }));
    const selectedAgentPayload = {
      id: selected.id,
      label: selected.label || "",
      role: agent.role,
      categoryId: categoryPayload.value,
      model: modelPayload.value,
      knowledge: agent.knowledge,
      tools: agent.tools,
      categoryOptions: categoryPayload.options,
      modelOptions: modelPayload.options,
      knowledgeOptions: knowledgePayload.options,
      toolOptions: agentToolOptions.map((option) => ({ value: option, label: option }))
    };
    window.__WORKBENCH_SELECTED_AGENT__ = selectedAgentPayload;
    window.dispatchEvent(new CustomEvent("workbench-selected-agent-sync", { detail: selectedAgentPayload }));
    if (agentInsightStatus) agentInsightStatus.textContent = ({ running: "运行中", idle: "空闲", completed: "已完成" })[agent.status] || "运行中";
    renderAgentInsightSkills(agent.tools);
    if (agentInsightAdvice) {
      agentInsightAdvice.innerHTML = '<li>建议为“' + escapeHtml(selected.label || "当前智能体") + '”固定常用知识库，提升回答一致性。</li><li>已识别 ' + escapeHtml(String(agent.tools.length)) + ' 项可调用工具，可保存为快捷工作流。</li>';
    }
  }
}

function renderWorksFiles() {
  const items = desktopItems.filter((item) => item.source === "works");
  worksFilesGrid.innerHTML = items.length
    ? items.map(renderWorksFileCard).join("")
    : '<div class="works-files-empty">还没有作品集文件。点击“添加文件”创建。</div>';
  renderWorksCategories();
  renderWorksCategoryCounts();
}

function renderWorksFileCard(item) {
  const type = fileTypeFor(item).toUpperCase();
  const content = (item.content || "").replace(/\\s+/g, " ").trim();
  const category = item.category ? '<em>' + escapeHtml(categoryLabel(item.category)) + '</em>' : "";
  return '<div class="works-file-card" data-id="' + item.id + '" role="button" tabindex="0"><button class="works-file-delete" title="删除">×</button><span>' + escapeHtml(type) + '</span><strong>' + escapeHtml(item.label || "未命名") + '</strong><small>' + escapeHtml(content.slice(0, 70) || item.path || "") + '</small>' + category + '</div>';
}

function renderWorksCategoryCounts() {
  document.querySelectorAll(".works-category").forEach((card) => {
    const category = card.dataset.workCategory;
    const count = desktopItems.filter((item) => item.source === "works" && item.category === category).length;
    const small = card.querySelector("small");
    if (small) {
      const base = small.dataset.base || small.textContent;
      small.dataset.base = base;
      small.innerHTML = escapeHtml(base) + "<b>" + count + " 个文件</b>";
    }
  });
}

function deleteWorksFile(id) {
  if (!id) return;
  desktopItems = desktopItems.filter((item) => item.id !== id);
  if (selectedDesktopIds.has(id)) setDesktopSelection([], false);
  saveDesktopItems();
  renderDesktopItems();
  renderWorksFiles();
}

function deleteWorksCategory(category) {
  if (!category) return false;
  hiddenWorksCategories.add(category);
  desktopItems.forEach((item) => {
    if (item.source === "works" && item.category === category) delete item.category;
  });
  const openWindow = document.body.querySelector('.os-window[data-works-category="' + category + '"]');
  if (openWindow) openWindow.remove();
  saveHiddenWorksCategories();
  saveDesktopItems();
  renderDesktopItems();
  renderWorksFiles();
  return true;
}

function restoreWorksCategory(category) {
  if (!category) return false;
  const removed = hiddenWorksCategories.delete(category);
  saveHiddenWorksCategories();
  renderWorksFiles();
  return removed;
}

function assignWorksFileCategory(id, category) {
  const item = desktopItems.find((entry) => entry.id === id && entry.source === "works");
  if (!item || !category) return false;
  item.category = category;
  saveDesktopItems();
  renderDesktopItems();
  renderWorksFiles();
  return true;
}

function categoryLabel(category) {
  const labels = {
    media: "AI 自媒体知识库",
    design: "设计技能库",
    tool: "Build Your Tool",
    architecture: "建筑转 AI"
  };
  return labels[category] || "未分类";
}

function openWorksCategoryWindow(category) {
  const label = categoryLabel(category);
  const items = desktopItems.filter((item) => item.source === "works" && item.category === category);
  const existing = document.body.querySelector('.os-window[data-works-category="' + category + '"]');
  if (existing) existing.remove();
  const win = document.createElement("div");
  win.className = "os-window";
  win.dataset.worksCategory = category;
  win.style.zIndex = ++winZ;
  const bar = document.createElement("div");
  bar.className = "os-window-bar";
  bar.innerHTML = "<i></i><i></i><i></i><span>" + escapeHtml(label) + "</span>";
  const body = document.createElement("div");
  body.className = "os-body";
  body.innerHTML = items.length
    ? items.map((item) => '<button class="works-category-file" data-id="' + item.id + '"><b>' + escapeHtml(item.label || "未命名") + '</b><small>' + escapeHtml(fileTypeFor(item).toUpperCase() + " · " + (item.path || "")) + '</small></button>').join("")
    : '<p>这个分类里还没有文件。把上方文件拖进来即可归档。</p>';
  win.appendChild(bar);
  win.appendChild(body);
  bar.querySelector("i").addEventListener("click", (event) => {
    event.stopPropagation();
    win.remove();
  });
  body.querySelectorAll(".works-category-file").forEach((button) => {
    button.addEventListener("click", () => {
      const item = desktopItems.find((entry) => entry.id === button.dataset.id);
      if (item) openEditorWindow(item, document.body, "works");
    });
  });
  document.body.appendChild(win);
  centerWindow(win);
}
`;
}
