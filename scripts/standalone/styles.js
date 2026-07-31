export function css() {
  return `
*{box-sizing:border-box}html{scroll-behavior:smooth;overflow:hidden}html.scroll-unlocked{overflow:auto;overflow-x:hidden}body{margin:0;background:#fefcf6;color:#1a1a2e;font-family:-apple-system,BlinkMacSystemFont,"Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif;-webkit-font-smoothing:antialiased}button,input{font:inherit}button{cursor:pointer;color:inherit}.tab-page{display:none}.tab-page.active{display:block}.transition-overlay{position:fixed;inset:0;z-index:80;background:#2b7fd8;opacity:0;pointer-events:none;transition:opacity .35s ease}.transition-overlay.active{opacity:1}.pill-nav{position:fixed;left:50%;bottom:24px;z-index:70;display:flex;gap:4px;transform:translateX(-50%);padding:5px;border:1px solid rgba(26,26,46,.08);border-radius:999px;background:rgba(255,255,255,.86);backdrop-filter:blur(16px);box-shadow:0 8px 32px rgba(26,26,46,.12);transition:.35s}.pill-nav.hidden-during-intro{opacity:0;pointer-events:none;transform:translateX(-50%) translateY(16px)}.pill-nav button{border:0;border-radius:999px;background:transparent;padding:9px 18px;font-size:13px;font-weight:600}.pill-nav span{font:11px ui-monospace,SFMono-Regular,Menlo,monospace;opacity:.55;margin-right:6px}.pill-nav button:hover,.pill-nav button.active{background:#2b7fd8;color:white}.hero{min-height:100vh;display:grid;place-items:center;padding:32px;overflow:hidden;background:radial-gradient(circle at 50% 18%,#fff 0,#fefcf6 28%,#faf6eb 100%)}.hero.launched{display:none}.macbook{display:flex;flex-direction:column;align-items:center;animation:floatIn .9s cubic-bezier(.16,1,.3,1) both}.screen-bezel{width:min(720px,88vw);background:#2a2a30;border-radius:14px 14px 0 0;padding:0 14px 14px}.notch{width:130px;height:14px;margin:0 auto;background:#2a2a30;border-radius:0 0 10px 10px}.screen{height:min(440px,54vw);min-height:300px;border-radius:4px;overflow:hidden;background:#2b7fd8;position:relative}.screen:after,.terminal-window:after{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,.04) 2px,rgba(255,255,255,.04) 3px)}.mini-terminal{height:100%;padding:18px 20px;color:white;font:14px/1.7 ui-monospace,SFMono-Regular,Menlo,monospace}.terminal-titlebar{display:flex;align-items:center;gap:7px;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,.16);margin-bottom:14px}.terminal-titlebar i{width:10px;height:10px;border-radius:50%}.terminal-titlebar i:nth-child(1){background:#ff5f57}.terminal-titlebar i:nth-child(2){background:#ffbd2e}.terminal-titlebar i:nth-child(3){background:#28ca41}.terminal-titlebar span{margin:0 auto;color:rgba(255,255,255,.62);font-size:11px}.intro-lines{height:calc(100% - 42px);display:grid;place-content:center;text-align:center}.prompt{color:#f4d758;font-weight:700}.press{margin:18px 0 8px;color:#fff;font-size:clamp(20px,3vw,34px);font-weight:800}.arrow{font-size:30px;animation:bounce 1.4s infinite}.hinge{width:min(730px,90vw);height:3px;background:linear-gradient(#8a8a8e,#6e6e72)}.base{width:min(760px,94vw);height:14px;border-radius:0 0 10px 10px;background:linear-gradient(#c8c8cc,#a8a8ac 32%,#b8b8bc 70%,#9a9a9e)}.shadow{width:min(700px,86vw);height:40px;margin-top:4px;background:radial-gradient(ellipse at center,rgba(0,0,0,.24),transparent 70%)}.site-shell{min-height:100vh;padding:18px clamp(16px,4vw,56px) 110px}.topbar{position:sticky;top:0;z-index:10;display:flex;align-items:center;gap:18px;min-height:46px;background:rgba(254,252,246,.82);backdrop-filter:blur(14px);border-bottom:1px solid rgba(26,26,46,.08)}.topbar button{border:0;background:transparent;font-size:14px;font-weight:700}.topbar button:hover{text-decoration:underline;text-underline-offset:5px}.topbar time{margin-left:auto;font:13px ui-monospace,SFMono-Regular,Menlo,monospace;color:#6f6f80}.star-marquee{overflow:hidden;margin:28px 0 30px;color:#1a1a2e;font:19px ui-monospace,SFMono-Regular,Menlo,monospace;white-space:nowrap}.star-marquee span{display:inline-block;animation:marquee 28s linear infinite}.os-board{display:grid;grid-template-columns:310px 1fr;gap:28px;align-items:stretch}.portrait-card{min-height:370px;border:2px solid #1a1a2e;border-radius:22px;background:#fff9e9;box-shadow:10px 10px 0 #1a1a2e;padding:18px;display:grid;grid-template-rows:1fr auto}.portrait-art{border-radius:18px;background:linear-gradient(135deg,#2b7fd8 0 45%,#f4d758 45% 70%,#e84a5f 70%);display:grid;place-items:center;color:white;position:relative;overflow:hidden}.portrait-art span{position:absolute;left:22px;top:18px;font:700 48px ui-monospace,SFMono-Regular,Menlo,monospace}.portrait-art b{font-size:clamp(70px,9vw,120px);letter-spacing:-4px;text-shadow:5px 5px 0 rgba(0,0,0,.18)}.portrait-card p{margin:16px 0 4px;font:800 22px/1.1 ui-monospace,SFMono-Regular,Menlo,monospace}.desktop-surface{position:relative;min-height:370px}.app-grid{display:grid;grid-template-columns:repeat(4,minmax(120px,1fr));gap:16px}.app-card{min-height:112px;border:2px solid #1a1a2e;border-radius:18px;background:#fff;padding:14px;text-align:left;box-shadow:6px 6px 0 rgba(26,26,46,.92);transition:.2s}.app-card:nth-child(3n+1){background:#f4d758}.app-card:nth-child(3n+2){background:#dff0ff}.app-card:nth-child(3n){background:#ffe6ec}.app-card:hover,.app-card.selected{transform:translate(-2px,-2px);box-shadow:9px 9px 0 rgba(26,26,46,.92)}.app-card small{display:block;margin-bottom:22px;font:12px ui-monospace,SFMono-Regular,Menlo,monospace;opacity:.65}.app-card strong{display:block;font-size:16px;line-height:1.25}.work-strip{margin:76px 0 32px;padding:34px;border:2px solid #1a1a2e;border-radius:28px;background:#1a1a2e;color:white}.work-strip p{margin:0 0 10px;color:#f4d758;font-weight:800}.work-strip h1{margin:0 0 24px;font:900 clamp(34px,6vw,88px)/.94 Georgia,"Times New Roman",serif;letter-spacing:-2px}.work-grid,.works-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.work-grid article,.works-grid article{border:1px solid rgba(255,255,255,.18);border-radius:18px;padding:18px;background:rgba(255,255,255,.07)}.work-grid span,.works-grid span{color:#f4d758;font-weight:800}.work-grid strong,.works-grid strong{display:block;margin:12px 0 8px;font-size:18px}.work-grid small,.works-grid small{color:rgba(255,255,255,.72);line-height:1.6}.split-panels{display:grid;grid-template-columns:minmax(260px,.8fr) minmax(320px,1.2fr);gap:24px;margin-top:28px}.readme-panel,.chat-panel{border:2px solid #1a1a2e;border-radius:26px;background:white;box-shadow:8px 8px 0 #1a1a2e;padding:22px}.readme-panel h2{margin:0 0 18px}.readme-panel button,.folder-body button,.os-body button{display:block;width:100%;border:1px solid #1a1a2e;border-radius:14px;background:#fefcf6;padding:14px;margin:10px 0;text-align:left;font-weight:800}.chat-tabs{display:flex;gap:8px;flex-wrap:wrap;font-size:13px;font-weight:800}.chat-tabs span:first-child{color:#2b7fd8}.chat-search{margin:14px 0;padding:11px 14px;border-radius:999px;background:#f3f0e8;color:#8a8a9a}.bubble{max-width:82%;margin:12px 0;padding:13px 15px;border-radius:18px;line-height:1.65}.bubble.user{margin-left:auto;background:#2b7fd8;color:white}.bubble.agent{background:#f3f0e8}.chat-input{display:flex;justify-content:space-between;margin-top:16px;padding:13px 15px;border:1px solid #ded8c8;border-radius:999px;color:#8a8a9a}.terminal-section{margin-top:72px}.terminal-window{position:relative;overflow:hidden;border-radius:22px;background:#151821;color:white;box-shadow:0 22px 70px rgba(26,26,46,.28)}.terminal-titlebar.dark{margin:0;padding:15px 18px;border-bottom:1px solid rgba(255,255,255,.14)}.terminal-output{min-height:360px;max-height:560px;overflow:auto;padding:20px;font:14px/1.75 ui-monospace,SFMono-Regular,Menlo,monospace}.term-row{margin-bottom:14px;white-space:pre-wrap}.term-command{color:white}.term-command b{color:#f4d758}.term-out{color:rgba(255,255,255,.82)}.term-out:before{content:"> ";color:#4ade80}.term-html{display:grid;gap:10px}.term-html h1,.term-html h2,.term-html h3{margin:8px 0;color:white;font-size:16px}.term-html p,.term-html ul,.term-html ol{margin:0 0 10px}.term-html code{background:rgba(255,255,255,.12);padding:2px 5px;border-radius:4px}.result-btn,.source-btn{display:block;width:100%;margin:8px 0;padding:11px 12px;border:1px solid rgba(255,255,255,.18);border-radius:12px;background:rgba(255,255,255,.06);color:white;text-align:left}.result-btn small{display:block;color:rgba(255,255,255,.62);line-height:1.5}.terminal-form{display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:center;padding:15px 20px;border-top:1px solid rgba(255,255,255,.14);font:14px ui-monospace,SFMono-Regular,Menlo,monospace}.terminal-form span{color:#f4d758;font-weight:800}.terminal-form input{border:0;outline:0;background:transparent;color:white;min-width:0}.terminal-form input::placeholder{color:rgba(255,255,255,.4)}.site-footer{display:flex;justify-content:space-between;align-items:center;margin-top:40px;color:#626272}.site-footer button{border:0;background:transparent;font-weight:800}.exit-overlay{position:fixed;inset:0;z-index:90;display:grid;place-items:center;background:#151821;color:white;opacity:0;pointer-events:none;transition:.3s}.exit-overlay.active{opacity:1;pointer-events:auto}.exit-overlay p{font:700 clamp(32px,8vw,110px)/1 ui-monospace,SFMono-Regular,Menlo,monospace}.os-window{position:absolute;left:8%;top:8%;z-index:20;width:min(460px,92vw);border:2px solid #1a1a2e;border-radius:16px;background:white;box-shadow:10px 10px 0 rgba(26,26,46,.85);overflow:hidden}.os-window-bar{height:36px;background:#f3f0e8;border-bottom:1px solid #1a1a2e;display:flex;align-items:center;gap:8px;padding:0 12px;cursor:move}.os-window-bar i{width:11px;height:11px;border-radius:50%;display:block}.os-window-bar i:nth-child(1){background:#ff5f57}.os-window-bar i:nth-child(2){background:#ffbd2e}.os-window-bar i:nth-child(3){background:#28ca41}.os-window-bar span{margin-left:auto;margin-right:auto;font-size:12px;color:#666}.os-body{padding:18px;max-height:60vh;overflow:auto}.works-page,.system-page{min-height:100vh;padding:clamp(48px,8vw,96px);background:#fefcf6}.works-page h1,.system-page h1{font:900 clamp(44px,8vw,118px)/.9 Georgia,"Times New Roman",serif;letter-spacing:-3px;margin:0 0 18px}.works-page p,.system-page p{max-width:760px;font-size:18px;line-height:1.8;color:#4a4a5a}.works-grid article{background:#1a1a2e;color:white}.system-board{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:32px}.system-board div{border:2px solid #1a1a2e;border-radius:22px;background:white;padding:22px;box-shadow:8px 8px 0 #1a1a2e}.system-board b,.system-board span{display:block}.system-board span{margin-top:10px;color:#666;line-height:1.6}@keyframes bounce{50%{transform:translateY(8px)}}@keyframes floatIn{from{opacity:0;transform:translateY(18px) scale(.98)}to{opacity:1;transform:none}}@keyframes marquee{to{transform:translateX(-50%)}}@media(max-width:900px){.os-board,.split-panels,.work-grid,.works-grid,.system-board{grid-template-columns:1fr}.app-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.portrait-card{min-height:280px}.pill-nav{bottom:14px}.site-shell{padding-inline:14px}.topbar{gap:10px;overflow:auto}.work-strip{padding:22px}.screen{height:330px}}@media(max-width:540px){.hero{padding:14px}.screen{min-height:260px;height:62vw}.app-grid{grid-template-columns:1fr}.pill-nav button{padding:8px 10px}.site-footer{display:block}.terminal-output{font-size:13px}.work-strip h1{letter-spacing:-1px}}`;
}

export function interactionCss() {
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

export function productThemeCss() {
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

