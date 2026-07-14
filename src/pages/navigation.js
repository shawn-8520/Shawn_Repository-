export const navItems = [
  {
    group: "建站运维",
    items: [
      ["域名教程", "domain-tutorial.md", "cat domain-tutorial.md"],
      ["部署教程", "deploy-tutorial.md", "cat deploy-tutorial.md"],
      ["网页进化史", "web-evolution.md", "cat web-evolution.md"],
    ],
  },
  {
    group: "AI 协作专栏",
    items: [
      ["AI 搭档日常", "ai-partner.md", "cat ai-partner.md"],
      ["建筑转 AI", "architecture-to-ai.md", "cat architecture-to-ai.md"],
      ["Cola 专栏", "blog-cola/index.md", "cat blog-cola/index.md"],
    ],
  },
  {
    group: "个人工具体系",
    items: [
      ["自建工具库", "tool-build/index.md", "cat tool-build/index.md"],
      ["设计技能库", "design-skill/index.md", "cat design-skill/index.md"],
      ["人生系统", "life-system.md", "cat life-system.md"],
    ],
  },
  {
    group: "阅读与创作",
    items: [
      ["心理学书库", "psychology-book/index.md", "cat psychology-book/index.md"],
      ["自媒体合集", "blog-cola/index.md", "cat blog-cola/index.md"],
    ],
  },
  {
    group: "商务与数据",
    items: [
      ["合作对接", "work-with-me.md", "cat work-with-me.md"],
      ["个人看板", "personal-dashboard.md", "cat personal-dashboard.md"],
      ["联系方式", "contact.md", "cat contact.md"],
    ],
  },
];

export function renderNavigationBoard() {
  return navItems
    .map((section) => {
      const rows = section.items
        .map(
          ([label, path, command], index) =>
            `<button class="kb-row" data-command="${command}">
              <span class="kb-index">${String(index + 1).padStart(2, "0")}</span>
              <span class="kb-label">${label}</span>
              <span class="kb-path">${path}</span>
            </button>`,
        )
        .join("");

      return `<section class="kb-group">
        <h2>${section.group}</h2>
        <div class="kb-grid">${rows}</div>
      </section>`;
    })
    .join("");
}
