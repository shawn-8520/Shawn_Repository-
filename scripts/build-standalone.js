import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const contentDir = path.join(root, "content");
const outputDir = path.join(root, "outputs");
const outputPath = path.join(outputDir, "ai-terminal-kb.html");

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
fs.writeFileSync(outputPath, renderHtml({ docs, navItems }), "utf8");
console.log(outputPath);

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
  <title>AI-Terminal-KB - 1 Person + AI = 1 Team</title>
  <meta name="description" content="终端风 AI 个人知识库，Markdown 内容系统与大模型检索入口。" />
  <style>${css()}</style>
  <style>${interactionCss()}</style>
  <style>${productThemeCss()}</style>
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
    </section>

    <section class="site-shell" id="os">
      <header class="topbar">
        <button data-window="win-launchpad">esther OS</button>
        <button data-command="cat about.md">About</button>
        <button data-command="cat life-system.md">Values</button>
        <button data-command="cat ai-partner.md">Now</button>
        <time id="clock">--:--</time>
      </header>

      <div class="star-marquee" aria-hidden="true">
        <span>✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦</span>
      </div>

      <section class="os-board">
        <div class="portrait-card">
          <div class="portrait-art">
            <span>AI</span>
            <b>KB</b>
          </div>
          <p>1 person + AI = 1 team</p>
        </div>
        <div class="desktop-surface" id="desktopSurface">
          <div class="desktop-tools" id="desktopTools">
            <button id="newFileBtn" title="新建文件">+</button>
            <input id="desktopSearch" placeholder="Search files" />
            <button id="deleteFileBtn" title="删除文件">×</button>
          </div>
          <div class="selection-actions" id="selectionActions">
            <span id="selectionCount">已选 0</span>
            <button id="selectionDeleteBtn" title="删除选中文件">× 删除</button>
          </div>
          <div class="app-grid" id="appGrid"></div>
        </div>
      </section>

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
        <p>© 2026 AI-Terminal-KB · Built with AI & attitude</p>
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
        <button id="worksCanvasRecordsBtn" class="works-canvas-records">无限画板</button>
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
    <div class="os-window" data-title="esther OS">
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
  </script>
  <script>${clientJs()}</script>
</body>
</html>`;
}

function css() {
  return `
