import { marked } from "marked";
import { answerFromKnowledgeBase, searchDocuments, summarizeDocument } from "../ai/rag.js";
import { renderNavigationBoard } from "../pages/navigation.js";

const fortunes = [
  "The future is already here; it is just unevenly distributed. - William Gibson",
  "A year from now you may wish you had started today. - Karen Lamb",
  "The best way to predict the future is to invent it. - Alan Kay",
  "Stay hungry, stay foolish. - Steve Jobs",
  "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
];

export function createCommandRuntime({ documents, pushOutput, setExited }) {
  const byPath = new Map(documents.map((doc) => [doc.path.toLowerCase(), doc]));

  return async function runCommand(rawCommand) {
    const command = rawCommand.trim();

    if (!command) {
      return;
    }

    if (command === "help") {
      pushOutput(renderHelp(), "html");
      return;
    }

    if (command === "whoami") {
      pushOutput("Robin / AI-Terminal-KB builder / Markdown knowledge worker");
      return;
    }

    if (command === 'echo "1 person + AI = 1 team"' || command === "slogan") {
      pushOutput("1 person + AI = 1 team");
      return;
    }

    if (command === "open esther-os.app" || command === "open os" || command === "ls") {
      pushOutput(renderNavigationBoard(), "html");
      return;
    }

    if (command.startsWith("cat ")) {
      const path = normalizePath(command.slice(4));
      const doc = byPath.get(path);

      if (!doc) {
        pushOutput(`未找到 ${path}。输入 open esther-os.app 查看可用文档。`);
        return;
      }

      pushOutput(marked.parse(doc.content), "html");
      return;
    }

    if (command.startsWith("search ")) {
      const keyword = command.slice(7).trim();
      const hits = searchDocuments(documents, keyword);
      pushOutput(renderSearchResults(keyword, hits), "html");
      return;
    }

    if (command.startsWith("ai query ")) {
      const prompt = stripQuotes(command.slice(9).trim());
      const result = answerFromKnowledgeBase(documents, prompt);
      pushOutput(renderAiAnswer(result.answer, result.hits), "html");
      return;
    }

    if (command.startsWith("ai summary ")) {
      const path = normalizePath(command.slice(11));
      const doc = byPath.get(path);

      if (!doc) {
        pushOutput(`无法总结 ${path}，因为知识库中还没有这篇文档。`);
        return;
      }

      pushOutput(renderAiAnswer(summarizeDocument(doc.content), [doc]), "html");
      return;
    }

    if (command.startsWith("ai upload ")) {
      pushOutput(
        "已收到上传指令。静态前端无法直接写入本地文件；后续接入 Node/Ollama 服务后，可在这里完成 Markdown 解析、分块和向量入库。",
      );
      return;
    }

    if (command === "fortune") {
      pushOutput(fortunes[Math.floor(Math.random() * fortunes.length)]);
      return;
    }

    if (command === "clear") {
      pushOutput("", "clear");
      return;
    }

    if (command === "exit") {
      setExited(true);
      return;
    }

    pushOutput(`command not found: ${command}。输入 help 查看可用命令。`);
  };
}

export function renderBootSequence() {
  return [
    ["whoami", "Robin / AI-Terminal-KB builder / Markdown knowledge worker"],
    ["cat about.md", null],
    ['echo "1 person + AI = 1 team"', "1 person + AI = 1 team"],
  ];
}

function renderHelp() {
  return `<div class="help-panel">
    <p>可用命令</p>
    <ul>
      <li><code>open esther-os.app</code> 打开栏目看板</li>
      <li><code>cat about.md</code> 读取 Markdown 文档</li>
      <li><code>search 关键词</code> 全文检索知识库</li>
      <li><code>ai query "问题"</code> 基于本地文档模拟 RAG 检索</li>
      <li><code>ai summary 文件名.md</code> 总结单篇文档</li>
      <li><code>fortune</code> 随机语录</li>
      <li><code>clear</code> 清空终端</li>
      <li><code>exit</code> 结束会话</li>
    </ul>
  </div>`;
}

function renderSearchResults(keyword, hits) {
  if (hits.length === 0) {
    return `<p>没有找到包含 <code>${escapeHtml(keyword)}</code> 的文档。</p>`;
  }

  return `<div class="result-list">
    <p>搜索 <code>${escapeHtml(keyword)}</code>，找到 ${hits.length} 个结果：</p>
    ${hits
      .map(
        (hit) => `<button class="result-item" data-command="cat ${hit.path}">
          <span>${hit.path}</span>
          <small>${escapeHtml(hit.excerpt)}</small>
        </button>`,
      )
      .join("")}
  </div>`;
}

function renderAiAnswer(answer, hits) {
  const links = hits
    .map(
      (hit) =>
        `<button class="doc-link" data-command="cat ${hit.path}">${hit.path}</button>`,
    )
    .join("");

  return `<div class="ai-answer">
    <pre>${escapeHtml(answer)}</pre>
    ${links ? `<div class="source-links">${links}</div>` : ""}
  </div>`;
}

function normalizePath(path) {
  return stripQuotes(path.trim()).replace(/^content\//, "").toLowerCase();
}

function stripQuotes(value) {
  return value.replace(/^["']|["']$/g, "");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
