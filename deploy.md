# Clink AI 部署说明

## 本地运行

1. 安装依赖：`npm install`
2. 启动预览：`npm run dev`
3. 构建单文件发布产物：`npm run build:standalone`

构建产物会生成在 `outputs/`。只部署静态文件不能使用模型配置、智能体对话、运行统计和服务器数据存储。

## 宝塔线上部署

线上由两部分组成：

1. Nginx 提供 `outputs/` 静态页面。
2. PM2 或服务器现有的 `clink-ai-api.service` 运行 `scripts/preview-server.js`，Nginx 将 `/api/` 反向代理到 `127.0.0.1:8099`。

首次部署：

```bash
npm install -g pm2
cd /www/wwwroot/ai-terminal-kb-repo
bash scripts/deploy-baota.sh
```

在仓库根目录创建不会提交到 GitHub 的 `.env.local`：

```dotenv
CLINK_ADMIN_ACCOUNT=your-admin-account
CLINK_ADMIN_PASSWORD=use-a-strong-private-password
CLINK_AUTH_SECRET=use-at-least-32-random-characters
```

管理员密码只保存在服务器私有环境中。修改配置后需要重启对应的 PM2 或 systemd 服务。

在宝塔的网站 Nginx 配置的 `server {}` 中加入 `deploy/nginx-api.conf` 的 `location` 内容，然后重载 Nginx。

验证：

```bash
curl https://w-shawn.cn/api/health
```

应返回：

```json
{"ok":true,"data":{"service":"clink-ai-api","status":"ready"}}
```

## GitHub Actions 点击发布

仓库提供 `.github/workflows/deploy-production.yml`。本地代码推送到 GitHub 后，可在仓库的 `Actions` 页面选择“发布线上版本”，点击 `Run workflow` 完成部署与线上健康检查，无需登录宝塔。

首次使用需要在 GitHub 仓库的 `Settings → Secrets and variables → Actions` 中配置：

| Secret | 用途 |
| --- | --- |
| `DEPLOY_HOST` | 阿里云服务器 IP，例如 `8.153.198.69` |
| `DEPLOY_PORT` | SSH 端口 |
| `DEPLOY_USER` | 专用部署用户 |
| `DEPLOY_SSH_KEY` | 专用部署私钥完整内容 |
| `DEPLOY_KNOWN_HOSTS` | 已人工核验的服务器 SSH 主机公钥记录 |

服务器须提前把对应公钥加入部署用户的 `~/.ssh/authorized_keys`，并确保该用户有权进入 `/www/wwwroot/ai-terminal-kb-repo`、更新站点目录及重启 PM2 或 `clink-ai-api.service`。密钥、密码和主机私密配置不得写入仓库。

推荐发布顺序：

1. 本地完成开发并按真实使用路径验证。
2. 推送代码到 GitHub 的 `main` 分支。
3. 打开 `Actions → 发布线上版本 → Run workflow`。
4. 等待“部署到阿里云服务器”和“验证线上健康接口”均显示成功。

## 前端组件库口径

当前项目静态预览页仍以本地 HTML/CSS/JavaScript 构建产物为主。

后续新增或重构前端页面、后台管理页面、表单、弹窗、下拉、卡片、表格等 UI 时，暂统一按 `Ant Design v6` 组件库标准执行。

部署时不代表现有静态页面已经全部引入 Ant Design；它是后续前端组件化和 UI 重构的标准口径。

## 内容更新

所有知识库正文都在 `content/` 目录中。新增 Markdown 后，需要在 `src/pages/navigation.js` 的 `navItems` 中补充栏目入口，或直接通过 `cat 文件名.md` 读取。

## 接入 Ollama / 远程模型

当前前端已保留 `ai query`、`ai summary`、`ai upload` 命令。真实接入时建议增加一个轻量服务端接口：

- `POST /api/ai/query`：向量检索 + 大模型回答
- `POST /api/ai/summary`：单文档总结
- `POST /api/ai/upload`：上传 Markdown、分块、写入向量库

本地 Ollama 推荐流程：

1. 安装 Ollama
2. 拉取模型：`ollama pull qwen2.5:7b`
3. 启动本地接口
4. 将 `src/ai/rag.js` 中的模拟函数替换为真实请求
