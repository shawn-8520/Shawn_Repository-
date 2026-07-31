import { execFileSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const npmCommand = process.platform === "win32" ? (process.env.ComSpec || "cmd.exe") : "npm";
const npmPrefixArgs = process.platform === "win32" ? ["/d", "/s", "/c", "npm"] : [];
const status = execFileSync("git", ["status", "--porcelain=v1"], { cwd: root, encoding: "utf8" });
const changed = status
  .split(/\r?\n/)
  .filter(Boolean)
  .map((line) => line.slice(3).split(" -> ").at(-1));

const checks = [];
const add = (label, command, args) => checks.push({ label, command, args });
const touches = (pattern) => changed.some((file) => pattern.test(file));

const syntaxFiles = [
  "scripts/build-standalone.js",
  "scripts/standalone/styles.js",
  "scripts/standalone/client.js",
  "scripts/standalone/client/bootstrap.js",
  "scripts/standalone/client/desktopAgents.js",
  "scripts/standalone/client/infiniteCanvas.js",
  "scripts/standalone/client/documentsWindows.js",
  "scripts/preview-server.js",
  "scripts/project-health.js",
  "scripts/check-changed.js",
].filter((file) => fs.existsSync(path.join(root, file)));

for (const file of syntaxFiles) add(`语法 ${file}`, process.execPath, ["--check", file]);

if (touches(/^(src\/|vite\.antd\.config\.js$|package(?:-lock)?\.json$)/)) {
  add("Ant Design 工作台构建", npmCommand, [...npmPrefixArgs, "run", "build:antd"]);
}

if (touches(/^(content\/|assets\/|scripts\/build-standalone\.js$|scripts\/standalone\/|src\/|vite\.antd\.config\.js$)/)) {
  add("单文件发布产物构建", process.execPath, ["scripts/build-standalone.js"]);
}

console.log(`变更文件 ${changed.length} 个，执行 ${checks.length} 项定向检查。`);
for (const check of checks) {
  process.stdout.write(`- ${check.label} ... `);
  const result = spawnSync(check.command, check.args, { cwd: root, stdio: "pipe", encoding: "utf8" });
  if (result.status !== 0) {
    console.log("失败");
    if (result.error) console.error(result.error.message);
    process.stderr.write(result.stdout || "");
    process.stderr.write(result.stderr || "");
    process.exit(result.status || 1);
  }
  console.log("通过");
}

const standaloneOutput = path.join(root, "outputs", "ai-terminal-kb.html");
if (fs.existsSync(standaloneOutput)) {
  const html = fs.readFileSync(standaloneOutput, "utf8");
  const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)];
  for (const [index, match] of scripts.entries()) {
    try {
      new vm.Script(match[1], { filename: `standalone-inline-${index}.js` });
    } catch (error) {
      console.error(`- 单文件内联脚本 ${index + 1} ... 失败`);
      console.error(error.message);
      process.exit(1);
    }
  }
  console.log(`- 单文件内联脚本 ${scripts.length} 段 ... 通过`);
}
