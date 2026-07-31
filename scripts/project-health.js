import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const excluded = new Set([".git", "node_modules", "vendor", "outputs", "generated", "backups"]);
const layers = [
  ["业务源码", "src"],
  ["知识内容", "content"],
  ["构建与服务", "scripts"],
  ["运行数据", "data"],
  ["静态资源", "assets"],
  ["第三方源码", "vendor"],
  ["发布产物", "outputs"],
];

function filesBelow(relativeDir) {
  const directory = path.join(root, relativeDir);
  if (!fs.existsSync(directory)) return [];
  const files = [];
  const visit = (current) => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const target = path.join(current, entry.name);
      if (entry.isDirectory()) visit(target);
      else if (entry.isFile()) files.push(target);
    }
  };
  visit(directory);
  return files;
}

function sourceFiles() {
  const files = [];
  const visit = (current) => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      if (entry.isDirectory() && excluded.has(entry.name)) continue;
      const target = path.join(current, entry.name);
      if (entry.isDirectory()) visit(target);
      else if (entry.isFile()) files.push(target);
    }
  };
  visit(root);
  return files;
}

function lineCount(file) {
  const text = fs.readFileSync(file, "utf8");
  return text === "" ? 0 : text.split(/\r?\n/).length;
}

console.log("Clink AI 项目健康检查\n");
for (const [label, directory] of layers) {
  const files = filesBelow(directory);
  const bytes = files.reduce((total, file) => total + fs.statSync(file).size, 0);
  console.log(`${label.padEnd(8)} ${String(files.length).padStart(5)} files  ${(bytes / 1024 / 1024).toFixed(2).padStart(8)} MB  ${directory}/`);
}

console.log("\n业务热点（排除依赖、第三方源码和生成产物）");
const hotspots = sourceFiles()
  .filter((file) => /\.(?:js|jsx|css|html|md)$/.test(file))
  .map((file) => ({ file, lines: lineCount(file) }))
  .sort((a, b) => b.lines - a.lines)
  .slice(0, 10);
for (const item of hotspots) {
  console.log(`${String(item.lines).padStart(6)} lines  ${path.relative(root, item.file)}`);
}

const changed = execFileSync("git", ["status", "--short"], { cwd: root, encoding: "utf8" }).trim();
console.log("\n工作区状态");
console.log(changed || "clean");

const oversized = hotspots.filter((item) => item.lines > 2000);
console.log("\n结论");
console.log(oversized.length
  ? `仍有 ${oversized.length} 个超过 2000 行的业务文件，建议继续按领域拆分。`
  : "业务文件均低于 2000 行，定位成本已处于可控范围。");
