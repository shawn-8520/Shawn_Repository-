# 开发与验证

## 推荐命令

```bash
# 启动现有本地预览
npm run preview

# 只检查当前变更影响的范围
npm run check:changed

# 生成完整单文件发布产物
npm run build:standalone

# 查看文件规模、热点和工作区状态
npm run health
```

## 快速开发链路

1. 根据 `docs/ARCHITECTURE.md` 只进入对应层修改。
2. 运行 `npm run check:changed`，避免每个小改动都执行全盘回归。
3. 只在 `src/workbench-antd.jsx` 或依赖变化时重建 Ant Design 工作台。
4. 刷新已经打开的预览页，验证本次改动涉及的行为。
5. 删除验证过程中创建的临时文件或记录。

## 性能判断

- `npm run build:standalone` 是本地构建，不依赖外网。
- 网络只影响模型 API、链接抓取等运行时能力，不是常规前端修改变慢的主要原因。
- `node_modules/`、`vendor/`、`outputs/` 会显著增加全仓搜索噪声；根目录 `.ignore` 已将其排除。
- 第三方项目和发布产物仍保留在仓库中，但开发时按层隔离，不参与常规代码检索。
