import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const deepClean = process.argv.includes("--deep");
const targets = [
  ".DS_Store",
  "dist",
  "generated"
];

if (deepClean) {
  targets.push(
    ".npm-cache",
    "vendor/huobao-canvas/node_modules",
    "vendor/vue-element-admin/node_modules"
  );
}

for (const relativePath of targets) {
  const target = path.join(projectRoot, relativePath);
  if (!fs.existsSync(target)) continue;
  fs.rmSync(target, { recursive: true, force: true });
  console.log(`removed ${relativePath}`);
}

console.log(deepClean ? "deep workspace cleanup complete" : "workspace cleanup complete");
