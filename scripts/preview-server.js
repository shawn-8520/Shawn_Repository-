import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../outputs");
const port = Number(process.env.PORT || 8099);
const host = "127.0.0.1";

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml"
};

function sendJson(res, status, payload) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  res.end(JSON.stringify(payload));
}

function cleanImportedText(text) {
  return String(text || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function titleFromUrl(url) {
  try {
    const parsed = new URL(url);
    const last = decodeURIComponent(parsed.pathname.split("/").filter(Boolean).pop() || parsed.hostname);
    return last.replace(/[-_]+/g, " ").trim() || parsed.hostname;
  } catch {
    return "链接收藏";
  }
}

function matchMeta(html, selector) {
  const attr = selector.startsWith("property=") ? "property" : "name";
  const value = selector.split("=")[1];
  const pattern = new RegExp(`<meta[^>]+${attr}=["']${value}["'][^>]+content=["']([^"']*)["'][^>]*>`, "i");
  const reverse = new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+${attr}=["']${value}["'][^>]*>`, "i");
  return html.match(pattern)?.[1] || html.match(reverse)?.[1] || "";
}

function extractReadableContent(html, url) {
  const title = cleanImportedText(matchMeta(html, "property=og:title") || html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || titleFromUrl(url));
  const description = cleanImportedText(matchMeta(html, "name=description") || matchMeta(html, "property=og:description"));
  const articleHtml = html.match(/<article[\s\S]*?<\/article>/i)?.[0] || html.match(/<main[\s\S]*?<\/main>/i)?.[0] || html.match(/<body[\s\S]*?<\/body>/i)?.[0] || html;
  const blockMatches = [...articleHtml.matchAll(/<(h1|h2|h3|p|li|blockquote|pre)[^>]*>([\s\S]*?)<\/\1>/gi)]
    .map((match) => cleanImportedText(match[2]))
    .filter((text) => text.length > 24);
  const body = blockMatches.length ? blockMatches.join("\n\n") : cleanImportedText(articleHtml);
  return { title, description, body: body.slice(0, 20000), fetched: true, method: "local-proxy" };
}

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), options.timeout || 12000);
  try {
    return await fetch(url, {
      signal: controller.signal,
      redirect: "follow",
      headers: {
        "User-Agent": "Mozilla/5.0 AppleWebKit/537.36 AI-Terminal-KB Link Importer",
        "Accept": "text/html,application/xhtml+xml,text/plain;q=0.9,*/*;q=0.8",
        ...(options.headers || {})
      }
    });
  } finally {
    clearTimeout(timer);
  }
}

async function readViaJina(url) {
  const readerUrl = "https://r.jina.ai/http://" + url.replace(/^https?:\/\//i, "");
  const response = await fetchWithTimeout(readerUrl, { timeout: 15000 });
  if (!response.ok) throw new Error("reader " + response.status);
  const markdown = (await response.text()).trim();
  if (!markdown || markdown.length < 80) throw new Error("reader empty");
  const title = markdown.match(/^Title:\s*(.+)$/m)?.[1]?.trim() || markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() || titleFromUrl(url);
  const description = markdown.match(/^Description:\s*(.+)$/m)?.[1]?.trim() || "已通过正文提取通道读取。";
  return {
    title,
    description,
    body: markdown.replace(/^Title:.*$/m, "").replace(/^URL Source:.*$/m, "").replace(/^Markdown Content:.*$/m, "").trim().slice(0, 20000),
    fetched: true,
    method: "reader-fallback"
  };
}

async function importLink(url) {
  const parsed = new URL(url);
  try {
    const response = await fetchWithTimeout(parsed.href);
    if (!response.ok) throw new Error("HTTP " + response.status);
    const text = await response.text();
    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("text/html") || /<html|<article|<main|<p[\s>]/i.test(text)) {
      const extracted = extractReadableContent(text, parsed.href);
      if (extracted.body.length > 40 || extracted.title !== titleFromUrl(parsed.href) || extracted.description) {
        return { url: parsed.href, ...extracted };
      }
    }
    const body = cleanImportedText(text).slice(0, 20000);
    if (body.length > 80) {
      return {
        url: parsed.href,
        title: titleFromUrl(parsed.href),
        description: contentType || "文本内容",
        body,
        fetched: true,
        method: "local-proxy"
      };
    }
    throw new Error("empty content");
  } catch (error) {
    try {
      return { url: parsed.href, ...(await readViaJina(parsed.href)) };
    } catch {
      return {
        url: parsed.href,
        title: titleFromUrl(parsed.href),
        description: "该页面需要登录、权限、反爬验证，或内容由客户端动态渲染。本地服务未能直接读取全文。",
        body: "",
        fetched: false,
        method: "blocked"
      };
    }
  }
}

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url || "/", `http://${host}:${port}`);
  if (req.method === "OPTIONS") {
    sendJson(res, 200, { ok: true });
    return;
  }
  if (requestUrl.pathname === "/api/import-link") {
    const target = requestUrl.searchParams.get("url") || "";
    try {
      if (!/^https?:\/\//i.test(target)) throw new Error("只支持 http/https 链接");
      const data = await importLink(target);
      sendJson(res, 200, { ok: true, ...data });
    } catch (error) {
      sendJson(res, 400, { ok: false, message: error.message || "链接读取失败" });
    }
    return;
  }

  const decoded = decodeURIComponent(requestUrl.pathname === "/" ? "/ai-terminal-kb.html" : requestUrl.pathname);
  const file = path.normalize(path.join(root, decoded));
  if (!file.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  fs.readFile(file, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
    res.end(data);
  });
});

server.listen(port, host, () => {
  console.log(`AI Terminal KB preview: http://${host}:${port}/ai-terminal-kb.html`);
});
