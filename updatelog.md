# Clink AI 更新日志

## 2026-09-17 服务器本地修改保护

- 修正 GitHub Actions 线上发布：更新服务器代码前，先将已跟踪和未跟踪的本地改动存入带时间戳的 Git stash，作为可恢复备份，再快进合并 GitHub `main` 并执行部署。
- 首次实际发布验证已确认 SSH Secret 配置通过，失败原因为服务器工作树存在本地改动；此调整专门处理该阻断。
- 部署脚本在 systemd/PM2 重启后最多等待 60 秒轮询本地健康接口，避免服务尚在启动时被立即判定失败；超时时输出 systemd 状态和最近日志。

## 2026-09-17 新旧发布分支合并

- 将线上旧分支 `codex/admin-online-auth` 合入最新 `main`，冲突以 `main` 为准，保留服务器注册提交、成员审核与 systemd 部署兼容；重新生成后台和单文件发布产物。
- 统一注册与成员管理接口契约：注册申请提交到 `/api/auth/register`，后台通过 `/api/admin/registrations` 审核，成员密码只显示是否已配置，不再向界面暴露明文。
- 验证：后台生产构建、`npm run build:standalone`、`npm run check`、`npm run health`、`git diff --check` 通过；隔离数据环境实际完成“注册 → 管理员登录 → 审核 → 成员登录 → 成员查询”；真实预览完成 AI速记切换、添加文件弹窗开关、后台成员页加载及新增成员弹窗开关。

## 2026-09-17 GitHub Actions 点击发布

- 新增 `.github/workflows/deploy-production.yml`：支持从 GitHub Actions 手动点击发布，通过严格主机指纹校验连接阿里云服务器，执行现有部署脚本，并自动验证线上 `/api/health`。
- 更新 `deploy.md`：补充首次配置所需的 GitHub Secrets、服务器授权条件和日常点击发布流程；所有密钥仍只保存在 GitHub Secrets 与服务器私密配置中。
- 根据线上服务器实际环境修正发布脚本：保留 PM2 支持，并在 PM2 不存在时自动重启现有 `clink-ai-api.service`；Actions 会先快进更新服务器仓库，再执行部署与健康检查。
- 兼容服务器仓库仅跟踪旧分支的历史配置：发布时显式将远程 `main` 写入 `origin/main` 后再快进合并，避免因缺少远程引用而中断。

## 2026-09-16 v2.2.0 发布

- 版本升级至 `2.2.0`，新增 `docs/RELEASE_NOTES_2.2.0.md`，重新生成管理后台、无限画布和单文件工作台产物。
- 发布验证：后台生产构建、`npm run build:standalone`、`npm run check`、`npm run health`、`git diff --check` 和 `/api/health` 通过；实际切换主页、AI 速记、无限画布、工具 Skills，控制台无新错误。

## 2026-09-16 文生图无水印

- Pollinations 文生图请求保留 `nologo=true`，并增加水印、Logo、签名、文字等负向提示，减少免费模型生成的标识。未启用会强制要求 API Key 的私有生成参数，保持免登录可用。
- 实际生成发现 Pollinations 匿名模式仍强制附加右下角服务商水印，无法通过 `nologo` 参数去除。默认免密文生图因此切换为 AI Horde SDXL 匿名异步队列，保留排位和预计等待状态，避免输出 Pollinations 服务商水印。
- 实际预览验证：选择“AI Horde SDXL（免费免注册·无水印）”后，点击“替换”成功提交异步任务并进入队列状态；匿名队列尚未返回最终图片，未把等待状态冒充为生成完成。
- 按用户要求保留 Pollinations 带水印模型，恢复为独立选项“FLUX（Pollinations 免费免密·带水印）”；无水印通道作为新的独立选项“AI Horde SDXL（免费免注册·无水印）”，两者不再互相覆盖。

## 2026-09-16 开发规则

- 更新仓库级 `AGENTS.md`：明确要求每次功能修改完成后必须按真实使用路径测试，确认功能可用且需求已实现后才能交付；测试失败需继续排查，无法测试需说明原因与风险。

## 2026-09-16 画布排队状态

