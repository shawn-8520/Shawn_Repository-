export const modelPresets = {
  "qwen37-flash": {
    label: "OpenRouter / Qwen3.7 Flash",
    description: "通过 OpenRouter 接入 Qwen3.7 Flash，兼容当前工作台已有配置。",
    baseUrl: "https://openrouter.ai/api/v1",
    defaultModel: "qwen/qwen3.7-flash",
    models: ["qwen/qwen3.7-flash"],
    keyUrl: "https://openrouter.ai/settings/keys"
  },
  "openrouter-free": {
    label: "OpenRouter / Free Router（免费）",
    description: "自动路由至当前可用的免费模型，适合工作台体验与低频调用。",
    baseUrl: "https://openrouter.ai/api/v1",
    defaultModel: "openrouter/free",
    models: ["openrouter/free"],
    keyUrl: "https://openrouter.ai/settings/keys"
  },
  "deepseek-chat": {
    label: "DeepSeek / DeepSeek Chat",
    description: "使用 DeepSeek 官方 OpenAI 兼容接口。",
    baseUrl: "https://api.deepseek.com",
    defaultModel: "deepseek-chat",
    models: ["deepseek-chat"],
    keyUrl: "https://platform.deepseek.com/api_keys"
  },
  "gemini-flash": {
    label: "Google / Gemini Flash",
    description: "使用 Gemini 官方 OpenAI 兼容接口。",
    baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai",
    defaultModel: "gemini-2.5-flash",
    models: ["gemini-2.5-flash"],
    keyUrl: "https://aistudio.google.com/apikey"
  },
  "kimi-k3": {
    label: "Moonshot / Kimi K3（官方计费）",
    description: "原生多模态与长上下文模型。官方 API 当前要求账户充值后调用。",
    baseUrl: "https://api.moonshot.ai/v1",
    defaultModel: "kimi-k3",
    models: ["kimi-k3"],
    keyUrl: "https://platform.kimi.ai/console/api-keys"
  },
  "kimi-k3-openrouter": {
    label: "OpenRouter / Kimi K3",
    description: "通过 OpenRouter 接入 Kimi K3，模型与 API 地址会随预设自动匹配。",
    baseUrl: "https://openrouter.ai/api/v1",
    defaultModel: "moonshotai/kimi-k3",
    models: ["moonshotai/kimi-k3"],
    keyUrl: "https://openrouter.ai/settings/keys"
  }
};
