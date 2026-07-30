import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const contentDir = path.join(root, "content");
const outputDir = path.join(root, "outputs");
const outputPath = path.join(outputDir, "ai-terminal-kb.html");
const indexOutputPath = path.join(outputDir, "index.html");
const adminDistDir = path.join(root, "vendor", "vue-element-admin", "dist");
const adminOutputDir = path.join(outputDir, "admin");
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
        <iframe title="AI 无限画布" src="./huobao-canvas/index.html?v=${Date.now()}" loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe>
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

function css() {
  return `
*{box-sizing:border-box}html{scroll-behavior:smooth;overflow:hidden}html.scroll-unlocked{overflow:auto;overflow-x:hidden}body{margin:0;background:#fefcf6;color:#1a1a2e;font-family:-apple-system,BlinkMacSystemFont,"Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif;-webkit-font-smoothing:antialiased}button,input{font:inherit}button{cursor:pointer;color:inherit}.tab-page{display:none}.tab-page.active{display:block}.transition-overlay{position:fixed;inset:0;z-index:80;background:#2b7fd8;opacity:0;pointer-events:none;transition:opacity .35s ease}.transition-overlay.active{opacity:1}.pill-nav{position:fixed;left:50%;bottom:24px;z-index:70;display:flex;gap:4px;transform:translateX(-50%);padding:5px;border:1px solid rgba(26,26,46,.08);border-radius:999px;background:rgba(255,255,255,.86);backdrop-filter:blur(16px);box-shadow:0 8px 32px rgba(26,26,46,.12);transition:.35s}.pill-nav.hidden-during-intro{opacity:0;pointer-events:none;transform:translateX(-50%) translateY(16px)}.pill-nav button{border:0;border-radius:999px;background:transparent;padding:9px 18px;font-size:13px;font-weight:600}.pill-nav span{font:11px ui-monospace,SFMono-Regular,Menlo,monospace;opacity:.55;margin-right:6px}.pill-nav button:hover,.pill-nav button.active{background:#2b7fd8;color:white}.hero{min-height:100vh;display:grid;place-items:center;padding:32px;overflow:hidden;background:radial-gradient(circle at 50% 18%,#fff 0,#fefcf6 28%,#faf6eb 100%)}.hero.launched{display:none}.macbook{display:flex;flex-direction:column;align-items:center;animation:floatIn .9s cubic-bezier(.16,1,.3,1) both}.screen-bezel{width:min(720px,88vw);background:#2a2a30;border-radius:14px 14px 0 0;padding:0 14px 14px}.notch{width:130px;height:14px;margin:0 auto;background:#2a2a30;border-radius:0 0 10px 10px}.screen{height:min(440px,54vw);min-height:300px;border-radius:4px;overflow:hidden;background:#2b7fd8;position:relative}.screen:after,.terminal-window:after{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,.04) 2px,rgba(255,255,255,.04) 3px)}.mini-terminal{height:100%;padding:18px 20px;color:white;font:14px/1.7 ui-monospace,SFMono-Regular,Menlo,monospace}.terminal-titlebar{display:flex;align-items:center;gap:7px;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,.16);margin-bottom:14px}.terminal-titlebar i{width:10px;height:10px;border-radius:50%}.terminal-titlebar i:nth-child(1){background:#ff5f57}.terminal-titlebar i:nth-child(2){background:#ffbd2e}.terminal-titlebar i:nth-child(3){background:#28ca41}.terminal-titlebar span{margin:0 auto;color:rgba(255,255,255,.62);font-size:11px}.intro-lines{height:calc(100% - 42px);display:grid;place-content:center;text-align:center}.prompt{color:#f4d758;font-weight:700}.press{margin:18px 0 8px;color:#fff;font-size:clamp(20px,3vw,34px);font-weight:800}.arrow{font-size:30px;animation:bounce 1.4s infinite}.hinge{width:min(730px,90vw);height:3px;background:linear-gradient(#8a8a8e,#6e6e72)}.base{width:min(760px,94vw);height:14px;border-radius:0 0 10px 10px;background:linear-gradient(#c8c8cc,#a8a8ac 32%,#b8b8bc 70%,#9a9a9e)}.shadow{width:min(700px,86vw);height:40px;margin-top:4px;background:radial-gradient(ellipse at center,rgba(0,0,0,.24),transparent 70%)}.site-shell{min-height:100vh;padding:18px clamp(16px,4vw,56px) 110px}.topbar{position:sticky;top:0;z-index:10;display:flex;align-items:center;gap:18px;min-height:46px;background:rgba(254,252,246,.82);backdrop-filter:blur(14px);border-bottom:1px solid rgba(26,26,46,.08)}.topbar button{border:0;background:transparent;font-size:14px;font-weight:700}.topbar button:hover{text-decoration:underline;text-underline-offset:5px}.topbar time{margin-left:auto;font:13px ui-monospace,SFMono-Regular,Menlo,monospace;color:#6f6f80}.star-marquee{overflow:hidden;margin:28px 0 30px;color:#1a1a2e;font:19px ui-monospace,SFMono-Regular,Menlo,monospace;white-space:nowrap}.star-marquee span{display:inline-block;animation:marquee 28s linear infinite}.os-board{display:grid;grid-template-columns:310px 1fr;gap:28px;align-items:stretch}.portrait-card{min-height:370px;border:2px solid #1a1a2e;border-radius:22px;background:#fff9e9;box-shadow:10px 10px 0 #1a1a2e;padding:18px;display:grid;grid-template-rows:1fr auto}.portrait-art{border-radius:18px;background:linear-gradient(135deg,#2b7fd8 0 45%,#f4d758 45% 70%,#e84a5f 70%);display:grid;place-items:center;color:white;position:relative;overflow:hidden}.portrait-art span{position:absolute;left:22px;top:18px;font:700 48px ui-monospace,SFMono-Regular,Menlo,monospace}.portrait-art b{font-size:clamp(70px,9vw,120px);letter-spacing:-4px;text-shadow:5px 5px 0 rgba(0,0,0,.18)}.portrait-card p{margin:16px 0 4px;font:800 22px/1.1 ui-monospace,SFMono-Regular,Menlo,monospace}.desktop-surface{position:relative;min-height:370px}.app-grid{display:grid;grid-template-columns:repeat(4,minmax(120px,1fr));gap:16px}.app-card{min-height:112px;border:2px solid #1a1a2e;border-radius:18px;background:#fff;padding:14px;text-align:left;box-shadow:6px 6px 0 rgba(26,26,46,.92);transition:.2s}.app-card:nth-child(3n+1){background:#f4d758}.app-card:nth-child(3n+2){background:#dff0ff}.app-card:nth-child(3n){background:#ffe6ec}.app-card:hover,.app-card.selected{transform:translate(-2px,-2px);box-shadow:9px 9px 0 rgba(26,26,46,.92)}.app-card small{display:block;margin-bottom:22px;font:12px ui-monospace,SFMono-Regular,Menlo,monospace;opacity:.65}.app-card strong{display:block;font-size:16px;line-height:1.25}.work-strip{margin:76px 0 32px;padding:34px;border:2px solid #1a1a2e;border-radius:28px;background:#1a1a2e;color:white}.work-strip p{margin:0 0 10px;color:#f4d758;font-weight:800}.work-strip h1{margin:0 0 24px;font:900 clamp(34px,6vw,88px)/.94 Georgia,"Times New Roman",serif;letter-spacing:-2px}.work-grid,.works-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.work-grid article,.works-grid article{border:1px solid rgba(255,255,255,.18);border-radius:18px;padding:18px;background:rgba(255,255,255,.07)}.work-grid span,.works-grid span{color:#f4d758;font-weight:800}.work-grid strong,.works-grid strong{display:block;margin:12px 0 8px;font-size:18px}.work-grid small,.works-grid small{color:rgba(255,255,255,.72);line-height:1.6}.split-panels{display:grid;grid-template-columns:minmax(260px,.8fr) minmax(320px,1.2fr);gap:24px;margin-top:28px}.readme-panel,.chat-panel{border:2px solid #1a1a2e;border-radius:26px;background:white;box-shadow:8px 8px 0 #1a1a2e;padding:22px}.readme-panel h2{margin:0 0 18px}.readme-panel button,.folder-body button,.os-body button{display:block;width:100%;border:1px solid #1a1a2e;border-radius:14px;background:#fefcf6;padding:14px;margin:10px 0;text-align:left;font-weight:800}.chat-tabs{display:flex;gap:8px;flex-wrap:wrap;font-size:13px;font-weight:800}.chat-tabs span:first-child{color:#2b7fd8}.chat-search{margin:14px 0;padding:11px 14px;border-radius:999px;background:#f3f0e8;color:#8a8a9a}.bubble{max-width:82%;margin:12px 0;padding:13px 15px;border-radius:18px;line-height:1.65}.bubble.user{margin-left:auto;background:#2b7fd8;color:white}.bubble.agent{background:#f3f0e8}.chat-input{display:flex;justify-content:space-between;margin-top:16px;padding:13px 15px;border:1px solid #ded8c8;border-radius:999px;color:#8a8a9a}.terminal-section{margin-top:72px}.terminal-window{position:relative;overflow:hidden;border-radius:22px;background:#151821;color:white;box-shadow:0 22px 70px rgba(26,26,46,.28)}.terminal-titlebar.dark{margin:0;padding:15px 18px;border-bottom:1px solid rgba(255,255,255,.14)}.terminal-output{min-height:360px;max-height:560px;overflow:auto;padding:20px;font:14px/1.75 ui-monospace,SFMono-Regular,Menlo,monospace}.term-row{margin-bottom:14px;white-space:pre-wrap}.term-command{color:white}.term-command b{color:#f4d758}.term-out{color:rgba(255,255,255,.82)}.term-out:before{content:"> ";color:#4ade80}.term-html{display:grid;gap:10px}.term-html h1,.term-html h2,.term-html h3{margin:8px 0;color:white;font-size:16px}.term-html p,.term-html ul,.term-html ol{margin:0 0 10px}.term-html code{background:rgba(255,255,255,.12);padding:2px 5px;border-radius:4px}.result-btn,.source-btn{display:block;width:100%;margin:8px 0;padding:11px 12px;border:1px solid rgba(255,255,255,.18);border-radius:12px;background:rgba(255,255,255,.06);color:white;text-align:left}.result-btn small{display:block;color:rgba(255,255,255,.62);line-height:1.5}.terminal-form{display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;padding:15px 20px;border-top:1px solid rgba(255,255,255,.14);font:14px ui-monospace,SFMono-Regular,Menlo,monospace}.terminal-form span{color:#f4d758;font-weight:800}.terminal-form input{border:0;outline:0;background:transparent;color:white;min-width:0}.terminal-form input::placeholder{color:rgba(255,255,255,.4)}.site-footer{display:flex;justify-content:space-between;align-items:center;margin-top:40px;color:#626272}.site-footer button{border:0;background:transparent;font-weight:800}.exit-overlay{position:fixed;inset:0;z-index:90;display:grid;place-items:center;background:#151821;color:white;opacity:0;pointer-events:none;transition:.3s}.exit-overlay.active{opacity:1;pointer-events:auto}.exit-overlay p{font:700 clamp(32px,8vw,110px)/1 ui-monospace,SFMono-Regular,Menlo,monospace}.os-window{position:absolute;left:8%;top:8%;z-index:20;width:min(460px,92vw);border:2px solid #1a1a2e;border-radius:16px;background:white;box-shadow:10px 10px 0 rgba(26,26,46,.85);overflow:hidden}.os-window-bar{height:36px;background:#f3f0e8;border-bottom:1px solid #1a1a2e;display:flex;align-items:center;gap:8px;padding:0 12px;cursor:move}.os-window-bar i{width:11px;height:11px;border-radius:50%;display:block}.os-window-bar i:nth-child(1){background:#ff5f57}.os-window-bar i:nth-child(2){background:#ffbd2e}.os-window-bar i:nth-child(3){background:#28ca41}.os-window-bar span{margin-left:auto;margin-right:auto;font-size:12px;color:#666}.os-body{padding:18px;max-height:60vh;overflow:auto}.works-page,.system-page{min-height:100vh;padding:clamp(48px,8vw,96px);background:#fefcf6}.works-page h1,.system-page h1{font:900 clamp(44px,8vw,118px)/.9 Georgia,"Times New Roman",serif;letter-spacing:-3px;margin:0 0 18px}.works-page p,.system-page p{max-width:760px;font-size:18px;line-height:1.8;color:#4a4a5a}.works-grid article{background:#1a1a2e;color:white}.system-board{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:32px}.system-board div{border:2px solid #1a1a2e;border-radius:22px;background:white;padding:22px;box-shadow:8px 8px 0 #1a1a2e}.system-board b,.system-board span{display:block}.system-board span{margin-top:10px;color:#666;line-height:1.6}@keyframes bounce{50%{transform:translateY(8px)}}@keyframes floatIn{from{opacity:0;transform:translateY(18px) scale(.98)}to{opacity:1;transform:none}}@keyframes marquee{to{transform:translateX(-50%)}}@media(max-width:900px){.os-board,.split-panels,.work-grid,.works-grid,.system-board{grid-template-columns:1fr}.app-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.portrait-card{min-height:280px}.pill-nav{bottom:14px}.site-shell{padding-inline:14px}.topbar{gap:10px;overflow:auto}.work-strip{padding:22px}.screen{height:330px}}@media(max-width:540px){.hero{padding:14px}.screen{min-height:260px;height:62vw}.app-grid{grid-template-columns:1fr}.pill-nav button{padding:8px 10px}.site-footer{display:block}.terminal-output{font-size:13px}.work-strip h1{letter-spacing:-1px}}`;
}

