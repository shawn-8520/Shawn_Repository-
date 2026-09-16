export const PROJECT_LAYERS = [
  { id: "app", label: "业务源码", directories: ["src"], description: "Ant Design 工作台与业务配置" },
  { id: "content", label: "知识内容", directories: ["content"], description: "知识库与演示内容" },
  { id: "build", label: "构建与服务", directories: ["scripts"], description: "单文件构建、预览服务与开发工具" },
  { id: "runtime", label: "运行数据", directories: ["data"], description: "本地服务持久化数据" },
  { id: "assets", label: "静态资源", directories: ["assets"], description: "图片、图标和字体" },
  { id: "vendor", label: "第三方源码", directories: ["vendor"], description: "外部项目与依赖源码" },
  { id: "output", label: "发布产物", directories: ["outputs", "generated"], description: "构建生成文件，不作为日常编辑入口" },
  { id: "docs", label: "项目文档", directories: ["docs"], description: "架构、开发与发版说明" },
];

export const EXCLUDED_SOURCE_DIRECTORIES = new Set([
  ".git",
  "node_modules",
  "vendor",
  "outputs",
  "generated",
  "backups",
]);

export const FULL_SYNTAX_CHECK_FILES = [
  "scripts/build-standalone.js",
  "scripts/preview-server.js",
  "scripts/project-map.js",
  "scripts/project-health.js",
  "scripts/check-changed.js",
  "scripts/server/http-utils.js",
  "scripts/standalone/styles.js",
  "scripts/standalone/client.js",
  "scripts/standalone/client/bootstrap.js",
  "scripts/standalone/client/desktopAgents.js",
  "scripts/standalone/client/infiniteCanvas.js",
  "scripts/standalone/client/documentsWindows.js",
];

export const IMPACT_RULES = [
  {
    id: "antd",
    label: "Ant Design 工作台构建",
    pattern: /^(src\/|vite\.antd\.config\.js$|package(?:-lock)?\.json$)/,
  },
  {
    id: "standalone",
    label: "单文件发布产物构建",
    pattern: /^(content\/|assets\/|scripts\/build-standalone\.js$|scripts\/standalone\/|src\/|vite\.antd\.config\.js$)/,
  },
  {
    id: "server",
    label: "预览服务语法检查",
    pattern: /^scripts\/(?:preview-server\.js|server\/)/,
  },
  {
    id: "tooling",
    label: "开发工具语法检查",
    pattern: /^scripts\/(?:project-map|project-health|check-changed)\.js$/,
  },
];

export function normalizeChangedPath(statusLine) {
  return statusLine.slice(3).split(" -> ").at(-1);
}

export function affectedChecks(files) {
  return IMPACT_RULES.filter((rule) => files.some((file) => rule.pattern.test(file)));
}

export function layerForPath(filePath) {
  return PROJECT_LAYERS.find((layer) => layer.directories.some(
    (directory) => filePath === directory || filePath.startsWith(`${directory}/`)
  ));
}
