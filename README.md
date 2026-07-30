# Clink AI

个人 AI 知识库、虚拟 OS 桌面与 AI 工作台项目。

## Frontend Standard

本项目当前前端实现以静态 HTML/CSS/JavaScript 产物为主，后续新增或重构前端组件时，统一暂按 `Ant Design v6` 作为组件库标准。

适用范围：

- 按钮、表单、输入框、下拉选择、上传
- 弹窗、抽屉、确认框、提示反馈
- 标签页、卡片、表格、数据展示
- 后台管理页面和未来组件化前端

说明：现有静态页面不要求一次性整体重写为 Ant Design，但后续涉及前端 UI 的新增和重构，应以 Ant Design v6 的组件语义、交互状态、表单校验、弹窗行为和可访问性标准为准，同时保留本项目浅灰蓝 OS 风格。

## Project Structure

- `src/`: 页面逻辑、Ant Design 工作台与共享前端配置
- `content/`: 知识库 Markdown 内容
- `data/`: 本地服务端运行数据，不提交密钥和用户数据
- `scripts/`: 单文件构建、预览服务、部署和清理脚本
- `outputs/`: 可直接部署和预览的静态产物
- `vendor/`: 引用的第三方开源项目源码，不保留其 `node_modules`
- `backups/`: 本地备份，不纳入 Git

## Development

```bash
npm run build:standalone
npm run preview
```

只清理可重新生成的构建缓存：

```bash
npm run clean
```

同时清理项目 npm 缓存和 `vendor` 内的依赖副本：

```bash
npm run clean:deep
```

`clean:deep` 不会删除根目录 `node_modules`、`outputs`、`data` 或任何业务源码。
