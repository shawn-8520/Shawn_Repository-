# Clink AI 部署说明

## 本地运行

1. 安装依赖：`npm install`
2. 启动预览：`npm run dev`
3. 构建单文件发布产物：`npm run build:standalone`

构建产物会生成在 `outputs/`。只部署静态文件不能使用模型配置、智能体对话、运行统计和服务器数据存储。

## 宝塔线上部署

线上由两部分组成：

1. Nginx 提供 `outputs/` 静态页面。
2. PM2 运行 `scripts/preview-server.js`，Nginx 将 `/api/` 反向代理到 `127.0.0.1:8099`。

首次部署：

```bash
npm install -g pm2
cd /www/wwwroot/ai-terminal-kb-repo
bash scripts/deploy-baota.sh
```

在宝塔的网站 Nginx 配置的 `server {}` 中加入 `deploy/nginx-api.conf` 的 `location` 内容，然后重载 Nginx。

验证：

```bash
curl https://w-shawn.cn/api/health
```

应返回：

```json
{"ok":true,"data":{"service":"clink-ai-api","status":"ready"}}
```

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