- 生图配置节点和输出图片节点新增明确的“排队人数、预计等待”两行状态；任务提交后立即显示“获取中/计算中”，AI Horde 返回队列信息后替换为真实排位和预计时间，避免等待期间界面无反馈。
- 图生图与文生图统一等待交互：任务提交的临时断网、限流或服务端异常改为倒计时重试；队列查询短暂失败时保留任务并显示“正在等待队列响应”，不再立即切换为失败节点。
- 修正图生图重试信息：重试阶段仅显示“重试次数”和“下次重试”秒级倒计时，不再把重试倒计冒充成预计排队时间；只有服务端进入 queued/processing 后才显示排位和预计等待。图生图临时异常提交重试扩展为 12 次，间隔最高 30 秒，避免直接报错。
- 调整图生图状态顺序：提交后先显示“正在获取排队信息 / 排队人数查询中 / 预计等待计算中”；仅在提交或队列查询实际失败后切换到重试状态。

## 2026-09-16 画布存储性能

- 优化画布项目持久化：递归移除 data/blob 内联媒体和运行时状态，跳过重复快照；首次检测到本地存储满额时立即暂停后续写入 30 秒，合并同一渲染周期的保存，避免高频序列化与重试阻塞画布。
- 实际预览验证：打开“示例项目”，使用 FLUX 点击“替换”生成，节点立即显示“正在排队 / 排队人数 / 预计等待”；新构建加载后未再出现新的 localStorage 配额重试风暴。

## 2026-09-16 生成状态

- 修改 `scripts/preview-server.js`、`vendor/huobao-canvas/src/api/image.js`、`vendor/huobao-canvas/src/hooks/useApi.js`、`vendor/huobao-canvas/src/components/nodes/ImageConfigNode.vue`：AI Horde 图生图改为异步任务，提交后立即返回任务 ID并轮询排队/生成状态，画布显示当前排位和预计等待时间，仅在明确失败或超时后提示失败。验证：画布构建、`npm run build:standalone`、`npm run check:changed`、`git diff --check` 通过。

- 追加修复参考图读取：支持 data URL 参考图，并在远程参考图读取失败时返回具体 HTTP 原因，避免笼统的 Network Error。验证：`npm run check:changed`、`git diff --check` 通过。

- 追加修复浏览器本地参考图：图生图提交前将 `blob:` 图片转换为 data URL，避免服务端无法读取浏览器临时地址导致立即失败。验证：画布构建、`npm run build:standalone`、`npm run check:changed`、`git diff --check` 通过。

- 修复无限画布登录态传递：初始化时同时读取 Cookie 与 `localStorage` 的 `Admin-Token`，避免已登录用户因令牌未传入画布而被接口立即拒绝。验证：画布构建、`npm run build:standalone`、`npm run check:changed`、`git diff --check` 通过。

- 实际测试 AI Horde 图生图：使用用户上传的 PNG 以 data URL 提交，接口返回任务 ID；状态查询返回 `queued`、排位 212、预计等待约 42 分钟，确认已进入队列而非立即失败。匿名公共队列较长，需等待第三方处理完成。

- 修改 `ImageConfigNode.vue`、`ImageNode.vue`：将异步图生图的排队状态、排位和预计等待时间同步到输出图片节点，加载区域直接展示，不再只显示在配置节点。

- 修复异步任务在预览服务重启后被误判失败：轮询接口改为以 AI Horde 任务 ID 为准查询状态，不依赖本地内存缓存是否仍存在。

- 修复画布模型设置未准备好时回退外部 API：初始化始终先写入本地 `/api/canvas-openai` 代理地址，避免请求外部地址产生 `Network Error`。

- 新增排队任务取消：删除图像生成节点时调用 AI Horde 取消接口，停止对应的排队生成任务；节点状态同步记录任务 ID。

## 2026-08-06 16:00

