const sampleText = "我要做一个电商客服提效工具，帮助运营团队用 Agent 自动归类工单、生成回复建议，并把高风险问题升级给人工，同时输出每天的问题趋势报告。";

const typeMetadata = {
  automation: {
    name: "自动化",
    focus: "缩短重复工作链路，减少人工搬运和规则遗漏。",
    deliverables: ["流程编排面板", "执行日志", "异常告警规则"]
  },
  service: {
    name: "客服与运营",
    focus: "提升响应速度和服务一致性，保留人工复核的安全边界。",
    deliverables: ["工单分类器", "回复建议器", "升级策略表"]
  },
  content: {
    name: "内容生产",
    focus: "提高内容产能，同时稳定语气、结构和发布节奏。",
    deliverables: ["选题生成器", "内容草稿流", "审核清单"]
  },
  data: {
    name: "数据分析",
    focus: "把松散数据转换成可行动洞察，降低分析门槛。",
    deliverables: ["数据摘要报告", "异常识别面板", "指标字典"]
  },
  engineering: {
    name: "研发效率",
    focus: "加速需求拆解、代码评审和问题闭环，减少上下文切换。",
    deliverables: ["任务拆解器", "变更检查流", "发布回归清单"]
  }
};

const keywordGroups = [
  {
    match: ["客服", "工单", "回复", "售后", "咨询"],
    pain: "人工分发慢、回复风格不一致、高风险问题识别滞后。",
    review: "抽样检查高风险升级命中率，验证建议回复是否减少人工编辑。"
  },
  {
    match: ["数据", "报表", "分析", "趋势", "指标"],
    pain: "数据来源分散，结论依赖个人经验，复盘效率低。",
    review: "对比人工周报与系统周报，检查异常识别召回率。"
  },
  {
    match: ["代码", "研发", "PR", "重构", "发布"],
    pain: "任务拆分不稳定、评审质量波动、回归验证耗时。",
    review: "统计需求拆解时间、回归轮次和缺陷前移比例。"
  },
  {
    match: ["内容", "文案", "视频", "脚本", "选题"],
    pain: "内容生产周期长，选题命中率和风格稳定性不足。",
    review: "比较内容产能、完稿率和人工修改占比。"
  }
];

const roleTemplates = [
  "Planner Agent：读取目标与约束，生成分阶段路线图和优先级。",
  "Research Agent：整理输入信息，补足业务上下文与关键字段。",
  "Builder Agent：按步骤输出方案、清单和可执行动作。",
  "Reviewer Agent：检查风险点、人工兜底条件与验收标准。"
];

const stepTemplates = {
  "7": ["梳理核心目标和输入字段。", "搭建最小可用流程。", "用 3 组真实场景验证结果稳定性。", "输出 MVP 版 README 与演示材料。"],
  "14": ["拆分业务流程和成功指标。", "设计 3 到 4 个 Agent 协作节点。", "加入日志、风险拦截与人工确认机制。", "完成一次真实样例演示和复盘。"],
  "30": ["建立端到端流程和角色边界。", "沉淀提示词模板与任务路由规则。", "补充指标监控、失败重试和质量抽检。", "整理部署说明、案例记录与对外展示页。"],
  "60": ["完成多场景适配与配置化抽象。", "接入更完整的数据回流与评估体系。", "优化协作成本、吞吐量和失败恢复能力。", "形成可复用模板，支持团队规模化扩展。"]
};

function byId(id) {
  return document.getElementById(id);
}

function detectInsight(goal) {
  const hit = keywordGroups.find((group) => group.match.some((word) => goal.includes(word)));
  if (hit) {
    return hit;
  }

  return {
    pain: "当前流程依赖人工经验和重复判断，导致交付速度与一致性都受限。",
    review: "用真实输入样例做 A/B 对比，验证 Agent 方案能否稳定提升效率。"
  };
}

function buildPositioning(goal, typeKey) {
  const type = typeMetadata[typeKey];
  const insight = detectInsight(goal);
  return `这是一个面向${type.name}场景的 Agent 协作演示项目，目标是围绕“${goal.trim()}”建立可复用执行链路。项目聚焦于${insight.pain}${type.focus}`;
}

function buildRoleList(goal, typeKey) {
  const type = typeMetadata[typeKey];
  return roleTemplates.map((role, index) => {
    if (index === 2) {
      return `${role} 重点产出 ${type.deliverables.join("、")}。`;
    }
    if (index === 3) {
      return `${role} 重点保证输出可解释、可复核，并保留人工接管机制。`;
    }
    return role;
  });
}

function buildRiskList(goal) {
  const insight = detectInsight(goal);
  return [
    `数据或输入字段不完整时，Agent 需要回退到人工确认，避免误判。`,
    `提示词或规则过于宽泛时，输出会漂移，需要保留抽检和日志。`,
    `${insight.review}`
  ];
}

function buildMarkdown(goal, typeKey, timeline) {
  const type = typeMetadata[typeKey];
  const positioning = buildPositioning(goal, typeKey);
  const steps = stepTemplates[timeline];
  const roles = buildRoleList(goal, typeKey);
  const risks = buildRiskList(goal);

  return [
    `# Agent Sprint Canvas`,
    ``,
    `## 项目简介`,
    positioning,
    ``,
    `## 核心能力`,
    `- 自动把自然语言目标拆解为多阶段执行计划`,
    `- 生成 Planner / Research / Builder / Reviewer 多 Agent 分工`,
    `- 输出风险检查项、人工接管边界和交付清单`,
    `- 支持将结果直接复制到 README、立项文档或演示材料`,
    ``,
    `## 项目类型`,
    `- ${type.name}`,
    `- 推荐周期：${timeline} 天`,
    ``,
    `## Agent 分工`,
    ...roles.map((item) => `- ${item}`),
    ``,
    `## 执行步骤`,
    ...steps.map((item, index) => `${index + 1}. ${item}`),
    ``,
    `## 风险与验证`,
    ...risks.map((item) => `- ${item}`)
  ].join("\n");
}

function renderList(container, items, ordered = false) {
  container.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });

  if (ordered) {
    container.start = 1;
  }
}

function generate() {
  const goal = byId("goal-input").value.trim();
  const typeKey = byId("project-type").value;
  const timeline = byId("timeline").value;

  if (!goal) {
    byId("goal-input").focus();
    return;
  }

  byId("project-positioning").textContent = buildPositioning(goal, typeKey);
  renderList(byId("agent-roles"), buildRoleList(goal, typeKey));
  renderList(byId("execution-steps"), stepTemplates[timeline], true);
  renderList(byId("risks-and-checks"), buildRiskList(goal));
  byId("markdown-output").value = buildMarkdown(goal, typeKey, timeline);
}

function fillSample() {
  byId("goal-input").value = sampleText;
  byId("project-type").value = "service";
  byId("timeline").value = "14";
  generate();
}

async function copySummary() {
  const output = byId("markdown-output").value.trim();
  if (!output) {
    generate();
  }

  const finalOutput = byId("markdown-output").value.trim();
  if (!finalOutput) {
    return;
  }

  try {
    await navigator.clipboard.writeText(finalOutput);
    byId("copy-summary").textContent = "已复制";
    window.setTimeout(() => {
      byId("copy-summary").textContent = "复制项目摘要";
    }, 1600);
  } catch (error) {
    console.error(error);
  }
}

byId("generate-plan").addEventListener("click", generate);
byId("fill-sample").addEventListener("click", fillSample);
byId("copy-summary").addEventListener("click", copySummary);

fillSample();