function interactionCss() {
  return `
.auto-launching body{opacity:0;background:#bfe2ff}
.intro-lines{display:block;text-align:left;height:auto;place-content:initial}
.intro-line{opacity:0;transform:translateY(6px);white-space:pre-wrap}
.intro-line.visible{animation:lineReveal .35s ease forwards}
.cursor{display:inline-block;width:9px;height:17px;background:#fff;margin-left:3px;vertical-align:middle;animation:blink 1s step-end infinite}
.hero-cta{position:absolute;left:50%;bottom:9vh;transform:translateX(-50%) translateY(16px);border:0;background:transparent;color:#1a1a2e;text-align:center;font-weight:800;opacity:0;pointer-events:none;transition:.35s}
.hero-cta.visible{opacity:1;pointer-events:auto;transform:translateX(-50%)}
.hero-cta.hidden{opacity:0}
.hero-cta span{display:block;font-size:clamp(19px,3vw,32px)}
.hero-cta b{display:block;font-size:28px;animation:bounce 1.4s infinite}
.hero-auth-actions{position:absolute;left:50%;bottom:8.5vh;z-index:8;display:flex;gap:14px;transform:translateX(-50%) translateY(16px);opacity:0;pointer-events:none;transition:.35s}
.hero-auth-actions[hidden],.register-modal[hidden]{display:none!important}
.file-thumb{display:none}
.hero-auth-actions.visible{opacity:1;pointer-events:auto;transform:translateX(-50%)}
.hero-auth-actions button{min-width:112px;border:1px solid rgba(255,255,255,.72);border-radius:999px;padding:13px 24px;background:rgba(255,255,255,.78);color:#1f2d3d;font-weight:900;box-shadow:0 14px 34px rgba(37,56,82,.16);backdrop-filter:blur(16px)}
.hero-auth-actions button:first-child{background:#2b83d3;color:#fff;border-color:#2b83d3}
.register-modal{position:fixed;inset:0;z-index:120;display:grid;place-items:center;padding:22px;background:rgba(19,34,54,.34);backdrop-filter:blur(10px)}
.register-card{position:relative;width:min(520px,94vw);border:1px solid rgba(255,255,255,.86);border-radius:26px;background:rgba(248,252,255,.94);box-shadow:0 24px 70px rgba(37,56,82,.28);padding:28px;color:#1f2d3d}
.register-card h2{margin:0 0 8px;font-size:24px}
.register-card p{margin:0 0 18px;color:#60748d;line-height:1.6}
.register-card label{display:block;margin:13px 0 0;font-weight:900}
.register-card input,.register-card textarea{display:block;width:100%;margin-top:8px;border:1px solid #d6e1ec;border-radius:16px;background:#fff;padding:12px 14px;color:#1f2d3d;outline:0}
.register-card textarea{min-height:84px;resize:vertical}
.register-close{position:absolute;right:16px;top:14px;border:0;background:transparent;color:#60748d;font-size:24px}
.register-submit{width:100%;margin-top:18px;border:0;border-radius:999px;background:#2b83d3;color:#fff;padding:13px 16px;font-weight:900}
.register-feedback{min-height:22px;margin-top:12px;color:#2b83d3;font-weight:800}
.mini-terminal>*{transition:opacity .32s ease}
.site-footer{display:none}
.exit-section{min-height:100vh;display:grid;place-items:center;padding:80px 0 120px}
.exit-macbook{display:flex;flex-direction:column;align-items:center}
.goodbye-terminal p{margin:7px 0;color:rgba(255,255,255,.86)}
.goodbye-terminal .dim{color:rgba(255,255,255,.55);font-style:italic}
.goodbye-terminal mark{background:#f4d758;color:#1e5ba8;border-radius:3px;padding:2px 7px;font-weight:800}
.loop-link{margin-top:24px;border:0;background:transparent;color:#1a1a2e;font-weight:800}
.system-canvas-panel{margin-top:28px;border:2px solid #1a1a2e;border-radius:8px;background:#1a1a2e;box-shadow:8px 8px 0 #1a1a2e;overflow:hidden}
.system-canvas-bar{height:42px;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:0 14px;color:white;background:#1a1a2e}
.system-canvas-bar b{font-size:14px}
.system-canvas-bar a{border:1px solid rgba(255,255,255,.28);border-radius:6px;color:white;text-decoration:none;padding:7px 10px;font-size:13px;font-weight:800}
.system-canvas-panel iframe{display:block;width:100%;height:min(72vh,760px);min-height:520px;border:0;background:white}
.works-actions{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin:20px 0 26px}
.works-add-file,.works-canvas-records{display:inline-flex;align-items:center;justify-content:center;border:2px solid #1a1a2e;border-radius:8px;padding:12px 18px;font-weight:900;box-shadow:5px 5px 0 #1a1a2e}
.works-add-file{background:#f4d758}
.works-canvas-records{background:#dff0ff}
.works-add-file:hover,.works-canvas-records:hover{transform:translate(-1px,-1px);box-shadow:7px 7px 0 #1a1a2e}
.works-files-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:14px;margin:0 0 28px}
.works-file-card{position:relative;min-height:104px;border:2px solid #1a1a2e;border-radius:8px;background:white;padding:14px;text-align:left;box-shadow:5px 5px 0 #1a1a2e;cursor:grab;touch-action:none;user-select:none}
.works-file-card:hover{transform:translate(-1px,-1px);box-shadow:7px 7px 0 #1a1a2e}
.works-file-card.dragging{opacity:.38;transform:scale(.98);box-shadow:3px 3px 0 #1a1a2e}
.works-drag-ghost{position:fixed;z-index:9999;pointer-events:none;width:220px;transform:translate(-50%,-50%);box-shadow:8px 8px 0 rgba(26,26,46,.22)}
.works-file-card span{display:block;color:#2b7fd8;font:800 12px ui-monospace,SFMono-Regular,Menlo,monospace;text-transform:uppercase}
.works-file-card strong{display:block;margin-top:12px;font-size:17px;line-height:1.25}
.works-file-card small{display:block;margin-top:8px;color:#626272;line-height:1.4}
.works-file-card em{display:inline-block;margin-top:10px;border-radius:999px;background:#edf5ff;color:#174f93;padding:4px 8px;font-style:normal;font-size:12px;font-weight:800}
.works-file-delete{position:absolute;right:8px;top:8px;display:grid;place-items:center;width:26px;height:26px;border:0;border-radius:999px;background:#e84a5f;color:white;font-weight:900;opacity:1;pointer-events:auto;transition:.16s}
.works-file-card:hover .works-file-delete,.works-file-card.delete-ready .works-file-delete{opacity:1;pointer-events:auto}
.works-files-empty{border:1px dashed #b9b2a4;border-radius:8px;padding:18px;color:#626272;background:#fff}
.works-category{position:relative;cursor:pointer;transition:.16s;user-select:none}
.works-category.drag-over{outline:3px solid #f4d758;transform:translate(-2px,-2px)}
.works-category-delete{position:absolute;right:8px;top:8px;display:grid;place-items:center;width:26px;height:26px;border:0;border-radius:999px;background:#e84a5f;color:white;font-weight:900;opacity:0;pointer-events:none;transition:.16s}
.works-category.delete-ready .works-category-delete{opacity:1;pointer-events:auto}
.works-category small b{display:block;margin-top:8px;color:#f4d758}
.works-category-file{display:block;width:100%;border:1px solid #d0d0dc;border-radius:8px;background:#f7f7fb;padding:12px;margin:8px 0;text-align:left}
.works-category-file b,.works-category-file small{display:block}
.works-category-file small{margin-top:5px;color:#626272}
.canvas-record-window{width:min(760px,92vw)}
.canvas-record-head{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;margin-bottom:14px}
.canvas-record-head h3{margin:0;font-size:22px}
.canvas-record-head p{margin:6px 0 0;color:#626272;line-height:1.5;font-size:14px}
.canvas-record-head a,.canvas-record-empty a{display:inline-flex;align-items:center;justify-content:center;border:1px solid #1a1a2e;border-radius:8px;background:#f4d758;color:#1a1a2e;text-decoration:none;padding:9px 12px;font-weight:900;white-space:nowrap}
.canvas-record-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:12px}
.canvas-record-card{border:1px solid #c9d9ee;border-radius:8px;background:linear-gradient(180deg,#ffffff,#f4f9ff);padding:12px;text-align:left;min-height:126px}
.canvas-record-card strong{display:block;font-size:16px;line-height:1.3}
.canvas-record-card small{display:block;margin-top:8px;color:#626272;line-height:1.45}
.canvas-record-card span{display:inline-block;margin-top:12px;border-radius:999px;background:#e8f2ff;color:#1e5ba8;padding:4px 8px;font-size:12px;font-weight:900}
.canvas-record-empty{border:1px dashed #b7c9e3;border-radius:8px;background:#f7fbff;padding:18px;color:#626272}
.works-canvas-overlay{position:fixed;inset:0;z-index:120;display:none;background:#fbfcff;color:#1a1a2e}
.works-canvas-overlay.active{display:grid;grid-template-columns:220px 1fr}
.works-canvas-sidebar{display:flex;flex-direction:column;border-right:1px dashed #b7c9e3;background:#fffdf6;min-width:0}
.works-canvas-brand{height:54px;display:flex;align-items:center;gap:10px;padding:0 16px;border-bottom:1px dashed #b7c9e3;color:#2b7fd8;font-weight:900}
.works-canvas-brand i{display:grid;place-items:center;width:28px;height:28px;border:2px solid #2b7fd8;border-radius:8px;background:#f4d758;font-style:normal}
.works-canvas-layers{padding:16px 12px;flex:1;overflow:auto}
.works-canvas-layers h3,.works-canvas-mini h3{margin:0 0 12px;color:#2b7fd8;font:900 15px ui-monospace,SFMono-Regular,Menlo,monospace}
.works-canvas-layer{display:flex;align-items:center;gap:9px;width:100%;border:0;border-radius:10px;background:transparent;padding:9px 8px;text-align:left;font-size:13px}
.works-canvas-layer.active{background:#fff4c7;color:#1e5ba8;font-weight:900}
.works-canvas-layer i{width:8px;height:8px;border-radius:50%;background:#2b7fd8}
.works-canvas-layer span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.works-canvas-layer small{color:#9aa9bd}
.works-canvas-layer button{border:0;background:transparent;color:#8aa3c2;padding:0 2px}
.works-canvas-new{margin:12px;border:1px dashed #7ca7da;border-radius:8px;background:white;color:#2b7fd8;padding:11px;font-weight:900}
.works-canvas-mini{padding:12px;border-top:1px dashed #b7c9e3}
.works-canvas-mini-box{height:92px;border:1px dashed #b7c9e3;border-radius:8px;background:linear-gradient(90deg,#d7e5f7 22px,transparent 22px),linear-gradient(#d7e5f7 18px,transparent 18px);background-size:42px 34px;opacity:.75}
.works-canvas-stage{position:relative;overflow:hidden;background:#fff}
.works-canvas-stage:before{content:"";position:absolute;inset:0;background-image:radial-gradient(#cfe0f5 1px,transparent 1px);background-size:16px 16px;pointer-events:none}
.works-canvas-board{position:absolute;inset:0;min-width:1600px;min-height:900px;transform-origin:0 0}
.works-canvas-board.panning{cursor:grabbing}
.works-canvas-links{position:absolute;left:0;top:0;width:2000px;height:1200px;overflow:visible;pointer-events:none}
.works-canvas-links path{fill:none;stroke:#9bbce6;stroke-width:2;stroke-dasharray:5 5}
.works-canvas-top{position:absolute;left:50%;top:16px;z-index:4;transform:translateX(-50%);display:flex;gap:8px;align-items:center;border:1px dashed #b7c9e3;border-radius:999px;background:rgba(255,255,255,.86);padding:7px 12px;color:#8a8a9a;font-size:12px}
.works-canvas-template-open{border:0;border-radius:999px;background:#2b7fd8;color:white;padding:7px 12px;font-weight:900}
.works-canvas-close{position:absolute;right:18px;top:16px;z-index:5;width:34px;height:34px;border:1px solid #d0dff2;border-radius:50%;background:white;color:#2b7fd8;font-weight:900}
.works-canvas-template-modal{position:absolute;right:34px;top:64px;z-index:7;display:none;width:330px;border:2px dashed #b7c9e3;border-radius:16px;background:rgba(255,255,255,.96);padding:16px;box-shadow:0 18px 60px rgba(43,127,216,.18)}
.works-canvas-template-modal.active{display:block}
.works-canvas-layer-modal{position:absolute;left:236px;top:68px;z-index:8;display:none;width:280px;border:2px dashed #b7c9e3;border-radius:16px;background:rgba(255,255,255,.98);padding:16px;box-shadow:0 18px 60px rgba(43,127,216,.18)}
.works-canvas-layer-modal.active{display:block}
.works-canvas-layer-modal h3{margin:0 0 12px;color:#2b7fd8;font-size:16px}
.works-canvas-layer-modal input{width:100%;border:1px dashed #b7c9e3;border-radius:8px;background:white;padding:10px;color:#1a1a2e}
.works-canvas-layer-modal div{display:flex;gap:8px;margin-top:12px}
.works-canvas-layer-modal button{flex:1;border:1px solid #c9d9ee;border-radius:8px;background:#f4f9ff;padding:9px;font-weight:900}
.works-canvas-layer-modal button:last-child{background:#f4d758;color:#1a1a2e}
.works-canvas-palette{position:absolute;right:34px;top:64px;z-index:5;width:330px;border:2px dashed #b7c9e3;border-radius:16px;background:rgba(255,255,255,.92);padding:16px}
.works-canvas-palette h3{margin:0 0 14px;color:#2b7fd8;font-size:16px}
.works-canvas-palette label{display:block;margin:10px 0 5px;color:#5f7fa6;font-size:12px;font-weight:900}
.works-canvas-palette input,.works-canvas-palette textarea,.works-canvas-palette select{width:100%;border:1px dashed #b7c9e3;border-radius:8px;background:white;padding:9px;color:#1a1a2e}
.works-canvas-palette textarea{height:76px;resize:vertical}
.works-canvas-inspector-actions{display:flex;gap:8px;margin-top:10px}
.works-canvas-inspector-actions button{flex:1;border:1px solid #c9d9ee;border-radius:8px;background:#f4f9ff;padding:8px;font-weight:900}
.works-canvas-inspector-actions button:last-child{background:#ffe6ec;color:#b83245}
.works-canvas-template-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.works-canvas-template-grid button{border:1px dashed #b7c9e3;border-radius:10px;background:white;min-height:72px;font-weight:900}
.works-canvas-card{position:absolute;width:190px;min-height:116px;border:1px solid #c9d9ee;border-radius:8px;background:#fff;box-shadow:0 8px 24px rgba(43,127,216,.08);padding:14px;cursor:grab;user-select:none}
.works-canvas-card.connect-pending{outline:3px solid #2b7fd8}
.works-canvas-card.active{outline:3px solid #f4d758}
.works-canvas-card.profile{width:220px}
.works-canvas-card.sticky{background:#fff8d6;border-color:#f4d758}
.works-canvas-card.quote{background:#fffdf6;border-color:#f4d758}
.works-canvas-card.image{height:150px;background:linear-gradient(135deg,#dff0ff,#fff)}
.works-canvas-card.link{background:#f4f9ff}
.works-canvas-card b{display:block;color:#2b7fd8;margin-bottom:8px}
.works-canvas-card p{margin:0;color:#4a4a5a;line-height:1.55;font-size:13px}
.works-canvas-card img{display:block;width:74px;height:74px;object-fit:cover;border-radius:8px;margin-bottom:10px}
.works-link-port{position:absolute;top:50%;z-index:4;display:grid;place-items:center;width:18px;height:18px;border:2px solid white;border-radius:50%;background:#2b7fd8;color:white;font-size:10px;transform:translateY(-50%);box-shadow:0 3px 10px rgba(43,127,216,.28);cursor:crosshair;pointer-events:auto}
.works-link-port.in{left:-9px}
.works-link-port.out{right:-9px}
.works-canvas-bottom{position:absolute;left:245px;bottom:20px;z-index:5;display:flex;gap:8px;align-items:center;border:1px dashed #b7c9e3;border-radius:12px;background:rgba(255,255,255,.9);padding:8px 10px;color:#5f7fa6;font-size:12px}
.works-canvas-zoom{position:absolute;right:24px;bottom:20px;z-index:5;display:flex;gap:12px;align-items:center;border:1px dashed #b7c9e3;border-radius:12px;background:rgba(255,255,255,.9);padding:9px 12px;color:#5f7fa6;font-size:12px}
.works-canvas-zoom button{border:0;background:#edf5ff;border-radius:7px;color:#2b7fd8;font-weight:900;padding:4px 7px}
body.desktop-mode{background:#2b83d8;overflow:hidden}
body.desktop-mode #page-home{min-height:100vh;background:#2b83d8}
body.desktop-mode .site-shell{position:relative;height:100vh;min-height:100vh;overflow:hidden;padding:0;background:#2b83d8;color:white;transform-origin:0 0}
body.desktop-returning .hero{display:grid;position:fixed;inset:0;z-index:1}
body.desktop-returning #launchTarget{animation:none!important;transform-origin:center center}
body.return-stable #launchTarget{animation:none!important}
body.desktop-returning .site-shell{position:fixed;inset:0;width:100vw;height:100vh;z-index:2;pointer-events:none;background:#2b83d8!important;opacity:0!important}
body.desktop-returning .site-shell *{opacity:0!important}
body.desktop-returning .site-shell:before{opacity:0!important}
body.desktop-mode .site-shell:before{content:"";position:absolute;inset:0;pointer-events:none;opacity:.75;background-image:radial-gradient(circle,#f4d758 0 2px,transparent 3px),radial-gradient(circle,#f4d758 0 1.5px,transparent 2.5px),radial-gradient(circle,rgba(255,255,255,.35) 0 1px,transparent 2px);background-size:280px 220px,420px 300px,210px 170px;background-position:64px 58px,150px 110px,86px 24px}
body.desktop-mode .topbar{position:absolute;inset:0 0 auto 0;height:36px;min-height:36px;padding:0 18px;background:transparent;border:0;color:rgba(255,255,255,.55);z-index:5}
body.desktop-mode .topbar button{color:rgba(255,255,255,.58);font-size:13px}
body.desktop-mode .topbar button:first-child{color:#f4d758;font-style:italic;font-weight:900}
body.desktop-mode .topbar time{color:rgba(255,255,255,.45);font-size:12px}
body.desktop-mode .star-marquee,body.desktop-mode .portrait-card,body.desktop-mode .work-strip,body.desktop-mode .split-panels,body.desktop-mode .terminal-section,body.desktop-mode .site-footer,body.desktop-mode .exit-section{display:none}
body.desktop-mode .os-board{display:block;position:absolute;inset:0}
body.desktop-mode .desktop-surface{position:absolute;inset:0;min-height:0}
body.desktop-mode .app-grid{position:absolute;inset:0;display:block;width:100%;height:100%;z-index:4}
body.desktop-mode .app-card{position:absolute;display:grid;grid-template-rows:48px 1fr;justify-items:center;align-items:start;min-height:0;width:74px;height:90px;border:0;border-radius:0;background:transparent!important;box-shadow:none;padding:0;color:white;text-align:center;touch-action:none}
body.desktop-mode .app-card:hover,body.desktop-mode .app-card.selected{transform:none;box-shadow:none}
body.desktop-mode .app-card.selected{background:rgba(23,79,147,.28)!important;border-radius:10px}
body.desktop-mode .app-card:before{content:"";width:48px;height:48px;border-radius:9px;background:#f8f8fb;box-shadow:0 2px 7px rgba(0,0,0,.14)}
body.desktop-mode .app-card.selected:before{background:#174f93;box-shadow:0 0 0 3px rgba(255,255,255,.72),0 8px 18px rgba(0,0,0,.22)}
body.desktop-mode .app-card.selected strong{color:white;background:rgba(23,79,147,.82);border-radius:6px;padding:0 4px;text-shadow:none}
body.desktop-mode .app-card[data-window]:before{background:linear-gradient(#ffe870,#f7cf45);border-radius:10px}
body.desktop-mode .app-card[data-folder]:before{background:linear-gradient(180deg,#ffe477,#f2c947);border-radius:10px}
body.desktop-mode .app-card.selected[data-window]:before{background:linear-gradient(#174f93,#236fbd)}
body.desktop-mode .app-card.selected[data-folder]:before{background:linear-gradient(#174f93,#236fbd)}
body.desktop-mode .app-card[data-command]:after{content:attr(data-ext);position:absolute;top:31px;left:25px;min-width:25px;padding:1px 3px;border-radius:2px;background:#2b7fd8;color:white;font:700 8px/1.2 ui-monospace,SFMono-Regular,Menlo,monospace}
body.desktop-mode .app-card small{display:none}
body.desktop-mode .app-card strong{display:-webkit-box;max-width:72px;max-height:2.4em;color:rgba(255,255,255,.85);font:600 11px/1.2 ui-monospace,SFMono-Regular,Menlo,monospace;text-shadow:0 1px 2px rgba(0,0,0,.25);word-break:break-word;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical}
body.desktop-mode .desktop-tools{position:absolute;left:18px;top:48px;z-index:80;display:flex;align-items:center;gap:8px;padding:6px;border:1px solid rgba(255,255,255,.22);border-radius:999px;background:rgba(255,255,255,.14);backdrop-filter:blur(14px)}
body.desktop-mode .desktop-tools button{width:30px;height:30px;border:0;border-radius:50%;background:rgba(255,255,255,.82);color:#1a1a2e;font-weight:900}
body.desktop-mode .desktop-tools input{width:150px;height:30px;border:0;border-radius:999px;background:rgba(255,255,255,.85);padding:0 12px;color:#1a1a2e;outline:0}
body:not(.desktop-mode) .desktop-tools{display:none}
body.desktop-mode .selection-actions{position:absolute;left:50%;bottom:82px;z-index:85;display:flex;align-items:center;gap:10px;transform:translateX(-50%) translateY(12px);opacity:0;pointer-events:none;padding:7px 9px 7px 14px;border:1px solid rgba(255,255,255,.28);border-radius:999px;background:rgba(255,255,255,.88);backdrop-filter:blur(14px);box-shadow:0 10px 30px rgba(26,26,46,.16);transition:.18s}
body.desktop-mode .selection-actions.active{opacity:1;pointer-events:auto;transform:translateX(-50%)}
body.desktop-mode .selection-actions span{color:#1a1a2e;font:700 13px ui-monospace,SFMono-Regular,Menlo,monospace}
body.desktop-mode .selection-actions button{height:30px;border:0;border-radius:999px;background:#ff5f57;color:white;padding:0 12px;font-weight:900}
body:not(.desktop-mode) .selection-actions{display:none}
body.desktop-mode .doc-actions{display:flex;justify-content:flex-end;margin:-6px 0 12px}
body.desktop-mode .doc-edit-btn{width:auto;border:0;border-radius:999px;background:#174f93;color:white;padding:7px 12px;font-weight:900}
body.desktop-mode .link-import-box,.works-page .link-import-box{margin:14px 0;padding:12px;border:1px dashed #b9b2a4;border-radius:10px;background:#fffaf0}
body.desktop-mode .link-import-box label,.works-page .link-import-box label{display:block;margin-bottom:7px;font-weight:900}
body.desktop-mode .link-import-row,.works-page .link-import-row{display:grid;grid-template-columns:1fr auto;gap:8px}
body.desktop-mode .link-import-row input,.works-page .link-import-row input{width:100%;height:36px;border:1px solid #1a1a2e;border-radius:8px;padding:0 10px}
body.desktop-mode .link-import-row button,.works-page .link-import-row button{border:1px solid #1a1a2e;border-radius:8px;background:#f4d758;padding:0 12px;font-weight:900}
body.desktop-mode .link-import-status,.works-page .link-import-status{display:block;margin-top:8px;color:#626272;font-size:12px;line-height:1.5}
body.desktop-mode .os-body .create-mode,.works-page .os-body .create-mode{display:grid!important;grid-template-columns:1fr 1fr;gap:10px;margin:0 0 18px!important;padding:8px!important;border:1px solid #d8e2ee!important;border-radius:999px!important;background:#f6fbff!important}
body.desktop-mode .os-body .create-mode-btn,.works-page .os-body .create-mode-btn{display:flex!important;align-items:center!important;justify-content:center!important;width:auto!important;height:52px!important;margin:0!important;border:0!important;border-radius:999px!important;background:#fff!important;color:#1f2d3d!important;font-weight:900!important;font-size:18px!important;line-height:1!important;text-align:center!important;box-shadow:inset 0 0 0 1px #d8e2ee!important;transition:background .18s ease,color .18s ease,box-shadow .18s ease!important}
body.desktop-mode .os-body .create-mode-btn:hover,.works-page .os-body .create-mode-btn:hover{background:#e8f4ff!important;color:#0d5fa9!important}
body.desktop-mode .os-body .create-mode-btn.active,.works-page .os-body .create-mode-btn.active{background:#155b96!important;color:white!important;box-shadow:0 8px 18px rgba(21,91,150,.2)!important}
body.desktop-mode .os-body.folder-create-mode .file-only,.works-page .os-body.folder-create-mode .file-only{display:none!important}
body.desktop-mode .desktop-folder-body{display:grid;gap:10px;min-width:320px}
body.desktop-mode .desktop-folder-file{display:block;width:100%;border:1px solid #d6e1ec;border-radius:12px;background:#fff;padding:12px;text-align:left}
body.desktop-mode .desktop-folder-file:hover{border-color:#3c91e6;box-shadow:0 8px 20px rgba(60,145,230,.12)}
body.desktop-mode .desktop-folder-file b{display:block;color:#1f2d3d;font-weight:900}
body.desktop-mode .desktop-folder-file small{display:block;margin-top:5px;color:#6b7c93}
body.desktop-mode .desktop-folder-empty{padding:18px;border:1px dashed #b7c9e3;border-radius:12px;color:#6b7c93;background:#f8fcff}
body.desktop-mode .app-card.dragging{opacity:.72;z-index:60}
body.desktop-mode .app-card.realtime-drag{transition:none;will-change:transform}
body.desktop-mode .app-card.folder-drop-target{background:rgba(255,255,255,.28)!important;border-radius:12px;box-shadow:0 0 0 3px rgba(255,255,255,.82)}
body.desktop-mode .selection-box{position:absolute;left:0;top:0;z-index:55;border:1px solid rgba(255,255,255,.9);background:rgba(23,79,147,.24);box-shadow:0 0 0 1px rgba(255,255,255,.28) inset;pointer-events:none;will-change:transform,width,height}
body.desktop-mode .desktop-sticker{position:absolute;left:70%;bottom:46px;width:min(190px,17vw);height:auto;z-index:3;transform:translateX(-50%)}
body.desktop-mode .pill-nav{bottom:24px;background:rgba(255,255,255,.82)}
body.desktop-mode .os-window{background:#fff;color:#1a1a2e}
@keyframes lineReveal{to{opacity:1;transform:translateY(0)}}
@keyframes blink{50%{opacity:0}}
`;
}