- 新增仓库级 `AGENTS.md`，将开发、UI、验证、安全和交付规则设为项目默认工作流。
- 新增 `docs/WORKFLOW_RULES.md`，提供任务分级、定位、实现、验证和收尾矩阵。
- 归档原始规则文档到 `docs/reference/CODEX-AGENTS.pdf`，保证规则可追溯并可随仓库迁移。
- 验证：PDF 原件与归档文件 SHA-256 一致且均为 6 页；规则链接检查、`git diff --check`、`npm run health` 与 `npm run check:changed` 均通过。
# 2026-09-16

- 修复 AI Horde 匿名图生图过早失败：匿名队列排位较低时，等待窗口由 90 秒延长至约 9 分钟，并返回明确的排队超时提示。验证：`npm run build:standalone`、`npm run check:changed`、`git diff --check` 通过。

- 接入 AI Horde 匿名图生图：新增 `aihorde/sdxl-img2img` 模型，使用匿名 Key `0000000000`，服务端完成参考图读取、base64 转换、异步提交、轮询和结果回传；画布有参考图时自动切换。验证：画布生产构建、`npm run build:standalone`、`npm run check:changed`、`git diff --check` 通过。

- 修复无限画板图片模型下拉重复：内置模型与项目共享自定义模型按模型 ID 去重，FLUX 与 Kontext 各显示一次。验证：画布生产构建、`npm run build:standalone`、`npm run check:changed`、`git diff --check` 通过。

- 检查无限画板图生图：确认原免费 FLUX 代理未传递参考图；新增 Pollinations Kontext 图生图模型、参考图参数适配与服务端校验，并保留 FLUX 文生图。实测接口可正常生成请求，但 Pollinations 当前公开接口对 Kontext 要求 enter.pollinations.ai 账号/额度，因此免密图生图受第三方服务限制；已在模型名称中明确“免费额度”而非免密。验证：画布生产构建、`npm run build:standalone`、`npm run check:changed`、`git diff --check` 通过。

- 移除访客进入功能：未持有有效登录会话时统一跳转后台登录页并提示先注册；登录页新增注册申请弹窗；成员角色仅保留管理员和编辑者，已有访客账号及旧访客令牌不可继续登录。验证：后台与单文件页面重新构建，定向检查通过，并在真实预览中测试未登录拦截、注册弹窗和管理员登录态访问。

- 按用户指定恢复到“AI速记页面字体切换为微软雅黑优先字体”记录点：撤销该记录之后的文件拖拽归档、延迟路由同步和启动页判断改动；保留该记录及此前的背景、字体、页面功能。验证：`npm run build:standalone`、`npm run check:changed`、`git diff --check` 通过，并在真实预览中确认 AI速记页面可正常打开。

- 修改 `scripts/standalone/styles.js`：AI速记页面文字统一使用微软雅黑优先字体，覆盖标题、简介、卡片和按钮文本。验证：重新构建并刷新 AI速记页面确认字体实际生效。

- 新增 `assets/ai-works-bg.png` 并修改 `scripts/build-standalone.js`、`scripts/standalone/styles.js`：将 AI速记页面背景替换为用户提供的浅蓝链接转文档视觉图，构建时同步复制背景资源。验证：重新构建并刷新 AI速记页面确认背景实际加载。

- 撤销上一项 AI速记视觉重做，恢复原页面布局与样式；保留已确认的“链记成文”名称、简介及既有文件功能。验证：重新构建并刷新 AI速记页面确认恢复。

- 修改 `src/workbench-antd.jsx`：移除工具 Skills 卡片底部的来源/扳手信息，仅保留详情、编辑和删除操作。验证：重新构建并刷新 Skills 页面确认来源元素消失。

- 修改 `scripts/standalone/styles.js`：将工具 Skills 桌面端卡片布局调整为固定 4 列，平板 2 列、手机 1 列。验证：重新构建并刷新 Skills 页面确认一行 4 张卡片。

- 修改 `scripts/standalone/styles.js`：将工具 Skills 卡片改为紧凑自适应网格，桌面宽度按可用空间自动排列约 4–6 列，并降低卡片最小高度与内边距；窄屏继续自适应。验证：重新构建并刷新 Skills 页面确认卡片缩小及自动换行。