*{box-sizing:border-box}html{scroll-behavior:smooth;overflow:hidden}html.scroll-unlocked{overflow:auto;overflow-x:hidden}body{margin:0;background:#fefcf6;color:#1a1a2e;font-family:-apple-system,BlinkMacSystemFont,"Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif;-webkit-font-smoothing:antialiased}button,input{font:inherit}button{cursor:pointer;color:inherit}.tab-page{display:none}.tab-page.active{display:block}.transition-overlay{position:fixed;inset:0;z-index:80;background:#2b7fd8;opacity:0;pointer-events:none;transition:opacity .35s ease}.transition-overlay.active{opacity:1}.pill-nav{position:fixed;left:50%;bottom:24px;z-index:70;display:flex;gap:4px;transform:translateX(-50%);padding:5px;border:1px solid rgba(26,26,46,.08);border-radius:999px;background:rgba(255,255,255,.86);backdrop-filter:blur(16px);box-shadow:0 8px 32px rgba(26,26,46,.12);transition:.35s}.pill-nav.hidden-during-intro{opacity:0;pointer-events:none;transform:translateX(-50%) translateY(16px)}.pill-nav button{border:0;border-radius:999px;background:transparent;padding:9px 18px;font-size:13px;font-weight:600}.pill-nav span{font:11px ui-monospace,SFMono-Regular,Menlo,monospace;opacity:.55;margin-right:6px}.pill-nav button:hover,.pill-nav button.active{background:#2b7fd8;color:white}.hero{min-height:100vh;display:grid;place-items:center;padding:32px;overflow:hidden;background:radial-gradient(circle at 50% 18%,#fff 0,#fefcf6 28%,#faf6eb 100%)}.hero.launched{display:none}.macbook{display:flex;flex-direction:column;align-items:center;animation:floatIn .9s cubic-bezier(.16,1,.3,1) both}.screen-bezel{width:min(720px,88vw);background:#2a2a30;border-radius:14px 14px 0 0;padding:0 14px 14px}.notch{width:130px;height:14px;margin:0 auto;background:#2a2a30;border-radius:0 0 10px 10px}.screen{height:min(440px,54vw);min-height:300px;border-radius:4px;overflow:hidden;background:#2b7fd8;position:relative}.screen:after,.terminal-window:after{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,.04) 2px,rgba(255,255,255,.04) 3px)}.mini-terminal{height:100%;padding:18px 20px;color:white;font:14px/1.7 ui-monospace,SFMono-Regular,Menlo,monospace}.terminal-titlebar{display:flex;align-items:center;gap:7px;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,.16);margin-bottom:14px}.terminal-titlebar i{width:10px;height:10px;border-radius:50%}.terminal-titlebar i:nth-child(1){background:#ff5f57}.terminal-titlebar i:nth-child(2){background:#ffbd2e}.terminal-titlebar i:nth-child(3){background:#28ca41}.terminal-titlebar span{margin:0 auto;color:rgba(255,255,255,.62);font-size:11px}.intro-lines{height:calc(100% - 42px);display:grid;place-content:center;text-align:center}.prompt{color:#f4d758;font-weight:700}.press{margin:18px 0 8px;color:#fff;font-size:clamp(20px,3vw,34px);font-weight:800}.arrow{font-size:30px;animation:bounce 1.4s infinite}.hinge{width:min(730px,90vw);height:3px;background:linear-gradient(#8a8a8e,#6e6e72)}.base{width:min(760px,94vw);height:14px;border-radius:0 0 10px 10px;background:linear-gradient(#c8c8cc,#a8a8ac 32%,#b8b8bc 70%,#9a9a9e)}.shadow{width:min(700px,86vw);height:40px;margin-top:4px;background:radial-gradient(ellipse at center,rgba(0,0,0,.24),transparent 70%)}.site-shell{min-height:100vh;padding:18px clamp(16px,4vw,56px) 110px}.topbar{position:sticky;top:0;z-index:10;display:flex;align-items:center;gap:18px;min-height:46px;background:rgba(254,252,246,.82);backdrop-filter:blur(14px);border-bottom:1px solid rgba(26,26,46,.08)}.topbar button{border:0;background:transparent;font-size:14px;font-weight:700}.topbar button:hover{text-decoration:underline;text-underline-offset:5px}.topbar time{margin-left:auto;font:13px ui-monospace,SFMono-Regular,Menlo,monospace;color:#6f6f80}.star-marquee{overflow:hidden;margin:28px 0 30px;color:#1a1a2e;font:19px ui-monospace,SFMono-Regular,Menlo,monospace;white-space:nowrap}.star-marquee span{display:inline-block;animation:marquee 28s linear infinite}.os-board{display:grid;grid-template-columns:310px 1fr;gap:28px;align-items:stretch}.portrait-card{min-height:370px;border:2px solid #1a1a2e;border-radius:22px;background:#fff9e9;box-shadow:10px 10px 0 #1a1a2e;padding:18px;display:grid;grid-template-rows:1fr auto}.portrait-art{border-radius:18px;background:linear-gradient(135deg,#2b7fd8 0 45%,#f4d758 45% 70%,#e84a5f 70%);display:grid;place-items:center;color:white;position:relative;overflow:hidden}.portrait-art span{position:absolute;left:22px;top:18px;font:700 48px ui-monospace,SFMono-Regular,Menlo,monospace}.portrait-art b{font-size:clamp(70px,9vw,120px);letter-spacing:-4px;text-shadow:5px 5px 0 rgba(0,0,0,.18)}.portrait-card p{margin:16px 0 4px;font:800 22px/1.1 ui-monospace,SFMono-Regular,Menlo,monospace}.desktop-surface{position:relative;min-height:370px}.app-grid{display:grid;grid-template-columns:repeat(4,minmax(120px,1fr));gap:16px}.app-card{min-height:112px;border:2px solid #1a1a2e;border-radius:18px;background:#fff;padding:14px;text-align:left;box-shadow:6px 6px 0 rgba(26,26,46,.92);transition:.2s}.app-card:nth-child(3n+1){background:#f4d758}.app-card:nth-child(3n+2){background:#dff0ff}.app-card:nth-child(3n){background:#ffe6ec}.app-card:hover,.app-card.selected{transform:translate(-2px,-2px);box-shadow:9px 9px 0 rgba(26,26,46,.92)}.app-card small{display:block;margin-bottom:22px;font:12px ui-monospace,SFMono-Regular,Menlo,monospace;opacity:.65}.app-card strong{display:block;font-size:16px;line-height:1.25}.work-strip{margin:76px 0 32px;padding:34px;border:2px solid #1a1a2e;border-radius:28px;background:#1a1a2e;color:white}.work-strip p{margin:0 0 10px;color:#f4d758;font-weight:800}.work-strip h1{margin:0 0 24px;font:900 clamp(34px,6vw,88px)/.94 Georgia,"Times New Roman",serif;letter-spacing:-2px}.work-grid,.works-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.work-grid article,.works-grid article{border:1px solid rgba(255,255,255,.18);border-radius:18px;padding:18px;background:rgba(255,255,255,.07)}.work-grid span,.works-grid span{color:#f4d758;font-weight:800}.work-grid strong,.works-grid strong{display:block;margin:12px 0 8px;font-size:18px}.work-grid small,.works-grid small{color:rgba(255,255,255,.72);line-height:1.6}.split-panels{display:grid;grid-template-columns:minmax(260px,.8fr) minmax(320px,1.2fr);gap:24px;margin-top:28px}.readme-panel,.chat-panel{border:2px solid #1a1a2e;border-radius:26px;background:white;box-shadow:8px 8px 0 #1a1a2e;padding:22px}.readme-panel h2{margin:0 0 18px}.readme-panel button,.folder-body button,.os-body button{display:block;width:100%;border:1px solid #1a1a2e;border-radius:14px;background:#fefcf6;padding:14px;margin:10px 0;text-align:left;font-weight:800}.chat-tabs{display:flex;gap:8px;flex-wrap:wrap;font-size:13px;font-weight:800}.chat-tabs span:first-child{color:#2b7fd8}.chat-search{margin:14px 0;padding:11px 14px;border-radius:999px;background:#f3f0e8;color:#8a8a9a}.bubble{max-width:82%;margin:12px 0;padding:13px 15px;border-radius:18px;line-height:1.65}.bubble.user{margin-left:auto;background:#2b7fd8;color:white}.bubble.agent{background:#f3f0e8}.chat-input{display:flex;justify-content:space-between;margin-top:16px;padding:13px 15px;border:1px solid #ded8c8;border-radius:999px;color:#8a8a9a}.terminal-section{margin-top:72px}.terminal-window{position:relative;overflow:hidden;border-radius:22px;background:#151821;color:white;box-shadow:0 22px 70px rgba(26,26,46,.28)}.terminal-titlebar.dark{margin:0;padding:15px 18px;border-bottom:1px solid rgba(255,255,255,.14)}.terminal-output{min-height:360px;max-height:560px;overflow:auto;padding:20px;font:14px/1.75 ui-monospace,SFMono-Regular,Menlo,monospace}.term-row{margin-bottom:14px;white-space:pre-wrap}.term-command{color:white}.term-command b{color:#f4d758}.term-out{color:rgba(255,255,255,.82)}.term-out:before{content:"> ";color:#4ade80}.term-html{display:grid;gap:10px}.term-html h1,.term-html h2,.term-html h3{margin:8px 0;color:white;font-size:16px}.term-html p,.term-html ul,.term-html ol{margin:0 0 10px}.term-html code{background:rgba(255,255,255,.12);padding:2px 5px;border-radius:4px}.result-btn,.source-btn{display:block;width:100%;margin:8px 0;padding:11px 12px;border:1px solid rgba(255,255,255,.18);border-radius:12px;background:rgba(255,255,255,.06);color:white;text-align:left}.result-btn small{display:block;color:rgba(255,255,255,.62);line-height:1.5}.terminal-form{display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;padding:15px 20px;border-top:1px solid rgba(255,255,255,.14);font:14px ui-monospace,SFMono-Regular,Menlo,monospace}.terminal-form span{color:#f4d758;font-weight:800}.terminal-form input{border:0;outline:0;background:transparent;color:white;min-width:0}.terminal-form input::placeholder{color:rgba(255,255,255,.4)}.site-footer{display:flex;justify-content:space-between;align-items:center;margin-top:40px;color:#626272}.site-footer button{border:0;background:transparent;font-weight:800}.exit-overlay{position:fixed;inset:0;z-index:90;display:grid;place-items:center;background:#151821;color:white;opacity:0;pointer-events:none;transition:.3s}.exit-overlay.active{opacity:1;pointer-events:auto}.exit-overlay p{font:700 clamp(32px,8vw,110px)/1 ui-monospace,SFMono-Regular,Menlo,monospace}.os-window{position:absolute;left:8%;top:8%;z-index:20;width:min(460px,92vw);border:2px solid #1a1a2e;border-radius:16px;background:white;box-shadow:10px 10px 0 rgba(26,26,46,.85);overflow:hidden}.os-window-bar{height:36px;background:#f3f0e8;border-bottom:1px solid #1a1a2e;display:flex;align-items:center;gap:8px;padding:0 12px;cursor:move}.os-window-bar i{width:11px;height:11px;border-radius:50%;display:block}.os-window-bar i:nth-child(1){background:#ff5f57}.os-window-bar i:nth-child(2){background:#ffbd2e}.os-window-bar i:nth-child(3){background:#28ca41}.os-window-bar span{margin-left:auto;margin-right:auto;font-size:12px;color:#666}.os-body{padding:18px;max-height:60vh;overflow:auto}.works-page,.system-page{min-height:100vh;padding:clamp(48px,8vw,96px);background:#fefcf6}.works-page h1,.system-page h1{font:900 clamp(44px,8vw,118px)/.9 Georgia,"Times New Roman",serif;letter-spacing:-3px;margin:0 0 18px}.works-page p,.system-page p{max-width:760px;font-size:18px;line-height:1.8;color:#4a4a5a}.works-grid article{background:#1a1a2e;color:white}.system-board{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:32px}.system-board div{border:2px solid #1a1a2e;border-radius:22px;background:white;padding:22px;box-shadow:8px 8px 0 #1a1a2e}.system-board b,.system-board span{display:block}.system-board span{margin-top:10px;color:#666;line-height:1.6}@keyframes bounce{50%{transform:translateY(8px)}}@keyframes floatIn{from{opacity:0;transform:translateY(18px) scale(.98)}to{opacity:1;transform:none}}@keyframes marquee{to{transform:translateX(-50%)}}@media(max-width:900px){.os-board,.split-panels,.work-grid,.works-grid,.system-board{grid-template-columns:1fr}.app-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.portrait-card{min-height:280px}.pill-nav{bottom:14px}.site-shell{padding-inline:14px}.topbar{gap:10px;overflow:auto}.work-strip{padding:22px}.screen{height:330px}}@media(max-width:540px){.hero{padding:14px}.screen{min-height:260px;height:62vw}.app-grid{grid-template-columns:1fr}.pill-nav button{padding:8px 10px}.site-footer{display:block}.terminal-output{font-size:13px}.work-strip h1{letter-spacing:-1px}}`;
}

