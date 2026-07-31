# 换机继续开发

## 拉取项目

```bash
git clone https://github.com/shawn-8520/Shawn_Repository-.git
cd Shawn_Repository-
npm ci
```

## 配置本机环境

```bash
cp .env.example .env.local
```

根据新电脑的服务地址填写 `.env.local`。API Key、用户数据和运行数据不会提交到 GitHub，需要在新环境中重新配置或从服务器恢复。

## 构建与预览

```bash
npm run check:changed
npm run build:standalone
npm run preview
```

浏览器访问 `http://127.0.0.1:8099/ai-terminal-kb.html?launch=1#home`。

## GitHub 保存范围

仓库保留：

- `src/` 业务代码与 Ant Design v6 组件
- `scripts/` 构建、预览、部署和数据服务
- `content/` 知识库内容
- `assets/` 静态资源
- `vendor/` 已引用的开源项目源码
- `outputs/` 可直接部署的静态产物
- `docs/` 架构、开发和发版说明
- `package.json` 与 `package-lock.json`

仓库不保留：

- `node_modules/` 和构建缓存
- `.env.local`、API Key、SSH Key
- `data/` 中的用户数据、模型设置、聊天记录和运行统计
- `backups/` 本机备份

## 继续开发

先阅读 `docs/ARCHITECTURE.md`，按功能进入对应代码层。完成修改后运行 `npm run check:changed`，只验证本次新增或修改的功能，并刷新已经打开的预览页。