- 修改 `scripts/standalone/styles.js`、`src/workbench-antd.jsx`：将工具 Skills 卡片圆角从 8px 调整为 12px，并同步组件内联样式。验证：重新构建并刷新 Skills 页面。

- 复核并修正 `src/workbench-antd.jsx`：将工具 Skills 卡片的 `borderRadius` 直接绑定为 8px，避免页面样式优先级覆盖导致视觉无变化。验证：重新构建并刷新 Skills 页面。

- 修改 `scripts/standalone/styles.js`：将工具 Skills 页面卡片圆角明确固定为 8px，避免被其他通用卡片样式覆盖。验证：重新构建并刷新 Skills 页面检查卡片视觉样式。

- 修改 `scripts/build-standalone.js`：将 AI速记页面名称改为“链记成文”，简介更新为链接收藏一键生成结构化文档并支持 Word、PDF、Markdown 导出的产品说明。验证：重新构建后刷新 AI速记页面，确认名称与完整简介实际显示。

- 修改 `scripts/standalone/client/bootstrap.js`：底部标签栏仅在无限画布项目路由（`#/canvas/...`）内隐藏；画布返回首页或离开工作台后自动恢复外层标签栏。验证：构建并刷新预览，确认项目画布无外层标签栏，画布首页/外层页面恢复显示。

- 修复免费图片模型返回 404 的原因：预览服务仍运行旧进程，未加载新增图片路由；重启预览服务后 `/api/canvas-openai/v1/images/generations` 已返回登录校验（不再是 404），刷新画布后模型下拉显示 `FLUX（Pollinations 免费免密）`。

- 修改 `scripts/preview-server.js`、`vendor/huobao-canvas/src/config/models.js`、`vendor/huobao-canvas/src/main.js`、`vendor/huobao-canvas/dist/index.html`：为无限画布接入 `pollinations/flux` 免费免密图片模型，复用项目登录会话并通过服务端代理返回图片地址；新建图片节点默认使用该模型，现有聊天模型和其他图片模型保持不变。验证：重新构建并打开实际画布项目，确认图片节点与现有工作流正常加载；未登录请求会被服务端拒绝，避免匿名滥用。

- 修改 `scripts/standalone/client/bootstrap.js`：进入“无限画布”Tab 时隐藏工作台底部项目标签栏，切回其他 Tab 自动恢复，保留画布内部工具栏。验证：实际刷新预览进入画布项目确认底部标签栏不再遮挡画布，再导航回主页确认标签栏恢复。

