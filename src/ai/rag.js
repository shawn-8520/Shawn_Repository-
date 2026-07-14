export function searchDocuments(documents, keyword) {
  const query = keyword.trim().toLowerCase();

  if (!query) {
    return [];
  }

  return documents
    .map((doc) => {
      const text = `${doc.path}\n${doc.content}`.toLowerCase();
      const score = countMatches(text, query);
      return { ...doc, score, excerpt: buildExcerpt(doc.content, query) };
    })
    .filter((doc) => doc.score > 0)
    .sort((a, b) => b.score - a.score);
}

export function answerFromKnowledgeBase(documents, prompt) {
  const hits = searchDocuments(documents, prompt);

  if (hits.length === 0) {
    return {
      answer:
        "暂时没有在本地 Markdown 知识库中找到直接匹配。你可以换一个关键词，或把相关笔记放进 content/ 目录。",
      hits: [],
    };
  }

  const topHits = hits.slice(0, 3);
  const sources = topHits.map((hit) => `- ${hit.path}: ${hit.excerpt}`).join("\n");

  return {
    answer: `基于当前知识库，和「${prompt}」最相关的是：\n${sources}\n\n这是前端本地检索模拟结果。接入 Ollama 或云端模型后，可把这些片段作为 RAG 上下文生成更完整回答。`,
    hits: topHits,
  };
}

export function summarizeDocument(content) {
  const plain = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!plain) {
    return "这篇文档还没有足够内容可以总结。";
  }

  const sentences = plain
    .split(/[。！？.!?]/)
    .map((item) => item.trim())
    .filter(Boolean);

  return sentences.slice(0, 3).join("。") + "。";
}

function countMatches(text, query) {
  return text.split(query).length - 1;
}

function buildExcerpt(content, query) {
  const lower = content.toLowerCase();
  const index = lower.indexOf(query);

  if (index === -1) {
    return content.replace(/\s+/g, " ").slice(0, 120);
  }

  const start = Math.max(index - 48, 0);
  const end = Math.min(index + query.length + 96, content.length);
  return content.slice(start, end).replace(/\s+/g, " ").trim();
}