function interactionCss() {
  return `
.intro-lines{display:block;text-align:left;height:auto;place-content:initial}
.intro-line{opacity:0;transform:translateY(6px);white-space:pre-wrap}
.intro-line.visible{animation:lineReveal .35s ease forwards}
.cursor{display:inline-block;width:9px;height:17px;background:#fff;margin-left:3px;vertical-align:middle;animation:blink 1s step-end infinite}
.hero-cta{position:absolute;left:50%;bottom:9vh;transform:translateX(-50%) translateY(16px);border:0;background:transparent;color:#1a1a2e;text-align:center;font-weight:800;opacity:0;pointer-events:none;transition:.35s}
.hero-cta.visible{opacity:1;pointer-events:auto;transform:translateX(-50%)}
.hero-cta.hidden{opacity:0}
.hero-cta span{display:block;font-size:clamp(19px,3vw,32px)}
.hero-cta b{display:block;font-size:28px;animation:bounce 1.4s infinite}
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
body.desktop-mode .app-card.selected strong{color:white;background:rgba(23,79,147,.82);border-radius:6px;padding:2px 4px;text-shadow:none}
body.desktop-mode .app-card[data-window]:before{background:linear-gradient(#ffe870,#f7cf45);border-radius:10px}
body.desktop-mode .app-card.selected[data-window]:before{background:linear-gradient(#174f93,#236fbd)}
body.desktop-mode .app-card[data-command]:after{content:attr(data-ext);position:absolute;top:31px;left:25px;min-width:25px;padding:1px 3px;border-radius:2px;background:#2b7fd8;color:white;font:700 8px/1.2 ui-monospace,SFMono-Regular,Menlo,monospace}
body.desktop-mode .app-card small{display:none}
body.desktop-mode .app-card strong{display:block;max-width:72px;color:rgba(255,255,255,.85);font:600 11px/1.2 ui-monospace,SFMono-Regular,Menlo,monospace;text-shadow:0 1px 2px rgba(0,0,0,.25);word-break:break-word}
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
body.desktop-mode .app-card.dragging{opacity:.72;z-index:60}
body.desktop-mode .app-card.realtime-drag{transition:none;will-change:transform}
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
.os-body{background:rgba(248,252,255,.88)}
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
body.desktop-mode{background:#eaf6ff}
body.desktop-mode #page-home,body.desktop-mode .site-shell{background:linear-gradient(90deg,#cfeaff 0%,#bfe2ff 34%,#9ed1ff 68%,#7ec2ff 100%);color:white}
body.desktop-mode .site-shell:before{opacity:.72;background:linear-gradient(90deg,rgba(255,255,255,.48) 0%,rgba(255,255,255,.18) 42%,rgba(41,150,238,.1) 100%),radial-gradient(circle at 16% 18%,rgba(255,255,255,.34) 0 1px,transparent 1.7px),radial-gradient(circle at 72% 26%,rgba(255,255,255,.28) 0 1px,transparent 1.6px);background-size:100% 100%,34px 34px,52px 52px;background-position:0 0,6px 10px,18px 22px;filter:saturate(1.03)}
body.desktop-mode .site-shell:after{content:"";position:absolute;inset:0;pointer-events:none;z-index:1;background-image:radial-gradient(circle,rgba(255,255,255,.34) 0 1px,transparent 1.7px),radial-gradient(circle,rgba(255,255,255,.2) 0 1px,transparent 1.6px);background-size:44px 44px,71px 71px;background-position:9px 13px,28px 25px;opacity:.38}
body.desktop-mode .topbar{background:rgba(255,255,255,.08);border:0;box-shadow:none}
body.desktop-mode .topbar button,body.desktop-mode .topbar time{color:rgba(255,255,255,.66)}
body.desktop-mode .topbar button:first-child{color:#fff}
body.desktop-mode .desktop-tools,body.desktop-mode .selection-actions{background:rgba(248,252,255,.82);border:1px solid rgba(255,255,255,.5);box-shadow:var(--ui-shadow-soft)}
body.desktop-mode .desktop-tools button{background:#fff;color:var(--ui-blue)}
body.desktop-mode .app-card{background:transparent!important;box-shadow:none!important}
body.desktop-mode .app-card:before{border-radius:13px;background:#f8fbff;box-shadow:0 7px 18px rgba(18,47,82,.18)}
body.desktop-mode .app-card[data-window]:before{background:linear-gradient(180deg,#ffe477,#f2c947)}
body.desktop-mode .app-card.selected{background:rgba(255,255,255,.2)!important}
body.desktop-mode .app-card.selected:before{background:linear-gradient(180deg,var(--ui-blue-2),var(--ui-blue));box-shadow:0 0 0 3px rgba(255,255,255,.78),0 10px 22px rgba(18,47,82,.26)}
body.desktop-mode .app-card[data-command]:after{background:var(--ui-blue)}
body.desktop-mode .os-window{background:var(--ui-card-solid)!important;color:var(--ui-ink)}
body.desktop-mode .pill-nav{background:rgba(255,255,255,.84)}
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
const worksFilesGrid = document.getElementById("worksFilesGrid");
const deleteFileBtn = document.getElementById("deleteFileBtn");
const selectionActions = document.getElementById("selectionActions");
const selectionCount = document.getElementById("selectionCount");
const selectionDeleteBtn = document.getElementById("selectionDeleteBtn");
const desktopSearch = document.getElementById("desktopSearch");
const clock = document.getElementById("clock");
const launchTarget = document.getElementById("launchTarget");
const hero = document.getElementById("hero");
const terminalLines = document.getElementById("terminalLines");
const heroCta = document.getElementById("heroCta");
const pillNav = document.getElementById("pillNav");
const desktopSurface = document.getElementById("desktopSurface");
const transitionOverlay = document.getElementById("transitionOverlay");
const tabs = ["home", "works", "system"];
const DESKTOP_ITEMS_KEY = "aiTerminalDesktopItems";
const DESKTOP_ITEMS_BACKUP_KEY = "aiTerminalDesktopItemsBackup";
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
let returningToIntro = false;
let expandingToDesktop = false;
let returnProgress = 0;
let returnTargetRect = null;
const HIDDEN_WORKS_CATEGORIES_KEY = "aiTerminalHiddenWorksCategoriesV2";
let desktopItems = loadDesktopItems();
let hiddenWorksCategories = loadHiddenWorksCategories();

const fortunes = [
  "找到你喜欢的事，然后让它杀死你。 - Bukowski",
  "The best way to predict the future is to invent it. - Alan Kay",
  "A year from now you may wish you had started today. - Karen Lamb",
  "Simplicity is the ultimate sophistication. - Leonardo da Vinci"
];

const terminalData = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "> AI-Terminal-KB" },
  { type: "blank" },
  { type: "cmd", text: "cat about.md" },
  { type: "out", text: "> 终端风 AI 个人知识库" },
  { type: "out", text: "  Markdown / RAG / personal OS" },
  { type: "blank" },
  { type: "cmd", text: 'echo "1 person + AI = 1 team"' },
  { type: "gold", text: "> 1 person + AI = 1 team" },
  { type: "blank" },
  { type: "cmd", text: "open esther-os.app", cursor: true }
];

renderDesktopItems();
renderWorksFiles();

function currentTab() {
  const tab = location.hash.replace("#", "");
  return tabs.includes(tab) ? tab : "home";
}

function applyScrollLock() {
  document.documentElement.classList.toggle("scroll-unlocked", currentTab() !== "home" || launched);
  document.body.classList.toggle("desktop-mode", currentTab() === "home" && launched);
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
  heroCta.classList.add("visible");
  pillNav.classList.remove("hidden-during-intro");
  updateNavIndicator();
  requestAnimationFrame(updateNavIndicator);
}

function startIntro() {
  let delay = 0;
  terminalData.forEach((item) => {
    const line = renderIntroLine(item);
    delay += item.type === "blank" ? 150 : 260;
    setTimeout(() => line.classList.add("visible"), delay);
    delay += item.type === "cmd" ? 360 : 120;
  });
  setTimeout(finishIntro, delay + 350);
}

pillNav.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-tab]");
  if (button) location.hash = button.dataset.tab;
});

window.addEventListener("hashchange", () => switchTab(currentTab()));
window.addEventListener("resize", updateNavIndicator);
document.addEventListener("wheel", (event) => {
  if (currentTab() !== "home") return;
  if (Math.abs(event.deltaY) < 6) return;
  const canShrink = launched && document.body.classList.contains("desktop-mode");
  const canExpand = !launched && (expandingToDesktop || (document.body.classList.contains("return-stable") && event.deltaY < 0));
  if (!canShrink && !canExpand) return;
  event.preventDefault();
  if (canShrink) updateReturnProgress(event.deltaY);
  if (canExpand) updateExpandProgress(event.deltaY);
}, { passive: false });

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

appGrid.addEventListener("click", (event) => {
  if (appGrid.dataset.dragging === "true") {
    appGrid.dataset.dragging = "";
    return;
  }
  if (appGrid.dataset.marquee === "true") {
    appGrid.dataset.marquee = "";
    return;
  }
  const card = event.target.closest(".app-card");
  if (!card) {
    setDesktopSelection([]);
    return;
  }
  setDesktopSelection([card.dataset.id]);
  renderDesktopItems();
});

appGrid.addEventListener("dblclick", (event) => {
  const card = event.target.closest(".app-card");
  if (!card) return;
  const item = desktopItems.find((entry) => entry.id === card.dataset.id);
  if (!item) return;
  if (card.dataset.window) {
    openWindow(card.dataset.window);
    return;
  }
  openDocumentWindow(item);
});

appGrid.addEventListener("pointerdown", (event) => {
  const card = event.target.closest(".app-card");
  if (!card || !document.body.classList.contains("desktop-mode")) return;
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
  dragCards.forEach((node) => node.classList.add("dragging", "realtime-drag"));
  const move = (moveEvent) => {
    moved = true;
    nextDeltaX = moveEvent.clientX - startX;
    nextDeltaY = moveEvent.clientY - startY;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      dragCards.forEach((node) => {
        const origin = startPositions.get(node.dataset.id);
        if (!origin) return;
        const targetX = Math.max(8, Math.min(window.innerWidth - 86, origin.x + nextDeltaX));
        const targetY = Math.max(42, Math.min(window.innerHeight - 116, origin.y + nextDeltaY));
        node.style.transform = "translate3d(" + (targetX - origin.x) + "px," + (targetY - origin.y) + "px,0)";
      });
    });
  };
  const up = () => {
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", up);
    if (frame) cancelAnimationFrame(frame);
    if (moved) {
      dragItems.forEach((entry) => {
        const origin = startPositions.get(entry.id);
        if (!origin) return;
        entry.x = Math.max(8, Math.min(window.innerWidth - 86, origin.x + nextDeltaX));
        entry.y = Math.max(42, Math.min(window.innerHeight - 116, origin.y + nextDeltaY));
        entry.autoArrange = false;
      });
      appGrid.dataset.dragging = "true";
      saveDesktopItems();
    }
    dragCards.forEach((node) => {
      const entry = desktopItems.find((candidate) => candidate.id === node.dataset.id);
      node.style.transform = "";
      if (entry) {
        node.style.left = entry.x + "px";
        node.style.top = entry.y + "px";
      }
      node.classList.remove("dragging", "realtime-drag");
    });
  };
  document.addEventListener("pointermove", move);
  document.addEventListener("pointerup", up);
});

appGrid.addEventListener("pointerdown", (event) => {
  if (!document.body.classList.contains("desktop-mode")) return;
  if (event.button !== 0 || event.target.closest(".app-card") || event.target.closest(".desktop-tools") || event.target.closest(".os-window")) return;
  const startX = event.clientX;
  const startY = event.clientY;
  let selectionBox = null;
  let moved = false;
  let frame = 0;
  let nextBox = { left: startX, top: startY, width: 0, height: 0 };
  let selecting = false;
  const startSelecting = () => {
    if (selecting) return;
    selecting = true;
    moved = true;
    isMarqueeSelecting = true;
    setDesktopSelection([], false, false);
    selectionBox = document.createElement("div");
    selectionBox.className = "selection-box";
    selectionBox.style.width = "0px";
    selectionBox.style.height = "0px";
    selectionBox.style.transform = "translate3d(" + startX + "px," + startY + "px,0)";
    desktopSurface.appendChild(selectionBox);
  };
  const paint = () => {
    frame = 0;
    if (!selectionBox) return;
    selectionBox.style.transform = "translate3d(" + nextBox.left + "px," + nextBox.top + "px,0)";
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
    if (!selecting && Math.hypot(deltaX, deltaY) < 8) return;
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
});

desktopSearch.addEventListener("input", renderDesktopItems);
window.addEventListener("resize", () => {
  if (document.body.classList.contains("desktop-mode")) renderDesktopItems();
});
newFileBtn.addEventListener("click", () => openEditorWindow());
worksAddFileBtn.addEventListener("click", () => openEditorWindow(null, document.body, "works"));
worksCanvasRecordsBtn.addEventListener("click", () => openWorksInfiniteCanvas());
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
    const openDoc = desktopSurface.querySelector('.os-window[data-doc="' + normalizePath(item.path) + '"]');
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
  desktopSurface.querySelectorAll(".os-window").forEach((win) => win.remove());
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
  return navItems.map(([label, path, index], itemIndex) => {
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
      content: ""
    };
  });
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
    content: String(item?.content || "")
  };
}

function loadDesktopItems() {
  const defaults = defaultDesktopItems();
  try {
    const primary = JSON.parse(localStorage.getItem(DESKTOP_ITEMS_KEY) || "null");
    const backup = JSON.parse(localStorage.getItem(DESKTOP_ITEMS_BACKUP_KEY) || "null");
    const saved = Array.isArray(primary) && primary.length ? primary : Array.isArray(backup) && backup.length ? backup : primary;
    if (Array.isArray(saved) && saved.length) {
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
      const merged = defaults.map((item) => byId.has(item.id) ? { ...item, ...byId.get(item.id), autoArrange: true } : item);
      defaults.forEach((item) => byId.delete(item.id));
      const cleaned = [...merged, ...[...byId.values()]];
      if (cleaned.length !== normalized.length) changed = true;
      if (changed) {
        localStorage.setItem(DESKTOP_ITEMS_KEY, JSON.stringify(cleaned));
        localStorage.setItem(DESKTOP_ITEMS_BACKUP_KEY, JSON.stringify(cleaned));
      }
      return cleaned;
    }
  } catch (error) {}
  return defaults;
}

function desktopRightSlot(itemIndex) {
  const top = 52;
  const bottom = 122;
  const colWidth = 88;
  const rowHeight = 92;
  const rows = Math.max(1, Math.floor((window.innerHeight - top - bottom) / rowHeight));
  const col = Math.floor(itemIndex / rows);
  const row = itemIndex % rows;
  return {
    x: Math.max(8, window.innerWidth - 92 - col * colWidth),
    y: Math.min(window.innerHeight - 116, top + row * rowHeight)
  };
}

function applyDesktopRightLayout() {
  const arrangedItems = desktopItems;
  arrangedItems.forEach((item, index) => {
    const point = desktopRightSlot(index);
    item.x = point.x;
    item.y = point.y;
    item.autoArrange = true;
  });
  desktopItems.forEach((item) => {
    item.x = Math.max(8, Math.min(window.innerWidth - 86, Number(item.x) || 8));
    item.y = Math.max(42, Math.min(window.innerHeight - 116, Number(item.y) || 42));
  });
}

function saveDesktopItems() {
  try {
    const payload = JSON.stringify(desktopItems);
    localStorage.setItem(DESKTOP_ITEMS_KEY, payload);
    localStorage.setItem(DESKTOP_ITEMS_BACKUP_KEY, payload);
  } catch (error) {}
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
}

function renderWorksCategories() {
  document.querySelectorAll(".works-category").forEach((card) => {
    card.hidden = hiddenWorksCategories.has(card.dataset.workCategory);
    if (card.hidden) card.classList.remove("delete-ready", "drag-over");
  });
}

function renderDesktopItems() {
  applyDesktopRightLayout();
  const query = desktopSearch.value.trim().toLowerCase();
  appGrid.innerHTML = desktopItems
    .filter((item) => !query || String(item.label || "").toLowerCase().includes(query) || String(item.path || "").toLowerCase().includes(query))
    .map(renderAppCard)
    .join("");
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
      { id: "profile-card", layer: "profile", type: "profile", x: 620, y: 170, title: "ESTHER不二", body: "1 person + AI = 1 team. 设计师 / AI 协作者 / 内容系统搭建者。" },
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
    overlay.innerHTML = '<aside class="works-canvas-sidebar"><div class="works-canvas-brand"><i>ε</i><span>ESTHER Canvas</span></div><div class="works-canvas-layers"><h3>✦ Layers</h3><div id="worksCanvasLayers"></div></div><button id="worksCanvasNew" class="works-canvas-new">＋ 新建图层</button><div class="works-canvas-mini"><h3>✦ Minimap</h3><div class="works-canvas-mini-box"></div></div></aside><main class="works-canvas-stage"><button id="worksCanvasClose" class="works-canvas-close">×</button><div class="works-canvas-top"><button id="worksCanvasTemplateOpen" class="works-canvas-template-open">选择卡片模板</button><span>Scroll 缩放</span><span>·</span><span>Drag 移动画布</span><span>·</span><b>Workflow 连线</b></div><div id="worksCanvasBoard" class="works-canvas-board"><svg id="worksCanvasLinks" class="works-canvas-links"></svg></div><section id="worksCanvasLayerModal" class="works-canvas-layer-modal"><h3>✦ 新建图层</h3><input id="worksCanvasLayerName" placeholder="输入图层名称" value="新图层"><div><button id="worksCanvasLayerCancel">取消</button><button id="worksCanvasLayerCreate">创建</button></div></section><section id="worksCanvasTemplateModal" class="works-canvas-template-modal"><h3>✦ 选择卡片模板</h3><div class="works-canvas-template-grid"><button data-template="text">📝<br>文字卡</button><button data-template="quote">💬<br>引用卡</button><button data-template="image">🖼️<br>图片卡</button><button data-template="sticky">📌<br>便利贴</button><button data-template="moon">🌙<br>深色卡</button><button data-template="link">🔗<br>链接卡</button></div></section><section class="works-canvas-palette"><div id="worksCanvasInspector"></div></section><div class="works-canvas-bottom"><span>点击卡片两侧圆点进行连线</span><span>Layer 点击可定位卡片</span><span>配置卡片</span><span>独立保存</span></div><div class="works-canvas-zoom"><button data-zoom="-">−</button><span id="worksCanvasZoom">43%</span><button data-zoom="+">＋</button><button id="worksCanvasSave">💾</button></div></main>';
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

function renderAppCard(item) {
  const windowMap = {
    "Design Skill": "win-design-skill",
    "Work With Me": "win-work",
    "网页进化史": "win-website-history"
  };
  const action = item.kind === "window" ? 'data-window="' + (item.windowId || windowMap[item.label]) + '"' : 'data-command="cat ' + item.path + '"';
  const selected = selectedDesktopIds.has(item.id) ? " selected" : "";
  const ext = "." + fileTypeFor(item).toLowerCase();
  return '<button class="app-card' + selected + '" data-id="' + item.id + '" data-ext="' + escapeHtml(ext) + '" ' + action + ' style="left:' + item.x + 'px;top:' + item.y + 'px"><small>dim_' + item.index + '</small><strong>' + escapeHtml(item.label) + '</strong></button>';
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

function openWindow(templateId) {
  const existing = desktopSurface.querySelector('.os-window[data-from="' + templateId + '"]');
  if (existing) {
    existing.style.zIndex = ++winZ;
    return;
  }
  const template = document.getElementById(templateId);
  if (!template) return;
  const win = template.content.firstElementChild.cloneNode(true);
  if (templateId === "win-launchpad") {
    const body = win.querySelector("#launchpadBody");
    if (body) body.innerHTML = desktopItems.map((item) => '<button data-command="cat ' + item.path + '"><span>' + item.index + '</span> ' + escapeHtml(item.label) + '</button>').join("");
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
    card.classList.toggle("selected", selectedDesktopIds.has(card.dataset.id));
  });
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
  const existing = desktopSurface.querySelector('.os-window[data-doc="' + normalized + '"]');
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
  bar.innerHTML = "<i></i><i></i><i></i><span>" + normalized + "</span>";
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
  const linkImport = editing ? "" : '<div class="link-import-box"><label>根据链接生成文件</label><div class="link-import-row"><input class="link-import-url" placeholder="粘贴文章链接 / 收藏链接"><button class="link-import-btn" type="button">生成</button></div><small class="link-import-status">会自动填写标题、简介，并把可读取内容整理成结构化文档。</small></div>';
  body.innerHTML = linkImport + '<label style="display:block;font-weight:800;margin-bottom:8px">文件名</label><input class="editor-title" style="width:100%;height:36px;border:1px solid #1a1a2e;border-radius:8px;padding:0 10px" value="' + escapeHtml(item?.label || "新建笔记") + '"><label style="display:block;font-weight:800;margin:14px 0 8px">格式</label><select class="editor-type" style="width:100%;height:36px;border:1px solid #1a1a2e;border-radius:8px;padding:0 10px;background:white">' + typeOptions + '</select><label style="display:block;font-weight:800;margin:14px 0 8px">内容</label><textarea class="editor-content" style="width:100%;height:220px;border:1px solid #1a1a2e;border-radius:8px;padding:10px;resize:vertical">' + escapeHtml(item?.content || docMap.get(normalizePath(item?.path || ""))?.content || defaultContentFor(currentType)) + '</textarea><button class="editor-save">保存</button>';
  win.appendChild(bar);
  win.appendChild(body);
  bar.querySelector("i").addEventListener("click", (event) => {
    event.stopPropagation();
    win.remove();
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
        content
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
    const rect = win.getBoundingClientRect();
    const left = Math.max(12, Math.round((window.innerWidth - rect.width) / 2));
    const top = Math.max(46, Math.round((window.innerHeight - rect.height) / 2));
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
    appendHtml("<p>可用命令：</p><ul><li>open esther-os.app</li><li>cat about.md</li><li>search AI</li><li>ai query \\"AI 协作\\"</li><li>ai summary about.md</li><li>fortune</li><li>exit</li></ul>");
    return;
  }
  if (command === "open esther-os.app" || command === "ls") {
    openWindow("win-launchpad");
    appendText("esther OS opened. 单击图标选中，双击图标打开文档。");
    return;
  }
  if (command === "whoami") {
    appendText("AI-Terminal-KB / Markdown knowledge base / 1 person + AI = 1 team");
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
    appendHtml(doc ? markdownToHtml(doc.content) : "<p>未找到 " + escapeHtml(path) + "。输入 open esther-os.app 查看文档。</p>");
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
      content
    });
    setDesktopSelection([id], false);
    saveDesktopItems();
    renderDesktopItems();
    renderWorksFiles();
    return id;
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
    desktopItems = desktopItems.filter((entry) => entry.id !== id);
    if (selectedDesktopIds.has(id)) setDesktopSelection([], false);
    saveDesktopItems();
    renderDesktopItems();
    renderWorksFiles();
    return desktopItems.length < before;
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
    desktopSearch.value = query;
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
    desktopSearch.value = "";
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
