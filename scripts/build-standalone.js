import fs from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { clientJs } from "./standalone/client.js";
import { css, interactionCss, productThemeCss } from "./standalone/styles.js";

const root = process.cwd();
const contentDir = path.join(root, "content");
const outputDir = path.join(root, "outputs");
const outputPath = path.join(outputDir, "ai-terminal-kb.html");
const indexOutputPath = path.join(outputDir, "index.html");
const adminDistDir = path.join(root, "vendor", "vue-element-admin", "dist");
const adminOutputDir = path.join(outputDir, "admin");
const canvasEntryPath = path.join(outputDir, "huobao-canvas", "index.html");
const canvasAssetVersion = fs.existsSync(canvasEntryPath)
  ? createHash("sha256").update(fs.readFileSync(canvasEntryPath)).digest("hex").slice(0, 12)
  : "local";
const antdBundleDir = path.join(root, "generated", "antd-workbench");
const antdJs = fs.existsSync(path.join(antdBundleDir, "workbench-antd.js"))
  ? fs.readFileSync(path.join(antdBundleDir, "workbench-antd.js"), "utf8")
  : "";
const antdCss = fs.existsSync(path.join(antdBundleDir, "workbench-antd.css"))
  ? fs.readFileSync(path.join(antdBundleDir, "workbench-antd.css"), "utf8")
  : "";
const statIconDir = path.join(root, "assets", "stat-icons");
const statIconAssets = Object.fromEntries(
  [
    ["total", "agent-total.png"],
    ["active", "agent-active.png"],
    ["conversations", "agent-conversations.png"],
    ["calls", "agent-calls.png"],
    ["users", "agent-users.png"],
  ].map(([key, fileName]) => {
    const filePath = path.join(statIconDir, fileName);
    return [
      key,
      fs.existsSync(filePath)
        ? `data:image/png;base64,${fs.readFileSync(filePath).toString("base64")}`
        : "",
    ];
  }),
);

const navItems = [
  ["域名教程", "domain-tutorial.md", "01"],
  ["人生系统", "life-system.md", "02"],
  ["部署教程", "deploy-tutorial.md", "03"],
  ["和AI搭档生活", "ai-partner.md", "04"],
  ["Cola+OB自媒体", "blog-cola/index.md", "05"],
  ["心理学书库", "psychology-book/index.md", "06"],
  ["Design Skill", "design-skill/index.md", "07"],
  ["Build Your Tool", "tool-build/index.md", "08"],
  ["不二的个人看板", "personal-dashboard.md", "09"],
  ["Work With Me", "work-with-me.md", "10"],
  ["Cola", "contact.md", "11"],
  ["建筑转AI", "architecture-to-ai.md", "12"],
  ["网页进化史", "web-evolution.md", "13"],
];

const docs = readMarkdownFiles(contentDir).map((filePath) => {
  const relativePath = path.relative(contentDir, filePath).split(path.sep).join("/");
  return {
    path: relativePath,
    content: fs.readFileSync(filePath, "utf8"),
  };
});

fs.mkdirSync(outputDir, { recursive: true });
const html = renderHtml({ docs, navItems });
fs.writeFileSync(outputPath, html, "utf8");
fs.writeFileSync(indexOutputPath, html, "utf8");
syncAdminOutputs();
console.log(outputPath);

function syncAdminOutputs() {
  if (fs.existsSync(adminDistDir)) {
    fs.rmSync(adminOutputDir, { recursive: true, force: true });
    copyDir(adminDistDir, adminOutputDir);
  }
  fs.writeFileSync(path.join(outputDir, "login.html"), renderPortalPage("登录后台", "./admin/index.html#/login"), "utf8");
  fs.writeFileSync(path.join(outputDir, "admin.html"), renderPortalPage("后台管理", "./admin/index.html#/dashboard"), "utf8");
}

function copyDir(source, target) {
  fs.mkdirSync(target, { recursive: true });
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);
    if (entry.isDirectory()) copyDir(sourcePath, targetPath);
    else if (entry.isFile()) fs.copyFileSync(sourcePath, targetPath);
  }
}