function productThemeCss() {
  return `
:root{
  --ui-bg:#d8e1ec;
  --ui-panel:#eef6ff;
  --ui-card:rgba(248,252,255,.88);
  --ui-card-solid:#f8fbff;
  --ui-ink:#142033;
  --ui-muted:#718094;
  --ui-line:rgba(74,105,140,.18);
  --ui-blue:#0d4d86;
  --ui-blue-2:#1687ee;
  --ui-blue-soft:#dcecff;
  --ui-shadow:0 22px 55px rgba(37,56,82,.18);
  --ui-shadow-soft:0 10px 26px rgba(37,56,82,.12);
  --ui-radius:24px;
  --ui-radius-sm:14px;
}
body{background:var(--ui-bg);color:var(--ui-ink)}
.hero{background:linear-gradient(135deg,#c8d3df 0%,#eef6ff 42%,#b8c4d1 100%)}
.hero:before{content:"";position:absolute;inset:0;border-radius:0;background:rgba(248,252,255,.32);box-shadow:inset 0 0 0 1px rgba(255,255,255,.45),0 30px 80px rgba(37,56,82,.16);pointer-events:none}
.macbook{filter:drop-shadow(0 28px 45px rgba(37,56,82,.22))}
.screen{background:linear-gradient(180deg,#50a7ef 0%,#1687ee 48%,#0d4d86 100%);border-radius:18px 18px 8px 8px}
.screen-bezel{background:#253040;border-radius:28px 28px 0 0;padding:0 18px 16px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.06)}
.notch{background:#253040}
.hinge{background:linear-gradient(90deg,#8794a4,#c9d2dc,#8794a4)}
.base{background:linear-gradient(#e2e7ee,#aab4c1 42%,#d8dee7);box-shadow:inset 0 1px rgba(255,255,255,.7)}
.shadow{background:radial-gradient(ellipse at center,rgba(37,56,82,.22),transparent 70%)}
.pill-nav{--nav-x:10px;--nav-w:92px;gap:10px;padding:8px 10px;border-radius:999px;background:rgba(255,255,255,.86);border:1px solid rgba(255,255,255,.72);box-shadow:0 18px 42px rgba(37,56,82,.18);backdrop-filter:blur(22px);overflow:hidden}
.pill-nav-indicator{position:absolute;left:0;top:8px;z-index:0;width:var(--nav-w);height:62px;border-radius:999px;background:linear-gradient(180deg,rgba(230,244,255,.96),rgba(203,228,246,.9));box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 10px 26px rgba(37,56,82,.12);transform:translate3d(var(--nav-x),0,0);transition:transform .46s cubic-bezier(.2,1.15,.25,1),width .46s cubic-bezier(.2,1.15,.25,1)}
.pill-nav button{position:relative;z-index:1;display:grid;grid-template-rows:28px auto;place-items:center;min-width:92px;min-height:62px;padding:8px 22px 9px;border:0;border-radius:999px;background:transparent;color:#99a2ad;font-weight:800;overflow:hidden;transition:color .24s ease,transform .24s cubic-bezier(.16,1,.3,1)}
.pill-nav button:before{content:"";position:absolute;inset:0;z-index:0;border-radius:inherit;background:linear-gradient(180deg,#43a8f7,#1687ee);opacity:0;transform:scale(.88);transition:opacity .2s ease,transform .28s cubic-bezier(.2,1.15,.25,1)}
.pill-nav button:hover{color:#fff;transform:translateY(-2px)}
.pill-nav button:hover:before{opacity:1;transform:scale(1)}
.pill-nav button.active{background:transparent;color:#1687ee;animation:navActiveIn .34s cubic-bezier(.2,1.15,.25,1)}
.pill-nav .nav-icon{position:relative;z-index:1;display:block;width:27px;height:27px;fill:currentColor;stroke:currentColor;stroke-width:0;transition:transform .28s cubic-bezier(.16,1,.3,1),color .24s ease}
.pill-nav button[data-tab="system"] .nav-icon path:last-child{fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round}
.pill-nav button span{position:relative;z-index:1;margin:0;opacity:1;color:currentColor;font:800 13px/1.15 -apple-system,BlinkMacSystemFont,"Noto Sans SC","PingFang SC",sans-serif}
.pill-nav button.active .nav-icon{transform:translateY(-2px) scale(1.08)}
@keyframes navActiveIn{0%{transform:translateY(5px) scale(.95)}68%{transform:translateY(-2px) scale(1.04)}100%{transform:translateY(0) scale(1)}}
.site-shell,.works-page,.system-page{background:linear-gradient(135deg,#d7e1ec 0%,#edf6ff 38%,#cdd8e4 100%);color:var(--ui-ink)}
.site-shell{padding:28px clamp(18px,4vw,70px) 118px}
.topbar{min-height:58px;padding:0 14px;border:1px solid rgba(255,255,255,.65);border-radius:999px;background:rgba(248,252,255,.72);box-shadow:var(--ui-shadow-soft);backdrop-filter:blur(20px)}
.topbar button{border-radius:999px;padding:9px 13px;color:#4a596d}
.topbar button:hover{background:#fff;text-decoration:none;color:var(--ui-blue)}
.topbar-admin-link{display:inline-flex;align-items:center;justify-content:center;min-height:34px;border:1px solid var(--ui-line);border-radius:999px;padding:0 14px;background:rgba(255,255,255,.7);color:#4a596d;text-decoration:none;font-size:14px;font-weight:800;transition:.18s}
.topbar-admin-link:hover{background:#fff;color:var(--ui-blue);transform:translateY(-1px)}
.topbar-admin-link.primary{background:linear-gradient(180deg,var(--ui-blue-2),#0d5fa9);border-color:transparent;color:#fff;box-shadow:0 10px 24px rgba(13,95,169,.18)}
.topbar-admin-link.primary:hover{background:var(--ui-blue);color:#fff}
.topbar-admin-bridge{display:none!important}
.admin-only-hidden,.guest-only-hidden,.logged-in-only-hidden{display:none!important}
.star-marquee{color:#8ba1b8;opacity:.7}
.os-board{gap:22px}
.portrait-card,.readme-panel,.chat-panel,.work-strip,.terminal-window,.system-canvas-panel,.os-window,.works-file-card,.works-category,.canvas-record-card,.canvas-record-empty,.works-canvas-card,.works-canvas-palette,.works-canvas-template-modal,.works-canvas-layer-modal{
  border:1px solid rgba(255,255,255,.78)!important;
  border-radius:var(--ui-radius)!important;
  background:var(--ui-card)!important;
  box-shadow:var(--ui-shadow)!important;
  color:var(--ui-ink);
}
.portrait-card,.readme-panel,.chat-panel{backdrop-filter:blur(18px)}
.portrait-art{border-radius:20px;background:linear-gradient(135deg,#a9d6e7,#247ac4 62%,#0d4d86);box-shadow:inset 0 0 0 1px rgba(255,255,255,.42)}
.portrait-card p,.works-page h1,.system-page h1,.work-strip h1{letter-spacing:-.02em;color:var(--ui-ink)}
.app-card{border:1px solid rgba(255,255,255,.78);border-radius:18px;background:var(--ui-card-solid)!important;box-shadow:var(--ui-shadow-soft);color:var(--ui-ink)}
.app-card:hover,.app-card.selected{box-shadow:0 16px 34px rgba(37,56,82,.2);transform:translateY(-2px)}
.app-card:nth-child(n){background:var(--ui-card-solid)!important}
.app-card small,.works-file-card span,.works-grid span,.work-grid span{color:var(--ui-blue-2)}
.app-card strong,.works-file-card strong,.works-grid strong,.work-grid strong{color:var(--ui-ink)}
.work-strip{background:rgba(248,252,255,.78)!important;color:var(--ui-ink);padding:30px}
.work-strip p{color:var(--ui-blue)}
.work-grid article,.works-grid article,.system-board div{
  border:1px solid rgba(255,255,255,.76);
  border-radius:22px;
  background:rgba(248,252,255,.82)!important;
  box-shadow:var(--ui-shadow-soft);
  color:var(--ui-ink);
}
.work-grid small,.works-grid small,.works-page p,.system-page p,.system-board span{color:var(--ui-muted)}
.readme-panel button,.folder-body button,.os-body button,.works-add-file,.works-canvas-records,.canvas-record-head a,.canvas-record-empty a{
  border:1px solid rgba(74,105,140,.16)!important;
  border-radius:999px!important;
  background:#fff!important;
  box-shadow:none!important;
  color:var(--ui-blue);
}
.readme-panel button:hover,.folder-body button:hover,.os-body button:hover,.works-add-file:hover,.works-canvas-records:hover{
  transform:none;
  background:var(--ui-blue)!important;
  color:#fff!important;
}
.works-add-file,.works-canvas-template-open,.doc-edit-btn{background:linear-gradient(180deg,var(--ui-blue-2),#0d5fa9)!important;color:#fff!important}
.editor-save{display:flex!important;align-items:center!important;justify-content:center!important;text-align:center!important;border:1px solid var(--ui-line)!important;border-radius:999px!important;background:#fff!important;color:var(--ui-ink)!important;font-weight:900!important}
.editor-save:hover{background:var(--ui-blue)!important;color:#fff!important}
.works-canvas-records{background:#fff!important}
.bubble.user{background:linear-gradient(180deg,var(--ui-blue-2),#0d5fa9)}
.bubble.agent,.chat-search,.chat-input{background:rgba(255,255,255,.72);border:1px solid var(--ui-line)}
.terminal-window{background:linear-gradient(180deg,#0d4d86,#0b315c)!important;color:#fff}
.terminal-window .terminal-titlebar,.terminal-titlebar.dark{border-bottom:1px solid rgba(255,255,255,.16)}
.term-command b,.terminal-form span,.prompt{color:#8dccff}
.os-window{overflow:hidden}
.os-window-bar{background:rgba(238,246,255,.92);border-bottom:1px solid var(--ui-line);height:42px}
.os-window-bar span{color:#526177;font-weight:800}
.os-body{background:rgba(248,252,255,.88);overscroll-behavior:contain}
.os-body input,.os-body textarea,.os-body select,.link-import-row input,.works-canvas-palette input,.works-canvas-palette textarea,.works-canvas-palette select,.works-canvas-layer-modal input{
  border:1px solid rgba(74,105,140,.18)!important;
  border-radius:14px!important;
  background:#fff!important;
  color:var(--ui-ink)!important;
}
.link-import-box{border:1px solid rgba(74,105,140,.16)!important;border-radius:18px!important;background:rgba(237,246,255,.86)!important}
.works-page,.system-page{padding:clamp(40px,6vw,76px)}
.works-files-grid{gap:16px}
.works-file-card{min-height:116px}
.works-file-card:hover{transform:translateY(-2px);box-shadow:0 20px 42px rgba(37,56,82,.2)!important}
.works-file-card em{background:var(--ui-blue-soft);color:var(--ui-blue)}
.works-file-delete,.works-category-delete{background:#e14f66}
.system-canvas-panel{background:rgba(248,252,255,.78)!important}
.system-canvas-bar{background:rgba(248,252,255,.86);color:var(--ui-ink);border-bottom:1px solid var(--ui-line)}
.system-canvas-bar a{border:1px solid var(--ui-line);background:var(--ui-blue);color:#fff}
.system-fullscreen{height:100vh;min-height:100vh;padding:0!important;overflow:hidden;background:#f8fbff!important}
.system-fullscreen .system-canvas-panel{position:fixed;inset:0;z-index:1;margin:0!important;border:0!important;border-radius:0!important;background:#f8fbff!important;box-shadow:none!important;overflow:hidden}
.system-fullscreen .system-canvas-panel iframe{display:block;width:100vw!important;height:100vh!important;min-height:100vh!important;border:0!important;background:#f8fbff}
.works-canvas-overlay{background:linear-gradient(135deg,#e8f1fb,#f8fbff);color:var(--ui-ink)}
.works-canvas-sidebar{background:rgba(248,252,255,.86);border-right:1px solid var(--ui-line)}
.works-canvas-stage{background:#f8fbff}
.works-canvas-stage:before{background-image:radial-gradient(rgba(22,135,238,.22) 1px,transparent 1px)}
.works-canvas-brand{color:var(--ui-blue);border-bottom:1px solid var(--ui-line)}
.works-canvas-brand i{background:var(--ui-blue);color:#fff;border:0}
.works-canvas-layer{border-radius:14px;color:#536477}
.works-canvas-layer.active{background:var(--ui-blue-soft);color:var(--ui-blue)}
.works-canvas-layer i{background:var(--ui-blue-2)}
.works-canvas-new,.works-canvas-template-grid button,.works-canvas-inspector-actions button,.works-canvas-layer-modal button,.works-canvas-zoom,.works-canvas-bottom,.works-canvas-top{
  border:1px solid rgba(74,105,140,.16)!important;
  background:rgba(248,252,255,.86)!important;
  box-shadow:var(--ui-shadow-soft);
}
.works-canvas-template-grid button{border-radius:18px}
.works-canvas-card{border-radius:18px!important;background:#fff!important}
.works-canvas-card.active{outline:3px solid rgba(22,135,238,.55)}
.works-canvas-card.connect-pending{outline:3px solid var(--ui-blue)}
.works-canvas-card b{color:var(--ui-blue)}
.works-canvas-card p{color:#526177}
.works-canvas-card.sticky,.works-canvas-card.quote,.works-canvas-card.link,.works-canvas-card.image{background:#fff!important;border-color:rgba(74,105,140,.16)!important}
.works-link-port{background:var(--ui-blue-2)}
.works-canvas-links path{stroke:#70aee8}
body.desktop-mode{background:#f5fbff}
body.desktop-mode #page-home,body.desktop-mode .site-shell{background:linear-gradient(180deg,#f9fdff 0%,#edf7ff 40%,#dff1ff 100%);color:#0b1f3a}
body.desktop-mode .site-shell:before{opacity:.78;background:radial-gradient(circle at 18% 0%,rgba(255,255,255,.9),transparent 34%),radial-gradient(circle at 82% 22%,rgba(97,174,244,.22),transparent 30%),linear-gradient(90deg,rgba(255,255,255,.66),rgba(213,236,255,.34));filter:saturate(1.02)}
body.desktop-mode .site-shell:after{content:"";position:absolute;inset:0;pointer-events:none;z-index:1;background-image:radial-gradient(circle,rgba(70,151,224,.12) 0 1px,transparent 1.7px);background-size:32px 32px;background-position:12px 12px;opacity:.5}
body.desktop-mode .topbar{height:47px;min-height:47px;padding:0 25px;background:rgba(255,255,255,.84);border-bottom:1px solid #cfe0f3!important;border-radius:0!important;box-shadow:0 7px 24px rgba(39,86,135,.06);backdrop-filter:blur(18px)}
body.desktop-mode .topbar button,body.desktop-mode .topbar time{height:28px;color:#122548;text-shadow:none;font-size:13px}
body.desktop-mode .topbar button:first-child{display:inline-flex;align-items:center;gap:8px;color:#112344;font-style:normal;font-size:16px;font-weight:950}
body.desktop-mode .topbar button:first-child:before{content:"";width:20px;height:20px;border-radius:50%;background:conic-gradient(from 20deg,#0066dc,#1e8dff,#004bb8,#0066dc);box-shadow:inset 0 0 0 2px rgba(255,255,255,.8)}
body.desktop-mode .topbar button:first-child:after{content:"";display:none}
body.desktop-mode .topbar-admin-link{display:inline-flex;align-items:center;height:28px;border:1px solid #d6e3f2!important;border-radius:999px!important;background:#f7fbff!important;color:#24405f!important;padding:0 14px!important;font-size:13px;font-weight:800;text-decoration:none}
body.desktop-mode .topbar-admin-link.primary{background:#075ee6!important;color:#fff!important;border-color:#075ee6!important}
body.desktop-mode .topbar button:hover,body.desktop-mode .topbar-admin-link:hover,body.desktop-mode .topbar-admin-link.primary:hover{background:#fff;color:#071b35;text-shadow:none;text-decoration:none}
body.desktop-mode .topbar time{position:relative;margin-left:auto;padding-left:62px;color:#263f5d;font-weight:800}
body.desktop-mode .topbar time:before{content:"";position:absolute;left:5px;top:5px;width:17px;height:17px;border:1.8px solid #315071;border-radius:50%;box-shadow:10px -5px 0 -8px #f0445d}
body.desktop-mode .topbar time:after{content:"";position:absolute;left:36px;top:2px;width:24px;height:24px;border-radius:50%;background:linear-gradient(180deg,#78b9ff,#1977e6);box-shadow:inset 0 0 0 5px rgba(255,255,255,.55)}
body.desktop-mode .desktop-tools,body.desktop-mode .selection-actions{background:rgba(248,252,255,.82);border:1px solid rgba(255,255,255,.5);box-shadow:var(--ui-shadow-soft)}
body.desktop-mode .desktop-tools button{background:#fff;color:var(--ui-blue)}
body.desktop-mode .app-card{grid-template-rows:58px 1fr;background:transparent!important;box-shadow:none!important}
body.desktop-mode .app-card .file-thumb{display:grid}
body.desktop-mode .app-card:before{border-radius:13px;background:#f8fbff;box-shadow:0 7px 18px rgba(18,47,82,.18)}
body.desktop-mode .app-card[data-window]:before{background:linear-gradient(180deg,#ffe477,#f2c947)}
body.desktop-mode .app-card[data-folder]:before{background:linear-gradient(180deg,#ffe477,#f2c947);border-radius:13px}
body.desktop-mode .app-card[data-command]:before,body.desktop-mode .app-card[data-url]:before{display:none}
body.desktop-mode .app-card.selected{background:rgba(255,255,255,.2)!important}
body.desktop-mode .app-card.selected:before{background:linear-gradient(180deg,var(--ui-blue-2),var(--ui-blue));box-shadow:0 0 0 3px rgba(255,255,255,.78),0 10px 22px rgba(18,47,82,.26)}
body.desktop-mode .app-card[data-command]:after{background:var(--ui-blue)}
body.desktop-mode .app-card[data-command]:after,body.desktop-mode .app-card[data-url]:after{display:none}
body.desktop-mode .file-thumb{position:relative;width:56px;height:56px;place-items:center;border-radius:18px;background:linear-gradient(145deg,rgba(255,255,255,.82),rgba(235,247,255,.52));box-shadow:inset 0 0 0 1px rgba(255,255,255,.72),0 10px 24px rgba(18,47,82,.18)}
body.desktop-mode .file-thumb:before{content:"";position:absolute;left:13px;top:8px;width:32px;height:39px;border-radius:8px 13px 9px 9px;background:linear-gradient(160deg,var(--file-a),var(--file-b));box-shadow:0 9px 15px var(--file-shadow)}
body.desktop-mode .file-thumb:after{content:"";position:absolute;right:11px;top:8px;width:13px;height:13px;border-radius:0 12px 0 4px;background:linear-gradient(135deg,rgba(255,255,255,.72),rgba(255,255,255,.2));box-shadow:-2px 2px 5px rgba(18,47,82,.08)}
body.desktop-mode .file-thumb b{position:relative;z-index:2;margin-top:9px;min-width:30px;border-radius:6px;padding:3px 4px;background:rgba(255,255,255,.72);color:var(--file-text);font:900 10px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:.2px;box-shadow:0 3px 7px rgba(18,47,82,.12)}
body.desktop-mode .file-thumb i{position:absolute;z-index:2;left:17px;top:21px;width:20px;height:3px;border-radius:999px;background:rgba(255,255,255,.64);box-shadow:0 7px 0 rgba(255,255,255,.54)}
body.desktop-mode .file-thumb em{position:absolute;z-index:2;left:18px;top:14px;width:11px;height:11px;border-radius:50%;background:rgba(255,255,255,.68);opacity:.9}
body.desktop-mode .app-card[data-ext=".md"]{--file-a:#42b9ff;--file-b:#0d62ad;--file-text:#0d4d86;--file-shadow:rgba(13,77,134,.24)}
body.desktop-mode .app-card[data-ext=".txt"]{--file-a:#a8b9ca;--file-b:#60748d;--file-text:#44566c;--file-shadow:rgba(68,86,108,.24)}
body.desktop-mode .app-card[data-ext=".json"]{--file-a:#b66cff;--file-b:#5c42d8;--file-text:#5135b9;--file-shadow:rgba(81,53,185,.24)}
body.desktop-mode .app-card[data-ext=".csv"]{--file-a:#63d98b;--file-b:#168f56;--file-text:#127047;--file-shadow:rgba(18,112,71,.24)}
body.desktop-mode .app-card[data-ext=".html"]{--file-a:#ffb15f;--file-b:#f05c28;--file-text:#b6421f;--file-shadow:rgba(180,66,31,.24)}
body.desktop-mode .app-card[data-ext=".pdf"]{--file-a:#ff8a7e;--file-b:#e23835;--file-text:#ba2525;--file-shadow:rgba(186,37,37,.24)}
body.desktop-mode .app-card:not([data-ext=".md"]):not([data-ext=".txt"]):not([data-ext=".json"]):not([data-ext=".csv"]):not([data-ext=".html"]):not([data-ext=".pdf"]){--file-a:#8bc9ff;--file-b:#2b83d3;--file-text:#0d4d86;--file-shadow:rgba(13,77,134,.24)}
body.desktop-mode .app-card.agent-card{display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;width:150px;height:168px;border:1px solid #cfe0f3;border-radius:10px!important;padding:12px 10px 46px;background:rgba(255,255,255,.88)!important;color:#162236;text-align:left;box-shadow:0 8px 24px rgba(31,89,153,.08)!important;backdrop-filter:blur(18px);overflow:hidden;cursor:pointer}
body.desktop-mode .app-card.agent-card:hover,body.desktop-mode .app-card.agent-card.selected{transform:translateY(-1px);box-shadow:0 12px 28px rgba(31,89,153,.14)!important}
body.desktop-mode .app-card.agent-card.selected{background:rgba(255,255,255,.96)!important;border-color:#0b67e9;box-shadow:0 0 0 2px rgba(11,103,233,.2),0 12px 28px rgba(31,89,153,.14)!important}
body.desktop-mode .app-card.agent-card:before,body.desktop-mode .app-card.agent-card:after{display:none!important}
body.desktop-mode .agent-card-head{display:grid;grid-template-columns:36px 1fr;gap:9px;align-items:center;min-width:0;min-height:38px}
body.desktop-mode .agent-avatar{display:grid;place-items:center;width:36px;height:36px;border-radius:12px;background:linear-gradient(160deg,#e5f2ff,#7ec1ff);color:#0d5fa9;font:900 14px/1 ui-monospace,SFMono-Regular,Menlo,monospace;box-shadow:inset 0 0 0 1px rgba(255,255,255,.8),0 8px 18px rgba(13,95,169,.12)}
body.desktop-mode .agent-card-title{min-width:0}
body.desktop-mode .app-card.agent-card strong{display:-webkit-box;max-width:none;max-height:2.5em;color:#162236;font:950 12px/1.25 -apple-system,BlinkMacSystemFont,"Noto Sans SC","PingFang SC",sans-serif;text-shadow:none;letter-spacing:0;word-break:break-word;overflow:hidden;-webkit-line-clamp:2;-webkit-box-orient:vertical}
body.desktop-mode .app-card.agent-card small{display:block;margin:2px 0 0;color:#5e7189;font:800 9px/1.2 ui-monospace,SFMono-Regular,Menlo,monospace;opacity:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
body.desktop-mode .agent-card-meta{display:grid;gap:5px;margin:9px 0 0;min-height:38px;padding-right:2px}
body.desktop-mode .agent-meta-row{display:grid;grid-template-columns:34px minmax(0,1fr);gap:6px;align-items:center;min-width:0;color:#3d536d;font:800 9px/1.2 -apple-system,BlinkMacSystemFont,"Noto Sans SC","PingFang SC",sans-serif}
body.desktop-mode .agent-meta-row span:first-child{color:#7890aa;font-weight:900}
body.desktop-mode .agent-meta-row span:last-child{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
body.desktop-mode .agent-tool-line{position:absolute;left:10px;right:10px;bottom:43px;display:flex;gap:4px;height:18px;min-height:18px;overflow:hidden}
body.desktop-mode .agent-tool-chip{flex:1 1 0;min-width:0;max-width:none;border-radius:6px;padding:4px 5px;background:#eaf4ff;color:#0b67e9;font:900 9px/1 -apple-system,BlinkMacSystemFont,"Noto Sans SC","PingFang SC",sans-serif;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
body.desktop-mode .agent-chat-btn{position:absolute;left:10px;right:10px;bottom:10px;height:26px;min-height:26px;margin-top:0;border:0;border-radius:6px;background:#075ee6;color:#fff;font-size:12px;font-weight:900;box-shadow:0 8px 18px rgba(7,94,230,.16);transition:.18s}
body.desktop-mode .agent-chat-btn:hover{background:#0d4d86;transform:translateY(-1px)}
body.desktop-mode .agent-window{width:min(640px,92vw)}
body.desktop-mode .agent-chat-body{display:grid;gap:14px;min-width:min(560px,76vw)}
body.desktop-mode .agent-summary{display:grid;grid-template-columns:56px 1fr;gap:12px;align-items:center;padding:14px;border:1px solid #d7e6f5;border-radius:16px;background:linear-gradient(145deg,#f8fcff,#eaf6ff)}
body.desktop-mode .agent-summary .agent-avatar{width:56px;height:56px;border-radius:18px;font-size:21px}
body.desktop-mode .agent-summary h3{margin:0;color:#162236;font-size:20px}
body.desktop-mode .agent-summary p{margin:5px 0 0;color:#52677f;line-height:1.5}
body.desktop-mode .agent-detail-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
body.desktop-mode .agent-detail-grid div{border:1px solid #dbe8f5;border-radius:13px;padding:10px;background:#fff}
body.desktop-mode .agent-detail-grid b{display:block;color:#7890aa;font-size:11px;margin-bottom:4px}
body.desktop-mode .agent-detail-grid span{display:block;color:#162236;font-weight:800;font-size:12px;line-height:1.4}
body.desktop-mode .agent-detail-grid select{display:block;width:100%;height:34px;border:1px solid #d5e4f3;border-radius:10px;background:#f8fcff;color:#162236;padding:0 9px;font-size:12px;font-weight:800;outline:0}
body.desktop-mode .agent-detail-grid select[multiple]{height:82px;padding:6px 8px}
body.desktop-mode .agent-detail-grid select:focus{border-color:#155b96;box-shadow:0 0 0 3px rgba(21,91,150,.12)}
body.desktop-mode .agent-chat-log{display:grid;gap:8px;max-height:220px;overflow:auto;padding:10px;border-radius:16px;background:#f7fbff;border:1px solid #dce9f6}
body.desktop-mode .agent-bubble{max-width:88%;border-radius:14px;padding:10px 12px;color:#203248;line-height:1.55;background:#fff;box-shadow:0 6px 18px rgba(18,47,82,.07)}
body.desktop-mode .agent-bubble.user{justify-self:end;background:#155b96;color:#fff}
body.desktop-mode .agent-compose{display:grid;grid-template-columns:1fr auto;align-items:center;gap:8px}
body.desktop-mode .agent-compose input{height:40px;border:1px solid #d5e4f3;border-radius:999px;padding:0 14px;outline:0}
body.desktop-mode .agent-compose button{display:inline-flex!important;align-items:center;justify-content:center;width:auto!important;height:40px;min-width:78px;margin:0!important;border:1px solid #155b96!important;border-radius:999px;background:#155b96!important;color:#fff!important;padding:0 16px!important;font-weight:900;text-align:center!important;box-shadow:none!important;transition:background .18s ease,color .18s ease,border-color .18s ease,box-shadow .18s ease}
body.desktop-mode .agent-compose button:hover{background:#fff!important;color:#111827!important;border-color:#d5e4f3!important;box-shadow:0 8px 18px rgba(18,47,82,.1)!important}
body.desktop-mode .os-window{background:var(--ui-card-solid)!important;color:var(--ui-ink)}
body.desktop-mode .pill-nav{background:rgba(255,255,255,.84)}
.desktop-dashboard-left,.desktop-dashboard-right{display:none}
body.desktop-mode .os-board{display:block;position:absolute;left:50%;top:var(--desktop-top,62px);width:1396px;height:var(--desktop-board-height,930px);z-index:3;overflow:visible;pointer-events:none;transform:translateX(-50%) scale(var(--desktop-scale,1));transform-origin:top center}
body.desktop-mode .desktop-dashboard-left{display:block;position:static;overflow:visible;pointer-events:auto}
body.desktop-mode .os-board{--agent-gap:16px;--agent-row-gap:16px;--agent-lower-height:112px;--agent-lower-bottom:16px;--agent-lower-offset:144px;--agent-side-width:262px;--agent-main-right:calc(var(--agent-side-width) + var(--agent-gap));--agent-category-width:calc((100% - var(--agent-main-right) - (var(--agent-gap) * 4)) / 5)}
body.desktop-mode .desktop-dashboard-right{display:block;position:absolute;right:0;top:60px;bottom:var(--agent-lower-offset);width:var(--agent-side-width);overflow:hidden;pointer-events:auto}
body.desktop-mode .desktop-surface{position:absolute;left:calc(var(--agent-category-width) + var(--agent-gap));right:var(--agent-main-right);top:176px;bottom:var(--agent-lower-offset);min-height:0;height:auto;border:1px solid rgba(192,213,239,.92);border-radius:16px;background:rgba(255,255,255,.72);box-shadow:0 14px 34px rgba(41,92,148,.09);backdrop-filter:blur(18px);overflow:hidden;overscroll-behavior:contain;pointer-events:auto}
body.desktop-mode .desktop-surface:before{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 50% 20%,rgba(255,255,255,.55),transparent 28%),linear-gradient(120deg,rgba(255,255,255,.28),transparent 45%);opacity:.74}
body.desktop-mode .agent-dashboard-title{position:absolute;left:0;top:0;display:grid;gap:4px;color:#0f2a44}
body.desktop-mode .agent-dashboard-title span{font-size:24px;font-weight:950;letter-spacing:.2px}
body.desktop-mode .agent-dashboard-title small{color:#486887;font-size:12px;font-weight:800}
body.desktop-mode .agent-stat-grid{position:absolute;left:0;right:var(--agent-main-right);top:60px;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:var(--agent-gap)}
body.desktop-mode .agent-stat-grid article,body.desktop-mode .agent-board-panel,body.desktop-mode .agent-resource-panel,body.desktop-mode .agent-announcement-panel,body.desktop-mode .agent-detail-card,body.desktop-mode .agent-advice-card{border:1px solid rgba(255,255,255,.76);border-radius:22px;background:linear-gradient(145deg,rgba(255,255,255,.86),rgba(229,244,255,.66));box-shadow:0 18px 42px rgba(18,47,82,.13);backdrop-filter:blur(18px);color:#162236}
body.desktop-mode .agent-stat-grid article{position:relative;overflow:hidden;min-height:100px;padding:15px 74px 13px 16px;border-radius:14px;background:rgba(255,255,255,.8)}
body.desktop-mode .agent-stat-grid article:before{display:none}
body.desktop-mode .agent-stat-grid article:after{content:"";position:absolute;right:-18px;bottom:-28px;width:108px;height:76px;border-radius:50%;background:radial-gradient(circle,rgba(32,132,222,.28),transparent 68%)}
body.desktop-mode .agent-stat-grid small{display:block;color:#617890;font-size:11px;font-weight:900;white-space:nowrap}
body.desktop-mode .agent-stat-grid b{display:block;margin-top:7px;color:#0f2a44;font-size:27px;line-height:1;letter-spacing:0;white-space:nowrap}
body.desktop-mode .agent-stat-grid b.is-counting{animation:agentStatCount 1.35s cubic-bezier(.22,1,.36,1) both;will-change:transform,filter}
@keyframes agentStatCount{0%{opacity:.48;transform:translateY(4px) scale(.96);filter:blur(.3px)}38%{opacity:1;transform:translateY(0) scale(1.045);filter:none}72%{transform:scale(.99)}100%{opacity:1;transform:none;filter:none}}
body.desktop-mode .agent-stat-grid span{display:block;margin-top:12px;color:#5c7188;font-size:10px;font-weight:800;white-space:nowrap}
body.desktop-mode .agent-stat-grid span em{color:#20b877;font-style:normal;font-weight:950}
body.desktop-mode .agent-stat-grid i{--stat-tone:#2384ee;position:absolute;right:8px;top:13px;z-index:2;display:grid;place-items:center;width:70px;height:70px;color:color-mix(in srgb,var(--stat-tone) 72%,#173858);filter:drop-shadow(0 13px 18px color-mix(in srgb,var(--stat-tone) 18%,transparent))}
body.desktop-mode .agent-stat-grid i:before,body.desktop-mode .agent-stat-grid i:after{content:none;display:none}
body.desktop-mode .agent-stat-grid i>[id^="stat"]{position:relative;z-index:2;display:grid;place-items:center}
body.desktop-mode .agent-stat-grid i>[id^="stat"]>.ant-app{display:grid;place-items:center}
body.desktop-mode .agent-stat-grid .agent-stat-ant-icon{display:grid;place-items:center;width:70px;height:70px;margin:0;color:inherit;text-shadow:0 1px 0 rgba(255,255,255,.48)}
body.desktop-mode .agent-stat-grid .agent-stat-ant-icon img{display:block;width:100%;height:100%;border-radius:18px;object-fit:contain;mix-blend-mode:normal}
body.desktop-mode .agent-stat-grid .agent-stat-ant-icon .anticon{font-size:25px;filter:drop-shadow(0 2px 4px rgba(22,58,93,.14))}
body.desktop-mode .agent-stat-grid .agent-stat-ant-icon svg{width:1em;height:1em;fill:currentColor;stroke:none}
body.desktop-mode .agent-stat-grid article[data-tone="green"] i{--stat-tone:#23c55e}
body.desktop-mode .agent-stat-grid article[data-tone="cyan"] i{--stat-tone:#2788f4}
body.desktop-mode .agent-stat-grid article[data-tone="orange"] i{--stat-tone:#ff9418}
body.desktop-mode .agent-stat-grid article[data-tone="purple"] i{--stat-tone:#8758ea}
body.desktop-mode .agent-stat-grid article[data-tone="green"]:after{background:radial-gradient(circle,rgba(35,190,100,.18),transparent 68%)}
body.desktop-mode .agent-stat-grid article[data-tone="orange"]:after{background:radial-gradient(circle,rgba(255,148,24,.17),transparent 68%)}
body.desktop-mode .agent-stat-grid article[data-tone="purple"]:after{background:radial-gradient(circle,rgba(132,87,232,.16),transparent 68%)}
body.desktop-mode .agent-board-panel,body.desktop-mode .agent-resource-panel,body.desktop-mode .agent-announcement-panel,body.desktop-mode .agent-detail-card,body.desktop-mode .agent-advice-card{padding:16px}
body.desktop-mode .agent-board-panel{position:absolute;left:0;top:176px;width:var(--agent-category-width);bottom:var(--agent-lower-offset);overflow:hidden;border-radius:14px;background:rgba(255,255,255,.78);box-shadow:0 14px 34px rgba(18,47,82,.1)}
body.desktop-mode .agent-panel-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:12px}
body.desktop-mode .agent-panel-head b{font-size:14px;color:#0f2a44}
body.desktop-mode .agent-panel-head span{border-radius:999px;background:rgba(21,91,150,.08);color:#155b96;padding:4px 8px;font-size:11px;font-weight:900}
body.desktop-mode .agent-category-collapse{display:inline-flex;align-items:center;justify-content:center;height:26px;border:1px solid transparent;border-radius:999px;background:rgba(21,91,150,.08);color:#155b96;padding:0 9px;font-size:11px;font-weight:900}
body.desktop-mode .agent-category-collapse:hover{border-color:#b8d6f3;background:#fff;color:#075ee6}
body.desktop-mode .agent-board-list{display:grid;gap:6px;max-height:calc(100% - 92px);overflow:hidden}
body.desktop-mode .agent-board-list>.ant-app{display:contents}
body.desktop-mode .agent-board-item{display:grid;grid-template-columns:1fr auto;gap:8px;align-items:center;border:1px solid transparent;border-radius:9px;background:transparent;padding:12px 10px;color:#24364b}
body.desktop-mode .agent-board-item.active,body.desktop-mode .agent-board-item:hover{background:#eef6ff;border-color:#d4e7fb;color:#075ee6}
body.desktop-mode .agent-board-item b{display:flex;align-items:center;gap:8px;min-width:0;overflow:hidden;white-space:nowrap;font-size:12px}
body.desktop-mode .agent-board-item b .anticon{flex:none;color:#66809c;font-size:15px}
body.desktop-mode .agent-board-item b span{min-width:0;overflow:hidden;text-overflow:ellipsis}
body.desktop-mode .agent-board-item>span{border-radius:999px;background:#edf4fb;color:#47637f;padding:4px 8px;font-size:10px;font-weight:900}
body.desktop-mode .agent-board-item.active b .anticon{color:#075ee6}
body.desktop-mode .agent-board-item.active>span{background:#dcecff;color:#075ee6}
body.desktop-mode .agent-category-actions{position:absolute;left:16px;right:16px;bottom:14px}
body.desktop-mode .agent-category-actions .ant-space-compact{width:100%}
body.desktop-mode .agent-category-actions .ant-btn{height:36px;font-size:12px;font-weight:400}
body.desktop-mode .agent-category-actions .ant-btn:first-child{flex:1}
body.desktop-mode .os-board.agent-categories-collapsed .agent-board-panel{width:58px;padding:12px 8px}
body.desktop-mode .os-board.agent-categories-collapsed .agent-board-panel .agent-panel-head{justify-content:center;margin:0}
body.desktop-mode .os-board.agent-categories-collapsed .agent-board-panel .agent-panel-head b,
body.desktop-mode .os-board.agent-categories-collapsed .agent-board-list,
body.desktop-mode .os-board.agent-categories-collapsed .agent-category-actions{display:none}
body.desktop-mode .os-board.agent-categories-collapsed .agent-category-collapse{width:40px;padding:0;font-size:0}
body.desktop-mode .os-board.agent-categories-collapsed .agent-category-collapse:after{content:"»";font-size:16px}
body.desktop-mode .os-board.agent-categories-collapsed .desktop-surface{left:calc(58px + var(--agent-gap))}
body.desktop-mode .agent-lower-panels{position:absolute;left:0;right:0;bottom:var(--agent-lower-bottom);height:var(--agent-lower-height);display:grid;grid-template-columns:1.25fr 1fr;gap:var(--agent-gap)}
body.desktop-mode .agent-resource-panel,body.desktop-mode .agent-announcement-panel{min-width:0;overflow:hidden;border-radius:14px;background:rgba(255,255,255,.8);padding:12px 16px}
body.desktop-mode .agent-lower-panels .agent-panel-head{margin-bottom:7px}
body.desktop-mode .agent-resource-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px}
body.desktop-mode .agent-resource-grid>div{position:relative;display:grid;grid-template-columns:1fr auto;gap:4px 10px;min-width:0}
body.desktop-mode .agent-resource-grid>div+div:before{content:"";position:absolute;left:-14px;top:2px;bottom:2px;width:1px;background:#d9e8f6}
body.desktop-mode .agent-resource-grid small{grid-column:1/-1;color:#6d8197;font-size:9px;font-weight:900}
body.desktop-mode .agent-resource-grid strong{grid-column:1/-1;color:#17304a;font-size:15px;line-height:1}
body.desktop-mode .agent-resource-grid strong em{color:#8395a8;font-size:9px;font-style:normal}
body.desktop-mode .agent-progress{align-self:center;height:7px;border-radius:999px;background:#eaf2fb;overflow:hidden}
body.desktop-mode .agent-progress i{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,#63a9f5,#247be7)}
body.desktop-mode .agent-resource-grid>div>b{color:#6d8197;font-size:9px}
body.desktop-mode .agent-announcement-row{display:grid;grid-template-columns:7px minmax(0,1fr) auto;gap:8px;align-items:center;padding:5px 0;color:#536d88;font-size:9px;font-weight:800}
body.desktop-mode .agent-announcement-row i{width:6px;height:6px;border-radius:50%;background:#438fec;box-shadow:0 0 0 3px rgba(67,143,236,.1)}
body.desktop-mode .agent-announcement-row span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
body.desktop-mode .agent-announcement-row time{color:#8a9bad;font-size:9px;white-space:nowrap}
body.desktop-mode .agent-detail-card{border:0;border-radius:14px;background:linear-gradient(165deg,rgba(255,255,255,.94),rgba(235,246,255,.86));box-shadow:none;backdrop-filter:blur(20px);color:#162236;padding:16px}
body.desktop-mode .agent-detail-expanded{height:100%;overflow:auto;scrollbar-width:thin;scrollbar-color:#c2d7ed transparent}
body.desktop-mode .agent-detail-heading{display:inline-flex;align-items:center;gap:7px}
body.desktop-mode .agent-detail-heading:before{content:"";width:12px;height:12px;background:conic-gradient(from 45deg,transparent 0 12%,#176fe6 13% 24%,transparent 25% 37%,#176fe6 38% 49%,transparent 50% 62%,#176fe6 63% 74%,transparent 75% 87%,#176fe6 88%);clip-path:polygon(50% 0,61% 38%,100% 50%,61% 62%,50% 100%,39% 62%,0 50%,39% 38%)}
body.desktop-mode .agent-record-id{display:block;margin:4px 0 8px;color:#70859d;font:800 10px/1.2 ui-monospace,SFMono-Regular,Menlo,monospace}
body.desktop-mode .agent-detail-title-row{display:flex;align-items:flex-start;justify-content:space-between;gap:8px}
body.desktop-mode .agent-detail-card .agent-detail-title-row strong{display:block;min-width:0;margin:0;color:#0f2a44;font-size:17px;line-height:1.3}
body.desktop-mode .agent-priority{flex:none;border:1px solid #b9d7fb;border-radius:999px;background:#eaf4ff;color:#075ee6;padding:4px 7px;font-size:9px;font-weight:900}
body.desktop-mode .agent-detail-card>p{margin:10px 0 0;color:#52677f;font-size:11px;line-height:1.65}
body.desktop-mode .agent-insight-fields{display:grid;gap:8px;margin:14px 0 0;padding:12px 0;border-top:1px solid #dce9f6;border-bottom:1px solid #dce9f6}
body.desktop-mode .agent-detail-card .agent-insight-fields>div{display:grid;grid-template-columns:64px minmax(0,1fr);gap:9px;align-items:center}
body.desktop-mode .agent-detail-card dt{color:#71859b;font-size:10px;font-weight:900}
body.desktop-mode .agent-detail-card dt label{cursor:pointer}
body.desktop-mode .agent-detail-card dd{margin:0;color:#203248;font-size:10px;font-weight:850;line-height:1.35;overflow-wrap:anywhere}
body.desktop-mode .agent-status:before{content:"";display:inline-block;width:7px;height:7px;margin-right:6px;border-radius:50%;background:#20b487;box-shadow:0 0 0 3px rgba(32,180,135,.12)}
body.desktop-mode .agent-insight-tags{margin-top:13px}
body.desktop-mode .agent-insight-tags>b{display:block;margin-bottom:8px;color:#0f2a44;font-size:11px}
body.desktop-mode .agent-insight-tags>div{display:flex;gap:5px;flex-wrap:wrap}
body.desktop-mode .agent-insight-tags button{min-height:28px;border:1px solid #cfe2f8;border-radius:6px;background:#eef6ff;color:#075ee6;padding:5px 7px;font-size:9px;font-weight:900;cursor:pointer;transition:background .18s ease,color .18s ease,border-color .18s ease}
body.desktop-mode .agent-insight-tags button:hover{border-color:#75adf0;background:#dfeeff}
body.desktop-mode .agent-insight-tags button[aria-pressed="true"]{border-color:#075ee6;background:#075ee6;color:#fff}
body.desktop-mode .agent-insight-tags button:focus-visible{outline:3px solid rgba(7,94,230,.18);outline-offset:2px}
body.desktop-mode .agent-inline-advice{margin-top:14px;border:1px solid #d7e6f5;border-radius:12px;background:rgba(242,248,255,.82);padding:12px}
body.desktop-mode .agent-inline-advice>b{color:#0f2a44;font-size:12px}
body.desktop-mode .agent-inline-advice ul{display:grid;gap:6px;margin:9px 0 0;padding-left:16px;color:#52677f;font-size:10px;line-height:1.45}
body.desktop-mode .agent-inline-advice button{display:inline-flex;align-items:center;justify-content:center;width:100%;height:34px;margin:11px 0 0;border:1px solid #075ee6;border-radius:7px;background:#075ee6;color:#fff;font-size:11px;font-weight:900}
body.desktop-mode .agent-inline-advice button:hover{background:#fff;color:#172033;border-color:#c9dced}
body.desktop-mode .agent-insight-actions{margin-top:12px}
body.desktop-mode .agent-insight-actions .ant-btn{height:32px;font-size:9px;font-weight:900}
body.desktop-mode .agent-list-toolbar{position:sticky;left:0;right:0;top:0;z-index:7;display:flex;align-items:center;justify-content:space-between;height:62px;padding:14px 18px;background:rgba(250,253,255,.9);backdrop-filter:blur(14px)}
body.desktop-mode .agent-list-toolbar>div{display:flex;align-items:center;gap:8px}
body.desktop-mode .agent-list-toolbar button{height:34px;border:1px solid #d8e6f5;border-radius:8px;background:#fff;color:#425d7d;padding:0 12px;font-size:11px;font-weight:800}
body.desktop-mode .agent-list-toolbar button:hover,body.desktop-mode .agent-view-switch button.active{border-color:#8fbcf3;background:#eef6ff;color:#075ee6}
body.desktop-mode .agent-view-switch .ant-btn{width:auto;min-width:96px;padding:0 14px;font-size:11px}
body.desktop-mode .agent-view-switch .ant-btn .anticon{font-size:15px}
body.desktop-mode .app-grid{position:absolute!important;inset:0!important;z-index:2;width:100%;min-height:100%;-webkit-mask-image:linear-gradient(to bottom,transparent 54px,#000 86px,#000 calc(100% - 36px),transparent 100%);mask-image:linear-gradient(to bottom,transparent 54px,#000 86px,#000 calc(100% - 36px),transparent 100%)}
body.desktop-mode .app-card.agent-card{width:150px;height:168px;border-radius:10px!important;background:rgba(255,255,255,.88)!important}
body.desktop-mode .agent-card-head{grid-template-columns:36px 1fr}
body.desktop-mode .agent-avatar{width:36px;height:36px;border-radius:12px}
body.desktop-mode .agent-card-meta{min-height:38px;margin:9px 0 0}
body.desktop-mode .agent-tool-line{bottom:42px}
body.desktop-mode .agent-chat-btn{bottom:10px;height:26px;min-height:26px}
body.desktop-mode .app-grid{perspective:1500px;transform-style:preserve-3d;isolation:isolate}
body.desktop-mode .app-grid.orbit-view{cursor:grab;touch-action:none}
body.desktop-mode .app-grid.orbit-view.orbit-dragging{cursor:grabbing}
body.desktop-mode .app-grid:before{content:"";position:absolute;left:11%;right:11%;top:48%;height:35%;border-radius:50%;background:radial-gradient(ellipse,rgba(35,91,153,.2),rgba(63,143,222,.08) 42%,transparent 72%);filter:blur(15px);pointer-events:none}
body.desktop-mode .app-card.agent-card{left:50%!important;top:48%!important;width:176px;height:226px;padding:15px 13px 50px;border:1px solid rgba(193,216,242,.95);border-radius:13px!important;background:linear-gradient(155deg,rgba(255,255,255,.97),rgba(226,242,255,.9))!important;box-shadow:0 18px 36px rgba(27,77,132,.18)!important;opacity:var(--orbit-opacity,1);transform:translate(-50%,-50%) translate3d(var(--orbit-x,0px),var(--orbit-y,0px),var(--orbit-z,0px)) rotateY(var(--orbit-tilt,0deg)) scale(var(--orbit-scale,1));transform-origin:50% 100%;transform-style:preserve-3d;z-index:var(--orbit-order,200);will-change:transform,opacity,box-shadow;-webkit-user-select:none;user-select:none;transition:transform .12s linear,opacity .2s ease,box-shadow .28s ease,border-color .2s ease,filter .2s ease}
body.desktop-mode .app-card.agent-card:before,body.desktop-mode .app-card.agent-card:after{display:none!important;content:none!important}
body.desktop-mode .app-card.agent-card:hover,body.desktop-mode .app-card.agent-card.orbit-hovered,body.desktop-mode .app-card.agent-card:focus-visible{z-index:600!important;outline:0;opacity:1;filter:saturate(1.08);border-color:#4e9cf1;box-shadow:0 34px 64px rgba(26,80,139,.3)!important;transform:translate(-50%,-50%) translate3d(var(--orbit-x,0px),calc(var(--orbit-y,0px) - 46px),calc(var(--orbit-z,0px) + 220px)) rotateY(0deg) scale(calc(var(--orbit-scale,1) + .14))}
body.desktop-mode .app-card.agent-card.selected{background:linear-gradient(155deg,#fff,#e4f2ff)!important;border-color:#075ee6;box-shadow:0 0 0 2px rgba(7,94,230,.17),0 22px 44px rgba(26,80,139,.22)!important;opacity:var(--orbit-opacity,1);transform:translate(-50%,-50%) translate3d(var(--orbit-x,0px),var(--orbit-y,0px),var(--orbit-z,0px)) rotateY(var(--orbit-tilt,0deg)) scale(var(--orbit-scale,1))}
body.desktop-mode .app-card.agent-card.selected:hover,body.desktop-mode .app-card.agent-card.selected.orbit-hovered{z-index:620!important}
body.desktop-mode .app-card.agent-card .agent-card-head{grid-template-columns:42px 1fr;min-height:46px}
body.desktop-mode .app-card.agent-card .agent-avatar{width:42px;height:42px;border-radius:13px;font-size:15px}
body.desktop-mode .app-card.agent-card strong{font-size:13px}
body.desktop-mode .app-card.agent-card.selected strong{background:transparent;color:#162236;border-radius:0;padding:0}
body.desktop-mode .app-card.agent-card small{font-size:9px}
body.desktop-mode .app-card.agent-card .agent-card-meta{gap:7px;margin-top:12px;min-height:48px}
body.desktop-mode .app-card.agent-card .agent-meta-row{grid-template-columns:36px minmax(0,1fr);font-size:9px}
body.desktop-mode .app-card.agent-card .agent-tool-line{left:13px;right:13px;bottom:48px;height:20px}
body.desktop-mode .app-card.agent-card .agent-chat-btn{left:13px;right:13px;bottom:12px;height:28px;min-height:28px}
body.desktop-mode .app-grid.grid-view{display:grid;grid-template-columns:repeat(auto-fill,minmax(168px,1fr));align-content:start;gap:16px;overflow:auto;padding:78px 16px 16px;perspective:none;transform-style:flat;-webkit-mask-image:linear-gradient(to bottom,transparent 58px,#000 78px,#000 calc(100% - 18px),transparent 100%);mask-image:linear-gradient(to bottom,transparent 58px,#000 78px,#000 calc(100% - 18px),transparent 100%)}
body.desktop-mode .app-grid.grid-view:before{display:none}
body.desktop-mode .app-grid.grid-view .app-card.agent-card{position:relative!important;left:auto!important;top:auto!important;width:100%;height:226px;opacity:1!important;z-index:auto!important;transform:none!important;transition:transform .24s cubic-bezier(.2,.8,.2,1),box-shadow .24s ease,border-color .2s ease}
body.desktop-mode .app-grid.grid-view .app-card.agent-card:hover,body.desktop-mode .app-grid.grid-view .app-card.agent-card:focus-visible{z-index:2!important;transform:translateY(-5px)!important;box-shadow:0 22px 44px rgba(26,80,139,.22)!important}
body.desktop-mode .agent-window.agent-window-centered{position:fixed!important;max-height:calc(100vh - 48px);overflow:hidden}
body.desktop-mode .agent-window.agent-window-centered .agent-chat-body{max-height:calc(100vh - 104px);overflow:auto;overscroll-behavior:contain}
body .os-window.product-window-centered{position:fixed!important;max-width:calc(100vw - 24px);max-height:calc(100vh - 24px);overflow:hidden}
body .os-window.product-window-centered>.os-body{max-height:calc(100vh - 66px);overflow:auto;overscroll-behavior:contain}
body.desktop-mode .agent-category-dialog{position:fixed!important;width:min(420px,calc(100vw - 32px));border:1px solid #c9ddef;box-shadow:0 28px 80px rgba(25,70,120,.24)}
body.desktop-mode .agent-category-dialog .os-body{padding:22px}
body.desktop-mode .agent-category-dialog label{display:block;margin-bottom:8px;color:#17304a;font-size:12px;font-weight:900}
body.desktop-mode .agent-category-dialog input{width:100%;height:42px;border:1px solid #cbdced;border-radius:9px;background:#fff;padding:0 12px;color:#1b3048;outline:none}
body.desktop-mode .agent-category-dialog input:focus{border-color:#3587e6;box-shadow:0 0 0 3px rgba(53,135,230,.12)}
body.desktop-mode .agent-category-dialog small{display:block;min-height:18px;margin-top:7px;color:#71859a;font-size:10px}
body.desktop-mode .agent-category-dialog-actions{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:14px}
body.desktop-mode .agent-category-dialog-actions.has-delete{grid-template-columns:auto 1fr 1fr}
body.desktop-mode .agent-category-dialog-actions button{display:inline-flex;align-items:center;justify-content:center;height:38px;margin:0;border:1px solid #cbdced;border-radius:8px;background:#fff;color:#294760;padding:0;text-align:center}
body.desktop-mode .agent-category-dialog-actions .primary{border-color:#075ee6;background:#075ee6;color:#fff}
body.desktop-mode .agent-category-dialog-actions .primary:hover{background:#fff;color:#172033}
body.desktop-mode .agent-category-dialog-actions .danger{border-color:#ffd2d2;color:#d93d3d;padding:0 13px}
body.desktop-mode .agent-category-dialog-actions .danger:hover{background:#fff1f1;border-color:#ef7373}
body.desktop-mode .desktop-footer{position:fixed;left:0;right:0;bottom:0;z-index:62;display:flex;align-items:center;justify-content:space-between;height:62px;padding:0 28px;border-top:1px solid #e7f0fa;background:linear-gradient(180deg,rgba(251,254,255,.92),rgba(240,248,255,.9));backdrop-filter:blur(18px);box-shadow:0 -1px 0 rgba(255,255,255,.88),0 -12px 36px rgba(111,158,205,.08);color:#6a7f95;font-size:12px;font-weight:800;pointer-events:auto}
body.desktop-mode .desktop-footer-left{display:flex;align-items:center;gap:14px;min-width:0}
body.desktop-mode .desktop-footer-left span{white-space:nowrap}
body.desktop-mode .desktop-footer-left b{display:inline-flex;align-items:center;height:24px;border:1px solid #cfe0f3;border-radius:999px;background:rgba(255,255,255,.72);color:#075ee6;padding:0 10px;font-size:11px}
body.desktop-mode .desktop-footer-links{display:flex;align-items:center;gap:30px}
body.desktop-mode .desktop-footer-links a,body.desktop-mode .desktop-footer-links button{border:0;background:transparent;color:#405a76;padding:0;font-size:12px;font-weight:900;text-decoration:none}
body.desktop-mode .desktop-footer-links a:hover,body.desktop-mode .desktop-footer-links button:hover{color:#075ee6}
.desktop-footer{display:none}
.help-docs-window{width:min(560px,calc(100vw - 32px))}
.help-docs-body{display:grid;gap:12px;color:#203248}
.help-docs-body h3{margin:0;color:#0f2a44;font-size:18px}
.help-docs-body p{margin:0;color:#5a7088;font-size:12px;line-height:1.7}
.help-docs-list{display:grid;gap:9px;margin:0;padding:0;list-style:none}
.help-docs-list li{border:1px solid #d9e8f6;border-radius:12px;background:#f7fbff;padding:11px 12px}
.help-docs-list b{display:block;color:#0f2a44;font-size:13px;margin-bottom:4px}
.help-docs-list span{display:block;color:#5a7088;font-size:11px;line-height:1.55}
@media(prefers-reduced-motion:reduce){body.desktop-mode .app-card.agent-card{transition:none}body.desktop-mode .app-card.agent-card:hover,body.desktop-mode .app-card.agent-card.orbit-hovered,body.desktop-mode .app-card.agent-card:focus-visible{transform:translate(-50%,-50%) translate3d(var(--orbit-x,0px),calc(var(--orbit-y,0px) - 18px),calc(var(--orbit-z,0px) + 40px)) rotateY(0deg) scale(var(--orbit-scale,1))}}
body.desktop-mode .desktop-tools{left:0;right:0;top:0;z-index:8;height:34px;border:0;border-radius:0;background:transparent;box-shadow:none;backdrop-filter:none;pointer-events:none;transform:none}
body.desktop-mode .desktop-search-slot{position:absolute;left:50%;top:0;transform:translateX(-50%);pointer-events:auto}
body.desktop-mode .desktop-tool-actions{position:absolute;right:var(--agent-main-right);top:0;display:flex;align-items:center;gap:8px;pointer-events:auto}
body.desktop-mode .agent-search-control{position:relative}
body.desktop-mode .agent-search-control .ant-input-affix-wrapper{width:340px;height:34px;border-color:#d6e5f5;border-radius:999px;background:rgba(255,255,255,.9);padding:0 14px;color:#426282;box-shadow:0 10px 30px rgba(42,95,151,.12)}
body.desktop-mode .agent-search-control .ant-input{height:auto;background:transparent;color:#263f5d;font-size:12px}
body.desktop-mode .agent-search-control .ant-input::placeholder{color:#7c91aa}
body.desktop-mode #desktopSearchStatus{position:absolute;left:14px;top:40px;display:none;border-radius:999px;background:rgba(255,255,255,.92);box-shadow:0 8px 20px rgba(42,95,151,.12);color:#526f8d;padding:4px 9px;font-size:10px;font-weight:800;white-space:nowrap}
body.desktop-mode #desktopSearchStatus:not(:empty){display:block}
body.desktop-mode .desktop-tools #newFileBtn{display:inline-flex;align-items:center;justify-content:center;width:auto;height:34px;border:0;border-radius:999px;background:#075ee6;color:#fff;padding:0 16px;font-size:12px;font-weight:950;box-shadow:0 10px 24px rgba(7,94,230,.22)}
body.desktop-mode .desktop-tools #newFileBtn:hover{background:#0a55c8;color:#fff;transform:translateY(-1px)}
body.desktop-mode .desktop-tools #deleteFileBtn{display:none}
body.desktop-mode .selection-box{z-index:6}
body.desktop-mode .selection-actions{display:none!important}
body.desktop-mode .agent-search-empty{position:absolute;left:50%;top:50%;display:grid;justify-items:center;gap:8px;width:min(360px,80%);transform:translate(-50%,-50%);border:1px dashed #bfd7ef;border-radius:12px;background:rgba(255,255,255,.82);padding:28px;color:#607b98;text-align:center;box-shadow:0 16px 38px rgba(45,96,151,.1)}
body.desktop-mode .agent-search-empty strong{color:#173652;font-size:15px}
body.desktop-mode .agent-search-empty span{font-size:11px;line-height:1.5}
body.desktop-mode .agent-model-availability{position:absolute;left:16px;right:16px;top:60px;z-index:7;pointer-events:auto}
body.desktop-mode .agent-model-availability:empty{display:none}
body.desktop-mode .agent-model-availability .ant-alert{align-items:center;border-radius:10px;border-color:#ffd591;background:rgba(255,251,230,.96);box-shadow:0 10px 28px rgba(126,91,20,.1)}
body.desktop-mode .agent-model-availability .ant-alert-message{font-size:13px;font-weight:500}
body.desktop-mode .agent-model-availability .ant-alert-description{font-size:11px}
body.desktop-mode .agent-model-availability .ant-btn{height:30px;border-radius:7px;font-size:12px;font-weight:400}
body.desktop-mode .workbench-detail-select-guard{width:100%}
body.desktop-mode .topbar{position:absolute}
body.desktop-mode .topbar-user-cluster{display:flex;align-items:center;gap:10px;height:100%;margin-left:auto}
body.desktop-mode .topbar time{position:static;left:auto;display:inline-flex;align-items:center;justify-content:center;margin:0;padding:0;transform:none;font-variant-numeric:tabular-nums}
body.desktop-mode .topbar time:before,body.desktop-mode .topbar time:after{display:none!important;content:none!important}
body.desktop-mode .antd-topbar-settings{display:flex;align-items:center;gap:8px}
body.desktop-mode .antd-user-area{display:flex;align-items:center;margin-left:0}
body.desktop-mode .topbar-logout-hidden{display:none!important}
body.desktop-mode .desktop-tools .antd-topbar-settings .ant-btn{width:auto!important;min-width:82px;height:34px;border-color:#d6e3f2;border-radius:999px!important;background:#fff;color:#24405f;padding-inline:12px;font-size:12px;font-weight:400!important;white-space:nowrap;box-shadow:none}
body.desktop-mode .antd-topbar-settings .ant-btn:hover{border-color:#8fbcf3!important;background:#fff!important;color:#075ee6!important}
.workbench-form-help{margin-top:8px;color:#71839a;font-size:13px;font-weight:400;line-height:1.5}
body.desktop-mode .workbench-user-button{display:inline-flex;align-items:center;gap:6px;height:34px;padding:0 4px;color:#203c5d}
body.desktop-mode .workbench-user-button:before,body.desktop-mode .workbench-user-button:after{display:none!important;content:none!important}
body.desktop-mode .agent-detail-card .agent-insight-fields dd{min-width:0;overflow:hidden}
body.desktop-mode .agent-detail-card .agent-insight-fields #antdAgentCategorySelect,
body.desktop-mode .agent-detail-card .agent-insight-fields .antd-agent-detail-select{display:block;width:100%;min-width:0}
body.desktop-mode #antdAgentCategorySelect .ant-app,
body.desktop-mode .antd-agent-detail-select .ant-app{display:block;width:100%;min-width:0}
body.desktop-mode #antdAgentCategorySelect .ant-select,
body.desktop-mode .antd-agent-detail-select .ant-select{width:100%;min-width:0}
body.desktop-mode .workbench-control-select.ant-select{height:32px;min-height:32px}
body.desktop-mode .workbench-control-select.ant-select .ant-select-selector{height:32px!important;min-height:32px!important;padding:0 11px!important;border-color:#d8e6f5!important;background:#fff!important;font-size:14px!important;font-weight:400!important}
body.desktop-mode .workbench-control-select.ant-select .ant-select-content{display:flex;align-items:center;height:30px;min-height:30px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px!important;font-weight:400!important;line-height:22px!important}
body.desktop-mode .workbench-control-select.ant-select .ant-select-selection-wrap{height:30px;min-height:30px;align-items:center}
body.desktop-mode .workbench-control-select.ant-select .ant-select-selection-item,
body.desktop-mode .workbench-control-select.ant-select .ant-select-selection-placeholder{font-size:14px!important;font-weight:400!important;line-height:22px!important}
body.desktop-mode .workbench-control-select.ant-select .ant-select-arrow,
body.desktop-mode .workbench-control-select.ant-select .ant-select-suffix{font-size:12px}
body.desktop-mode #antdAgentCategorySelect .ant-select-selector,
body.desktop-mode .antd-agent-detail-select .ant-select-selector{font-size:14px!important;font-weight:400!important}
body.desktop-mode #antdAgentCategorySelect .ant-select-selection-item,
body.desktop-mode .antd-agent-detail-select .ant-select-selection-item{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px!important;font-weight:400!important}
body.desktop-mode #antdAgentCategorySelect .ant-select-content,
body.desktop-mode .antd-agent-detail-select .ant-select-content{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px!important;font-weight:400!important;line-height:22px!important}
body.desktop-mode #antdAgentFilters{display:flex;align-items:center}
body.desktop-mode #antdAgentFilters .ant-select-selector{border-color:#d8e6f5!important;background:#fff!important;font-size:14px!important;font-weight:400;color:#425d7d}
body.desktop-mode #antdAgentFilters .ant-select:hover .ant-select-selector{border-color:#8fbcf3!important}
.ant-select .ant-select-selection-item,
.ant-select .ant-select-selection-placeholder,
.ant-select .ant-select-content,
.ant-select-dropdown .ant-select-item,
.ant-select-dropdown .ant-select-item-option-content{font-size:14px!important;font-weight:400!important}
body.desktop-mode #announcementList{display:grid;gap:7px}
body.desktop-mode .agent-announcement-empty{padding:10px 0;color:#7890aa;font-size:11px}
body.desktop-mode .agent-resource-panel [data-updated]{display:block;margin-top:5px;color:#8296ab;font-size:9px}
.agent-x-modal-v2 .ant-modal{max-width:calc(100vw - 32px)}
.agent-x-modal-v2 .ant-modal-content{overflow:hidden;padding:0;border:0;border-radius:16px;background:#fff;box-shadow:0 24px 80px rgba(20,50,84,.22)}
.agent-x-modal-v2 .ant-modal-header{margin:0;border-bottom:1px solid #edf1f6;background:#fff;padding:16px 20px}
.agent-x-modal-v2 .ant-modal-title{color:#162236}
.agent-x-modal-v2 .ant-modal-close{top:17px;right:18px}
.agent-x-modal-v2 .ant-modal-body{padding:0}
.agent-x-modal-title{display:flex;align-items:center;gap:10px}
.agent-x-modal-title>.ant-avatar{background:#075ee6;color:#fff}
.agent-x-modal-title>span{display:grid;gap:1px}
.agent-x-modal-title b{font-size:15px;line-height:1.25}
.agent-x-modal-title small{color:#8190a3;font-size:10px;font-weight:600}
.agent-x-shell-v2{display:grid;grid-template-columns:250px minmax(0,1fr);height:min(680px,76vh);min-height:520px;background:#fff}
.agent-x-modal-v2 .agent-x-history{min-width:0;overflow:auto;border-right:1px solid #edf1f6;background:#f7f9fc;padding:16px 12px}
.agent-x-history-title{padding:2px 10px 12px;color:#53657b;font-size:12px;font-weight:800}
.agent-x-modal-v2 .agent-x-history .ant-conversations{background:transparent}
.agent-x-modal-v2 .agent-x-history .ant-conversations-creation{height:42px;margin-bottom:10px;border:1px dashed #b9d2f2;border-radius:10px;background:#fff;color:#075ee6;font-weight:800}
.agent-x-modal-v2 .agent-x-history .ant-conversations-item{min-width:0;border-radius:10px}
.agent-x-modal-v2 .agent-x-history .ant-conversations-item-active{background:#e7f1ff}
.agent-x-modal-v2 .agent-x-history .ant-conversations-item-label{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.agent-x-modal-v2 .agent-x-chat{display:flex;min-width:0;min-height:0;flex-direction:column;gap:16px;background:#fff;padding:20px 22px 22px}
.agent-x-modal-v2 .agent-x-chat .ant-bubble-list{flex:1;min-height:0;overflow:auto;padding:4px 2px 16px}
.agent-x-modal-v2 .agent-x-chat .ant-bubble-content{max-width:min(620px,78%);border-radius:14px;line-height:1.7}
.agent-x-modal-v2 .agent-x-chat .ant-bubble-start .ant-bubble-content{background:#f3f6fa;color:#26384d}
.agent-x-modal-v2 .agent-x-chat .ant-bubble-end .ant-bubble-content{background:#075ee6;color:#fff}
.agent-x-modal-v2 .agent-x-chat .ant-sender{flex:0 0 auto;border:1px solid #d7e1ed;border-radius:14px;background:#fff;box-shadow:0 8px 26px rgba(34,73,116,.08)}
.agent-x-modal-v2 .agent-x-chat .ant-sender:focus-within{border-color:#075ee6;box-shadow:0 0 0 3px rgba(7,94,230,.1)}
.agent-x-modal-v2 .agent-x-chat .ant-empty{margin:auto}
.agent-x-modal-v3 .ant-modal{max-width:calc(100vw - 32px)}
.agent-x-modal-v3 .ant-modal-container{overflow:hidden;padding:0!important;border:0;border-radius:16px;background:#fff;box-shadow:0 28px 90px rgba(25,55,90,.24)}
.agent-x-modal-v3 .ant-modal-content{overflow:hidden;padding:0!important;border:0;border-radius:16px;background:#fff;box-shadow:0 28px 90px rgba(25,55,90,.24)}
.agent-x-modal-v3 .ant-modal-close{top:16px;right:16px;z-index:4}
.agent-x-modal-v3 .ant-modal-body{padding:0!important}
.agent-x-shell-v3{display:grid;grid-template-columns:228px minmax(0,1fr);height:min(760px,84vh);min-height:600px;background:#fff}
.agent-x-modal-v3 .agent-x-history{position:relative;display:flex;min-width:0;min-height:0;flex-direction:column;overflow:hidden;border-right:1px solid #edf1f6;background:#f7f8fb;padding:16px 10px 12px}
.agent-x-brand{display:flex;align-items:center;gap:8px;height:42px;padding:0 8px 14px;color:#22364f;font-size:13px;font-weight:600}
.agent-x-brand-mark{display:grid;width:22px;height:22px;place-items:center;border-radius:7px;background:linear-gradient(135deg,#58d8ed,#7b61ff);color:#fff}
.agent-x-modal-v3 .agent-x-history .ant-conversations{min-height:0;flex:1;overflow:auto;background:transparent}
.agent-x-modal-v3 .agent-x-history .ant-conversations-creation{height:38px;margin:0 0 12px;border:1px solid #c8dcf4;border-radius:8px;background:#fff;color:#075ee6;font-size:12px;font-weight:400}
.agent-x-modal-v3 .agent-x-history .ant-conversations-group-title{padding-inline:8px;color:#8391a3;font-size:10px;font-weight:400}
.agent-x-modal-v3 .agent-x-history .ant-conversations-item{min-width:0;border-radius:8px}
.agent-x-modal-v3 .agent-x-history .ant-conversations-item-active{background:#e9edf3}
.agent-x-modal-v3 .agent-x-history .ant-conversations-item-label{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;font-weight:400}
.agent-x-account{display:flex;align-items:center;gap:8px;height:42px;margin-top:8px;padding:8px;color:#63758b;font-size:11px}
.agent-x-modal-v3 .agent-x-chat{display:flex;min-width:0;min-height:0;flex-direction:column;background:#fff;padding:26px 44px 20px}
.agent-x-modal-v3 .agent-x-welcome-stage{width:min(760px,100%);margin:auto}
.agent-x-modal-v3 .ant-welcome{padding:0 0 22px;background:transparent}
.agent-x-modal-v3 .ant-welcome-icon{margin-inline-end:14px}
.agent-x-welcome-avatar{background:linear-gradient(145deg,#142947,#075ee6)!important;color:#fff!important;box-shadow:0 8px 22px rgba(7,94,230,.22)}
.agent-x-modal-v3 .ant-welcome-title{color:#17263a;font-size:20px;font-weight:600}
.agent-x-modal-v3 .ant-welcome-description{color:#7a8798;font-size:12px}
.agent-x-modal-v3 .ant-prompts{width:100%}
.agent-x-modal-v3 .ant-prompts-title{margin-bottom:10px;color:#7a8798;font-size:11px;font-weight:400}
.agent-x-modal-v3 .agent-x-welcome-stage>.ant-prompts>.ant-prompts-list{display:grid!important;grid-template-columns:1.05fr 1.05fr .9fr;gap:10px}
.agent-x-modal-v3 .agent-x-welcome-stage>.ant-prompts>.ant-prompts-list>.ant-prompts-item{min-width:0;border:1px solid #edf0f6;border-radius:10px;background:#f5f3ff;padding:12px;box-shadow:none}
.agent-x-modal-v3 .agent-x-welcome-stage>.ant-prompts>.ant-prompts-list>.ant-prompts-item:nth-child(2){background:#f8f4fb}
.agent-x-modal-v3 .agent-x-welcome-stage>.ant-prompts>.ant-prompts-list>.ant-prompts-item:nth-child(3){background:#f7f7ff}
.agent-x-modal-v3 .ant-prompts-item-icon{color:#075ee6}
.agent-x-modal-v3 .ant-prompts-item-label{color:#26364a;font-size:12px;font-weight:500}
.agent-x-modal-v3 .ant-prompts-item-description{color:#8a95a5;font-size:10px}
.agent-x-modal-v3 .ant-prompts-nested{margin-top:8px}
.agent-x-modal-v3 .ant-prompts-nested .ant-prompts-list{display:flex!important;flex-direction:column;gap:5px}
.agent-x-modal-v3 .ant-prompts-nested .ant-prompts-item{width:100%;border:0;border-radius:7px;background:rgba(255,255,255,.72);padding:7px 9px;box-shadow:none}
.agent-x-modal-v3 .ant-prompts-nested .ant-prompts-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#617187;font-size:10px;font-weight:400}
.agent-x-modal-v3 .agent-x-chat>.ant-bubble-list{flex:1;min-height:0;overflow:auto;padding:16px 0}
.agent-x-modal-v3 .agent-x-chat .ant-bubble-content{max-width:min(660px,78%);border-radius:14px;line-height:1.7}
.agent-x-modal-v3 .agent-x-chat .ant-bubble-start .ant-bubble-content{background:#f3f5f8;color:#26384d}
.agent-x-modal-v3 .agent-x-chat .ant-bubble-end .ant-bubble-content{background:#075ee6;color:#fff}
.agent-x-composer{width:min(760px,100%);margin:0 auto}
.agent-x-quick-actions{display:flex;min-height:28px;align-items:center;gap:6px;overflow-x:auto;padding:0 0 8px}
.agent-x-quick-actions .ant-btn{height:24px;border-color:#dde5ee;border-radius:7px;color:#5c6f86;padding-inline:9px;font-size:10px;font-weight:400;white-space:nowrap}
.agent-x-modal-v3 .agent-x-chat .ant-sender{border:1px solid #bfd6f2;border-radius:12px;background:#fff;box-shadow:0 8px 24px rgba(34,73,116,.08)}
.agent-x-modal-v3 .agent-x-chat .ant-sender:focus-within{border-color:#075ee6;box-shadow:0 0 0 3px rgba(7,94,230,.08)}
.agent-x-modal-v3 .agent-x-chat .ant-sender-input,
.agent-x-modal-v3 .agent-x-chat .ant-sender-input:hover,
.agent-x-modal-v3 .agent-x-chat .ant-sender-input:focus,
.agent-x-modal-v3 .agent-x-chat .ant-sender-input:focus-visible{border:0!important;outline:0!important;box-shadow:none!important;background:transparent!important}
.agent-x-modal-v3 .agent-x-chat .ant-sender-prefix .ant-btn{color:#60748c}
.ppt-agent-chat-tools{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 12px;border:1px solid #d9e7f7;border-radius:10px;background:#f6faff}
.ppt-agent-chat-tools>span{display:inline-flex;align-items:center;gap:7px;color:#183654;font-size:13px;font-weight:600;white-space:nowrap}
.ppt-agent-chat-tools .ant-space{min-width:0;flex-wrap:wrap;justify-content:flex-end}
.ppt-agent-chat-tools .ant-tag{margin:0;border-color:#d4e4f8;background:#fff;color:#45617f;font-weight:400}
.ppt-agent-source-note{display:flex;align-items:flex-start;gap:12px;margin-bottom:16px;padding:12px 14px;border:1px solid #dbe8f6;border-radius:10px;background:#f6faff}
.ppt-agent-source-note b{color:#173b62;font-size:13px;white-space:nowrap}
.ppt-agent-source-note span{color:#62768d;font-size:12px;line-height:1.65}
.ppt-agent-form-grid{display:grid;grid-template-columns:1fr 1fr;column-gap:14px}
.ppt-agent-builder-modal .ant-modal-content{border-radius:12px}
@media(max-width:720px){.agent-x-shell-v2,.agent-x-shell-v3{grid-template-columns:1fr;height:min(720px,82vh)}.agent-x-modal-v2 .agent-x-history,.agent-x-modal-v3 .agent-x-history{max-height:170px;border-right:0;border-bottom:1px solid #edf1f6}.agent-x-modal-v2 .agent-x-chat,.agent-x-modal-v3 .agent-x-chat{padding:14px}.agent-x-modal-v3 .agent-x-welcome-stage>.ant-prompts>.ant-prompts-list{grid-template-columns:1fr}.agent-x-account{display:none}}
@media(max-width:720px){.ppt-agent-chat-tools{align-items:flex-start;flex-direction:column}.ppt-agent-chat-tools .ant-space{justify-content:flex-start}.ppt-agent-form-grid{grid-template-columns:1fr}}
@media(max-width:1180px){body.desktop-mode .desktop-dashboard-right{display:grid}body.desktop-mode .desktop-surface{right:var(--agent-main-right)}}
@media(max-width:860px){body.desktop-mode .desktop-dashboard-left,body.desktop-mode .desktop-dashboard-right{display:block}}
@media(max-width:900px){.site-shell,.works-page,.system-page{padding-inline:18px}.topbar{border-radius:24px}.work-grid,.works-grid{gap:14px}}
`;
}