- 修改 `scripts/preview-server.js`、`vendor/huobao-canvas/src/main.js`、`vendor/huobao-canvas/dist/index.html`：无限画布自动读取项目共享模型配置，通过项目服务端的 OpenAI 兼容代理调用，API Key 不下发；画布内“API 设置”仍可进入修改本地配置，未登录调用会被拒绝。实际刷新预览后确认默认模型切换为项目配置的 `openrouter/free`，API 设置显示项目代理地址且状态为“已配置”。
- 修改 `vendor/huobao-canvas/src/components/AppHeader.vue`、`vendor/huobao-canvas/dist/index.html`、`scripts/build-standalone.js`：将无限画布公共顶部栏固定为 48px并保持内容垂直居中；修正发布样式选择器以匹配 Vue 实际嵌套结构；构建单文件页面时同步已有画布发布产物。实际刷新当前无限画布预览后确认顶部边界位于 48px，正文无遮挡。
- 修改 `scripts/preview-server.js`、`scripts/standalone/client/bootstrap.js`、`scripts/standalone/client/documentsWindows.js`、`src/workbench-antd.jsx`：管理员保存的模型 API 作为工作台共享配置，所有已登录角色均可通过服务端调用且不下发密钥；配置修改仍限管理员/编辑者；未单独绑定模型的智能体自动使用管理员设置的默认模型；未登录调用会被拒绝。
- 修改 `AGENTS.md`：新增范围约束，禁止以优化为由私自增加用户未提出的功能、控件、遮罩或流程。
- 修改 `scripts/standalone/client/documentsWindows.js`、`scripts/standalone/styles.js`：移除 AI速记文件弹窗的额外遮罩和取消操作，按用户参考图还原宽版 macOS 窗口、`New File` 标题、链接生成卡片、单列表单与整宽保存按钮；同时修正误加到文件夹窗口的编辑器属性。
- 修改 `AGENTS.md`：新增强制真实使用测试规则，每次改完必须在当前预览按用户路径实际操作，构建和静态检查不能替代界面验证。
- 修改 `scripts/standalone/styles.js`：根据实际使用截图补齐链接生成行的 Grid 布局与按钮固定宽度，修复输入框和“生成”按钮错误换行的问题。
- 修改 `scripts/standalone/client/documentsWindows.js`、`scripts/standalone/client/bootstrap.js`、`scripts/standalone/styles.js`、`src/workbench-antd.jsx`：重构 AI速记“添加文件”弹窗为带半透明遮罩的紧凑双栏表单，补充中文标题、明确关闭/取消操作、首焦点、链接生成状态与响应式布局；移除会误伤弹窗清晰度的遮罩模糊滤镜；为原生窗口和 Ant Design 弹窗增加页面归属，切换 Tab 时自动关闭离开页面的弹窗。
- 修改 `src/workbench-antd.jsx`、`scripts/standalone/client/documentsWindows.js`：恢复未接入模型时的工作台警告提示，未就绪状态首次加载即显示；卡片对话、模型选择和对话二次校验统一走提示桥接，并保留自定义事件兜底，避免同类操作静默失效。
- 重建 `vendor/vue-element-admin/dist` 并同步 `outputs/admin/`：修复后台登录页仍请求旧演示接口 `/vue-element-admin/user/login` 的发布产物滞后问题，现已使用 `/api/auth/login`；管理员登录实测成功。
- 配置本地私密 `.env.local`：启用管理员账号与服务端签名密钥（具体凭据不写入日志或版本库）；重启预览服务后验证认证状态已由“未配置”变为正常校验账号密码。
- 修改 `scripts/standalone/client/bootstrap.js`、`src/workbench-antd.jsx`：启动工作台前由服务端校验登录会话，自动清理失效令牌；管理员可见性只依据已验证会话；未登录时禁用 API/模型设置；顶部身份显示真实角色或“访客”。
- 修改 `scripts/build-standalone.js`：将底部导航的“我的OS”标签及无障碍名称统一改为“无限画布”。
- 修改 `scripts/build-standalone.js`：将底部导航的“作品集”标签及无障碍名称统一改为“AI速记”。
- 修改 `scripts/standalone/styles.js`：统一顶部 Logo、导航按钮、时间与成员入口的 Flex 垂直居中和行高，消除默认按钮文字基线造成的视觉下沉。
- 修改 `scripts/standalone/styles.js`：按预览反馈将环绕卡片组整体下移 8px，视觉偏移由 -36px 调整为 -28px。
- 修改 `scripts/standalone/styles.js`：依据预览截图按卡片可见边界校正环绕视图视觉重心，将整组卡片上移 36px，避免前排卡片放大后造成视觉偏下。
- 修改 `scripts/standalone/styles.js`：将环绕视图高度固定为可视画布高度，并按顶部工具栏高度补偿环绕中心，避免复用网格虚拟高度导致卡片整体下坠。
- 修改 `src/workbench-antd.jsx`、`scripts/standalone/client/bootstrap.js`：修正智能体视图切换的名称与布局映射，“卡片视图”使用网格布局，原 3D 卡片排列明确命名为“环绕视图”，首次访问默认使用网格卡片。
- 验证：`npm run build:standalone`、`npm run check:changed` 均通过；单文件内联脚本检查通过；预览实测 AI速记新版弹窗的关闭、表单与焦点正常，打开弹窗后切换到“无限画布”时弹窗和遮罩立即消失；卡片“打开对话”会恢复黄色模型提示及“接入 API/模型设置 / 已读”操作；同类模型选择、对话二次校验均已统一提示入口。预览同时确认失效会话会停留在登录入口、管理员入口隐藏、API/模型设置禁用、身份显示“访客”。嵌入画布仍有一条既有 MutationObserver 控制台错误，与本次权限修改无关。
