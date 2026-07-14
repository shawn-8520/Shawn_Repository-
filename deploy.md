# AI-Terminal-KB 部署说明

## 本地运行

1. 安装依赖：`npm install`
2. 启动预览：`npm run dev`
3. 构建静态文件：`npm run build`

构建产物会生成在 `dist/`，可部署到 Vercel、GitHub Pages、Cloudflare Pages 或任意静态托管服务。

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
