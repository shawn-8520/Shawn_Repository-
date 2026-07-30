import "./css/terminal.css";
import { marked } from "marked";
import { createCommandRuntime, renderBootSequence } from "./terminal/commands.js";

const contentModules = import.meta.glob("../content/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const documents = Object.entries(contentModules).map(([path, content]) => ({
  path: path.replace("../content/", ""),
  content,
}));

const app = document.querySelector("#app");

const state = {
  history: [],
  historyIndex: -1,
  exited: false,
};

app.innerHTML = `
  <div class="desktop">
    <nav class="menu-bar">
      <button class="brand" data-command="open clink-ai.app">Clink AI</button>
      <button data-command="cat about.md">About</button>
      <button data-command="cat life-system.md">Values</button>
      <button data-command="cat ai-partner.md">Now</button>
      <time id="clock"></time>
    </nav>

    <section class="terminal-window" aria-label="zsh terminal">
      <header class="window-chrome">
        <div class="traffic-lights" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
        <p>robin@universe ~ zsh</p>
      </header>

      <div id="terminal-output" class="terminal-output"></div>

      <form id="terminal-form" class="terminal-input-line">
        <span class="prompt">$</span>
        <input
          id="terminal-input"
          autocomplete="off"
          spellcheck="false"
          aria-label="Terminal command"
          placeholder="type help"
        />
        <span class="cursor" aria-hidden="true"></span>
      </form>
    </section>
  </div>

  <section id="exit-screen" class="exit-screen" aria-hidden="true">
    <p>session closed</p>
    <button data-command="reboot">reboot</button>
  </section>
`;

const output = document.querySelector("#terminal-output");
const form = document.querySelector("#terminal-form");
const input = document.querySelector("#terminal-input");
const clock = document.querySelector("#clock");
const exitScreen = document.querySelector("#exit-screen");

const runCommand = createCommandRuntime({
  documents,
  pushOutput,
  setExited,
});

marked.use({
  gfm: true,
  breaks: true,
});

startClock();
renderBoot();
input.focus();

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  await submitCurrentCommand();
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    submitCurrentCommand();
    return;
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    state.historyIndex = Math.max(0, state.historyIndex - 1);
    input.value = state.history[state.historyIndex] || "";
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    state.historyIndex = Math.min(state.history.length, state.historyIndex + 1);
    input.value = state.history[state.historyIndex] || "";
  }
});

document.addEventListener("click", async (event) => {
  const trigger = event.target.closest("[data-command]");

  if (!trigger) {
    return;
  }

  const command = trigger.dataset.command;

  if (command === "reboot") {
    setExited(false);
    return;
  }

  appendCommand(command);
  await runCommand(command);
  input.focus();
});

function renderBoot() {
  const about = documents.find((doc) => doc.path === "about.md");

  renderBootSequence().forEach(([command, response]) => {
    appendCommand(command);
    if (command === "cat about.md" && about) {
      pushOutput(marked.parse(about.content), "html");
    } else {
      pushOutput(response);
    }
  });

  pushOutput("输入 help 查看全部命令。");
}

async function submitCurrentCommand() {
  const command = input.value.trim();
  input.value = "";

  if (!command) {
    return;
  }

  state.history.push(command);
  state.historyIndex = state.history.length;
  appendCommand(command);
  await runCommand(command);
}

function appendCommand(command) {
  const row = document.createElement("div");
  row.className = "line command-line";
  row.innerHTML = `<span class="identity">robin@universe ~ zsh</span><span class="prompt">$</span><span>${escapeHtml(command)}</span>`;
  output.append(row);
  scrollToBottom();
}

function pushOutput(value, mode = "text") {
  if (mode === "clear") {
    output.innerHTML = "";
    return;
  }

  const row = document.createElement("div");
  row.className = "line output-line";

  if (mode === "html") {
    row.innerHTML = `<span class="output-marker">&gt;</span><div class="rendered">${value}</div>`;
  } else {
    row.innerHTML = `<span class="output-marker">&gt;</span><pre>${escapeHtml(value || "")}</pre>`;
  }

  output.append(row);
  scrollToBottom();
}

function setExited(value) {
  state.exited = value;
  exitScreen.classList.toggle("active", value);
  exitScreen.setAttribute("aria-hidden", String(!value));
  document.querySelector(".desktop").classList.toggle("closed", value);

  if (!value) {
    input.focus();
    pushOutput("session rebooted");
  }
}

function startClock() {
  const tick = () => {
    clock.textContent = new Intl.DateTimeFormat("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(new Date());
  };

  tick();
  window.setInterval(tick, 1000);
}

function scrollToBottom() {
  output.scrollTop = output.scrollHeight;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