function clientJs() {
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

function configuredModelOptions(settings = activeModelSettings) {
  if (!settings.ready) return [];
  return [normalizeAgentModelValue(settings.defaultModel)].filter(Boolean);
}

function resolveAgentModelValue(value) {
  const current = normalizeAgentModelValue(value);
  const configured = configuredModelOptions();
  if (!configured.length) return "";
  const exact = configured.find((option) => option.toLowerCase() === current.toLowerCase());
  return exact || normalizeAgentModelValue(activeModelSettings.defaultModel) || configured[0];
}

function agentModelDisplayName(value) {
  const model = resolveAgentModelValue(value);
  if (model && model === normalizeAgentModelValue(activeModelSettings.defaultModel) && activeModelSettings.presetLabel) {
    return activeModelSettings.presetLabel;
  }
  const aliases = {
    "kimi-k3": "Kimi K3"
  };
  return aliases[model.toLowerCase()] || model || "未接入模型";
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
  const ready = Boolean(
    settings.ready
    && settings.hasApiKey
    && settings.baseUrl
    && settings.defaultModel
  );
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
    fetch(MODEL_SETTINGS_ENDPOINT).then((response) => response.json()).then((payload) => {
      if (!payload.ok) return;
      applyPublicModelSettings(payload.data);
      renderDesktopItems();
    })
  ];
  await Promise.allSettled(requests);
}

