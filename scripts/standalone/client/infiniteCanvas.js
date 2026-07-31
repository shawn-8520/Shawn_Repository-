export function infiniteCanvasJs() {
  return `
function defaultWorksCanvasState() {
  return {
    selectedLayer: "cola",
    selectedCard: "profile-card",
    zoom: 43,
    panX: 0,
    panY: 0,
    pendingLinkFrom: "",
    layers: [
      { id: "profile", name: "个人信息", visible: true },
      { id: "timeline", name: "时间线", visible: true },
      { id: "core", name: "核心叙事", visible: true },
      { id: "skills", name: "技能标签", visible: true },
      { id: "book", name: "小红书", visible: true },
      { id: "cola", name: "ColaOS", visible: true },
      { id: "output", name: "观点输出", visible: true },
      { id: "partner", name: "AI 伙伴", visible: true },
      { id: "motto", name: "座右铭", visible: true }
    ],
    cards: [
      { id: "portrait-card", layer: "profile", type: "image", x: 455, y: 150, title: "个人形象", body: "Portfolio portrait" },
      { id: "profile-card", layer: "profile", type: "profile", x: 620, y: 170, title: "Clink AI", body: "1 person + AI = 1 team. 设计师 / AI 协作者 / 内容系统搭建者。" },
      { id: "story-card", layer: "core", type: "text", x: 820, y: 165, title: "经历时间轴", body: "2021 - 2026：从空间设计到 AI 产品与知识库系统。" },
      { id: "quote-card", layer: "core", type: "quote", x: 620, y: 360, title: "核心叙事", body: "每一次能力迭代，都是把复杂系统压缩成一个界面。" },
      { id: "skill-card", layer: "skills", type: "link", x: 820, y: 520, title: "关键技能能力", body: "Vibe Coding / Agent Native / API 连接 / GTM" },
      { id: "cola-card", layer: "cola", type: "text", x: 1160, y: 520, title: "ColaOS", body: "The First OS with Soul. 用知识、工具、画布组织个人系统。" },
      { id: "sticky-card", layer: "motto", type: "sticky", x: 1035, y: 115, title: "Work with agent", body: "持续记录，持续连接。" }
    ],
    links: [
      { from: "profile-card", to: "story-card" },
      { from: "story-card", to: "skill-card" },
      { from: "skill-card", to: "cola-card" }
    ]
  };
}

function loadWorksCanvasState() {
  try {
    const saved = JSON.parse(localStorage.getItem(WORKS_CANVAS_KEY) || "null");
    if (saved?.layers?.length && saved?.cards?.length) {
      saved.links = Array.isArray(saved.links) ? saved.links : [];
      saved.pendingLinkFrom = saved.pendingLinkFrom || "";
      return saved;
    }
  } catch (error) {}
  return defaultWorksCanvasState();
}

function saveWorksCanvasState(state) {
  try {
    localStorage.setItem(WORKS_CANVAS_KEY, JSON.stringify(state));
  } catch (error) {}
  scheduleProjectStateSave();
}

function worksCanvasTemplate(type) {
  const now = Date.now();
  const templates = {
    text: { type: "text", title: "文字卡", body: "记录一个观点、项目或方法。" },
    quote: { type: "quote", title: "引用卡", body: "把一句重要的话钉在画板上。" },
    image: { type: "image", title: "图片卡", body: "可作为视觉占位或封面记录。" },
    sticky: { type: "sticky", title: "便利贴", body: "一个快速想法。" },
    moon: { type: "quote", title: "深色卡", body: "适合放阶段性结论。" },
    link: { type: "link", title: "链接卡", body: "保存页面、作品或外部资料。" }
  };
  return {
    id: "canvas-card-" + now,
    layer: "cola",
    x: 720 + Math.round(Math.random() * 120),
    y: 240 + Math.round(Math.random() * 100),
    ...(templates[type] || templates.text)
  };
}

function syncWorksCanvasSelection(state, source) {
  const selectedCard = state.cards.find((card) => card.id === state.selectedCard);
  if (source === "card" && selectedCard) {
    state.selectedLayer = selectedCard.layer;
    return selectedCard;
  }
  const selectedLayer = state.layers.find((layer) => layer.id === state.selectedLayer);
  if (source === "layer" && selectedLayer) {
    const layerCard = state.cards.find((card) => card.layer === selectedLayer.id);
    if (layerCard) state.selectedCard = layerCard.id;
    return layerCard || selectedCard;
  }
  if (selectedCard) {
    state.selectedLayer = selectedCard.layer;
    return selectedCard;
  }
  const fallbackCard = state.cards[0];
  if (fallbackCard) {
    state.selectedCard = fallbackCard.id;
    state.selectedLayer = fallbackCard.layer;
  }
  return fallbackCard;
}

function ensureWorksCanvasLayerCard(state, layer) {
  let card = state.cards.find((entry) => entry.layer === layer.id);
  if (card) return card;
  card = worksCanvasTemplate("text");
  card.id = "canvas-card-" + Date.now();
  card.layer = layer.id;
  card.title = layer.name;
  card.body = "这是「" + layer.name + "」图层的第一张卡片。";
  card.x = Math.round(window.innerWidth / 2 - 260);
  card.y = Math.round(window.innerHeight / 2 - 130);
  state.cards.push(card);
  return card;
}

function openWorksInfiniteCanvas() {
  let overlay = document.getElementById("worksInfiniteCanvas");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "worksInfiniteCanvas";
    overlay.className = "works-canvas-overlay";
    overlay.innerHTML = '<aside class="works-canvas-sidebar"><div class="works-canvas-brand"><i>C</i><span>Clink AI Canvas</span></div><div class="works-canvas-layers"><h3>✦ Layers</h3><div id="worksCanvasLayers"></div></div><button id="worksCanvasNew" class="works-canvas-new">＋ 新建图层</button><div class="works-canvas-mini"><h3>✦ Minimap</h3><div class="works-canvas-mini-box"></div></div></aside><main class="works-canvas-stage"><button id="worksCanvasClose" class="works-canvas-close">×</button><div class="works-canvas-top"><button id="worksCanvasTemplateOpen" class="works-canvas-template-open">选择卡片模板</button><span>Scroll 缩放</span><span>·</span><span>Drag 移动画布</span><span>·</span><b>Workflow 连线</b></div><div id="worksCanvasBoard" class="works-canvas-board"><svg id="worksCanvasLinks" class="works-canvas-links"></svg></div><section id="worksCanvasLayerModal" class="works-canvas-layer-modal"><h3>✦ 新建图层</h3><input id="worksCanvasLayerName" placeholder="输入图层名称" value="新图层"><div><button id="worksCanvasLayerCancel">取消</button><button id="worksCanvasLayerCreate">创建</button></div></section><section id="worksCanvasTemplateModal" class="works-canvas-template-modal"><h3>✦ 选择卡片模板</h3><div class="works-canvas-template-grid"><button data-template="text">📝<br>文字卡</button><button data-template="quote">💬<br>引用卡</button><button data-template="image">🖼️<br>图片卡</button><button data-template="sticky">📌<br>便利贴</button><button data-template="moon">🌙<br>深色卡</button><button data-template="link">🔗<br>链接卡</button></div></section><section class="works-canvas-palette"><div id="worksCanvasInspector"></div></section><div class="works-canvas-bottom"><span>点击卡片两侧圆点进行连线</span><span>Layer 点击可定位卡片</span><span>配置卡片</span><span>独立保存</span></div><div class="works-canvas-zoom"><button data-zoom="-">−</button><span id="worksCanvasZoom">43%</span><button data-zoom="+">＋</button><button id="worksCanvasSave">💾</button></div></main>';
    document.body.appendChild(overlay);
    setupWorksCanvasEvents(overlay);
  }
  overlay.classList.add("active");
  renderWorksCanvas();
}

function renderWorksCanvas() {
  const overlay = document.getElementById("worksInfiniteCanvas");
  if (!overlay) return;
  const state = loadWorksCanvasState();
  syncWorksCanvasSelection(state);
  const layers = overlay.querySelector("#worksCanvasLayers");
  const board = overlay.querySelector("#worksCanvasBoard");
  const links = overlay.querySelector("#worksCanvasLinks");
  layers.innerHTML = state.layers.map((layer) => '<div class="works-canvas-layer' + (layer.id === state.selectedLayer ? " active" : "") + '" data-layer="' + escapeHtml(layer.id) + '"><i></i><span>' + escapeHtml(layer.name) + '</span><button data-layer-action="toggle" title="显示/隐藏">' + (layer.visible ? "◉" : "○") + '</button><button data-layer-action="rename" title="重命名">✎</button></div>').join("");
  board.querySelectorAll(".works-canvas-card").forEach((node) => node.remove());
  const visibleCards = state.cards.filter((card) => state.layers.find((layer) => layer.id === card.layer)?.visible !== false);
  board.insertAdjacentHTML("beforeend", visibleCards.map((card) => renderWorksCanvasCard(card, state)).join(""));
  if (links) links.innerHTML = renderWorksCanvasLinks(state, visibleCards);
  const scale = (state.zoom || 43) / 43;
  board.style.transform = "translate(" + (state.panX || 0) + "px," + (state.panY || 0) + "px) scale(" + scale.toFixed(3) + ")";
  const zoom = overlay.querySelector("#worksCanvasZoom");
  if (zoom) zoom.textContent = (state.zoom || 43) + "%";
  renderWorksCanvasInspector(overlay, state);
}

function renderWorksCanvasCard(card, state) {
  const active = card.id === state.selectedCard ? " active" : "";
  const pending = card.id === state.pendingLinkFrom ? " connect-pending" : "";
  const image = card.type === "image" ? '<img alt="" src="./esther-sticker.png">' : "";
  return '<article class="works-canvas-card ' + escapeHtml(card.type) + active + pending + '" data-card="' + escapeHtml(card.id) + '" style="left:' + card.x + 'px;top:' + card.y + 'px"><button class="works-link-port in" data-port="in" title="连接到这里">＋</button><button class="works-link-port out" data-port="out" title="从这里连线">＋</button><b>' + escapeHtml(card.title) + '</b>' + image + '<p>' + escapeHtml(card.body) + '</p></article>';
}

function renderWorksCanvasLinks(state, visibleCards) {
  const cardMap = new Map(visibleCards.map((card) => [card.id, card]));
  return (state.links || []).filter((link) => cardMap.has(link.from) && cardMap.has(link.to)).map((link) => {
    const from = cardMap.get(link.from);
    const to = cardMap.get(link.to);
    const x1 = from.x + 190;
    const y1 = from.y + 58;
    const x2 = to.x;
    const y2 = to.y + 58;
    const mid = Math.max(60, Math.abs(x2 - x1) / 2);
    return '<path data-link="' + escapeHtml(link.from + ":" + link.to) + '" d="M ' + x1 + ' ' + y1 + ' C ' + (x1 + mid) + ' ' + y1 + ', ' + (x2 - mid) + ' ' + y2 + ', ' + x2 + ' ' + y2 + '"></path>';
  }).join("");
}

function handleWorksCanvasPort(port) {
  const cardEl = port.closest(".works-canvas-card");
  if (!cardEl) return;
  const state = loadWorksCanvasState();
  const cardId = cardEl.dataset.card;
  const card = state.cards.find((entry) => entry.id === cardId);
  if (state.pendingLinkFrom && state.pendingLinkFrom !== cardId) {
    state.links = Array.isArray(state.links) ? state.links : [];
    const exists = state.links.some((link) => (link.from === state.pendingLinkFrom && link.to === cardId) || (link.from === cardId && link.to === state.pendingLinkFrom));
    if (!exists) state.links.push({ from: state.pendingLinkFrom, to: cardId });
    state.selectedCard = cardId;
    if (card) state.selectedLayer = card.layer;
    state.pendingLinkFrom = "";
  } else if (state.pendingLinkFrom === cardId) {
    state.pendingLinkFrom = "";
    state.selectedCard = cardId;
    if (card) state.selectedLayer = card.layer;
  } else {
    state.selectedCard = cardId;
    if (card) state.selectedLayer = card.layer;
    state.pendingLinkFrom = cardId;
  }
  saveWorksCanvasState(state);
  renderWorksCanvas();
}

function renderWorksCanvasInspector(overlay, state) {
  const panel = overlay.querySelector("#worksCanvasInspector");
  if (!panel) return;
  const card = state.cards.find((entry) => entry.id === state.selectedCard);
  if (!card) {
    panel.innerHTML = '<h3>✦ 选择卡片模板</h3><p style="color:#626272;line-height:1.6">选择或新建一张卡片后，可在这里配置标题、内容、类型和所属图层。</p>';
    return;
  }
  const layerOptions = state.layers.map((layer) => '<option value="' + escapeHtml(layer.id) + '"' + (layer.id === card.layer ? " selected" : "") + '>' + escapeHtml(layer.name) + '</option>').join("");
  const typeOptions = ["text", "quote", "image", "sticky", "link"].map((type) => '<option value="' + type + '"' + (type === card.type ? " selected" : "") + '>' + type + '</option>').join("");
  const linkHint = state.pendingLinkFrom ? '<p style="margin:10px 0 0;color:#1e5ba8;font-size:12px;font-weight:900">正在连线：点击另一张卡片任意圆点即可连接</p>' : '<p style="margin:10px 0 0;color:#626272;font-size:12px">点击任意卡片圆点开始连线，再点击另一张卡片圆点完成连接。</p>';
  panel.innerHTML = '<h3>✦ 配置选中卡片</h3><label>标题</label><input data-inspector="title" value="' + escapeHtml(card.title) + '"><label>内容</label><textarea data-inspector="body">' + escapeHtml(card.body) + '</textarea><label>类型</label><select data-inspector="type">' + typeOptions + '</select><label>图层</label><select data-inspector="layer">' + layerOptions + '</select>' + linkHint + '<div class="works-canvas-inspector-actions"><button data-inspector-action="duplicate">复制</button><button data-inspector-action="delete">删除</button></div>';
}

function setupWorksCanvasEvents(overlay) {
  overlay.querySelector("#worksCanvasClose").addEventListener("click", () => overlay.classList.remove("active"));
  overlay.querySelector("#worksCanvasTemplateOpen").addEventListener("click", () => {
    overlay.querySelector("#worksCanvasTemplateModal").classList.toggle("active");
  });
  overlay.querySelector("#worksCanvasNew").addEventListener("click", () => {
    const modal = overlay.querySelector("#worksCanvasLayerModal");
    const input = overlay.querySelector("#worksCanvasLayerName");
    input.value = "新图层";
    modal.classList.add("active");
    setTimeout(() => input.focus(), 0);
  });
  overlay.querySelector("#worksCanvasLayerCancel").addEventListener("click", () => {
    overlay.querySelector("#worksCanvasLayerModal").classList.remove("active");
  });
  const createLayerFromModal = () => {
    const state = loadWorksCanvasState();
    const input = overlay.querySelector("#worksCanvasLayerName");
    const name = input.value.trim() || "新图层";
    const now = Date.now();
    const id = "layer-" + now;
    const card = worksCanvasTemplate("text");
    card.id = "canvas-card-" + now;
    card.layer = id;
    card.title = name;
    card.body = "这是「" + name + "」图层的第一张卡片。";
    card.x = Math.round(window.innerWidth / 2 - 260);
    card.y = Math.round(window.innerHeight / 2 - 130);
    state.layers.push({ id, name, visible: true });
    state.cards.push(card);
    state.selectedLayer = id;
    state.selectedCard = card.id;
    state.panX = Math.round(window.innerWidth / 2 - 220 - card.x);
    state.panY = Math.round(window.innerHeight / 2 - card.y);
    saveWorksCanvasState(state);
    overlay.querySelector("#worksCanvasLayerModal").classList.remove("active");
    renderWorksCanvas();
  };
  overlay.querySelector("#worksCanvasLayerCreate").addEventListener("click", createLayerFromModal);
  overlay.querySelector("#worksCanvasLayerName").addEventListener("keydown", (event) => {
    if (event.key === "Enter") createLayerFromModal();
    if (event.key === "Escape") overlay.querySelector("#worksCanvasLayerModal").classList.remove("active");
  });
  overlay.querySelector(".works-canvas-template-grid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-template]");
    if (!button) return;
    const state = loadWorksCanvasState();
    const card = worksCanvasTemplate(button.dataset.template);
    card.layer = state.selectedLayer || "cola";
    state.cards.push(card);
    state.selectedCard = card.id;
    saveWorksCanvasState(state);
    overlay.querySelector("#worksCanvasTemplateModal").classList.remove("active");
    renderWorksCanvas();
  });
  overlay.querySelector("#worksCanvasLayers").addEventListener("click", (event) => {
    const button = event.target.closest("[data-layer]");
    if (!button) return;
    const state = loadWorksCanvasState();
    const layer = state.layers.find((entry) => entry.id === button.dataset.layer);
    if (!layer) return;
    const action = event.target.closest("[data-layer-action]")?.dataset.layerAction;
    if (action === "toggle") {
      layer.visible = !layer.visible;
    } else if (action === "rename") {
      const name = prompt("图层名称", layer.name);
      if (name === null) return;
      layer.name = name.trim() || layer.name;
    }
    state.selectedLayer = button.dataset.layer;
    const target = ensureWorksCanvasLayerCard(state, layer);
    if (target) {
      state.selectedCard = target.id;
      if (action === "rename") target.title = layer.name;
    }
    if (target && !action) {
      state.panX = Math.round(window.innerWidth / 2 - 220 - target.x);
      state.panY = Math.round(window.innerHeight / 2 - target.y);
    }
    saveWorksCanvasState(state);
    renderWorksCanvas();
  });
  overlay.querySelector(".works-canvas-zoom").addEventListener("click", (event) => {
    const zoomButton = event.target.closest("[data-zoom]");
    if (!zoomButton) {
      if (event.target.closest("#worksCanvasSave")) saveWorksCanvasState(loadWorksCanvasState());
      return;
    }
    const state = loadWorksCanvasState();
    state.zoom = Math.max(25, Math.min(120, (state.zoom || 43) + (zoomButton.dataset.zoom === "+" ? 5 : -5)));
    saveWorksCanvasState(state);
    renderWorksCanvas();
  });
  const updateInspector = (event, shouldRender) => {
    const field = event.target.closest("[data-inspector]");
    if (!field) return;
    const state = loadWorksCanvasState();
    const card = state.cards.find((entry) => entry.id === state.selectedCard);
    if (!card) return;
    card[field.dataset.inspector] = field.value;
    if (field.dataset.inspector === "title") {
      const layer = state.layers.find((entry) => entry.id === card.layer);
      if (layer) layer.name = card.title;
      state.selectedLayer = card.layer;
    }
    if (field.dataset.inspector === "layer") {
      state.selectedLayer = card.layer;
    }
    saveWorksCanvasState(state);
    const activeCard = overlay.querySelector('.works-canvas-card[data-card="' + card.id + '"]');
    if (activeCard && !shouldRender) {
      if (field.dataset.inspector === "title") activeCard.querySelector("b").textContent = card.title;
      if (field.dataset.inspector === "body") activeCard.querySelector("p").textContent = card.body;
      if (field.dataset.inspector === "title") {
        const activeLayer = overlay.querySelector('.works-canvas-layer[data-layer="' + CSS.escape(card.layer) + '"] span');
        if (activeLayer) activeLayer.textContent = card.title;
      }
    } else {
      renderWorksCanvas();
    }
  };
  overlay.querySelector(".works-canvas-palette").addEventListener("input", (event) => updateInspector(event, false));
  overlay.querySelector(".works-canvas-palette").addEventListener("change", (event) => updateInspector(event, true));
  overlay.querySelector(".works-canvas-palette").addEventListener("click", (event) => {
    const action = event.target.closest("[data-inspector-action]")?.dataset.inspectorAction;
    if (!action) return;
    const state = loadWorksCanvasState();
    const index = state.cards.findIndex((entry) => entry.id === state.selectedCard);
    if (index < 0) return;
    if (action === "delete") {
      const deletedId = state.cards[index].id;
      state.cards.splice(index, 1);
      state.links = (state.links || []).filter((link) => link.from !== deletedId && link.to !== deletedId);
      state.selectedCard = state.cards[0]?.id || "";
      const nextCard = state.cards.find((entry) => entry.id === state.selectedCard);
      state.selectedLayer = nextCard?.layer || state.layers[0]?.id || "";
    } else if (action === "duplicate") {
      const copy = { ...state.cards[index], id: "canvas-card-" + Date.now(), x: state.cards[index].x + 28, y: state.cards[index].y + 28 };
      state.cards.push(copy);
      state.selectedCard = copy.id;
      state.selectedLayer = copy.layer;
    }
    saveWorksCanvasState(state);
    renderWorksCanvas();
  });
  overlay.querySelector(".works-canvas-stage").addEventListener("wheel", (event) => {
    event.preventDefault();
    const state = loadWorksCanvasState();
    state.zoom = Math.max(25, Math.min(120, (state.zoom || 43) + (event.deltaY < 0 ? 3 : -3)));
    saveWorksCanvasState(state);
    renderWorksCanvas();
  }, { passive: false });
  overlay.querySelector("#worksCanvasBoard").addEventListener("dblclick", (event) => {
    const cardEl = event.target.closest(".works-canvas-card");
    if (!cardEl) return;
    const state = loadWorksCanvasState();
    const card = state.cards.find((entry) => entry.id === cardEl.dataset.card);
    if (!card) return;
    const title = prompt("卡片标题", card.title);
    if (title === null) return;
    const body = prompt("卡片内容", card.body);
    if (body === null) return;
    card.title = title.trim() || card.title;
    card.body = body.trim() || card.body;
    state.selectedCard = card.id;
    state.selectedLayer = card.layer;
    const layer = state.layers.find((entry) => entry.id === card.layer);
    if (layer) layer.name = card.title;
    saveWorksCanvasState(state);
    renderWorksCanvas();
  });
  overlay.querySelector("#worksCanvasBoard").addEventListener("pointerdown", (event) => {
    const port = event.target.closest(".works-link-port");
    if (port) {
      event.preventDefault();
      event.stopPropagation();
      handleWorksCanvasPort(port);
      return;
    }
    const cardEl = event.target.closest(".works-canvas-card");
    if (!cardEl) {
      const board = overlay.querySelector("#worksCanvasBoard");
      const state = loadWorksCanvasState();
      const startX = event.clientX;
      const startY = event.clientY;
      const originX = state.panX || 0;
      const originY = state.panY || 0;
      board.classList.add("panning");
      const movePan = (moveEvent) => {
        state.panX = Math.round(originX + moveEvent.clientX - startX);
        state.panY = Math.round(originY + moveEvent.clientY - startY);
        const scale = (state.zoom || 43) / 43;
        board.style.transform = "translate(" + state.panX + "px," + state.panY + "px) scale(" + scale.toFixed(3) + ")";
      };
      const upPan = () => {
        board.classList.remove("panning");
        saveWorksCanvasState(state);
        document.removeEventListener("pointermove", movePan);
        document.removeEventListener("pointerup", upPan);
        document.removeEventListener("pointercancel", upPan);
      };
      document.addEventListener("pointermove", movePan);
      document.addEventListener("pointerup", upPan);
      document.addEventListener("pointercancel", upPan);
      return;
    }
    event.preventDefault();
    const state = loadWorksCanvasState();
    const card = state.cards.find((entry) => entry.id === cardEl.dataset.card);
    if (!card) return;
    state.selectedCard = card.id;
    state.selectedLayer = card.layer;
    saveWorksCanvasState(state);
    overlay.querySelectorAll(".works-canvas-card.active").forEach((node) => node.classList.remove("active"));
    cardEl.classList.add("active");
    overlay.querySelectorAll(".works-canvas-layer.active").forEach((node) => node.classList.remove("active"));
    overlay.querySelector('.works-canvas-layer[data-layer="' + CSS.escape(card.layer) + '"]')?.classList.add("active");
    renderWorksCanvasInspector(overlay, state);
    const startX = event.clientX;
    const startY = event.clientY;
    const originX = card.x;
    const originY = card.y;
    const scale = (state.zoom || 43) / 43;
    cardEl.setPointerCapture?.(event.pointerId);
    const move = (moveEvent) => {
      card.x = Math.round(originX + (moveEvent.clientX - startX) / scale);
      card.y = Math.round(originY + (moveEvent.clientY - startY) / scale);
      cardEl.style.left = card.x + "px";
      cardEl.style.top = card.y + "px";
      const links = overlay.querySelector("#worksCanvasLinks");
      if (links) {
        const visibleCards = state.cards.filter((entry) => state.layers.find((layer) => layer.id === entry.layer)?.visible !== false);
        links.innerHTML = renderWorksCanvasLinks(state, visibleCards);
      }
    };
    const up = () => {
      saveWorksCanvasState(state);
      cardEl.releasePointerCapture?.(event.pointerId);
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerup", up);
      document.removeEventListener("pointercancel", up);
    };
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerup", up);
    document.addEventListener("pointercancel", up);
  });
}
`;
}
