# Clink AI 代码层级

仓库级协作约束由根目录 `AGENTS.md` 定义，所有目录层级均遵守该规则。

## 一、业务层

- `src/workbench-antd.jsx`：Ant Design v6 与 Ant Design X 工作台组件。
- `src/config/`：模型预设等共享配置。
- `src/ai/`：RAG 与 AI 领域能力。
- `src/terminal/`：终端命令。
- `src/pages/`：页面导航与页面级逻辑。
- `content/`：Markdown 知识内容，和前端代码分离。

## 二、构建层

- `scripts/project-map.js`：目录层级、检查文件和变更影响的机器可读单一来源。
- `scripts/build-standalone.js`：发布产物入口，只负责读取内容、装配模板与写入文件。
- `scripts/standalone/styles.js`：独立页面的样式模板。
- `scripts/standalone/client.js`：独立页面客户端交互的装配入口。
- `scripts/standalone/client/bootstrap.js`：启动、导航、认证与工作台运行数据。
- `scripts/standalone/client/desktopAgents.js`：桌面文件、智能体、分类、筛选与详情。
- `scripts/standalone/client/infiniteCanvas.js`：作品集无限画板。
- `scripts/standalone/client/documentsWindows.js`：窗口、文件夹、文档编辑与终端。
- `vite.antd.config.js`：Ant Design 工作台组件构建。

## 三、服务层

- `scripts/preview-server.js`：本地静态预览和项目 API。
- `scripts/server/http-utils.js`：响应、请求体、环境变量和 MIME 等通用 HTTP 能力。
- `data/`：本地服务运行数据；密钥不得写入仓库。

## 四、交付层

- `outputs/`：可部署产物，不在这里直接开发。
- `vendor/`：第三方开源项目镜像，不与本项目业务源码混改。
- `assets/`：本项目静态资源。
- `backups/`：本地备份，不纳入 Git。

## 修改入口

| 需求 | 首选目录 |
| --- | --- |
| 工作台组件、弹窗、下拉框、对话 | `src/workbench-antd.jsx` |
| 独立页布局、主题与旧页面样式 | `scripts/standalone/styles.js` |
| 桌面、智能体、分类与筛选 | `scripts/standalone/client/desktopAgents.js` |
| 作品集无限画板 | `scripts/standalone/client/infiniteCanvas.js` |
| 文档、文件夹、窗口与终端 | `scripts/standalone/client/documentsWindows.js` |
| 模型名称、模型 ID、提供商 | `src/config/model-presets.js` |
| 本地 API、数据持久化、代理 | `scripts/preview-server.js` |
| 知识库文章 | `content/` |

## 依赖边界

1. 业务源码不得反向依赖 `outputs/`。
2. 不直接修改 `vendor/` 来实现 Clink AI 业务需求；适配代码放在 `src/` 或构建层。
3. `outputs/` 只由构建命令生成。
4. 新增或修改的交互组件统一使用 Ant Design v6；智能体对话使用 Ant Design X。
5. 新目录或新的构建影响关系先登记到 `scripts/project-map.js`，避免检查脚本和文档各自维护一套规则。
