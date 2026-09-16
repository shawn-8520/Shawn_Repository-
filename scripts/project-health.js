import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import {
  EXCLUDED_SOURCE_DIRECTORIES,
  PROJECT_LAYERS,
  affectedChecks,
  normalizeChangedPath,
} from "./project-map.js";

const root = process.cwd();

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
      if (entry.isDirectory() && EXCLUDED_SOURCE_DIRECTORIES.has(entry.name)) continue;
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
for (const layer of PROJECT_LAYERS) {
  const files = layer.directories.flatMap(filesBelow);
  const bytes = files.reduce((total, file) => total + fs.statSync(file).size, 0);
  console.log(`${layer.label.padEnd(8)} ${String(files.length).padStart(5)} files  ${(bytes / 1024 / 1024).toFixed(2).padStart(8)} MB  ${layer.directories.join(", ")}/`);
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

const status = execFileSync("git", ["status", "--porcelain=v1", "--untracked-files=all"], {
  cwd: root,
  encoding: "utf8",
});
const changedFiles = status.split(/\r?\n/).filter(Boolean).map(normalizeChangedPath);
console.log("\n工作区状态");
console.log(status.trim() || "clean");

console.log("\n当前变更影响");
const impacted = affectedChecks(changedFiles);
console.log(impacted.length
  ? impacted.map((rule) => `- ${rule.label}`).join("\n")
  : "- 无需构建，仅运行基础语法检查");

const splitCandidates = hotspots.filter((item) => item.lines > 1200);
const oversized = hotspots.filter((item) => item.lines > 2000);
console.log("\n结论");
if (oversized.length) {
  console.log(`有 ${oversized.length} 个超过 2000 行的高风险文件，建议优先拆分。`);
} else if (splitCandidates.length) {
  console.log(`有 ${splitCandidates.length} 个超过 1200 行的拆分候选；当前无超过 2000 行的高风险文件。`);
} else {
  console.log("业务文件均低于 1200 行，定位成本处于可控范围。");
}
