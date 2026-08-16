window.projectEntries = [
  {
    id: "mediator-z3-translator",
    featured: true,
    title: {
      zh: "Mediator 到 Z3 的模型转换与性质验证工具",
      en: "Mediator-to-Z3 Model Translation and Verification Tool",
    },
    period: {
      zh: "2025.09 - 2025.12",
      en: "Sep - Dec 2025",
    },
    context: {
      zh: "两人课程项目",
      en: "Two-person course project",
    },
    description: {
      zh: "将 Mediator 模型转换为 Z3Py 约束，通过有界模型检查验证时序性质并生成反例轨迹。",
      en: "Translated Mediator models into Z3Py constraints for bounded property checking and counterexample generation.",
    },
    detail: {
      zh: "负责课程论文写作，并参与转换工具的实现思路设计。工具以 Java 遍历 Mediator AST，将类型、变量、初始状态、转移和 G/F/X/U 时序性质编码为时刻索引的 Z3Py 约束，支持复合类型递归扁平化、帧条件和有界整数安全检查。在 40 步 Testbench 与 60 步医疗系统模型上完成验证，分别定位到第 21 步和第 60 步的性质反例。",
      en: "Led the course-paper writing and contributed implementation ideas. The Java generator traverses the Mediator AST and encodes types, variables, initial states, transitions, and G/F/X/U temporal properties as time-indexed Z3Py constraints, with recursive composite-type flattening, frame conditions, and bounded-integer safety checks. It was evaluated on a 40-step Testbench model and a 60-step medical-system model, producing counterexamples at steps 21 and 60 respectively.",
    },
    tags: ["Java", "Z3Py", "SMT", "Bounded Model Checking"],
    links: [
      {
        href: "projects/mediator-z3.html",
        label: { zh: "查看案例研究", en: "View case study" },
      },
      {
        href: "docs/projects/mediator-to-z3-course-paper.pdf",
        label: { zh: "查看课程论文 PDF", en: "View course paper PDF" },
        newTab: true,
      },
    ],
  },
  {
    id: "mcm-2026-battery",
    featured: true,
    title: {
      zh: "MCM 2026 A 题：智能手机电池耗电建模",
      en: "MCM 2026 Problem A: Smartphone Battery Drain Modeling",
    },
    period: {
      zh: "2026.01",
      en: "Jan 2026",
    },
    context: {
      zh: "三人团队项目",
      en: "Team of 3",
    },
    description: {
      zh: "构建融合用户行为与电化学机理的连续时间电池模型，用于预测 SOC 与剩余续航时间。",
      en: "Built a continuous-time, behavior-aware and physics-informed battery model for SOC and time-to-empty prediction.",
    },
    detail: {
      zh: "主要负责论文撰写与模型改进思路的提出，并完成部分数据处理和图表绘制。团队以 Ridge Regression 分析屏幕、处理器、网络与后台任务等耗电影响，并结合 Weibull 阻抗修正、二阶 Thevenin 等效电路和 SOH 耦合描述非线性放电与老化。测试集 R² 达 0.943，中高耗电场景 MAPE 低于 10%，敏感性分析识别出屏幕使用时间和处理器负载是主要驱动因素。",
      en: "Led the paper writing, proposed model refinements, and completed part of the data processing and figure production. The team combined Ridge Regression for behavior-driven power analysis with a Weibull impedance correction, a second-order Thevenin equivalent circuit, and SOH coupling for nonlinear discharge and ageing. The model achieved R² = 0.943 on the test set and under 10% MAPE in medium-to-high drain scenarios, with screen-on time and processor load identified as the dominant drivers.",
    },
    tags: ["Python", "Ridge Regression", "ODE", "Sensitivity Analysis"],
    links: [
      {
        href: "projects/mcm-battery.html",
        label: { zh: "查看案例研究", en: "View case study" },
      },
      {
        href: "docs/projects/mcm-2026-smartphone-battery.pdf",
        label: { zh: "查看论文 PDF", en: "View paper PDF" },
        newTab: true,
      },
    ],
  },
];
