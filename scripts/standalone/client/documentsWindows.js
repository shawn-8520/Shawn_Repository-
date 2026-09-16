export function documentsWindowsJs() {
  return `
function renderAppCard(item, index = 0, total = 1) {
  const windowMap = {
    "Design Skill": "win-design-skill",
    "Work With Me": "win-work",
    "网页进化史": "win-website-history"
  };
  const action = item.kind === "folder" ? 'data-folder="' + escapeHtml(item.id) + '"' : item.kind === "window" ? 'data-window="' + (item.windowId || windowMap[item.label]) + '"' : item.kind === "link" ? 'data-url="' + escapeHtml(item.url || item.path) + '"' : 'data-command="cat ' + item.path + '"';
  const selected = selectedDesktopIds.has(item.id) ? " selected" : "";
  const ext = "." + fileTypeFor(item).toLowerCase();
  const agent = normalizeAgentProfile(item.agent, item);
  const title = escapeHtml(item.label || "未命名");
  const tools = agent.tools.slice(0, 3).map((tool) => '<span class="agent-tool-chip">' + escapeHtml(tool) + '</span>').join("");
  const initialAngle = Math.PI / 2 + index / Math.max(1, total) * Math.PI * 2;
  const initialDepth = (Math.sin(initialAngle) + 1) / 2;
  const orbitStyle = "--orbit-x:" + (Math.cos(initialAngle) * 270).toFixed(2) + "px;--orbit-y:" + (Math.sin(initialAngle) * 90).toFixed(2) + "px;--orbit-z:" + (initialDepth * 160 - 70).toFixed(2) + "px;--orbit-scale:" + (0.72 + initialDepth * 0.28).toFixed(3) + ";--orbit-opacity:" + (0.52 + initialDepth * 0.48).toFixed(3) + ";--orbit-tilt:" + (Math.cos(initialAngle) * -16).toFixed(2) + "deg;--orbit-order:" + (120 + Math.round(initialDepth * 260));
  return '<div class="app-card agent-card' + selected + '" role="button" tabindex="0" data-id="' + item.id + '" data-ext="' + escapeHtml(ext) + '" title="' + title + '" aria-label="' + title + '" aria-pressed="' + (selected ? "true" : "false") + '" ' + action + ' style="' + orbitStyle + '"><div class="agent-card-head"><span class="agent-avatar" aria-hidden="true">' + escapeHtml(agent.initials) + '</span><span class="agent-card-title"><strong>' + title + '</strong><small>' + escapeHtml(agent.role) + '</small></span></div><span class="agent-card-meta"><span class="agent-meta-row"><span>模型</span><span>' + escapeHtml(agentModelDisplayName(effectiveAgentModelValue(agent.model))) + '</span></span><span class="agent-meta-row"><span>知识库</span><span>' + escapeHtml(agent.knowledge) + '</span></span></span><span class="agent-tool-line">' + tools + '</span><button class="agent-chat-btn" type="button" data-id="' + escapeHtml(item.id) + '">打开对话</button></div>';
}

function agentProfileFor(item) {
  const label = String(item?.label || "未命名项目");
  const type = normalizeFileType(item?.fileType || extensionFromPath(item?.path || ""));
  const lower = label.toLowerCase();
  let role = "知识库智能体";
  let model = "Qwen3";
  let tools = ["RAG检索", "文件编辑", "总结"];
  if (lower.includes("ppt") || lower.includes("powerpoint") || lower.includes("演示文稿")) {
    role = "演示文稿生成智能体";
    model = "Qwen3";
    tools = ["PPT大纲", "模板排版", "图表信息页", "图片页", "演讲备注", "PPTX导出"];
  } else if (item?.kind === "folder") {
    role = "项目空间智能体";
    model = "DeepSeek";
    tools = ["文件归档", "项目问答", "目录整理"];
  } else if (item?.kind === "link" || lower.includes("后台")) {
    role = "管理智能体";
    model = "Admin";
    tools = ["权限", "数据看板", "成员"];
  } else if (lower.includes("设计") || lower.includes("design")) {
    role = "设计研究智能体";
    model = "Gemini Flash";
    tools = ["视觉分析", "灵感整理", "方案生成"];
  } else if (lower.includes("教程") || lower.includes("build")) {
    role = "教程拆解智能体";
    model = "Qwen3";
    tools = ["步骤拆解", "代码说明", "清单"];
  } else if (lower.includes("人生") || lower.includes("私人")) {
    role = "个人成长智能体";
    model = "DeepSeek";
    tools = ["复盘", "计划", "长期记忆"];
  }
  return {
    role,
    model,
    knowledge: item?.kind === "folder" ? label + " 文件夹" : (type.toUpperCase() + " · " + label),
    tools,
    initials: agentInitials(label)
  };
}

function normalizeAgentProfile(agent, item) {
  const fallback = agentProfileFor(item);
  const tools = Array.isArray(agent?.tools) && agent.tools.length ? agent.tools.map((tool) => String(tool)).filter(Boolean) : fallback.tools;
  const statusValues = ["running", "idle", "completed"];
  const fallbackStatus = statusValues[Math.abs(Number(item?.index || 1) - 1) % statusValues.length];
  return {
    role: String(agent?.role || fallback.role),
    model: resolveAgentModelValue(agent?.model || fallback.model),
    knowledge: String(agent?.knowledge || fallback.knowledge),
    tools,
    initials: String(agent?.initials || fallback.initials).slice(0, 2).toUpperCase(),
    status: statusValues.includes(agent?.status) ? agent.status : fallbackStatus,
    categoryId: String(agent?.categoryId || "")
  };
}

function renderAgentSelect(options, value, className, label) {
  const uniqueOptions = [...new Set([value, ...options].filter(Boolean))];
  return '<select class="' + className + '" aria-label="' + escapeHtml(label) + '">' + uniqueOptions.map((option) => '<option value="' + escapeHtml(option) + '"' + (option === value ? " selected" : "") + '>' + escapeHtml(option) + '</option>').join("") + '</select>';
}

function agentKnowledgeChoices(item) {
  const itemDefault = agentProfileFor(item).knowledge;
  const savedKnowledge = desktopItems.map((entry) => normalizeAgentProfile(entry.agent, entry).knowledge);
  return [...new Set([itemDefault, ...savedKnowledge, ...agentKnowledgeOptions].filter(Boolean))];
}

function renderAgentToolSelect(value, className, label) {
  const selected = Array.isArray(value) ? value : [];
  const uniqueOptions = [...new Set([...selected, ...agentToolOptions].filter(Boolean))];
  return '<select class="' + className + '" aria-label="' + escapeHtml(label) + '" multiple size="4">' + uniqueOptions.map((option) => '<option value="' + escapeHtml(option) + '"' + (selected.includes(option) ? " selected" : "") + '>' + escapeHtml(option) + '</option>').join("") + '</select>';
}

function agentInitials(label) {
  const text = String(label || "AI").trim();
  const ascii = text.match(/[A-Za-z0-9]/g);
  if (ascii && ascii.length) return ascii.slice(0, 2).join("").toUpperCase();
  return text.slice(0, 2) || "AI";
}

function fileIconLabelFor(item) {
  const labels = {
    md: "MD",
    txt: "TXT",
    json: "{}",
    csv: "CSV",
    html: "HTML",
    pdf: "PDF"
  };
  return labels[fileTypeFor(item)] || fileTypeFor(item).toUpperCase();
}

function moveItemsIntoFolder(items, folderId) {
  const folder = desktopItems.find((entry) => entry.id === folderId && entry.kind === "folder");
  if (!folder) return false;
  let moved = false;
  items.forEach((item) => {
    if (!item || item.id === folderId || item.kind === "folder" || item.kind === "window") return;
    item.parentId = folderId;
    item.autoArrange = false;
    moved = true;
  });
  if (moved) setDesktopSelection([], false);
  return moved;
}

function createDesktopFolder(label, source = "desktop") {
  const id = "folder-" + Date.now();
  const visibleCount = desktopItems.filter((item) => !item.parentId).length;
  const point = desktopRightSlot(visibleCount);
  const folder = {
    id,
    label: label || "新建文件夹",
    path: id,
    index: String(desktopItems.length + 1).padStart(2, "0"),
    kind: "folder",
    windowId: "",
    x: source === "desktop" ? point.x : 80,
    y: source === "desktop" ? point.y : 120,
    autoArrange: source === "desktop",
    source,
    fileType: "folder",
    content: "",
    agent: agentProfileFor({ label: label || "新建文件夹", kind: "folder", fileType: "folder" })
  };
  desktopItems.push(folder);
  return folder;
}

function openDesktopFolderWindow(folder) {
  const existing = document.querySelector('.os-window[data-folder-window="' + folder.id + '"]');
  if (existing) {
    centerWindow(existing);
    existing.style.zIndex = ++winZ;
    return;
  }
  const win = document.createElement("div");
  win.className = "os-window";
  win.dataset.folderWindow = folder.id;
  win.dataset.title = folder.label || "文件夹";
  win.style.left = 46 + (openCount % 5) * 32 + "px";
  win.style.top = 38 + (openCount % 5) * 28 + "px";
  win.style.zIndex = ++winZ;
  openCount++;
  const bar = document.createElement("div");
  bar.className = "os-window-bar";
  bar.innerHTML = "<i></i><i></i><i></i><span>" + escapeHtml(folder.label || "文件夹") + "</span>";
  const body = document.createElement("div");
  body.className = "os-body desktop-folder-body";
  win.appendChild(bar);
  win.appendChild(body);
  const renderFolderBody = () => {
    const children = desktopItems.filter((item) => item.parentId === folder.id);
    body.innerHTML = children.length
      ? children.map((item) => '<button class="desktop-folder-file" data-id="' + item.id + '"><b>' + escapeHtml(item.label || "未命名") + '</b><small>' + escapeHtml(fileTypeFor(item).toUpperCase() + " · " + (item.path || "")) + '</small></button>').join("")
      : '<div class="desktop-folder-empty">把桌面文件拖进来。</div>';
  };
  renderFolderBody();
  bar.querySelector("i").addEventListener("click", (event) => {
    event.stopPropagation();
    win.remove();
  });
  body.addEventListener("click", (event) => {
    const button = event.target.closest(".desktop-folder-file");
    if (!button) return;
    const item = desktopItems.find((entry) => entry.id === button.dataset.id);
    if (item) openDocumentWindow(item);
  });
  makeWindowDraggable(win, bar);
  desktopSurface.appendChild(win);
  centerWindow(win);
}

function openAgentChatWindow(item) {
  const agent = normalizeAgentProfile(item.agent, item);
  const model = resolveAgentModelValue(effectiveAgentModelValue(agent.model));
  if (!activeModelSettings.ready || !model || !agentModelOptions.includes(model)) {
    if (typeof window.__WORKBENCH_SHOW_MODEL_NOTICE__ === "function") {
      window.__WORKBENCH_SHOW_MODEL_NOTICE__();
    } else {
      window.dispatchEvent(new CustomEvent("workbench-model-required"));
    }
    return;
  }
  window.dispatchEvent(new CustomEvent("workbench-open-agent-chat", {
    detail: {
      id: item.id,
      label: item.label || "未命名智能体",
      role: agent.role,
      model,
      knowledge: agent.knowledge,
      tools: agent.tools,
      isPpt: item.id === "agent-ppt-general" || agent.tools.includes("PPTX导出")
    }
  }));
}

function openHelpDocsWindow() {
  const existing = document.querySelector('.os-window[data-help-docs="true"]');
  if (existing) {
    centerWindow(existing);
    existing.style.zIndex = ++winZ;
    return;
  }
  const win = document.createElement("div");
  win.className = "os-window help-docs-window";
  win.dataset.helpDocs = "true";
  win.dataset.title = "帮助文档";
  win.style.zIndex = ++winZ;
  const bar = document.createElement("div");
  bar.className = "os-window-bar";
  bar.innerHTML = "<i></i><i></i><i></i><span>帮助文档</span>";
  const body = document.createElement("div");
  body.className = "os-body help-docs-body";
  body.innerHTML = '<h3>知识库项目帮助文档</h3><p>这里放置当前工作台最常用的操作说明，方便成员快速理解桌面、智能体、画板和后台入口。</p><ul class="help-docs-list"><li><b>登录与成员</b><span>工作台仅限已批准账号进入；没有账号请先提交注册申请，等待管理员审核。</span></li><li><b>智能体工作台</b><span>左侧按分类筛选智能体，中间支持椭圆轮盘和平铺视图，右侧显示所选智能体详情。</span></li><li><b>无限画板</b><span>顶部“无限画板”入口可打开画布，用于卡片编排、图层管理和内容连接。</span></li><li><b>后台管理</b><span>管理员可进入后台管理成员、权限、注册申请和数据看板。</span></li><li><b>部署与数据</b><span>线上版本通过服务器保存项目数据，前端代码更新后需要重新发布到服务器。</span></li></ul>';
  win.appendChild(bar);
  win.appendChild(body);
  bar.querySelector("i").addEventListener("click", (event) => {
    event.stopPropagation();
    win.remove();
  });
  makeWindowDraggable(win, bar);
  document.body.appendChild(win);
  centerWindow(win);
}

function triggerLoop() {
  if (!launched) return;
  const overlay = document.createElement("div");
  overlay.className = "exit-overlay active";
  overlay.innerHTML = '<div><p>Say Hi</p><button style="margin:24px auto 0;display:block;border:1px solid rgba(255,255,255,.4);border-radius:999px;background:transparent;color:white;padding:10px 18px">press enter / click to launch</button></div>';
  document.body.appendChild(overlay);
  const relaunch = () => {
    overlay.remove();
    transitionOverlay.classList.add("active");
    setTimeout(() => {
      window.scrollTo(0, 0);
      transitionOverlay.classList.remove("active");
      input.focus();
    }, 380);
  };
  overlay.addEventListener("click", relaunch, { once: true });
  const onKey = (event) => {
    if (event.key === "Enter") {
      document.removeEventListener("keydown", onKey);
      relaunch();
    }
  };
  document.addEventListener("keydown", onKey);
}

function makeWindowDraggable(win, bar) {
  win.addEventListener("pointerdown", () => {
    win.style.zIndex = ++winZ;
  });
  bar.addEventListener("pointerdown", (event) => {
    if (event.target.tagName === "I") return;
    const startX = event.clientX;
    const startY = event.clientY;
    const startLeft = win.offsetLeft;
    const startTop = win.offsetTop;
    const move = (moveEvent) => {
      win.style.left = startLeft + moveEvent.clientX - startX + "px";
      win.style.top = startTop + moveEvent.clientY - startY + "px";
    };
    const up = () => {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerup", up);
    };
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerup", up);
  });
}

function openWindow(templateId) {
  const existing = document.querySelector('.os-window[data-from="' + templateId + '"]');
  if (existing) {
    centerWindow(existing);
    existing.style.zIndex = ++winZ;
    return;
  }
  const template = document.getElementById(templateId);
  if (!template) return;
  const win = template.content.firstElementChild.cloneNode(true);
  if (templateId === "win-launchpad") {
    const body = win.querySelector("#launchpadBody");
    if (body) body.innerHTML = visibleDesktopItems().filter((item) => !item.parentId).map((item) => '<button data-command="cat ' + item.path + '"><span>' + item.index + '</span> ' + escapeHtml(item.label) + '</button>').join("");
  }
  win.dataset.from = templateId;
  win.style.left = 36 + (openCount % 5) * 32 + "px";
  win.style.top = 24 + (openCount % 5) * 28 + "px";
  win.style.zIndex = ++winZ;
  openCount++;

  const bar = document.createElement("div");
  bar.className = "os-window-bar";
  bar.innerHTML = "<i></i><i></i><i></i><span>" + (win.dataset.title || "window") + "</span>";
  win.insertBefore(bar, win.firstChild);
  bar.querySelector("i").addEventListener("click", (event) => {
    event.stopPropagation();
    win.remove();
  });
  win.addEventListener("pointerdown", () => {
    win.style.zIndex = ++winZ;
  });
  bar.addEventListener("pointerdown", (event) => {
    if (event.target.tagName === "I") return;
    const startX = event.clientX;
    const startY = event.clientY;
    const startLeft = win.offsetLeft;
    const startTop = win.offsetTop;
    const move = (moveEvent) => {
      win.style.left = startLeft + moveEvent.clientX - startX + "px";
      win.style.top = startTop + moveEvent.clientY - startY + "px";
    };
    const up = () => {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerup", up);
    };
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerup", up);
  });
  desktopSurface.appendChild(win);
  centerWindow(win);
}

function getSelectedDesktopItem() {
  const selected = getSelectedDesktopItems();
  return selected.length === 1 ? selected[0] : null;
}

function getSelectedDesktopItems() {
  return desktopItems.filter((item) => selectedDesktopIds.has(item.id));
}

function setDesktopSelection(ids, shouldRender = true, shouldUpdateActions = true) {
  selectedDesktopIds = new Set(ids.filter(Boolean));
  selectedDesktopId = ids[ids.length - 1] || null;
  if (shouldUpdateActions && !isMarqueeSelecting) updateSelectionActions();
  if (shouldRender) {
    renderDesktopItems();
    return;
  }
  appGrid.querySelectorAll(".app-card").forEach((card) => {
    const selected = selectedDesktopIds.has(card.dataset.id);
    card.classList.toggle("selected", selected);
    card.setAttribute("aria-pressed", selected ? "true" : "false");
  });
  renderAgentDashboard();
}

function updateSelectionActions() {
  const count = selectedDesktopIds.size;
  selectionCount.textContent = "已选 " + count;
  selectionActions.classList.toggle("active", count > 0);
}

function openDocumentWindow(itemOrPath) {
  const item = typeof itemOrPath === "string"
    ? desktopItems.find((entry) => normalizePath(entry.path) === normalizePath(itemOrPath))
    : itemOrPath;
  const normalized = normalizePath(item?.path || itemOrPath);
  const existing = document.querySelector('.os-window[data-doc="' + normalized + '"]');
  const doc = docMap.get(normalized);
  if (existing) {
    renderDocumentPreview(existing, item || { path: normalized, content: doc?.content || "" });
    centerWindow(existing);
    existing.style.zIndex = ++winZ;
    return;
  }
  const win = document.createElement("div");
  win.className = "os-window";
  win.dataset.doc = normalized;
  win.style.zIndex = ++winZ;
  openCount++;
  const bar = document.createElement("div");
  bar.className = "os-window-bar";
  bar.innerHTML = "<i></i><i></i><i></i><span>" + escapeHtml(item?.label || normalized) + "</span>";
  const body = document.createElement("div");
  body.className = "os-body";
  win.appendChild(bar);
  win.appendChild(body);
  renderDocumentPreview(win, item || { path: normalized, content: doc?.content || "" });
  bar.querySelector("i").addEventListener("click", (event) => {
    event.stopPropagation();
    win.remove();
  });
  win.addEventListener("pointerdown", () => {
    win.style.zIndex = ++winZ;
  });
  bar.addEventListener("pointerdown", (event) => {
    if (event.target.tagName === "I") return;
    const startX = event.clientX;
    const startY = event.clientY;
    const startLeft = win.offsetLeft;
    const startTop = win.offsetTop;
    const move = (moveEvent) => {
      win.style.left = startLeft + moveEvent.clientX - startX + "px";
      win.style.top = startTop + moveEvent.clientY - startY + "px";
    };
    const up = () => {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerup", up);
    };
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerup", up);
  });
  desktopSurface.appendChild(win);
  centerWindow(win);
}

function renderDocumentPreview(win, item) {
  const body = win.querySelector(".os-body");
  const doc = docMap.get(normalizePath(item?.path || ""));
  const content = item?.content || doc?.content || "";
  body.innerHTML = '<div class="doc-actions"><button class="doc-edit-btn">编辑</button></div>' + renderFileContent(content, item);
  body.querySelector(".doc-edit-btn").addEventListener("click", () => renderDocumentEditor(win, item));
}

function renderDocumentEditor(win, item) {
  const body = win.querySelector(".os-body");
  const target = desktopItems.find((entry) => entry.id === item.id) || item;
  const currentType = fileTypeFor(target);
  const typeOptions = supportedFileTypes.map((type) => '<option value="' + type.value + '"' + (type.value === currentType ? " selected" : "") + '>' + type.label + ' (.' + type.value + ')</option>').join("");
  body.innerHTML = '<label style="display:block;font-weight:800;margin-bottom:8px">文件名</label><input class="editor-title" style="width:100%;height:36px;border:1px solid #1a1a2e;border-radius:8px;padding:0 10px" value="' + escapeHtml(target?.label || "未命名") + '"><label style="display:block;font-weight:800;margin:14px 0 8px">格式</label><select class="editor-type" style="width:100%;height:36px;border:1px solid #1a1a2e;border-radius:8px;padding:0 10px;background:white">' + typeOptions + '</select><label style="display:block;font-weight:800;margin:14px 0 8px">内容</label><textarea class="editor-content" style="width:100%;height:220px;border:1px solid #1a1a2e;border-radius:8px;padding:10px;resize:vertical">' + escapeHtml(target?.content || docMap.get(normalizePath(target?.path || ""))?.content || defaultContentFor(currentType)) + '</textarea><div style="display:flex;justify-content:flex-end;gap:8px;margin-top:12px"><button class="editor-cancel">取消</button><button class="editor-save">保存</button></div>';
  body.querySelector(".editor-cancel").addEventListener("click", () => renderDocumentPreview(win, target));
  body.querySelector(".editor-save").addEventListener("click", () => {
    const label = body.querySelector(".editor-title").value.trim() || "未命名";
    const fileType = normalizeFileType(body.querySelector(".editor-type").value);
    const content = body.querySelector(".editor-content").value;
    const saved = desktopItems.find((entry) => entry.id === target.id) || target;
    saved.label = label;
    saved.fileType = fileType;
    saved.content = content;
    saved.path = withFileExtension(saved.path || saved.id + "." + fileType, fileType);
    win.dataset.doc = normalizePath(saved.path);
    const title = win.querySelector(".os-window-bar span");
    if (title) title.textContent = saved.path;
    saveDesktopItems();
    renderDesktopItems();
    renderDocumentPreview(win, saved);
  });
}

function cleanImportedText(text) {
  return String(text || "")
    .replace(/<script[\\s\\S]*?<\\/script>/gi, " ")
    .replace(/<style[\\s\\S]*?<\\/style>/gi, " ")
    .replace(/<noscript[\\s\\S]*?<\\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\\s+/g, " ")
    .trim();
}

function titleFromUrl(url) {
  try {
    const parsed = new URL(url);
    const last = decodeURIComponent(parsed.pathname.split("/").filter(Boolean).pop() || parsed.hostname);
    return last.replace(/[-_]+/g, " ").trim() || parsed.hostname;
  } catch (error) {
    return "链接收藏";
  }
}

function normalizeImportUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (/^https?:\\/\\//i.test(raw)) return raw;
  return "https://" + raw;
}

function extractReadableContent(html, url) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const title = (doc.querySelector('meta[property="og:title"]')?.content || doc.querySelector("title")?.textContent || titleFromUrl(url)).trim();
  const description = (doc.querySelector('meta[name="description"]')?.content || doc.querySelector('meta[property="og:description"]')?.content || "").trim();
  const article = doc.querySelector("article") || doc.querySelector("main") || doc.body;
  const blocks = Array.from(article?.querySelectorAll("h1,h2,h3,p,li,blockquote,pre") || [])
    .map((node) => cleanImportedText(node.textContent))
    .filter((text) => text.length > 24);
  const body = blocks.length ? blocks.join("\\n\\n") : cleanImportedText(article?.textContent || html);
  return { title, description, body: body.slice(0, 12000), fetched: true };
}

function structuredLinkDocument(data) {
  const title = data.title || titleFromUrl(data.url);
  const description = data.description || (data.fetched ? "已从链接内容自动提取。" : "浏览器无法直接抓取该页面，已先保存为结构化链接档案。");
  const content = data.body || "待补充阅读笔记。";
  return [
    "# " + title,
    "",
    "> 来源：" + data.url,
    "> 保存方式：" + (data.fetched ? "已抓取页面内容" : "结构化链接收藏"),
    "> 读取通道：" + (data.method || "browser"),
    "",
    "## 简介",
    "",
    description,
    "",
    "## 结构化信息",
    "",
    "- 链接：" + data.url,
    "- 标题：" + title,
    "- 状态：" + (data.fetched ? "已读取正文" : "待手动阅读全文"),
    "- 用途：收藏、归档、后续整理",
    "",
    "## 内容",
    "",
    content
  ].join("\\n");
}

async function importLinkViaLocalProxy(url) {
  const endpoints = [];
  if (location.protocol === "http:" || location.protocol === "https:") {
    endpoints.push(location.origin + "/api/import-link?url=" + encodeURIComponent(url));
  }
  endpoints.push("http://127.0.0.1:8099/api/import-link?url=" + encodeURIComponent(url));
  let lastError = null;
  for (const endpoint of [...new Set(endpoints)]) {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error("proxy " + response.status);
      const data = await response.json();
      if (!data.ok) throw new Error(data.message || "proxy failed");
      return data;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("本地抓取服务不可用");
}

async function importLinkAsDocument(url) {
  const normalized = normalizeImportUrl(url);
  if (!normalized) throw new Error("请输入链接");
  let parsed;
  try {
    parsed = new URL(normalized);
  } catch (error) {
    throw new Error("链接格式不正确");
  }
  let data = {
    url: parsed.href,
    title: titleFromUrl(parsed.href),
    description: "",
    body: "",
    fetched: false
  };
  try {
    data = await importLinkViaLocalProxy(parsed.href);
  } catch (proxyError) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 9000);
    const response = await fetch(parsed.href, { signal: controller.signal, mode: "cors" });
    clearTimeout(timer);
    if (!response.ok) throw new Error("HTTP " + response.status);
    const text = await response.text();
    const contentType = response.headers.get("content-type") || "";
    data = contentType.includes("text/html")
      ? { url: parsed.href, ...extractReadableContent(text, parsed.href) }
      : { url: parsed.href, title: titleFromUrl(parsed.href), description: contentType || "文本内容", body: cleanImportedText(text).slice(0, 12000), fetched: true };
  } catch (error) {
    data.description = "浏览器受跨域、登录或网站限制，未能直接抓取全文。已保存为结构化链接档案，可稍后补充摘要。";
  }
  }
  return {
    title: data.title || titleFromUrl(parsed.href),
    content: structuredLinkDocument(data),
    sourceUrl: parsed.href,
    fetched: data.fetched
  };
}

function openEditorWindow(item, mountTarget = desktopSurface, source = "desktop") {
  const editing = Boolean(item);
  const id = editing ? item.id : "custom-" + Date.now();
  const currentType = fileTypeFor(item || { path: "new.md" });
  const typeOptions = supportedFileTypes.map((type) => '<option value="' + type.value + '"' + (type.value === currentType ? " selected" : "") + '>' + type.label + ' (.' + type.value + ')</option>').join("");
  const win = document.createElement("div");
  win.className = "os-window" + (source === "works" ? " works-editor-window" : "");
  win.dataset.ownerTab = source === "works" ? "works" : currentTab();
  win.setAttribute("role", "dialog");
  win.setAttribute("aria-modal", "false");
  win.setAttribute("aria-label", editing ? "编辑文件" : "添加文件");
  win.style.zIndex = ++winZ;
  openCount++;
  const bar = document.createElement("div");
  bar.className = "os-window-bar";
  bar.innerHTML = '<button class="os-window-close" type="button" aria-label="关闭弹窗"></button><i></i><i></i><span>' + (source === "works" ? (editing ? "Edit File" : "New File") : (editing ? "编辑文件" : "添加文件")) + "</span>";
  const body = document.createElement("div");
  body.className = "os-body";
  body.dataset.createMode = "file";
  const canCreateFolder = !editing && source === "desktop";
  const createMode = canCreateFolder ? '<div class="create-mode"><button class="create-mode-btn active" data-create-mode="file" aria-pressed="true" type="button">文件</button><button class="create-mode-btn" data-create-mode="folder" aria-pressed="false" type="button">文件夹</button></div>' : "";
  const linkImport = editing ? "" : '<section class="link-import-box file-only"><div class="link-import-heading"><b><span class="link-import-icon" aria-hidden="true">↗</span>根据链接生成文件</b></div><div class="link-import-row" style="display:flex;align-items:center;gap:10px"><input class="link-import-url" style="min-width:0;flex:1" type="url" inputmode="url" aria-label="文章或收藏链接" placeholder="粘贴文章链接 / 收藏链接"><button class="link-import-btn" style="width:112px;flex:0 0 112px" type="button">生成</button></div><small class="link-import-status" aria-live="polite">会自动填写标题、简介，并把可读取内容整理成结构化文档。</small></section>';
  body.innerHTML = createMode + linkImport + '<div class="editor-form-grid"><label class="editor-field"><span>名称</span><input class="editor-title" value="' + escapeHtml(item?.label || "新建笔记") + '"></label><label class="editor-field file-only"><span>格式</span><select class="editor-type">' + typeOptions + '</select></label></div><label class="editor-field editor-content-field file-only"><span>内容</span><textarea class="editor-content" placeholder="输入文件内容">' + escapeHtml(item?.content || docMap.get(normalizePath(item?.path || ""))?.content || defaultContentFor(currentType)) + '</textarea></label><div class="editor-actions"><button class="editor-cancel" type="button">取消</button><button class="editor-save" type="button">保存文件</button></div>';
  win.appendChild(bar);
  win.appendChild(body);
  let backdrop = null;
  const onEditorKeydown = (event) => {
    if (event.key === "Escape") closeEditor();
  };
  const onEditorTabChange = (event) => {
    if (event.detail?.tab !== win.dataset.ownerTab) closeEditor();
  };
  const closeEditor = () => {
    document.removeEventListener("keydown", onEditorKeydown);
    window.removeEventListener("workbench-tab-change", onEditorTabChange);
    backdrop?.remove();
    win.remove();
  };
  bar.querySelector(".os-window-close").addEventListener("click", (event) => {
    event.stopPropagation();
    closeEditor();
  });
  body.querySelector(".editor-cancel").addEventListener("click", closeEditor);
  body.querySelectorAll(".create-mode-btn").forEach((button) => {
    button.addEventListener("click", () => {
      body.dataset.createMode = button.dataset.createMode || "file";
      body.classList.toggle("folder-create-mode", body.dataset.createMode === "folder");
      body.querySelectorAll(".create-mode-btn").forEach((entry) => {
        const active = entry === button;
        entry.classList.toggle("active", active);
        entry.setAttribute("aria-pressed", active ? "true" : "false");
      });
      const title = body.querySelector(".editor-title");
      if (body.dataset.createMode === "folder" && title.value === "新建笔记") title.value = "新建文件夹";
      if (body.dataset.createMode === "file" && title.value === "新建文件夹") title.value = "新建笔记";
    });
  });
  const importButton = body.querySelector(".link-import-btn");
  if (importButton) {
    importButton.addEventListener("click", async () => {
      const urlInput = body.querySelector(".link-import-url");
      const status = body.querySelector(".link-import-status");
      importButton.disabled = true;
      importButton.textContent = "生成中";
      status.textContent = "正在读取链接并整理为文件...";
      try {
        const imported = await importLinkAsDocument(urlInput.value);
        body.querySelector(".editor-title").value = imported.title;
        body.querySelector(".editor-type").value = "md";
        body.querySelector(".editor-content").value = imported.content;
        body.dataset.sourceUrl = imported.sourceUrl;
        status.textContent = imported.fetched ? "已读取页面内容并生成结构化 Markdown。" : "网站限制直接抓取，已生成结构化链接收藏。";
      } catch (error) {
        status.textContent = error.message || "链接生成失败，请检查链接。";
      } finally {
        importButton.disabled = false;
        importButton.textContent = "生成";
      }
    });
  }
  body.querySelector(".editor-save").addEventListener("click", () => {
    const label = body.querySelector(".editor-title").value.trim() || "未命名";
    if (canCreateFolder && body.dataset.createMode === "folder") {
      const folder = createDesktopFolder(label, source);
      setDesktopSelection([folder.id], false);
      saveDesktopItems();
      renderDesktopItems();
      renderWorksFiles();
      closeEditor();
      return;
    }
    const fileType = normalizeFileType(body.querySelector(".editor-type").value);
    const content = body.querySelector(".editor-content").value;
    if (editing) {
      const target = desktopItems.find((entry) => entry.id === id) || item;
      target.label = label;
      target.content = content;
      target.fileType = fileType;
      target.path = withFileExtension(target.path || id + "." + fileType, fileType);
      target.source = target.source || source;
      target.sourceUrl = body.dataset.sourceUrl || target.sourceUrl || "";
    } else {
      desktopItems.push({
        id,
        label,
        path: id + "." + fileType,
        index: String(desktopItems.length + 1).padStart(2, "0"),
        kind: "doc",
        windowId: "",
      x: 80,
      y: 120,
      autoArrange: source === "desktop",
      source,
      fileType,
      sourceUrl: body.dataset.sourceUrl || "",
        content,
        agent: agentProfileFor({ label, path: id + "." + fileType, kind: "doc", fileType })
      });
      setDesktopSelection([id], false);
    }
    saveDesktopItems();
    renderDesktopItems();
    renderWorksFiles();
    closeEditor();
  });
  document.addEventListener("keydown", onEditorKeydown);
  window.addEventListener("workbench-tab-change", onEditorTabChange);
  mountTarget.appendChild(win);
  centerWindow(win);
  requestAnimationFrame(() => body.querySelector(editing ? ".editor-title" : ".link-import-url")?.focus());
}

function centerWindow(win) {
  requestAnimationFrame(() => {
    if (win.parentElement !== document.body) document.body.appendChild(win);
    win.classList.add("product-window-centered");
    const rect = win.getBoundingClientRect();
    let left = Math.max(12, Math.round((window.innerWidth - rect.width) / 2));
    let top = Math.max(12, Math.round((window.innerHeight - rect.height) / 2));
    win.style.left = left + "px";
    win.style.top = top + "px";
  });
}

function submitInput() {
  const command = input.value.trim();
  input.value = "";
  if (!command) return;
  appendCommand(command);
  runCommand(command);
}

function runCommand(command) {
  if (command === "help") {
    appendHtml("<p>可用命令：</p><ul><li>open clink-ai.app</li><li>cat about.md</li><li>search AI</li><li>ai query \\"AI 协作\\"</li><li>ai summary about.md</li><li>fortune</li><li>exit</li></ul>");
    return;
  }
  if (command === "open clink-ai.app" || command === "open esther-os.app" || command === "ls") {
    openWindow("win-launchpad");
    appendText("Clink AI opened. 单击图标选中，双击图标打开文档。");
    return;
  }
  if (command === "whoami") {
    appendText("Clink AI / Markdown knowledge base / 1 person + AI = 1 team");
    return;
  }
  if (command.startsWith("cat ")) {
    const path = normalizePath(command.slice(4));
    if (document.body.classList.contains("desktop-mode")) {
      openDocumentWindow(path);
      appendText("opened " + path);
      return;
    }
    const doc = docMap.get(path);
    appendHtml(doc ? markdownToHtml(doc.content) : "<p>未找到 " + escapeHtml(path) + "。输入 open clink-ai.app 查看文档。</p>");
    return;
  }
  if (command.startsWith("search ")) {
    const keyword = command.slice(7).trim();
    const hits = searchDocs(keyword);
    appendHtml(hits.length ? "<p>搜索 " + escapeHtml(keyword) + "，找到 " + hits.length + " 个结果：</p>" + hits.map(renderHit).join("") : "<p>没有找到相关文档。</p>");
    return;
  }
  if (command.startsWith("ai query ")) {
    const prompt = stripQuotes(command.slice(9).trim());
    const hits = searchDocs(prompt).slice(0, 3);
    appendHtml("<p>基于当前 Markdown 知识库，和「" + escapeHtml(prompt) + "」最相关的是：</p>" + (hits.length ? hits.map(renderHit).join("") : "<p>暂时没有直接命中，可以换个关键词。</p>") + "<p>这是本地 RAG 检索模拟。接入 Ollama/API 后，可把这些片段交给模型生成完整回答。</p>");
    return;
  }
  if (command.startsWith("ai summary ")) {
    const path = normalizePath(command.slice(11));
    const doc = docMap.get(path);
    appendText(doc ? summarize(doc.content) : "无法总结 " + path + "，知识库中还没有这篇文档。");
    return;
  }
  if (command.startsWith("ai upload ")) {
    appendText("静态预览页不能直接写入本地文件。正式接入服务端后，这里会执行 Markdown 解析、文本分块和向量入库。");
    return;
  }
  if (command === "fortune") {
    appendText(fortunes[Math.floor(Math.random() * fortunes.length)]);
    return;
  }
  if (command === "clear") {
    output.innerHTML = "";
    return;
  }
  if (command === "exit") {
    appendText("[Process completed]");
    const overlay = document.createElement("div");
    overlay.className = "exit-overlay active";
    overlay.innerHTML = "<p>session closed</p>";
    overlay.addEventListener("click", () => overlay.remove());
    document.body.appendChild(overlay);
    return;
  }
  appendText("command not found: " + command + "。输入 help 查看可用命令。");
}

function appendCommand(command) {
  output.insertAdjacentHTML("beforeend", '<div class="term-row term-command"><b>robin@universe ~ zsh</b><br>$ ' + escapeHtml(command) + '</div>');
  output.scrollTop = output.scrollHeight;
}

function appendText(text) {
  output.insertAdjacentHTML("beforeend", '<div class="term-row term-out">' + escapeHtml(text) + '</div>');
  output.scrollTop = output.scrollHeight;
}

function appendHtml(html) {
  output.insertAdjacentHTML("beforeend", '<div class="term-row term-out"><div class="term-html">' + html + '</div></div>');
  output.scrollTop = output.scrollHeight;
}

function searchDocs(keyword) {
  const query = keyword.toLowerCase();
  if (!query) return [];
  return docs.map((doc) => {
    const text = (doc.path + "\\n" + doc.content).toLowerCase();
    const score = text.split(query).length - 1;
    return { ...doc, score, excerpt: excerpt(doc.content, query) };
  }).filter((doc) => doc.score > 0).sort((a, b) => b.score - a.score);
}

function renderHit(hit) {
  return '<button class="result-btn" data-command="cat ' + hit.path + '"><strong>' + hit.path + '</strong><small>' + escapeHtml(hit.excerpt) + '</small></button>';
}

function renderFileContent(content, item) {
  const type = fileTypeFor(item);
  if (type === "pdf") return renderPdfPreview(content, item);
  if (!content) return "<p>空白文件。点击编辑写入内容。</p>";
  if (type === "md") return markdownToHtml(content);
  if (type === "json") return renderJson(content);
  if (type === "csv") return renderCsv(content);
  if (type === "html") return '<pre style="white-space:pre-wrap;margin:0;font:13px/1.55 ui-monospace,SFMono-Regular,Menlo,monospace">' + escapeHtml(content) + '</pre>';
  return '<pre style="white-space:pre-wrap;margin:0;font:13px/1.55 ui-monospace,SFMono-Regular,Menlo,monospace">' + escapeHtml(content) + '</pre>';
}

function renderPdfPreview(content, item) {
  const title = escapeHtml(item?.label || item?.path || "PDF 文件");
  const description = content ? escapeHtml(content).replace(/\\n/g, "<br>") : "这是一个 PDF 条目。当前静态预览支持保存 PDF 格式和说明文字；真实 PDF 文件预览需要后续接入文件上传或二进制资源。";
  return '<div style="border:1px solid #d0d0dc;border-radius:12px;overflow:hidden;background:#f7f7fb"><div style="display:flex;align-items:center;gap:10px;background:#b42318;color:white;padding:12px 14px;font-weight:900"><span style="display:inline-grid;place-items:center;width:38px;height:48px;border-radius:6px;background:white;color:#b42318;font:900 13px ui-monospace,SFMono-Regular,Menlo,monospace">PDF</span><strong>' + title + '</strong></div><div style="padding:14px;line-height:1.7;color:#333">' + description + '</div></div>';
}

function renderJson(content) {
  try {
    return '<pre style="white-space:pre-wrap;margin:0;font:13px/1.55 ui-monospace,SFMono-Regular,Menlo,monospace">' + escapeHtml(JSON.stringify(JSON.parse(content), null, 2)) + '</pre>';
  } catch (error) {
    return '<p style="color:#b42318;font-weight:800">JSON 格式有误，以下为原始内容。</p><pre style="white-space:pre-wrap;margin:0;font:13px/1.55 ui-monospace,SFMono-Regular,Menlo,monospace">' + escapeHtml(content) + '</pre>';
  }
}

function renderCsv(content) {
  const rows = content.trim().split(/\\r?\\n/).filter(Boolean).map((line) => line.split(",").map((cell) => cell.trim()));
  if (!rows.length) return "<p>空白 CSV。</p>";
  return '<div style="overflow:auto"><table style="border-collapse:collapse;width:100%;font-size:13px">' + rows.map((row, rowIndex) => '<tr>' + row.map((cell) => {
    const tag = rowIndex === 0 ? "th" : "td";
    return "<" + tag + ' style="border:1px solid #d0d0dc;padding:7px 9px;text-align:left">' + escapeHtml(cell) + "</" + tag + ">";
  }).join("") + "</tr>").join("") + "</table></div>";
}

function fileTypeFor(item) {
  return normalizeFileType(item?.fileType || extensionFromPath(item?.path || ""));
}

function extensionFromPath(path) {
  const match = String(path).toLowerCase().match(/\\.([a-z0-9]+)$/);
  return match ? match[1] : "md";
}

function normalizeFileType(type) {
  const value = String(type || "md").toLowerCase().replace(/[^a-z0-9]/g, "");
  return supportedFileTypes.some((entry) => entry.value === value) ? value : "md";
}

function withFileExtension(path, type) {
  const clean = String(path || "custom").replace(/\\.[a-z0-9]+$/i, "");
  return clean + "." + normalizeFileType(type);
}

function defaultContentFor(type) {
  if (type === "json") return '{\\n  "title": "新建数据",\\n  "items": []\\n}';
  if (type === "csv") return "name,value\\n示例,1";
  if (type === "html") return "<section>\\n  <h1>新建页面片段</h1>\\n</section>";
  if (type === "pdf") return "PDF 文件说明";
  if (type === "txt") return "新建文本";
  return "# 新建笔记\\n\\n写点什么。";
}

function markdownToHtml(markdown) {
  return markdown
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .split(/\\n{2,}/)
    .map((block) => {
      if (block.startsWith("# ")) return "<h1>" + block.slice(2) + "</h1>";
      if (block.startsWith("## ")) return "<h2>" + block.slice(3) + "</h2>";
      if (block.startsWith("### ")) return "<h3>" + block.slice(4) + "</h3>";
      if (block.startsWith("- ")) return "<ul>" + block.split("\\n").map((line) => "<li>" + line.replace(/^- /, "") + "</li>").join("") + "</ul>";
      return "<p>" + block.replace(/\\n/g, "<br>").replace(new RegExp(String.fromCharCode(96) + "([^" + String.fromCharCode(96) + "]+)" + String.fromCharCode(96), "g"), "<code>$1</code>") + "</p>";
    })
    .join("");
}

function summarize(content) {
  const plain = content.replace(new RegExp("[#>*_" + String.fromCharCode(96) + "-]", "g"), " ").replace(/\\s+/g, " ").trim();
  return plain.split(/[。！？.!?]/).filter(Boolean).slice(0, 3).join("。") + "。";
}

function excerpt(content, query) {
  const lower = content.toLowerCase();
  const index = lower.indexOf(query);
  if (index < 0) return content.replace(/\\s+/g, " ").slice(0, 120);
  return content.slice(Math.max(0, index - 48), Math.min(content.length, index + query.length + 110)).replace(/\\s+/g, " ");
}

function normalizePath(value) {
  return stripQuotes(value.trim()).replace(/^content\\//, "").toLowerCase();
}

function stripQuotes(value) {
  return value.replace(/^[\\"']|[\\"']$/g, "");
}

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function tick() {
  clock.textContent = new Intl.DateTimeFormat("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date());
}

tick();
setInterval(tick, 1000);
switchTab(currentTab());
startIntro();
window.desktopOS = {
  getItems: () => desktopItems.map((item) => ({ ...item })),
  createFile: (label, content, fileType = "md") => {
    const id = "custom-" + Date.now();
    const type = normalizeFileType(fileType);
    desktopItems.push({
      id,
      label,
      path: id + "." + type,
      index: String(desktopItems.length + 1).padStart(2, "0"),
      kind: "doc",
      windowId: "",
      x: 80,
      y: 120,
      autoArrange: true,
      fileType: type,
      content,
      agent: agentProfileFor({ label, path: id + "." + type, kind: "doc", fileType: type })
    });
    setDesktopSelection([id], false);
    saveDesktopItems();
    renderDesktopItems();
    renderWorksFiles();
    return id;
  },
  createFolder: (label) => {
    const folder = createDesktopFolder(label, "desktop");
    setDesktopSelection([folder.id], false);
    saveDesktopItems();
    renderDesktopItems();
    renderWorksFiles();
    return folder.id;
  },
  editFile: (id, patch) => {
    const item = desktopItems.find((entry) => entry.id === id);
    if (!item) return false;
    Object.assign(item, patch);
    if (patch.fileType) {
      item.fileType = normalizeFileType(patch.fileType);
      item.path = withFileExtension(item.path, item.fileType);
    }
    saveDesktopItems();
    renderDesktopItems();
    renderWorksFiles();
    return true;
  },
  deleteFile: (id) => {
    const before = desktopItems.length;
    const deleteIds = new Set([id]);
    desktopItems.forEach((entry) => {
      if (entry.parentId === id) deleteIds.add(entry.id);
    });
    desktopItems = desktopItems.filter((entry) => !deleteIds.has(entry.id));
    if (selectedDesktopIds.has(id)) setDesktopSelection([], false);
    saveDesktopItems();
    renderDesktopItems();
    renderWorksFiles();
    return desktopItems.length < before;
  },
  moveIntoFolder: (id, folderId) => {
    const item = desktopItems.find((entry) => entry.id === id);
    const ok = moveItemsIntoFolder([item], folderId);
    if (!ok) return false;
    saveDesktopItems();
    renderDesktopItems();
    renderWorksFiles();
    return true;
  },
  openFolder: (id) => {
    const folder = desktopItems.find((entry) => entry.id === id && entry.kind === "folder");
    if (!folder) return false;
    openDesktopFolderWindow(folder);
    return true;
  },
  moveFile: (id, x, y) => {
    const item = desktopItems.find((entry) => entry.id === id);
    if (!item) return false;
    item.x = x;
    item.y = y;
    item.autoArrange = false;
    saveDesktopItems();
    renderDesktopItems();
    renderWorksFiles();
    return true;
  },
  assignWorksCategory: (id, category) => assignWorksFileCategory(id, category),
  deleteWorksCategory: (category) => deleteWorksCategory(category),
  restoreWorksCategory: (category) => restoreWorksCategory(category),
  search: (query) => {
    desktopSearchQuery = String(query || "");
    window.dispatchEvent(new CustomEvent("workbench-agent-search-sync", { detail: desktopSearchQuery }));
    renderDesktopItems();
    return [...document.querySelectorAll(".app-card strong")].map((node) => node.textContent);
  },
  reset: () => {
    try {
      localStorage.removeItem(DESKTOP_ITEMS_KEY);
      localStorage.removeItem(DESKTOP_ITEMS_BACKUP_KEY);
    } catch (error) {}
    desktopItems = loadDesktopItems();
    setDesktopSelection([], false);
    desktopSearchQuery = "";
    window.dispatchEvent(new CustomEvent("workbench-agent-search-sync", { detail: "" }));
    renderDesktopItems();
    renderWorksFiles();
  },
  selfTest: () => {
    const results = [];
    const record = (name, pass, detail) => results.push({ name, pass, detail });
    const startCount = desktopItems.length;
    const id = window.desktopOS.createFile("CRUD测试文件", "# CRUD测试文件\\n\\ncreated");
    record("create", desktopItems.length === startCount + 1 && Boolean(desktopItems.find((item) => item.id === id)), "created id " + id);
    const searchResult = window.desktopOS.search("CRUD测试");
    record("search", searchResult.some((label) => label.includes("CRUD测试文件")), searchResult.join(", "));
    const edited = window.desktopOS.editFile(id, { label: "CRUD测试文件-已编辑", content: "# 已编辑\\n\\nupdated" });
    record("edit", edited && desktopItems.find((item) => item.id === id)?.content.includes("updated"), "edited label/content");
    const moved = window.desktopOS.moveFile(id, 144, 188);
    const movedItem = desktopItems.find((item) => item.id === id);
    record("drag-save", moved && movedItem?.x === 144 && movedItem?.y === 188, "position " + movedItem?.x + "," + movedItem?.y);
    const deleted = window.desktopOS.deleteFile(id);
    record("delete", deleted && !desktopItems.find((item) => item.id === id), "count " + desktopItems.length);
    window.desktopOS.search("");
    return results;
  }
};
appendCommand('echo "see you"');
appendText("See you next time.");
appendCommand("cat contact.md");
appendText("hello@example.com\\n小红书 / GitHub / 公众号：替换为你的真实账号");
appendCommand("fortune");
appendText(fortunes[0]);
`;
}