window.__WORKBENCH_BRIDGE__ = {
  saveModelSettings: async (settings) => {
    const data = {
      ...settings,
      adminToken: getAdminTokenValue()
    };
    return await new Promise((resolve, reject) => {
      const frameName = "model-settings-frame-" + Date.now();
      const frame = document.createElement("iframe");
      const form = document.createElement("form");
      const field = document.createElement("input");
      frame.name = frameName;
      frame.hidden = true;
      form.hidden = true;
      form.method = "POST";
      form.action = "/api/model-settings-form";
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
        reject(new Error("模型配置保存超时"));
      }, 10000);
      const onMessage = (event) => {
        if (event.origin !== location.origin || event.source !== frame.contentWindow || event.data?.type !== "model-settings-saved") return;
        clearTimeout(timeout);
        const payload = event.data.payload || {};
        cleanup();
        if (!payload.ok) reject(new Error(payload.message || "模型配置保存失败"));
        else resolve(payload);
      };
      window.addEventListener("message", onMessage);
      form.submit();
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
  const minimumDesignHeight = 930;
  const topbarHeight = 47;
  const navReserve = 80;
  const sidePadding = 40;
  const widthScale = (window.innerWidth - sidePadding) / designWidth;
  const availableHeight = Math.max(420, window.innerHeight - topbarHeight - navReserve);
  const heightScale = availableHeight / minimumDesignHeight;
  desktopScale = Math.max(0.52, Math.min(2.4, widthScale, heightScale));
  const designHeight = Math.max(minimumDesignHeight, availableHeight / desktopScale);
  const boardHeight = designHeight * desktopScale;
  const availableTop = topbarHeight + 10;
  const maxTop = Math.max(availableTop, window.innerHeight - navReserve - boardHeight);
  const top = Math.max(availableTop, Math.min(62, maxTop));
  document.documentElement.style.setProperty("--desktop-scale", desktopScale.toFixed(4));
  document.documentElement.style.setProperty("--desktop-top", top.toFixed(1) + "px");
  document.documentElement.style.setProperty("--desktop-board-height", designHeight.toFixed(1) + "px");
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
window.addEventListener("resize", () => {
  updateDesktopScale();
  updateNavIndicator();
});
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
      agentOrbitPhase = (startOrbitPhase + deltaX * 0.008) % (Math.PI * 2);
      layoutAgentOrbitCards();
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
window.addEventListener("resize", () => {
  updateDesktopScale();
  if (document.body.classList.contains("desktop-mode")) renderDesktopItems();
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
  return getAdminTokenValue() === "admin-token";
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
  if (agentDisplayMode === "orbit") layoutAgentOrbitCards();
}

function layoutAgentOrbitCards() {
  if (agentDisplayMode !== "orbit") return;
  const cards = [...appGrid.querySelectorAll(".agent-card")];
  const total = cards.length;
  if (!total) return;
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
  if (document.body.classList.contains("desktop-mode") && agentDisplayMode === "orbit" && !agentOrbitPaused && !reducedMotion) {
    agentOrbitPhase = (agentOrbitPhase + delta * 0.00007) % (Math.PI * 2);
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
  layoutAgentOrbitCards();
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
  return '<div class="app-card agent-card' + selected + '" role="button" tabindex="0" data-id="' + item.id + '" data-ext="' + escapeHtml(ext) + '" title="' + title + '" aria-label="' + title + '" aria-pressed="' + (selected ? "true" : "false") + '" ' + action + ' style="' + orbitStyle + '"><div class="agent-card-head"><span class="agent-avatar" aria-hidden="true">' + escapeHtml(agent.initials) + '</span><span class="agent-card-title"><strong>' + title + '</strong><small>' + escapeHtml(agent.role) + '</small></span></div><span class="agent-card-meta"><span class="agent-meta-row"><span>模型</span><span>' + escapeHtml(agentModelDisplayName(agent.model)) + '</span></span><span class="agent-meta-row"><span>知识库</span><span>' + escapeHtml(agent.knowledge) + '</span></span></span><span class="agent-tool-line">' + tools + '</span><button class="agent-chat-btn" type="button" data-id="' + escapeHtml(item.id) + '">打开对话</button></div>';
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
  const model = resolveAgentModelValue(agent.model);
  if (!activeModelSettings.ready || !model || !agentModelOptions.includes(model)) {
    window.dispatchEvent(new CustomEvent("workbench-model-required"));
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
  body.innerHTML = '<h3>知识库项目帮助文档</h3><p>这里放置当前工作台最常用的操作说明，方便成员快速理解桌面、智能体、画板和后台入口。</p><ul class="help-docs-list"><li><b>登录与成员</b><span>未登录时只能看到登录与注册入口；注册申请会进入后台，由管理员同意或拒绝。</span></li><li><b>智能体工作台</b><span>左侧按分类筛选智能体，中间支持椭圆轮盘和平铺视图，右侧显示所选智能体详情。</span></li><li><b>无限画板</b><span>顶部“无限画板”入口可打开画布，用于卡片编排、图层管理和内容连接。</span></li><li><b>后台管理</b><span>管理员可进入后台管理成员、权限、注册申请和数据看板。</span></li><li><b>部署与数据</b><span>线上版本通过服务器保存项目数据，前端代码更新后需要重新发布到服务器。</span></li></ul>';
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
  win.className = "os-window";
  win.style.zIndex = ++winZ;
  openCount++;
  const bar = document.createElement("div");
  bar.className = "os-window-bar";
  bar.innerHTML = "<i></i><i></i><i></i><span>" + (editing ? "Edit File" : "New File") + "</span>";
  const body = document.createElement("div");
  body.className = "os-body";
  body.dataset.createMode = "file";
  const canCreateFolder = !editing && source === "desktop";
  const createMode = canCreateFolder ? '<div class="create-mode"><button class="create-mode-btn active" data-create-mode="file" aria-pressed="true" type="button">文件</button><button class="create-mode-btn" data-create-mode="folder" aria-pressed="false" type="button">文件夹</button></div>' : "";
  const linkImport = editing ? "" : '<div class="link-import-box file-only"><label>根据链接生成文件</label><div class="link-import-row"><input class="link-import-url" placeholder="粘贴文章链接 / 收藏链接"><button class="link-import-btn" type="button">生成</button></div><small class="link-import-status">会自动填写标题、简介，并把可读取内容整理成结构化文档。</small></div>';
  body.innerHTML = createMode + linkImport + '<label style="display:block;font-weight:800;margin-bottom:8px">名称</label><input class="editor-title" style="width:100%;height:36px;border:1px solid #1a1a2e;border-radius:8px;padding:0 10px" value="' + escapeHtml(item?.label || "新建笔记") + '"><label class="file-only" style="display:block;font-weight:800;margin:14px 0 8px">格式</label><select class="editor-type file-only" style="width:100%;height:36px;border:1px solid #1a1a2e;border-radius:8px;padding:0 10px;background:white">' + typeOptions + '</select><label class="file-only" style="display:block;font-weight:800;margin:14px 0 8px">内容</label><textarea class="editor-content file-only" style="width:100%;height:220px;border:1px solid #1a1a2e;border-radius:8px;padding:10px;resize:vertical">' + escapeHtml(item?.content || docMap.get(normalizePath(item?.path || ""))?.content || defaultContentFor(currentType)) + '</textarea><button class="editor-save">保存</button>';
  win.appendChild(bar);
  win.appendChild(body);
  bar.querySelector("i").addEventListener("click", (event) => {
    event.stopPropagation();
    win.remove();
  });
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
      win.remove();
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
    win.remove();
  });
  mountTarget.appendChild(win);
  centerWindow(win);
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