function renderPortalPage(title, target) {
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="refresh" content="0; url=${target}" />
  <title>${title} - Clink AI</title>
  <style>html,body{margin:0;height:100%;display:grid;place-items:center;background:#f5f9ff;color:#162033;font-family:-apple-system,BlinkMacSystemFont,"Noto Sans SC","PingFang SC",sans-serif}a{color:#146fc2;font-weight:800}</style>
</head>
<body>
  <a href="${target}">进入${title}</a>
  <script>location.replace("${target}");</script>
</body>
</html>`;
}

function readMarkdownFiles(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return readMarkdownFiles(fullPath);
      if (entry.isFile() && entry.name.endsWith(".md")) return [fullPath];
      return [];
    })
    .sort();
}

function renderHtml({ docs, navItems }) {
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Clink AI - 1 Person + AI = 1 Team</title>
  <meta name="description" content="终端风 AI 个人知识库，Markdown 内容系统与大模型检索入口。" />
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='15' fill='%23075ee6'/%3E%3Cpath d='M9 17h14M16 9v14' stroke='white' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E" />
  <script>
    try {
      var autoLaunch = new URLSearchParams(location.search).get("launch") === "1";
      var hasToken = document.cookie.split(";").some(function(item) { return item.trim().startsWith("Admin-Token="); }) || localStorage.getItem("Admin-Token");
      if (autoLaunch && hasToken) document.documentElement.classList.add("auto-launching");
    } catch (error) {}
  </script>
  <style>${css()}</style>
  <style>${interactionCss()}</style>
  <style>${productThemeCss()}</style>
  <style>${antdCss}</style>
</head>
<body>
  <div class="transition-overlay" id="transitionOverlay"></div>

  <nav class="pill-nav hidden-during-intro" id="pillNav" aria-label="Primary">
    <span class="pill-nav-indicator" aria-hidden="true"></span>
    <button data-tab="home" class="active" aria-label="主页">
      <svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10.8 12 4l8 6.8V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z"/></svg>
      <span>主页</span>
    </button>
    <button data-tab="works" aria-label="作品集">
      <svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H10l2 2.2h5.5A2.5 2.5 0 0 1 20 8.7v8.8A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5z"/></svg>
      <span>作品集</span>
    </button>
    <button data-tab="system" aria-label="我的OS">
      <svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5.5A2.5 2.5 0 0 1 7.5 3h9A2.5 2.5 0 0 1 19 5.5v8A2.5 2.5 0 0 1 16.5 16h-9A2.5 2.5 0 0 1 5 13.5z"/><path d="M9 21h6M12 16v5"/></svg>
      <span>我的OS</span>
    </button>
  </nav>

  <main class="tab-page active" id="page-home">
    <section class="hero" id="hero">
      <div class="macbook" id="launchTarget">
        <div class="screen-bezel">
          <div class="notch"></div>
          <div class="screen">
            <div class="mini-terminal">
              <div class="terminal-titlebar">
                <i></i><i></i><i></i><span>robin@universe ~ zsh</span>
              </div>
              <div id="terminalLines" class="intro-lines"></div>
            </div>
          </div>
        </div>
        <div class="hinge"></div>
        <div class="base"></div>
        <div class="shadow"></div>
      </div>
      <button class="hero-cta" id="heroCta">
        <span>Press Enter to Launch</span>
        <b>↓</b>
      </button>
      <div class="hero-auth-actions" id="heroAuthActions" hidden>
        <button type="button" id="heroLoginBtn">登录</button>
        <button type="button" id="heroRegisterBtn">注册</button>
      </div>
      <div class="register-modal" id="registerModal" hidden>
        <form class="register-card" id="registerForm">
          <button type="button" class="register-close" id="registerCloseBtn" aria-label="关闭">×</button>
          <h2>注册账号</h2>
          <p>提交后会发送到后台，等待管理员同意或拒绝。</p>
          <label>姓名<input id="registerName" required placeholder="请输入姓名" /></label>
          <label>账号<input id="registerAccount" required placeholder="请输入登录账号" /></label>
          <label>密码<input id="registerPassword" required type="password" placeholder="请输入登录密码" /></label>
          <label>邮箱<input id="registerEmail" required type="email" placeholder="请输入邮箱" /></label>
          <label>申请说明<textarea id="registerMessage" placeholder="补充说明，可选"></textarea></label>
          <button class="register-submit" type="submit">提交申请</button>
          <div class="register-feedback" id="registerFeedback" role="status"></div>
        </form>
      </div>
    </section>

    <section class="site-shell" id="os">
      <header class="topbar">
        <button data-window="win-launchpad">Clink AI</button>
        <button data-command="cat about.md">About</button>
        <button data-command="cat life-system.md">Values</button>
        <button data-command="cat ai-partner.md">Now</button>
        <button id="homeCanvasBtn" type="button">无限画板</button>
        <a class="topbar-admin-link" data-guest-only href="./login.html" target="_blank" rel="noopener">登录</a>
        <button class="topbar-admin-link topbar-logout-hidden" data-logged-in-only id="topbarLogoutBtn" type="button">退出登录</button>
        <a class="topbar-admin-link primary topbar-admin-bridge" id="topbarAdminBtn" data-admin-only href="./admin.html" target="_blank" rel="noopener" aria-hidden="true" tabindex="-1">后台</a>
        <div class="topbar-user-cluster">
          <time id="clock">--:--</time>
          <div class="antd-user-area" id="antdUserArea"></div>
        </div>
      </header>
      <div id="antdAgentChat"></div>

      <div class="star-marquee" aria-hidden="true">
        <span>✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦</span>
      </div>

      <section class="os-board" id="osBoard">
        <div class="portrait-card">
          <div class="portrait-art">
            <span>AI</span>
            <b>KB</b>
          </div>
          <p>1 person + AI = 1 team</p>
        </div>
        <aside class="desktop-dashboard-left" aria-label="智能体任务看板">
          <div class="agent-dashboard-title">
            <span>智能体工作台</span>
            <small>高效规划 · 智能协同 · 知识驱动</small>
          </div>
          <div class="agent-stat-grid">
            <article data-tone="blue">
              <small>智能体总数</small>
              <b id="statAgentCount">0</b>
              <span>较昨日 <em>+3</em></span>
              <i aria-hidden="true"><span id="statAgentIcon"></span></i>
            </article>
            <article data-tone="green">
              <small>活跃智能体</small>
              <b id="statActiveAgentCount">0</b>
              <span>较昨日 <em>+5</em></span>
              <i aria-hidden="true"><span id="statActiveAgentIcon"></span></i>
            </article>
            <article data-tone="cyan">
              <small>今日对话数</small>
              <b id="statConversationCount">0</b>
              <span>较昨日 <em>+18.6%</em></span>
              <i aria-hidden="true"><span id="statConversationIcon"></span></i>
            </article>
            <article data-tone="orange">
              <small>今日调用量</small>
              <b id="statApiRequestCount">0</b>
              <span>较昨日 <em>+21.3%</em></span>
              <i aria-hidden="true"><span id="statApiCallIcon"></span></i>
            </article>
            <article data-tone="purple">
              <small>今日用户数</small>
              <b id="statUserCount">0</b>
              <span>较昨日 <em>+9.4%</em></span>
              <i aria-hidden="true"><span id="statUserIcon"></span></i>
            </article>
          </div>
          <div class="agent-board-panel" id="agentBoardPanel">
            <div class="agent-panel-head">
              <b>智能体分类</b>
              <button class="agent-category-collapse" id="agentCategoryCollapseBtn" type="button" aria-expanded="true" title="收起智能体分类">« 收起</button>
            </div>
            <div class="agent-board-list" id="agentBoardList"></div>
            <div class="agent-category-actions" id="antdAgentCategoryActions"></div>
          </div>
          <div class="agent-lower-panels">
            <section class="agent-resource-panel" id="agentResourcePanel" aria-label="资源使用情况">
              <div class="agent-panel-head">
                <b>资源使用情况</b>
                <span>实时</span>
              </div>
              <div class="agent-resource-grid">
                <div>
                  <small>Token 使用量</small>
                  <strong id="resourceTokenValue">0 <em>/ 实际累计</em></strong>
                  <span class="agent-progress"><i id="resourceTokenProgress" style="width:0%"></i></span>
                  <b id="resourceTokenPercent">0%</b>
                </div>
                <div>
                  <small>模型调用次数</small>
                  <strong id="resourceModelValue">0 <em>/ 实际累计</em></strong>
                  <span class="agent-progress"><i id="resourceModelProgress" style="width:0%"></i></span>
                  <b id="resourceModelPercent">0%</b>
                </div>
              </div>
            </section>
            <section class="agent-announcement-panel" aria-label="最新公告">
              <div class="agent-panel-head">
                <b>最新公告</b>
                <span id="announcementCount">0 条</span>
              </div>
              <div id="announcementList"></div>
            </section>
          </div>
        </aside>
        <div class="desktop-tools" id="desktopTools">
          <div class="desktop-search-slot">
            <div class="agent-search-control" id="antdAgentSearch"></div>
            <span id="desktopSearchStatus" role="status" aria-live="polite"></span>
          </div>
          <div class="desktop-tool-actions">
            <div class="antd-topbar-settings" id="antdTopbarSettings"></div>
            <button id="newFileBtn" title="新建智能体">＋ 新建智能体</button>
            <button id="deleteFileBtn" title="删除文件">×</button>
          </div>
        </div>
        <div class="desktop-surface" id="desktopSurface">
          <div class="agent-list-toolbar" aria-label="智能体筛选与视图">
            <div id="antdAgentFilters"></div>
            <div class="agent-view-switch" id="antdAgentViewSwitch" aria-label="视图切换"></div>
          </div>
          <div class="agent-model-availability" id="antdModelAvailabilityNotice"></div>
          <div class="selection-actions" id="selectionActions">
            <span id="selectionCount">已选 0</span>
            <button id="selectionDeleteBtn" title="删除选中文件">× 删除</button>
          </div>
          <div class="app-grid" id="appGrid"></div>
        </div>
        <aside class="desktop-dashboard-right" aria-label="智能详情">
          <div class="agent-detail-card agent-detail-expanded">
            <div class="agent-panel-head">
              <b class="agent-detail-heading">智能详情</b>
              <span>Agent Insight</span>
            </div>
            <small class="agent-record-id" id="agentInsightCode">AGT-2026-001</small>
            <div class="agent-detail-title-row">
              <strong id="agentInsightTitle">知识库总控智能体</strong>
              <span class="agent-priority" id="agentInsightPriority">高优先级</span>
            </div>
            <p id="agentInsightDesc">统一管理桌面项目、知识库、模型与工具调用，打开任意卡片即可进入对应智能体对话窗口。</p>
            <dl class="agent-insight-fields">
              <div><dt>负责人</dt><dd id="agentInsightOwner">当前登录成员</dd></div>
              <div><dt>更新时间</dt><dd id="agentInsightDeadline">2026-08-18 18:00</dd></div>
              <div><dt>智能体分类</dt><dd><div id="antdAgentCategorySelect"></div></dd></div>
              <div><dt>默认模型</dt><dd><div class="antd-agent-detail-select" id="antdAgentModelSelect"></div></dd></div>
              <div><dt>知识库</dt><dd><div class="antd-agent-detail-select" id="antdAgentKnowledgeSelect"></div></dd></div>
              <div><dt>当前状态</dt><dd class="agent-status" id="agentInsightStatus">运行中</dd></div>
            </dl>
            <div class="agent-insight-tags">
              <b>该智能体挂载可使用的功能或 Skills</b>
              <div id="agentInsightTags" role="group" aria-label="该智能体挂载可使用的功能或 Skills"></div>
            </div>
            <div class="agent-inline-advice">
              <b>AI 助手建议</b>
              <ul id="agentInsightAdvice">
                <li>建议绑定常用知识库并维护明确的工具集。</li>
                <li>检测到可复用流程，可保存为快捷指令。</li>
              </ul>
              <button type="button" id="agentAdviceOpenBtn">打开首个对话</button>
            </div>
            <div class="agent-insight-actions" id="antdAgentInsightActions"></div>
          </div>
        </aside>
      </section>

      <footer class="desktop-footer" aria-label="项目底部信息">
        <div class="desktop-footer-left">
          <span>© 2026 Clink AI. All rights reserved.</span>
          <b>版本 v2.1.0</b>
        </div>
        <nav class="desktop-footer-links" aria-label="帮助入口">
          <a href="javascript:void(0)" role="button">隐私政策</a>
          <a href="javascript:void(0)" role="button">服务条款</a>
          <button id="desktopHelpDocsBtn" type="button">帮助文档</button>
        </nav>
      </footer>

      <section class="work-strip" id="works">
        <p>Work With Me ✦</p>
        <h1>1 person + AI = 1 team</h1>
        <div class="work-grid">
          <article>
            <span>AI 自媒体</span>
            <strong>内容系统 / 商单推广 / 品牌共创</strong>
            <small>小红书、公众号、知识库栏目化管理</small>
          </article>
          <article>
            <span>AI 企业培训</span>
            <strong>AI 工具落地 / Agent 工作流</strong>
            <small>带团队从 0 用起来，把流程变成资产</small>
          </article>
          <article>
            <span>个人工具搭建</span>
            <strong>Markdown 知识库 / RAG 检索 / 数字主页</strong>
            <small>轻量静态站，后续可接 Ollama 或云端模型</small>
          </article>
        </div>
      </section>

      <section class="split-panels">
        <article class="readme-panel">
          <h2>Design Skill介绍</h2>
          <button data-window="win-design-skill">Demo ReadMe Cards</button>
          <button data-command="cat tool-build/index.md">如何做出 Design Skill</button>
          <button data-window="win-website-history">网页进化史</button>
          <button data-tab="works">GitHub Repo</button>
        </article>

        <article class="chat-panel">
          <div class="chat-tabs"><span>对话</span><span>交付</span><span>闹钟</span><span>心迹</span><span>接入</span></div>
          <div class="chat-search">搜索聊天记录...</div>
          <div class="bubble user">Cola, 跟来看我网站的人打个招呼吧</div>
          <div class="bubble agent">被 cue 到了。嘿，我是你的 Agent 伙伴。你可以问我经历、正在做的事、怎么跟 AI 协作，或者直接搜索知识库。</div>
          <div class="bubble user">差不多得了，就这样吧</div>
          <div class="bubble agent">收到。随时来聊。</div>
          <div class="chat-input">输入消息... <b>Max</b></div>
        </article>
      </section>

      <section class="terminal-section">
        <div class="terminal-window">
          <div class="terminal-titlebar dark">
            <i></i><i></i><i></i><span>robin@universe ~ zsh</span>
          </div>
          <div class="terminal-output" id="terminalOutput"></div>
          <form class="terminal-form" id="terminalForm">
            <span>$</span>
            <input id="terminalInput" autocomplete="off" spellcheck="false" placeholder="cat about.md / search AI / ai query &quot;AI协作&quot;" />
          </form>
        </div>
      </section>

      <footer class="site-footer">
        <p>© 2026 Clink AI · Built with AI & attitude</p>
        <button id="backToTopLink">↑ 回到开始 · Back to Start</button>
      </footer>

      <section class="exit-section" id="exitSection">
        <div class="exit-macbook">
          <div class="screen-bezel">
            <div class="notch"></div>
            <div class="screen">
              <div class="mini-terminal goodbye-terminal">
                <div class="terminal-titlebar">
                  <i></i><i></i><i></i><span>robin@universe ~ zsh</span>
                </div>
                <p><span class="prompt">$</span> echo "see you"</p>
                <p>&gt; See you next time.</p>
                <p><span class="prompt">$</span> cat contact.md</p>
                <p>&gt; hello@example.com</p>
                <p><span class="prompt">$</span> fortune</p>
                <p class="dim">找到你喜欢的事，然后让它杀死你。 - Bukowski</p>
                <p><span class="prompt">$</span> exit</p>
                <p><mark>[Process completed]</mark></p>
              </div>
            </div>
          </div>
          <div class="hinge"></div>
          <div class="base"></div>
          <div class="shadow"></div>
        </div>
        <button id="loopLink" class="loop-link">↑ 回到开始 · Back to Start</button>
      </section>
    </section>
  </main>

  <main class="tab-page" id="page-works">
    <section class="works-page">
      <h1>1 Person + AI = 1 Team</h1>
      <p>这里是作品集 / 知识库入口页。参考站的这个 tab 用来集中展示个人项目、内容系统、AI 协作工作流。</p>
      <div class="works-actions">
        <button id="worksAddFileBtn" class="works-add-file">添加文件</button>
      </div>
      <div id="worksFilesGrid" class="works-files-grid"></div>
      <div class="works-grid">
        <article class="works-category" data-work-category="media"><button class="works-category-delete" title="删除">×</button><span>01</span><strong>AI 自媒体知识库</strong><small>内容选题、发布复盘、平台运营笔记。</small></article>
        <article class="works-category" data-work-category="design"><button class="works-category-delete" title="删除">×</button><span>02</span><strong>设计技能库</strong><small>信息架构、视觉系统、组件实践。</small></article>
        <article class="works-category" data-work-category="tool"><button class="works-category-delete" title="删除">×</button><span>03</span><strong>Build Your Tool</strong><small>个人工具、自动化脚本、RAG 原型。</small></article>
        <article class="works-category" data-work-category="architecture"><button class="works-category-delete" title="删除">×</button><span>04</span><strong>建筑转 AI</strong><small>迁移能力、学习路径、项目样本。</small></article>
      </div>
    </section>
  </main>

  <main class="tab-page" id="page-system">
    <section class="system-page system-fullscreen">
      <div class="system-canvas-panel">
        <iframe title="AI 无限画布" src="./huobao-canvas/index.html?v=${canvasAssetVersion}" loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe>
      </div>
    </section>
  </main>

  <template id="win-launchpad">
    <div class="os-window" data-title="Clink AI">
      <div class="os-body" id="launchpadBody"></div>
    </div>
  </template>

  <template id="win-design-skill">
    <div class="os-window" data-title="Design Skill">
      <div class="os-body folder-body">
        <button data-command="cat design-skill/index.md">Design Skill介绍</button>
        <button data-command="cat tool-build/index.md">如何做出 Design Skill</button>
        <button data-command="cat web-evolution.md">网页进化史</button>
        <button data-tab="works">作品集页</button>
      </div>
    </div>
  </template>

  <template id="win-website-history">
    <div class="os-window" data-title="网页进化史">
      <div class="os-body folder-body">
        <button data-command="cat web-evolution.md">Ver 1 - 初代知识库</button>
        <button data-command="cat deploy-tutorial.md">Ver 2 - 静态部署</button>
        <button data-command="cat about.md">Ver 3 - 当前终端 OS</button>
      </div>
    </div>
  </template>

  <template id="win-work">
    <div class="os-window" data-title="Work With Me">
      <div class="os-body">
        <h2>Work With Me ✦</h2>
        <p>AI 知识库搭建、个人工具系统、内容工作流自动化、终端风数字主页。</p>
        <button data-command="cat contact.md">查看联系方式</button>
      </div>
    </div>
  </template>

  <script>
    window.__DOCS__ = ${JSON.stringify(docs)};
    window.__NAV_ITEMS__ = ${JSON.stringify(navItems)};
    window.__STAT_ICON_ASSETS__ = ${JSON.stringify(statIconAssets)};
  </script>
  <script>${clientJs()}</script>
  <script>${antdJs}</script>
</body>
</html>`;
}
