// -- Translations ------------------------------------------------------------
const translations = {
  zh: {
    "name-full": "宋思逸",
    "title-index": "宋思逸 | 个人主页",
    "title-about": "关于 | 宋思逸",
    "title-projects": "项目 | 宋思逸",
    "title-articles": "文章 | 宋思逸",
    "title-coursework": "课程作业 | 宋思逸",
    "title-gaokao": "高考解答 | 宋思逸",
    "title-running": "跑步记录 | 宋思逸",
    "title-english-tests": "英语测试记录 | 宋思逸",
    "title-calendar": "近期计划 | 宋思逸",
    "title-skills": "技能 | 宋思逸",
    "title-resume": "简历 | 宋思逸",
    "title-contact": "联系 | 宋思逸",
    "title-research": "研究 | 宋思逸",
    "title-now": "Now | 宋思逸",
    "title-search": "搜索 | 宋思逸",
    "title-race-calendar": "路跑及越野赛事名单 | 宋思逸",
    "title-road-races": "路跑赛事名单 | 宋思逸",
    "title-trail-races": "越野赛事名单 | 宋思逸",
    "meta-index": "个人主页 - 展示个人介绍、项目作品、文章笔记、学习档案和跑步记录",
    "meta-about": "关于宋思逸的个人简介、经历和长期目标",
    "meta-projects": "宋思逸的项目作品与技术实践",
    "meta-articles": "宋思逸的文章、笔记和 PDF 资料归档",
    "meta-coursework": "宋思逸的课程作业与学习成果归档",
    "meta-gaokao": "宋思逸整理的高考数学解答与 PDF 目录",
    "meta-running": "宋思逸的跑步记录、赛事结果和目标赛历",
    "meta-english-tests": "宋思逸的英语测试记录、阶段成绩和目标考试档案",
    "meta-calendar": "宋思逸未来一段时间的高层计划，记录较重要的事情、时间和进度",
    "meta-skills": "宋思逸的技能栈、工具链与协作能力",
    "meta-resume": "宋思逸的网页版个人简历与下载版简历",
    "meta-contact": "联系宋思逸的邮箱与相关账号信息",
    "meta-research": "宋思逸的研究兴趣、阅读与阶段性探索",
    "meta-now": "宋思逸当前正在投入的事项",
    "meta-search": "搜索宋思逸个人主页中的栏目、项目和文章",
    "meta-race-calendar": "基于路跑及越野赛赛历的赛事名单页面，支持按类别、地区、参与状态筛选并排序",
    "meta-road-races": "路跑赛事名单页面，支持按地区、项目、参与状态筛选，并按序号或日期排序",
    "meta-trail-races": "越野赛事名单页面，支持按地区、参与状态筛选，并按序号或日期排序",
    "nav-home": "首页",
    "nav-about": "关于我",
    "nav-projects": "项目",
    "nav-articles": "文章",
    "nav-research": "研究",
    "nav-now": "Now",
    "nav-search": "搜索",
    "nav-skills": "技能",
    "nav-calendar": "计划",
    "nav-coursework": "课程作业",
    "nav-gaokao": "高考解答",
    "nav-running": "跑步记录",
    "nav-english-tests": "英语测试记录",
    "nav-contact": "联系我",
    "nav-more": "更多",
    "nav-core-label": "核心导航",
    "nav-more-label": "更多内容",
    "nav-footer-label": "页脚导航",
    "lang-btn": "EN",
    "lang-aria": "Switch to English",
    "menu-aria": "打开菜单",
    "logo-aria": "返回首页",
    "idx-cta-primary": "查看作品",
    "idx-cta-ghost": "合作联系",
    "idx-about-h2": "关于我",
    "idx-about-p": "北京大学数学科学学院数学类本科生，兼修社会学，关注数学建模、生物数学、数据分析、形式化验证与 AI 应用，希望用定量方法理解并解决真实问题。目前正在研究flow matching和discrete flow matching。",
    "idx-about-link": "查看关于我详情",
    "idx-projects-h2": "精选项目",
    "idx-viewall": "查看全部",
    "idx-articles-h2": "文章与笔记",
    "idx-articles-viewall": "查看全部",
    "idx-research-h2": "研究",
    "idx-research-link": "进入研究页",
    "idx-research-title": "从理论到实验的持续探索",
    "idx-research-copy": "围绕 Flow Matching、形式化验证与定量建模，记录正在阅读的问题、推导与小规模实验。",
    "idx-now-h2": "Now",
    "idx-now-link": "查看当前重点",
    "idx-now-title": "此刻正在投入的事",
    "idx-now-copy": "研究生成建模、完善个人知识档案，并保持跑步训练和复盘。",
    "idx-calendar-h2": "近期计划",
    "idx-calendar-copy": "把计划写成事项列表，每件事只对应一个时间，不再按时间段打包很多内容。",
    "idx-calendar-viewall": "查看计划",
    "idx-calendar-kicker": "近期节奏",
    "idx-calendar-title": "把接下来真正重要的几件事先摆清楚",
    "idx-calendar-desc": "这里展示的是单条事项式计划，每一条只写一件事、一个时间和当前进度。",
    "idx-coursework-h2": "课程作业",
    "idx-coursework-viewall": "查看全部",
    "idx-coursework-copy": "把课程作业按学期和科目整理成长期可追溯的学习档案。",
    "idx-coursework-a-title": "课程作业总览",
    "idx-coursework-a-desc": "集中放各门课程作业 PDF，按学期和课程持续更新。",
    "idx-coursework-a-link": "进入栏目",
    "idx-gaokao-h2": "高考解答",
    "idx-gaokao-viewall": "查看全部",
    "idx-gaokao-copy": "高考数学解答独立成栏，专门收录每道题的 PDF 解答与复盘。",
    "idx-gaokao-a-title": "高考数学试题解答",
    "idx-gaokao-a-desc": "按年份和题号整理高考数学题解答 PDF。",
    "idx-gaokao-a-link": "进入栏目",
    "idx-skills-h2": "技能栈",
    "idx-skill-1": "前端开发",
    "idx-skill-2": "后端开发",
    "idx-skill-3": "数据分析",
    "idx-skill-4": "产品思维",
    "idx-skill-5": "英文协作",
    "idx-skill-6": "AI 应用",
    "idx-running-h2": "跑步记录",
    "idx-running-copy": "用这个版块记录自己跑过的比赛、完赛成绩，以及下一次想挑战的目标。",
    "idx-running-viewall": "查看全部",
    "idx-running-kicker": "年度概览",
    "idx-running-overview-title": "把比赛经历整理成自己的赛历",
    "idx-running-overview-desc": "现在先放一个可编辑模板，后续你只要把赛事名称、日期、项目和成绩替换掉，就能一直累积自己的跑步档案。",
    "running-stat-finished": "累计参赛",
    "running-stat-longest": "最长距离",
    "running-stat-total": "总距离",
    "running-stat-next": "下一目标",
    "running-no-goal": "待补充",
    "idx-running-date-label": "日期",
    "idx-running-distance-label": "项目",
    "idx-running-location-label": "地点",
    "idx-running-note-label": "备注",
    "idx-engtest-h2": "英语测试记录",
    "idx-engtest-copy": "用这个版块记录每次英语考试、阶段模拟和下一次想冲击的目标分数。",
    "idx-engtest-viewall": "查看全部",
    "idx-engtest-kicker": "阶段概览",
    "idx-engtest-overview-title": "把每一次英语测试整理成连续档案",
    "idx-engtest-overview-desc": "现在先放一个可编辑模板，后续你只要补充考试名称、时间、分数和备注，就能持续累积自己的英语学习记录。",
    "engtest-stat-finished": "累计完成",
    "engtest-stat-best": "最高分",
    "engtest-stat-next": "下一目标",
    "idx-engtest-date-label": "日期",
    "idx-engtest-location-label": "测试地点",
    "idx-engtest-score-label": "成绩",
    "idx-engtest-note-label": "备注",
    "idx-contact-h2": "联系我",
    "idx-contact-email": "邮箱：songsiyi_2024@outlook.com",
    "idx-contact-github": "GitHub：github.com/songsiyi2024",
    "idx-hero-title-prefix": "你好，我是",
    "idx-footer": "宋思逸。用心构建。",
    "meta-published-label": "发布日期",
    "meta-download": "下载文件",
    "meta-type-pdf": "PDF",
    "meta-type-html": "HTML",
    "meta-type-file": "文件",
    "article-open-pdf": "查看 PDF",
    "article-open-html": "阅读文章",
    "article-open-file": "查看文件",
    "race-h2": "路跑及越野赛事名单",
    "race-copy": "数据来自《路跑及越野赛赛历》。你可以按赛事类别、地区、参赛状态筛选，并按日期或名称排序。",
    "race-back-articles": "返回文章",
    "race-back-home": "返回首页",
    "race-back-running": "返回跑步记录",
    "race-filter-category": "赛事类别",
    "race-filter-region": "地区",
    "race-filter-road-type": "路跑项目",
    "race-filter-caa-cert": "中国田协认证",
    "race-filter-wa-cert": "世界田联认证",
    "race-filter-status": "参与状态",
    "race-filter-search": "赛事名称关键词",
    "race-search-placeholder": "输入赛事名称",
    "race-sort-by": "排序方式",
    "race-opt-all": "全部",
    "race-opt-road-only": "仅路跑",
    "race-opt-trail-only": "仅越野",
    "race-opt-road": "路跑",
    "race-opt-trail": "越野",
    "race-opt-full": "全马",
    "race-opt-half": "半马",
    "race-opt-full-half": "全马/半马",
    "race-opt-joined": "已参与",
    "race-opt-not-joined": "未参与",
    "race-opt-cert-none": "无认证",
    "race-sort-date-asc": "日期从早到晚",
    "race-sort-date-desc": "日期从晚到早",
    "race-sort-seq-asc": "序号从小到大",
    "race-sort-seq-desc": "序号从大到小",
    "race-sort-name-asc": "名称 A-Z",
    "race-sort-name-desc": "名称 Z-A",
    "race-col-seq": "序号",
    "race-col-name": "赛事名称",
    "race-col-category": "类别",
    "race-col-region": "地区",
    "race-col-type": "项目",
    "race-col-date": "日期",
    "race-col-cert": "认证",
    "race-col-status": "参与状态",
    "project-empty": "项目内容待补充。",
    "abt-hero-copy": "北京大学数学科学学院数学类本科生，兼修社会学。我的兴趣横跨数学建模、生物数学、数据分析、形式化验证与定量社会研究，也持续通过课程项目和竞赛探索这些方法的实际应用。目前正在研究flow matching和discrete flow matching。",
    "abt-eyebrow": "关于我",
    "abt-h1-prefix": "关于",
    "abt-cta-primary": "查看项目",
    "abt-cta-ghost": "返回首页",
    "abt-resume-h2": "个人简历",
    "abt-resume-copy": "网页版简历集中展示我的教育背景、项目经历与技能摘要。",
    "abt-resume-card-title": "简历入口",
    "abt-resume-card-desc": "查看教育背景、代表项目、竞赛成果与技能摘要。",
    "abt-resume-open-web": "查看网页版简历",
    "abt-resume-download-pdf": "下载 PDF 简历",
    "resume-eyebrow": "RESUME",
    "resume-h1": "个人简历",
    "resume-hero-copy": "北京大学数学类本科生，兼修社会学；关注数学建模、生物数学、数据分析、形式化验证与 AI 应用。",
    "resume-download-pdf": "下载 PDF 简历",
    "resume-back-about": "返回关于我",
    "resume-basic-h2": "基本信息",
    "resume-name-label": "姓名：",
    "resume-email-label": "邮箱：",
    "resume-github-label": "GitHub：",
    "resume-focus-label": "方向：",
    "resume-focus-value": "数学建模、生物数学、数据分析、形式化验证、AI 应用、定量社会学",
    "resume-edu-h2": "教育背景",
    "resume-edu-1-time": "2024.09 - 至今",
    "resume-edu-1-school": "北京大学",
    "resume-edu-1-subschool":"数学科学学院",
    "resume-edu-1-major": "数学类",
    "resume-edu-1-courses": "主修课程：数学分析、高等代数、概率论、计算概论、数据结构与算法、计算方法、机器学习基础、计算系统生物学、程序设计技术与方法。",
    "resume-edu-1.5-time": "2025.09 - 至今",
    "resume-edu-1.5-school": "北京大学",
    "resume-edu-1.5-subschool":"社会学系",
    "resume-edu-1.5-major": "社会学（双专业）",
    "resume-edu-1.5-courses": "主修课程：社会学概论、国外社会学学说、社会工作概论、民族与社会、数据分析技术。",
    "resume-edu-2-time": "2021.09 - 2024.06",
    "resume-edu-2-school": "江苏省溧阳中学",
    "resume-edu-2-major": "语数英物化生",
    "resume-projects-h2": "代表项目与作品",
    "resume-project-mcm-title": "MCM 2026 A 题：智能手机电池耗电建模",
    "resume-project-mcm-meta": "2026.01 · MCM 团队项目",
    "resume-project-mcm-summary": "主要负责论文撰写与模型改进思路的提出，并完成部分数据处理和图表绘制。",
    "resume-project-mcm-point-1": "使用 Ridge Regression 完成多因素耗电建模、特征消融与敏感性分析。",
    "resume-project-mcm-point-2": "结合 Weibull 阻抗修正、二阶 Thevenin 等效电路和 SOH 耦合描述非线性放电与电池老化。",
    "resume-project-mcm-point-3": "测试集 R² 达 0.943，中高耗电场景 MAPE 低于 10%；识别屏幕使用时间与处理器负载为主要耗电驱动。",
    "resume-project-mediator-title": "Mediator 到 Z3 的模型转换与性质验证工具",
    "resume-project-mediator-meta": "2025.09 - 2025.12 · 两人课程项目",
    "resume-project-mediator-summary": "负责课程论文写作，并参与转换工具的实现思路设计。",
    "resume-project-mediator-point-1": "以 Java 遍历 Mediator AST，将类型、变量、转移和时序性质转换为时刻索引的 Z3Py 约束。",
    "resume-project-mediator-point-2": "支持核心类型、复合类型递归扁平化、帧条件、G/F/X/U 性质与有界整数安全检查。",
    "resume-project-mediator-point-3": "在 40 步 Testbench 与 60 步医疗系统模型上完成有界模型检查，分别输出第 21、60 步反例轨迹。",
    "resume-project-detail-link": "查看项目详情",
    "resume-project-paper-link": "查看论文 PDF",
    "resume-view-projects": "查看项目页",
    "resume-view-articles": "查看文章页",
    "resume-skills-h2": "技能摘要",
    "resume-skill-1": "Python / 数据分析 / 数学建模",
    "resume-skill-2": "Java / AST 处理 / DSL 转换",
    "resume-skill-3": "Z3 / SMT / 有界模型检查",
    "resume-skill-4": "回归分析 / 敏感性分析 / 不确定性量化",
    "resume-skill-5": "中英文技术写作 / 团队协作",
    "prj-h2": "全部项目",
    "prj-back": "返回首页",
    "art-h2": "阅读与创作",
    "art-back": "返回首页",
    "art-tip": "把外部资料与自己的文章分开归档。",
    "art-reading-h2": "我的阅读",
    "art-reading-copy": "收录正在参考的资料、通知和可长期查阅的文档。",
    "art-writing-h2": "我的创作",
    "art-writing-copy": "收录学习复盘、技术笔记、项目总结和已经成文的思考。",
    "res-eyebrow": "RESEARCH",
    "res-h1": "研究",
    "res-copy": "记录我正在追问的问题、阅读路径，以及从理论走向实验的阶段性尝试。",
    "res-current-h2": "当前方向",
    "res-flow-title": "Flow Matching 与 Discrete Flow Matching",
    "res-flow-copy": "当前集中理解连续与离散状态空间中的生成建模方法，关注概率路径、训练目标及采样过程之间的联系。",
    "res-formal-title": "形式化验证",
    "res-formal-copy": "通过模型转换、SMT 求解和有界模型检查，探索如何把系统性质转化为可验证的约束。",
    "res-modeling-title": "定量建模",
    "res-modeling-copy": "将统计学习、微分方程与领域知识结合，用可解释的模型理解真实系统。",
    "res-practice-h2": "研究方式",
    "res-practice-1-title": "阅读与推导",
    "res-practice-1-copy": "从原始问题、符号和假设出发整理笔记，而不只记录结论。",
    "res-practice-2-title": "复现与实验",
    "res-practice-2-copy": "用小规模实验检验直觉，保留参数选择、失败案例与可重复的脚本。",
    "res-practice-3-title": "公开复盘",
    "res-practice-3-copy": "成熟的阅读笔记、项目总结和阶段性成果会逐步整理到“我的创作”中。",
    "now-h1": "现在在做什么",
    "now-copy": "这是一个会不定期更新的工作台，只保留此刻真正占据注意力的几件事。",
    "now-focus-h2": "当前重点",
    "now-1-title": "研究生成建模",
    "now-1-copy": "继续学习 flow matching 与 discrete flow matching，整理关键概念和待验证的问题。",
    "now-2-title": "完善个人知识档案",
    "now-2-copy": "把项目、阅读、课程成果和个人记录整理成可以持续更新的长期页面。",
    "now-3-title": "保持跑步训练",
    "now-3-copy": "在训练与比赛之外，保留对身体感受、配速和恢复的简短记录。",
    "search-h1": "站内搜索",
    "search-copy": "搜索栏目、项目、我的阅读和我的创作。",
    "search-label": "搜索关键词",
    "search-placeholder": "输入关键词",
    "search-results-h2": "搜索结果",
    "search-empty": "输入关键词后开始搜索。",
    "search-no-results": "没有找到相关内容。",
    "search-open": "打开",
    "cwk-h2": "课程作业",
    "cwk-back": "返回首页",
    "cwk-copy": "这里集中展示我的课程作业与阶段成果，后续会按学期持续更新。",
    "cwk-a-title": "课程作业总览",
    "cwk-a-desc": "包含各门课程作业 PDF，按学期和课程持续归档。",
    "cwk-docs-h3": "文档区",
    "cwk-docs-copy": "这个栏目只放课程作业文档。请把文件放进 docs/coursework 下对应课程的子文件夹，并在 entries.js 里补记录。",
    "cwk-docs-hero-copy": "每一门课程对应一个卡片块，点击后进入该课程文件目录。",
    "cwk-doc-1-title": "课程作业文档目录",
    "cwk-doc-1-desc": "集中列出课程作业 PDF 文件，后续每次新增作业直接补一条记录。",
    "cwk-doc-open": "查看目录",
    "cwk-open-course-directory": "查看该课程目录",
    "cwk-file-count-unit": "份文件",
    "cwk-doc-title": "课程作业 PDF 目录",
    "cwk-doc-hero-title": "课程作业 PDF 目录",
    "cwk-doc-hero-copy": "本页用于展示单门课程的文件目录。课程入口统一在课程作业页面维护。",
    "cwk-doc-detail-title-default": "课程文件目录",
    "cwk-doc-detail-desc-default": "目录清单",
    "cwk-doc-back-coursework": "返回课程作业",
    "cwk-doc-back-home": "返回首页",
    "cwk-doc-invalid-title": "未指定课程",
    "cwk-doc-invalid-desc": "请从课程作业页面选择课程卡片后进入目录。",
    "cwk-doc-file-directory-suffix": "文件目录",
    "gk-h2": "高考数学解答",
    "gk-back": "返回首页",
    "gk-copy": "这里展示我个人的高考数学解答 PDF，仅供参考，仅用于学习讨论等非商业用途。",
    "gk-a-title": "高考解答目录",
    "gk-a-desc": "按年份、试卷与题号管理高考数学解答 PDF。",
    "gk-a-link": "进入目录",
    "gk-directory-h3": "目录清单",
    "gk-directory-copy": "支持按年份与地区联合筛选；每条会标注难度系数。",
    "gk-filter-year": "按年份筛选",
    "gk-filter-region": "按地区筛选",
    "gk-filter-all": "全部",
    "gk-difficulty-label": "难度系数",
    "gk-difficulty-unrated": "待评估",
    "gk-region-uncategorized": "未分类",
    "gk-file-pending": "文件待上传",
    "gk-doc-title": "高考数学解答 PDF 目录",
    "gk-doc-hero-title": "高考数学解答 PDF 目录",
    "gk-doc-hero-copy": "这里直接展示目录清单。后续新增文件时，只需要维护 entries.js。",
    "gk-doc-naming-tip": "建议命名：年份-地区-试卷-题号-主题-solution.pdf。",
    "gk-doc-back-gaokao": "返回高考解答",
    "gk-doc-back-home": "返回首页",
    "skl-h2": "技能",
    "skl-copy": "你可以在这个独立页面详细展示工具链、技术深度和业务能力。",
    "skl-cta-primary": "联系我",
    "skl-cta-ghost": "返回首页",
    "skl-1": "前端工程",
    "skl-2": "后端工程",
    "skl-3": "云与运维",
    "skl-4": "AI 应用",
    "skl-5": "数据分析",
    "skl-6": "英文协作",
    "cnt-h2": "联系我",
    "cnt-email": "邮箱：songsiyi_2024@outlook.com",
    "cnt-github": "GitHub：github.com/songsiyi2024",
    "cnt-cta-primary": "发送邮件",
    "cnt-cta-ghost": "返回首页",
    "global-footer": "宋思逸。用心构建。",
    "run-h2": "全部跑步记录",
    "run-back": "返回首页",
    "run-copy": "这个页面集中展示你的赛事记录。后续只需要继续补充新的比赛卡片，就能把它维护成自己的完赛档案。",
    "run-overview-title": "把每一场比赛都沉淀成长期记录",
    "run-overview-desc": "你可以把已跑完的赛事、正在准备的目标赛，和每次参赛后的感受都放在这里，形成清晰的个人跑步时间线。",
    "run-race-hub-title": "赛事名单入口",
    "run-race-hub-copy": "按赛历拆分为路跑与越野两个页面，均支持筛选和排序。",
    "run-race-hub-road": "路跑赛事名单",
    "run-race-hub-trail": "越野赛事名单",
    "engtest-h2": "全部英语测试记录",
    "engtest-back": "返回首页",
    "engtest-copy": "这个页面集中展示你的英语测试记录。后续只需要继续补充新的测试卡片，就能把它维护成长期可追踪的成绩档案。",
    "engtest-overview-title": "把每一次英语测试沉淀成连续记录",
    "engtest-overview-desc": "你可以把已完成的考试、正在准备的目标测试和每次测试后的复盘都放在这里，形成清晰的英语学习时间线。",
    "cal-h2": "近期计划",
    "cal-back": "返回首页",
    "cal-copy": "这里按事项来列计划。每一条只对应一件事、一个时间，以及它现在的进度。",
    "cal-summary-kicker": "近况概览",
    "cal-summary-title": "把接下来要做的事收成一串清楚的单项列表",
    "cal-summary-desc": "重点不是覆盖完整时间表，而是让每条计划都足够单一清楚。做完之后，再把值得留下的部分转入 Timeline 或对应栏目。",
    "cal-stat-planned": "待进行",
    "cal-stat-doing": "进行中",
    "cal-stat-done": "已完成",
    "cal-status-planned": "计划中",
    "cal-status-doing": "进行中",
    "cal-status-done": "已完成",
    "cal-empty": "现在还没有列出新的计划。",
    "cal-legend-aria": "状态图例",
    "cal-upcoming-empty": "最近还没有新的计划。",
    "cal-upcoming-label": "近期重点",
    "cal-label-time": "时间",
    "cal-label-category": "类型",
    "cal-label-summary": "说明",
    "cal-category-website": "网站",
    "cal-category-bookmarks": "收藏",
    "cal-category-writing": "写作",
    "cal-category-timeline": "时间线",
    "cal-category-running": "跑步",
    "cal-category-study": "学习",
    "cal-category-exam": "考试",
  },
  en: {
    "name-full": "Siyi Song",
    "title-index": "Siyi Song | Personal Home",
    "title-about": "About | Siyi Song",
    "title-projects": "Projects | Siyi Song",
    "title-articles": "Writing | Siyi Song",
    "title-coursework": "Coursework | Siyi Song",
    "title-gaokao": "Gaokao Solutions | Siyi Song",
    "title-running": "Running | Siyi Song",
    "title-english-tests": "English Test Log | Siyi Song",
    "title-calendar": "Plans | Siyi Song",
    "title-skills": "Skills | Siyi Song",
    "title-resume": "Resume | Siyi Song",
    "title-contact": "Contact | Siyi Song",
    "title-research": "Research | Siyi Song",
    "title-now": "Now | Siyi Song",
    "title-search": "Search | Siyi Song",
    "title-race-calendar": "Road & Trail Race List | Siyi Song",
    "title-road-races": "Road Race List | Siyi Song",
    "title-trail-races": "Trail Race List | Siyi Song",
    "meta-index": "Personal homepage featuring profile, projects, writing, study archives, and running records.",
    "meta-about": "Profile, experience, and long-term goals of Siyi Song.",
    "meta-projects": "Projects and technical practice by Siyi Song.",
    "meta-articles": "Articles, notes, and PDF archives by Siyi Song.",
    "meta-coursework": "Coursework and study outcomes archived by Siyi Song.",
    "meta-gaokao": "Gaokao math solutions and PDF directory by Siyi Song.",
    "meta-running": "Running records, race results, and target calendar of Siyi Song.",
    "meta-english-tests": "English test records, score progress, and target exam archive of Siyi Song.",
    "meta-calendar": "A high-level plans page for the next stretch of work, focused on bigger items, timing, and progress.",
    "meta-skills": "Skills, toolchains, and collaboration abilities of Siyi Song.",
    "meta-resume": "Web resume and downloadable resume file of Siyi Song.",
    "meta-contact": "Email and contact information for Siyi Song.",
    "meta-research": "Research interests, reading, and work in progress by Siyi Song.",
    "meta-now": "What Siyi Song is currently working on.",
    "meta-search": "Search sections, projects, and writing on Siyi Song's personal site.",
    "meta-race-calendar": "Race list based on the road and trail schedule, with filtering and sorting by type, region, and participation.",
    "meta-road-races": "Road race list with filters for region, type, participation, and sorting by serial number or date.",
    "meta-trail-races": "Trail race list with filters for region, participation, and sorting by serial number or date.",
    "nav-home": "Home",
    "nav-about": "About",
    "nav-projects": "Projects",
    "nav-articles": "Writing",
    "nav-research": "Research",
    "nav-now": "Now",
    "nav-search": "Search",
    "nav-skills": "Skills",
    "nav-calendar": "Plans",
    "nav-coursework": "Coursework",
    "nav-gaokao": "Gaokao Solutions",
    "nav-running": "Running",
    "nav-english-tests": "English Tests",
    "nav-contact": "Contact",
    "nav-more": "More",
    "nav-core-label": "Primary navigation",
    "nav-more-label": "More sections",
    "nav-footer-label": "Footer navigation",
    "art-h2": "Reading & Writing",
    "art-tip": "Keep reference material and original work separate.",
    "art-reading-h2": "My Reading",
    "art-reading-copy": "Reference materials, notices, and documents worth keeping close at hand.",
    "art-writing-h2": "My Writing",
    "art-writing-copy": "Study reviews, technical notes, project summaries, and ideas developed into complete pieces.",
    "res-eyebrow": "RESEARCH",
    "res-h1": "Research",
    "res-copy": "Questions I am pursuing, paths through the literature, and attempts to move from theory to experiments.",
    "res-current-h2": "Current Directions",
    "res-flow-title": "Flow Matching & Discrete Flow Matching",
    "res-flow-copy": "Studying generative modeling in continuous and discrete state spaces, with attention to probability paths, objectives, and sampling.",
    "res-formal-title": "Formal Verification",
    "res-formal-copy": "Exploring how model translation, SMT solving, and bounded model checking turn system properties into verifiable constraints.",
    "res-modeling-title": "Quantitative Modeling",
    "res-modeling-copy": "Combining statistical learning, differential equations, and domain knowledge to understand real systems with interpretable models.",
    "res-practice-h2": "How I Work",
    "res-practice-1-title": "Reading & Derivation",
    "res-practice-1-copy": "Starting from original questions, notation, and assumptions rather than recording conclusions alone.",
    "res-practice-2-title": "Reproduction & Experiments",
    "res-practice-2-copy": "Testing intuitions with small experiments and keeping parameter choices, failed cases, and reproducible scripts.",
    "res-practice-3-title": "Public Reflection",
    "res-practice-3-copy": "Mature reading notes, project summaries, and incremental results will gradually move into My Writing.",
    "now-h1": "What I Am Doing Now",
    "now-copy": "A periodically updated workbench for the few things that actually hold my attention right now.",
    "now-focus-h2": "Current Focus",
    "now-1-title": "Generative Modeling",
    "now-1-copy": "Learning flow matching and discrete flow matching while organizing the key concepts and open questions.",
    "now-2-title": "Building a Knowledge Archive",
    "now-2-copy": "Turning projects, reading, coursework, and personal records into durable pages that can keep evolving.",
    "now-3-title": "Running Training",
    "now-3-copy": "Keeping short records of physical feedback, pace, and recovery alongside training and races.",
    "search-h1": "Site Search",
    "search-copy": "Search sections, projects, reading, and writing.",
    "search-label": "Search terms",
    "search-placeholder": "Enter keywords",
    "search-results-h2": "Results",
    "search-empty": "Enter keywords to start searching.",
    "search-no-results": "No matching content found.",
    "search-open": "Open",
    "lang-btn": "中文",
    "lang-aria": "切换到中文",
    "menu-aria": "Open menu",
    "logo-aria": "Back to Home",
    "idx-cta-primary": "View Works",
    "idx-cta-ghost": "Get in Touch",
    "idx-about-h2": "About",
    "idx-about-p": "I study Mathematics at Peking University and pursue a double major in Sociology. My interests include mathematical modeling, biomathematics, data analysis, formal verification, and AI applications, with an emphasis on quantitative approaches to real-world problems. Recently I have been studying and working on flow matching and discrete flow matching.",
    "idx-about-link": "Read More About Me",
    "idx-projects-h2": "Featured Projects",
    "idx-viewall": "View All",
    "idx-articles-h2": "Writing & Notes",
    "idx-articles-viewall": "View All",
    "idx-research-h2": "Research",
    "idx-research-link": "Explore Research",
    "idx-research-title": "An Ongoing Path from Theory to Experiments",
    "idx-research-copy": "A record of questions, derivations, and small experiments around flow matching, formal verification, and quantitative modeling.",
    "idx-now-h2": "Now",
    "idx-now-link": "See Current Focus",
    "idx-now-title": "What Holds My Attention Now",
    "idx-now-copy": "Studying generative modeling, building a personal knowledge archive, and maintaining running training and reflection.",
    "idx-calendar-h2": "Plans",
    "idx-calendar-copy": "Write the plans as a list of items, with one item paired to one time instead of bundling many things into a time span.",
    "idx-calendar-viewall": "Open Plans",
    "idx-calendar-kicker": "Current Rhythm",
    "idx-calendar-title": "Make the next important things visible first",
    "idx-calendar-desc": "This area now uses single-item planning: each row keeps one thing, one time, and one progress state.",
    "idx-coursework-h2": "Coursework",
    "idx-coursework-viewall": "View All",
    "idx-coursework-copy": "Organize assignments by semester and subject into a long-term study archive.",
    "idx-coursework-a-title": "Coursework Overview",
    "idx-coursework-a-desc": "A dedicated archive for coursework PDFs, updated by semester and course.",
    "idx-coursework-a-link": "Open Section",
    "idx-gaokao-h2": "Gaokao Solutions",
    "idx-gaokao-viewall": "View All",
    "idx-gaokao-copy": "A separate section for Gaokao math solution PDFs, with no overlap with coursework.",
    "idx-gaokao-a-title": "Gaokao Math Solutions",
    "idx-gaokao-a-desc": "Organized by year and problem number in PDF format.",
    "idx-gaokao-a-link": "Open Section",
    "idx-skills-h2": "Skills",
    "idx-skill-1": "Frontend Dev",
    "idx-skill-2": "Backend Dev",
    "idx-skill-3": "Data Analysis",
    "idx-skill-4": "Product Thinking",
    "idx-skill-5": "English Collab",
    "idx-skill-6": "AI Application",
    "idx-running-h2": "Running Log",
    "idx-running-copy": "Use this section to track the races you've run, your finish results, and the next target you want to chase.",
    "idx-running-viewall": "View All",
    "idx-running-kicker": "Season Overview",
    "idx-running-overview-title": "Turn race memories into a personal event archive",
    "idx-running-overview-desc": "This starts as an editable template. Replace the race name, date, distance, and result whenever you complete a new event.",
    "running-stat-finished": "Races Finished",
    "running-stat-longest": "Longest Distance",
    "running-stat-total": "Total Distance",
    "running-stat-next": "Next Goal",
    "running-no-goal": "To be added",
    "idx-running-date-label": "Date",
    "idx-running-distance-label": "Distance",
    "idx-running-location-label": "Location",
    "idx-running-note-label": "Notes",
    "idx-engtest-h2": "English Test Log",
    "idx-engtest-copy": "Use this section to record each English exam, practice test, and the next score you want to reach.",
    "idx-engtest-viewall": "View All",
    "idx-engtest-kicker": "Progress Snapshot",
    "idx-engtest-overview-title": "Turn every English test into a continuous archive",
    "idx-engtest-overview-desc": "This starts as an editable template. Add the exam name, date, score, and notes to keep a steady learning record over time.",
    "engtest-stat-finished": "Completed",
    "engtest-stat-best": "Best Score",
    "engtest-stat-next": "Next Goal",
    "idx-engtest-date-label": "Date",
    "idx-engtest-location-label": "Location",
    "idx-engtest-score-label": "Score",
    "idx-engtest-note-label": "Notes",
    "idx-contact-h2": "Contact",
    "idx-contact-email": "Email: songsiyi_2024@outlook.com",
    "idx-contact-github": "GitHub: github.com/songsiyi2024",
    "idx-hero-title-prefix": "Hi, I'm",
    "idx-footer": "Siyi Song. Built with intention.",
    "meta-published-label": "Published",
    "meta-download": "Download",
    "meta-type-pdf": "PDF",
    "meta-type-html": "HTML",
    "meta-type-file": "FILE",
    "article-open-pdf": "Open PDF",
    "article-open-html": "Read Article",
    "article-open-file": "Open File",
    "race-h2": "Road & Trail Race List",
    "race-copy": "Data comes from the Marathon & Trail Schedule. Filter by category, region, and participation status, then sort by date or name.",
    "race-back-articles": "Back to Articles",
    "race-back-home": "Back to Home",
    "race-back-running": "Back to Running",
    "race-filter-category": "Category",
    "race-filter-region": "Region",
    "race-filter-road-type": "Road Event Type",
    "race-filter-caa-cert": "CAA Certification",
    "race-filter-wa-cert": "World Athletics Certification",
    "race-filter-status": "Participation",
    "race-filter-search": "Name Keyword",
    "race-search-placeholder": "Enter race name",
    "race-sort-by": "Sort By",
    "race-opt-all": "All",
    "race-opt-road-only": "Road only",
    "race-opt-trail-only": "Trail only",
    "race-opt-road": "Road",
    "race-opt-trail": "Trail",
    "race-opt-full": "Full Marathon",
    "race-opt-half": "Half Marathon",
    "race-opt-full-half": "Full/Half",
    "race-opt-joined": "Joined",
    "race-opt-not-joined": "Not joined",
    "race-opt-cert-none": "No certification",
    "race-sort-date-asc": "Date: Earliest First",
    "race-sort-date-desc": "Date: Latest First",
    "race-sort-seq-asc": "Serial: Low to High",
    "race-sort-seq-desc": "Serial: High to Low",
    "race-sort-name-asc": "Name: A-Z",
    "race-sort-name-desc": "Name: Z-A",
    "race-col-seq": "No.",
    "race-col-name": "Race Name",
    "race-col-category": "Category",
    "race-col-region": "Region",
    "race-col-type": "Type",
    "race-col-date": "Date",
    "race-col-cert": "Certification",
    "race-col-status": "Status",
    "project-empty": "Project content to be added.",
    "abt-hero-copy": "I study Mathematics at Peking University and pursue a double major in Sociology. My interests span mathematical modeling, biomathematics, data analysis, formal verification, and quantitative social research, which I explore through coursework and competitions. Recently I have been studying and working on flow matching and discrete flow matching.",
    "abt-eyebrow": "ABOUT ME",
    "abt-h1-prefix": "About",
    "abt-cta-primary": "View Projects",
    "abt-cta-ghost": "Back to Home",
    "abt-resume-h2": "Resume",
    "abt-resume-copy": "The web resume brings together my education, selected projects, and skills.",
    "abt-resume-card-title": "Resume Entry",
    "abt-resume-card-desc": "Explore my education, selected projects, competition work, and skills.",
    "abt-resume-open-web": "Open Web Resume",
    "abt-resume-download-pdf": "Download PDF Resume",
    "resume-eyebrow": "RESUME",
    "resume-h1": "Resume",
    "resume-hero-copy": "Mathematics undergraduate and Sociology double-major student at Peking University, focused on mathematical modeling, biomathematics, data analysis, formal verification, and AI applications.",
    "resume-download-pdf": "Download PDF Resume",
    "resume-back-about": "Back to About",
    "resume-basic-h2": "Profile",
    "resume-name-label": "Name:",
    "resume-email-label": "Email:",
    "resume-github-label": "GitHub:",
    "resume-focus-label": "Focus:",
    "resume-focus-value": "Mathematical modeling, biomathematics, data analysis, formal verification, AI applications, quantitative sociology",
    "resume-edu-h2": "Education & Learning",
    "resume-edu-1-time": "Sep 2024 - Present",
    "resume-edu-1-school": "Peking University",
    "resume-edu-1-subschool": "School of Mathematical Sciences",
    "resume-edu-1-major": "Mathematics",
    "resume-edu-1-courses": "Key courses: Mathematical Analysis, Advanced Algebra, Probability Theory, Introduction to Computation, Data Structures and Algorithms, Computational Methods, Foundations of Machine Learning, Computational Systems Biology, Programming Techniques and Methodology.",
    "resume-edu-1.5-time": "Sep 2025 - Present",
    "resume-edu-1.5-school": "Peking University",
    "resume-edu-1.5-subschool": "Department of Sociology",
    "resume-edu-1.5-major": "Sociology (Double Major)",
    "resume-edu-1.5-courses": "Key courses: Introduction to Sociology, Foreign Sociological Theories, Introduction to Social Work, Ethnicity and Society, Data Analysis Techniques.",
    "resume-edu-2-time": "Sep 2021 - Jun 2024",
    "resume-edu-2-school": "Liyang Senior High of Jiangsu Province",
    "resume-edu-2-major": "Chinese, Math, English, Physics, Chemistry, Biology",
    "resume-projects-h2": "Selected Projects",
    "resume-project-mcm-title": "MCM 2026 Problem A: Smartphone Battery Drain Modeling",
    "resume-project-mcm-meta": "Jan 2026 · MCM team project",
    "resume-project-mcm-summary": "Led the paper writing, proposed model refinements, and completed part of the data processing and figure production.",
    "resume-project-mcm-point-1": "Applied Ridge Regression to multivariate battery-drain modeling, feature ablation, and sensitivity analysis.",
    "resume-project-mcm-point-2": "Combined a Weibull impedance correction, a second-order Thevenin equivalent circuit, and SOH coupling to model nonlinear discharge and ageing.",
    "resume-project-mcm-point-3": "Achieved R² = 0.943 on the test set and under 10% MAPE in medium-to-high drain scenarios; identified screen-on time and processor load as the dominant drivers.",
    "resume-project-mediator-title": "Mediator-to-Z3 Model Translation and Verification Tool",
    "resume-project-mediator-meta": "Sep - Dec 2025 · Two-person course project",
    "resume-project-mediator-summary": "Led the course-paper writing and contributed ideas to the implementation design.",
    "resume-project-mediator-point-1": "Traversed the Mediator AST in Java and translated types, variables, transitions, and temporal properties into time-indexed Z3Py constraints.",
    "resume-project-mediator-point-2": "Supported core types, recursive composite-type flattening, frame conditions, G/F/X/U properties, and bounded-integer safety checks.",
    "resume-project-mediator-point-3": "Ran bounded model checking on a 40-step Testbench model and a 60-step medical-system model, producing counterexamples at steps 21 and 60.",
    "resume-project-detail-link": "View project details",
    "resume-project-paper-link": "View paper PDF",
    "resume-view-projects": "View Projects",
    "resume-view-articles": "View Articles",
    "resume-skills-h2": "Skills Summary",
    "resume-skill-1": "Python / data analysis / mathematical modeling",
    "resume-skill-2": "Java / AST processing / DSL translation",
    "resume-skill-3": "Z3 / SMT / bounded model checking",
    "resume-skill-4": "Regression / sensitivity analysis / uncertainty quantification",
    "resume-skill-5": "Chinese-English technical writing / teamwork",
    "prj-h2": "All Projects",
    "prj-back": "Back to Home",
    "art-h2": "Writing",
    "art-back": "Back to Home",
    "art-tip": "For future posts, drop a new file into the articles folder and add one record in the data file.",
    "cwk-h2": "Coursework",
    "cwk-back": "Back to Home",
    "cwk-copy": "This page collects my coursework and milestone outputs. It will be updated each semester.",
    "cwk-a-title": "Coursework Overview",
    "cwk-a-desc": "Includes coursework PDFs archived by semester and course.",
    "cwk-docs-h3": "Document Area",
    "cwk-docs-copy": "This page only hosts coursework documents. Put files in each course subfolder under docs/coursework and add records in entries.js.",
    "cwk-docs-hero-copy": "Each course has one card. Click to open that course file directory.",
    "cwk-doc-1-title": "Coursework Document Index",
    "cwk-doc-1-desc": "A central list of coursework PDFs. Add one new record whenever you upload a new file.",
    "cwk-doc-open": "Open Directory",
    "cwk-open-course-directory": "Open Course Directory",
    "cwk-file-count-unit": "files",
    "cwk-doc-title": "Coursework PDF Directory",
    "cwk-doc-hero-title": "Coursework PDF Directory",
    "cwk-doc-hero-copy": "This page shows the file directory for a single course. Course entries are maintained from the coursework page.",
    "cwk-doc-detail-title-default": "Course File Directory",
    "cwk-doc-detail-desc-default": "Directory",
    "cwk-doc-back-coursework": "Back to Coursework",
    "cwk-doc-back-home": "Back to Home",
    "cwk-doc-invalid-title": "Course Not Specified",
    "cwk-doc-invalid-desc": "Please select a course card from the coursework page and open this directory.",
    "cwk-doc-file-directory-suffix": "File Directory",
    "gk-h2": "Gaokao Math Solutions",
    "gk-back": "Back to Home",
    "gk-copy": "This page independently hosts Gaokao math solution PDFs for non-commercial study and discussion.",
    "gk-a-title": "Gaokao PDF Directory",
    "gk-a-desc": "Manage Gaokao solution PDFs by year, paper, and problem number.",
    "gk-a-link": "Open Directory",
    "gk-directory-h3": "Directory",
    "gk-directory-copy": "Filter by year and region together; each entry includes a difficulty score.",
    "gk-filter-year": "Filter by Year",
    "gk-filter-region": "Filter by Region",
    "gk-filter-all": "All",
    "gk-difficulty-label": "Difficulty",
    "gk-difficulty-unrated": "Unrated",
    "gk-region-uncategorized": "Uncategorized",
    "gk-file-pending": "File pending upload",
    "gk-doc-title": "Gaokao Math Solution PDF Directory",
    "gk-doc-hero-title": "Gaokao Math Solution PDF Directory",
    "gk-doc-hero-copy": "This page directly renders the directory. When adding new files, only update entries.js.",
    "gk-doc-naming-tip": "Suggested naming: year-region-paper-problem-topic-solution.pdf.",
    "gk-doc-back-gaokao": "Back to Gaokao Solutions",
    "gk-doc-back-home": "Back to Home",
    "skl-h2": "Skills",
    "skl-copy": "Use this standalone page to showcase your tech stack, depth of expertise, and business skills in detail.",
    "skl-cta-primary": "Contact Me",
    "skl-cta-ghost": "Back to Home",
    "skl-1": "Frontend Engineering",
    "skl-2": "Backend Engineering",
    "skl-3": "Cloud & DevOps",
    "skl-4": "AI Application",
    "skl-5": "Data Analysis",
    "skl-6": "Communication",
    "cnt-h2": "Contact",
    "cnt-email": "Email: songsiyi_2024@outlook.com",
    "cnt-github": "GitHub: github.com/songsiyi2024",
    "cnt-cta-primary": "Send Email",
    "cnt-cta-ghost": "Back to Home",
    "global-footer": "Siyi Song. Built with intention.",
    "run-h2": "Full Running Log",
    "run-back": "Back to Home",
    "run-copy": "This page gathers your race history in one place. Keep adding new event cards here and it becomes a long-term archive of your finishes.",
    "run-overview-title": "Turn each race into a long-term personal record",
    "run-overview-desc": "Use this page for completed events, upcoming goal races, and the reflections you want to keep after each finish.",
    "run-race-hub-title": "Race List Entry",
    "run-race-hub-copy": "Split from the schedule into separate Road and Trail pages, both with filtering and sorting.",
    "run-race-hub-road": "Road Race List",
    "run-race-hub-trail": "Trail Race List",
    "engtest-h2": "Full English Test Log",
    "engtest-back": "Back to Home",
    "engtest-copy": "This page gathers your English test history in one place. Keep adding new test cards here and it becomes a long-term archive of your score progress.",
    "engtest-overview-title": "Turn every English test into a long-term record",
    "engtest-overview-desc": "Use this page for completed exams, upcoming target tests, and the notes you want to keep after each result.",
    "cal-h2": "Plans",
    "cal-back": "Back to Home",
    "cal-copy": "This page lists plans as items. Each row maps to one thing, one time, and its current progress.",
    "cal-summary-kicker": "Snapshot",
    "cal-summary-title": "Keep the next plans as a clear list of single items",
    "cal-summary-desc": "The point is not to cover a full schedule, but to keep each plan narrow and readable. Once something is finished, it can move into the timeline or the relevant section.",
    "cal-stat-planned": "Planned",
    "cal-stat-doing": "In Progress",
    "cal-stat-done": "Done",
    "cal-status-planned": "Planned",
    "cal-status-doing": "In Progress",
    "cal-status-done": "Done",
    "cal-empty": "No new plans are listed yet.",
    "cal-legend-aria": "Status legend",
    "cal-upcoming-empty": "No current priorities yet.",
    "cal-upcoming-label": "Current Focus",
    "cal-label-time": "Timing",
    "cal-label-category": "Category",
    "cal-label-summary": "Notes",
    "cal-category-website": "Website",
    "cal-category-bookmarks": "Bookmarks",
    "cal-category-writing": "Writing",
    "cal-category-timeline": "Timeline",
    "cal-category-running": "Running",
    "cal-category-study": "Study",
    "cal-category-exam": "Exam",
  },
};

const pageMetaKeys = {
  "": { title: "title-index", description: "meta-index" },
  "index.html": { title: "title-index", description: "meta-index" },
  "about.html": { title: "title-about", description: "meta-about" },
  "projects.html": { title: "title-projects", description: "meta-projects" },
  "articles.html": { title: "title-articles", description: "meta-articles" },
  "coursework.html": { title: "title-coursework", description: "meta-coursework" },
  "gaokao.html": { title: "title-gaokao", description: "meta-gaokao" },
  "running.html": { title: "title-running", description: "meta-running" },
  "english-tests.html": { title: "title-english-tests", description: "meta-english-tests" },
  "calendar.html": { title: "title-calendar", description: "meta-calendar" },
  "skills.html": { title: "title-skills", description: "meta-skills" },
  "resume.html": { title: "title-resume", description: "meta-resume" },
  "contact.html": { title: "title-contact", description: "meta-contact" },
  "research.html": { title: "title-research", description: "meta-research" },
  "now.html": { title: "title-now", description: "meta-now" },
  "search.html": { title: "title-search", description: "meta-search" },
  "race-calendar.html": { title: "title-race-calendar", description: "meta-race-calendar" },
  "road-races.html": { title: "title-road-races", description: "meta-road-races" },
  "trail-races.html": { title: "title-trail-races", description: "meta-trail-races" },
};

let currentLang = localStorage.getItem("lang") || "zh";
window.currentLang = currentLang;

function t(key, lang = currentLang) {
  return translations[lang]?.[key] || translations.zh[key] || key;
}

function getLocalizedValue(value, lang = currentLang) {
  if (value && typeof value === "object") {
    return value[lang] || value.zh || value.en || "";
  }
  return value || "";
}

function getCurrentPath() {
  return window.location.pathname.split("/").pop() || "index.html";
}

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function syncSeoMeta() {
  if (window.location.pathname.includes("/docs/")) {
    return;
  }

  const currentPath = getCurrentPath();
  const meta = pageMetaKeys[currentPath];
  const title = meta ? t(meta.title) : document.title;
  const description = meta
    ? t(meta.description)
    : document.querySelector('meta[name="description"]')?.getAttribute("content") || "";
  const canonicalUrl = `${window.location.origin}${window.location.pathname}`;
  const descriptionEl = document.querySelector('meta[name="description"]');

  document.title = title;
  if (descriptionEl) {
    descriptionEl.setAttribute("content", description);
  } else {
    upsertMeta("name", "description", description);
  }

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", canonicalUrl);

  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:type", "website");
  upsertMeta("property", "og:url", canonicalUrl);
  upsertMeta("name", "twitter:card", "summary");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
}

function applyTranslations(lang) {
  const currentPath = getCurrentPath();
  const isDocsPage = window.location.pathname.includes("/docs/");
  const supportsPageTranslation = Boolean(pageMetaKeys[currentPath]) || isDocsPage;
  const effectiveLang = supportsPageTranslation ? lang : "zh";

  currentLang = effectiveLang;
  window.currentLang = effectiveLang;
  document.documentElement.lang = effectiveLang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[effectiveLang]?.[key] !== undefined) {
      el.textContent = translations[effectiveLang][key];
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAriaLabel, effectiveLang));
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.setAttribute("title", t(el.dataset.i18nTitle, effectiveLang));
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder, effectiveLang));
  });

  const langButton = document.getElementById("lang-toggle");
  if (langButton) langButton.hidden = !supportsPageTranslation;

  syncSeoMeta();
  renderDynamicContent();
  updateCurrentNavState();
  document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: effectiveLang } }));
}

function createEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

function parseEntryDate(dateValue) {
  const raw = typeof dateValue === "object" ? dateValue?.zh || dateValue?.en || "" : String(dateValue || "");
  const matched = raw.match(/^(\d{4})[./-](\d{1,2})[./-](\d{1,2})$/);

  if (!matched) {
    return null;
  }

  const year = Number(matched[1]);
  const month = Number(matched[2]);
  const day = Number(matched[3]);
  const parsed = new Date(year, month - 1, day);

  if (
    Number.isNaN(parsed.getTime()) ||
    parsed.getFullYear() !== year ||
    parsed.getMonth() !== month - 1 ||
    parsed.getDate() !== day
  ) {
    return null;
  }

  return parsed;
}

function getNearestPlannedEntry(entries) {
  const today = new Date();
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const plannedEntries = entries.filter((item) => item.status === "planned");
  let nearest = null;
  let nearestDate = null;
  let minDiff = Number.POSITIVE_INFINITY;

  plannedEntries.forEach((entry) => {
    const entryDate = parseEntryDate(entry.date);
    if (!entryDate) {
      return;
    }

    const diff = Math.abs(entryDate.getTime() - todayMidnight.getTime());
    const shouldReplace =
      diff < minDiff ||
      (diff === minDiff && nearestDate && nearestDate < todayMidnight && entryDate >= todayMidnight);

    if (shouldReplace || !nearest) {
      nearest = entry;
      nearestDate = entryDate;
      minDiff = diff;
    }
  });

  return nearest || plannedEntries[0] || null;
}

function getCalendarEntries() {
  return Array.isArray(window.calendarEntries)
    ? [...window.calendarEntries].sort((left, right) => Number(left.order || 0) - Number(right.order || 0))
    : [];
}

function getCategoryLabel(category) {
  return t(`cal-category-${category}`);
}

function buildMonthMatrix(monthKey, entries) {
  const [year, month] = monthKey.split("-").map(Number);
  const firstDay = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const cells = [];
  const entryMap = new Map();

  entries.forEach((entry) => {
    const day = Number(entry.date.slice(-2));
    if (!entryMap.has(day)) {
      entryMap.set(day, []);
    }
    entryMap.get(day).push(entry);
  });

  for (let index = 0; index < firstDay.getDay(); index += 1) {
    cells.push({ isPadding: true });
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push({
      isPadding: false,
      day,
      entries: entryMap.get(day) || [],
    });
  }

  while (cells.length % 7 !== 0) {
    cells.push({ isPadding: true });
  }

  return cells;
}

function renderCalendarPreviewCard(entry) {
  const card = createEl("article", "card calendar-preview-card");
  const top = createEl("div", "calendar-preview-top");
  const time = createEl("span", "meta-badge", getLocalizedValue(entry.time));
  const status = createEl("span", `calendar-status status-${entry.status}`, t(`cal-status-${entry.status === "in-progress" ? "doing" : entry.status}`));
  const title = createEl("h3", "", getLocalizedValue(entry.title));
  const meta = createEl("p", "calendar-preview-meta", `${t("cal-label-category")} · ${getCategoryLabel(entry.category)}`);

  top.append(time, status);
  card.append(top, title, meta);
  return card;
}

function renderCalendarStats(entries) {
  const counts = {
    planned: entries.filter((entry) => entry.status === "planned").length,
    "in-progress": entries.filter((entry) => entry.status === "in-progress").length,
    done: entries.filter((entry) => entry.status === "done").length,
  };

  document.querySelectorAll(".calendar-stat[data-stat]").forEach((item) => {
    const value = item.querySelector("strong");
    if (value) {
      value.textContent = String(counts[item.dataset.stat] || 0);
    }
  });
}

function renderCalendarPlanCard(entry) {
  const card = createEl("article", "card calendar-plan-card");
  const top = createEl("div", "calendar-plan-top");
  const time = createEl("span", "meta-badge", getLocalizedValue(entry.time));
  const status = createEl("span", `calendar-status status-${entry.status}`, t(`cal-status-${entry.status === "in-progress" ? "doing" : entry.status}`));
  const title = createEl("h3", "", getLocalizedValue(entry.title));
  const summary = createEl("p", "", getLocalizedValue(entry.summary));
  const meta = createEl("div", "calendar-plan-meta");

  meta.append(
    createEl("span", "", `${t("cal-label-category")} · ${getCategoryLabel(entry.category)}`),
    createEl("span", "", `${t("cal-label-time")} · ${getLocalizedValue(entry.time)}`)
  );

  top.append(time, status);
  card.append(top, title, summary, meta);
  return card;
}

function renderCalendar() {
  const entries = getCalendarEntries();
  const homeList = document.getElementById("home-calendar-list");
  const planList = document.getElementById("calendar-plan-list");

  if (homeList) {
    homeList.innerHTML = "";
    const limited = entries.slice(0, Number(homeList.dataset.limit || 4));

    if (!limited.length) {
      homeList.appendChild(createEl("article", "card calendar-preview-empty", t("cal-upcoming-empty")));
    } else {
      limited.forEach((entry) => {
        homeList.appendChild(renderCalendarPreviewCard(entry));
      });
    }
  }

  if (planList) {
    planList.innerHTML = "";

    if (!entries.length) {
      planList.appendChild(createEl("article", "card calendar-preview-empty", t("cal-empty")));
    } else {
      entries.forEach((entry) => {
        planList.appendChild(renderCalendarPlanCard(entry));
      });
    }
  }

  renderCalendarStats(entries);
}

function renderProjectCard(project, mode = "home") {
  const article = createEl("article", "card");
  const title = createEl("h3", "", getLocalizedValue(project.title));
  const meta = createEl("p", "project-meta");
  const desc = createEl("p", "", getLocalizedValue(mode === "home" ? project.description : project.detail || project.description));
  const list = createEl("ul");

  article.id = project.id || "";
  [project.period, project.context]
    .map((value) => getLocalizedValue(value))
    .filter(Boolean)
    .forEach((value) => meta.appendChild(createEl("span", "", value)));

  (project.tags || []).forEach((tag) => {
    list.appendChild(createEl("li", "", tag));
  });

  article.append(title, meta, desc, list);

  if (Array.isArray(project.links) && project.links.length) {
    const actions = createEl("div", "article-actions");
    project.links.forEach((link) => {
      const a = createEl("a", "btn btn-ghost", getLocalizedValue(link.label));
      a.href = link.href;
      if (link.newTab) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      actions.appendChild(a);
    });
    article.appendChild(actions);
  }

  return article;
}

function renderProjects() {
  const projects = Array.isArray(window.projectEntries) ? window.projectEntries : [];
  const homeList = document.getElementById("home-project-list");
  const fullList = document.getElementById("project-list");

  if (homeList) {
    homeList.innerHTML = "";
    projects.filter((item) => item.featured).slice(0, Number(homeList.dataset.limit || 3)).forEach((project) => {
      homeList.appendChild(renderProjectCard(project, "home"));
    });
  }

  if (fullList) {
    fullList.innerHTML = "";
    projects.forEach((project) => {
      fullList.appendChild(renderProjectCard(project, "full"));
    });
  }
}

function renderArticleCard(article) {
  const card = createEl("article", "card article-card");
  const headline = createEl("div", "article-headline");
  const articleType = String(article.type || "").toLowerCase();
  const isPdf = articleType === "pdf";
  const isHtml = articleType === "html";
  const title = createEl("h3", "", getLocalizedValue(article.homeTitle || article.title));
  const badge = createEl("span", "meta-badge", t(isPdf ? "meta-type-pdf" : isHtml ? "meta-type-html" : "meta-type-file"));
  const desc = createEl("p", "", getLocalizedValue(article.listDescription || article.description));
  const meta = createEl("div", "article-meta");
  const actions = createEl("div", "article-actions");
  const open = createEl("a", "btn btn-primary", t(isPdf ? "article-open-pdf" : isHtml ? "article-open-html" : "article-open-file"));

  headline.append(title, badge);
  meta.append(createEl("span", "", t("meta-published-label")), createEl("span", "", article.publishedAt));
  open.href = article.href;
  if (isPdf) {
    open.target = "_blank";
    open.rel = "noopener noreferrer";
  }
  actions.appendChild(open);

  if (article.downloadable) {
    const download = createEl("a", "btn btn-ghost", t("meta-download"));
    download.href = article.href;
    download.download = "";
    actions.appendChild(download);
  }

  card.append(headline, desc, meta, actions);
  return card;
}

function renderArticles() {
  const articles = Array.isArray(window.articleEntries) ? window.articleEntries : [];
  const homeList = document.getElementById("home-article-list");
  const readingList = document.getElementById("reading-list");
  const writingList = document.getElementById("writing-list");

  if (homeList) {
    homeList.innerHTML = "";
    articles.filter((item) => item.featured).slice(0, Number(homeList.dataset.limit || 2)).forEach((article) => {
      homeList.appendChild(renderArticleCard(article));
    });
  }

  if (readingList) {
    readingList.innerHTML = "";
    articles.filter((article) => article.category === "reading").forEach((article) => {
      readingList.appendChild(renderArticleCard(article));
    });
  }

  if (writingList) {
    writingList.innerHTML = "";
    articles.filter((article) => article.category !== "reading").forEach((article) => {
      writingList.appendChild(renderArticleCard(article));
    });
  }

}

function renderCourseworkCard(course) {
  const card = createEl("article", "card article-card");
  const headline = createEl("div", "article-headline");
  const title = createEl("h3", "", getLocalizedValue(course.title));
  const badge = createEl("span", "meta-badge");
  const count = (course.entries || []).length;

  badge.textContent = currentLang === "zh" ? `${count} ${t("cwk-file-count-unit")}` : `${count} ${t("cwk-file-count-unit")}`;

  const desc = createEl("p", "", getLocalizedValue(course.description));
  const actions = createEl("div", "article-actions");
  const open = createEl("a", "btn btn-primary", t("cwk-open-course-directory"));

  open.href = `docs/coursework/index.html?course=${encodeURIComponent(course.id)}`;

  headline.append(title, badge);
  actions.appendChild(open);
  card.append(headline, desc, actions);

  return card;
}

function renderCoursework() {
  const courses = Array.isArray(window.courseworkCourses) ? window.courseworkCourses : [];
  const homeList = document.getElementById("home-coursework-list");
  const pageList = document.getElementById("coursework-course-cards");

  if (homeList) {
    homeList.innerHTML = "";
    courses.slice(0, Number(homeList.dataset.limit || 3)).forEach((course) => {
      homeList.appendChild(renderCourseworkCard(course));
    });
  }

  if (pageList) {
    pageList.innerHTML = "";
    courses.forEach((course) => {
      pageList.appendChild(renderCourseworkCard(course));
    });
  }
}

function renderGaokaoHomeCard(entry) {
  const card = createEl("article", "card article-card");
  const headline = createEl("div", "article-headline");
  const title = createEl("h3", "", getLocalizedValue(entry.title));
  const badge = createEl("span", "meta-badge", t("meta-type-pdf"));
  const region = getLocalizedValue(entry.region) || t("gk-region-uncategorized");
  const difficulty = typeof entry.difficulty === "number" ? entry.difficulty.toFixed(1) : t("gk-difficulty-unrated");
  const desc = createEl("p", "", `${entry.year} · ${region} · ${t("gk-difficulty-label")} ${difficulty}`);
  const actions = createEl("div", "article-actions");
  const open = createEl("a", "btn btn-primary", entry.file ? t("article-open-pdf") : t("idx-gaokao-a-link"));

  if (entry.file) {
    open.href = `docs/gaokao-math/${entry.file}`;
    open.target = "_blank";
    open.rel = "noopener noreferrer";
  } else {
    open.href = "gaokao.html";
  }

  headline.append(title, badge);
  actions.appendChild(open);
  card.append(headline, desc, actions);
  return card;
}

function renderGaokaoHome() {
  const entries = Array.isArray(window.gaokaoEntries)
    ? [...window.gaokaoEntries].sort((a, b) => Number(b.year) - Number(a.year))
    : [];
  const homeList = document.getElementById("home-gaokao-list");

  if (!homeList) {
    return;
  }

  homeList.innerHTML = "";

  if (!entries.length) {
    const card = createEl("article", "card article-card");
    const headline = createEl("div", "article-headline");
    headline.append(createEl("h3", "", t("idx-gaokao-a-title")), createEl("span", "meta-badge", t("meta-type-pdf")));
    card.append(headline, createEl("p", "", t("gk-file-pending")));
    homeList.appendChild(card);
    return;
  }

  entries.slice(0, Number(homeList.dataset.limit || 2)).forEach((entry) => {
    homeList.appendChild(renderGaokaoHomeCard(entry));
  });
}

function renderRunningCard(race) {
  const card = createEl("article", "card race-card");
  const top = createEl("div", "race-card-top");
  const titleWrap = createEl("div");
  const tag = createEl("p", "race-tag", getLocalizedValue(race.type));
  const title = createEl("h3", "", getLocalizedValue(race.title));
  const result = createEl("span", "race-result", getLocalizedValue(race.result));
  const meta = createEl("dl", "race-meta-grid");
  const rows = [
    ["idx-running-date-label", getLocalizedValue(race.date)],
    ["idx-running-distance-label", getLocalizedValue(race.distanceText)],
    ["idx-running-location-label", getLocalizedValue(race.location)],
    ["idx-running-note-label", getLocalizedValue(race.note)],
  ];

  titleWrap.append(tag, title);
  top.append(titleWrap, result);

  rows.forEach(([labelKey, value]) => {
    const item = createEl("div");
    item.append(createEl("dt", "", t(labelKey)), createEl("dd", "", value));
    meta.appendChild(item);
  });

  card.append(top, meta);
  return card;
}

function formatRunningDistance(distance) {
  return Number(distance.toFixed(4)).toString();
}

function renderRunningStats() {
  const entries = Array.isArray(window.runningEntries) ? window.runningEntries : [];
  const finished = entries.filter((item) => String(item.status || "").toLowerCase() === "finished");
  const longest = finished.reduce((max, item) => Math.max(max, Number(item.distanceKm) || 0), 0);
  const totalDistance = entries.reduce((sum, item) => sum + (Number(item.distanceKm) || 0), 0);
  const nextGoal = getNearestPlannedEntry(entries);
  const statItems = document.querySelectorAll(".running-overview:not(.english-test-overview) .running-stat[data-stat]");

  statItems.forEach((item) => {
    const label = item.querySelector("span");
    const value = item.querySelector("strong");
    const stat = item.dataset.stat;

    if (stat === "finished") {
      label.textContent = t("running-stat-finished");
      value.textContent = currentLang === "zh" ? `${finished.length}场` : String(finished.length);
    }

    if (stat === "longest") {
      label.textContent = t("running-stat-longest");
      value.textContent = longest ? `${formatRunningDistance(longest)}km` : t("running-no-goal");
    }

    if (stat === "total") {
      label.textContent = t("running-stat-total");
      value.textContent = totalDistance ? `${formatRunningDistance(totalDistance)}km` : t("running-no-goal");
    }

    if (stat === "next") {
      label.textContent = t("running-stat-next");
      value.textContent = nextGoal ? getLocalizedValue(nextGoal.title) : t("running-no-goal");
    }
  });
}

function renderRunning() {
  const entries = Array.isArray(window.runningEntries) ? window.runningEntries : [];
  const homeList = document.getElementById("home-running-list");
  const fullList = document.getElementById("running-list");

  if (homeList) {
    homeList.innerHTML = "";
    entries.slice(0, Number(homeList.dataset.limit || 2)).forEach((race) => {
      homeList.appendChild(renderRunningCard(race));
    });
  }

  if (fullList) {
    fullList.innerHTML = "";
    entries.forEach((race) => {
      fullList.appendChild(renderRunningCard(race));
    });
  }

  renderRunningStats();
}

function renderEnglishTestCard(test) {
  const card = createEl("article", "card race-card");
  const top = createEl("div", "race-card-top");
  const titleWrap = createEl("div");
  const tag = createEl("p", "race-tag", getLocalizedValue(test.type));
  const title = createEl("h3", "", getLocalizedValue(test.title));
  const result = createEl("span", "race-result", getLocalizedValue(test.scoreText));
  const meta = createEl("dl", "race-meta-grid");
  const rows = [
    ["idx-engtest-date-label", getLocalizedValue(test.date)],
    ["idx-engtest-location-label", getLocalizedValue(test.location) || t("running-no-goal")],
    ["idx-engtest-score-label", getLocalizedValue(test.scoreText)],
    ["idx-engtest-note-label", getLocalizedValue(test.note)],
  ];

  titleWrap.append(tag, title);
  top.append(titleWrap, result);

  rows.forEach(([labelKey, value]) => {
    const item = createEl("div");
    item.append(createEl("dt", "", t(labelKey)), createEl("dd", "", value));
    meta.appendChild(item);
  });

  card.append(top, meta);
  return card;
}

function renderEnglishTestStats() {
  const entries = Array.isArray(window.englishTestEntries) ? window.englishTestEntries : [];
  const finished = entries.filter((item) => item.status === "finished");
  const nextGoal = entries.find((item) => item.status === "planned");
  const statItems = document.querySelectorAll(".english-test-overview .running-stat[data-stat]");

  statItems.forEach((item) => {
    const label = item.querySelector("span");
    const value = item.querySelector("strong");
    const stat = item.dataset.stat;

    if (stat === "finished") {
      label.textContent = t("engtest-stat-finished");
      value.textContent = currentLang === "zh" ? `${finished.length}次` : String(finished.length);
    }

    if (stat === "next") {
      label.textContent = t("engtest-stat-next");
      value.textContent = nextGoal ? getLocalizedValue(nextGoal.title) : t("running-no-goal");
    }
  });
}

function renderEnglishTests() {
  const entries = Array.isArray(window.englishTestEntries) ? window.englishTestEntries : [];
  const homeList = document.getElementById("home-english-test-list");
  const fullList = document.getElementById("english-test-list");

  if (homeList) {
    homeList.innerHTML = "";
    entries.slice(0, Number(homeList.dataset.limit || 2)).forEach((test) => {
      homeList.appendChild(renderEnglishTestCard(test));
    });
  }

  if (fullList) {
    fullList.innerHTML = "";
    entries.forEach((test) => {
      fullList.appendChild(renderEnglishTestCard(test));
    });
  }

  renderEnglishTestStats();
}

function renderDynamicContent() {
  renderProjects();
  renderArticles();
  renderCoursework();
  renderGaokaoHome();
  renderRunning();
  renderEnglishTests();
  renderCalendar();
  initSiteSearch();
}

function initSiteSearch() {
  const input = document.getElementById("site-search-input");
  const results = document.getElementById("site-search-results");
  const count = document.getElementById("site-search-count");
  if (!input || !results || input.dataset.ready) return;

  const staticItems = [
    ["研究", "research.html", "研究兴趣、Flow Matching、形式化验证与定量建模"],
    ["Now", "now.html", "当前正在投入的事项"],
    ["课程作业", "coursework.html", "课程成果与学习档案"],
    ["高考解答", "gaokao.html", "高考数学题目解答"],
    ["跑步记录", "running.html", "赛事结果和训练目标"],
    ["英语测试记录", "english-tests.html", "英语考试与成绩记录"],
  ].map(([title, href, description]) => ({ title, href, description, kind: "栏目" }));
  const entryItems = [
    ...(window.projectEntries || []).map((entry) => ({ title: getLocalizedValue(entry.title), href: "projects.html", description: getLocalizedValue(entry.description), kind: "项目" })),
    ...(window.articleEntries || []).map((entry) => ({ title: getLocalizedValue(entry.title), href: entry.href, description: getLocalizedValue(entry.listDescription || entry.description), kind: entry.category === "reading" ? "阅读" : "创作" })),
  ];
  const items = [...staticItems, ...entryItems];
  const render = () => {
    const query = input.value.trim().toLocaleLowerCase();
    const matched = query ? items.filter((item) => `${item.title} ${item.description} ${item.kind}`.toLocaleLowerCase().includes(query)) : [];
    results.innerHTML = "";
    count.textContent = query ? String(matched.length) : "";
    if (!query || !matched.length) {
      results.appendChild(createEl("p", "hero-copy", t(query ? "search-no-results" : "search-empty")));
      return;
    }
    matched.forEach((item) => {
      const card = createEl("article", "card article-card");
      const headline = createEl("div", "article-headline");
      headline.append(createEl("h3", "", item.title), createEl("span", "meta-badge", item.kind));
      const open = createEl("a", "btn btn-primary", t("search-open"));
      open.href = item.href;
      card.append(headline, createEl("p", "", item.description), createEl("div", "article-actions"));
      card.lastElementChild.appendChild(open);
      results.appendChild(card);
    });
  };
  input.dataset.ready = "true";
  input.addEventListener("input", render);
  render();
}

function updateCurrentNavState() {
  const pathname = window.location.pathname;
  let currentPath = getCurrentPath();
  if (pathname.includes("/articles/")) currentPath = "articles.html";
  if (pathname.includes("/docs/coursework/")) currentPath = "coursework.html";
  if (pathname.includes("/docs/gaokao-math/")) currentPath = "gaokao.html";

  document.querySelectorAll(".nav a[href]").forEach((link) => {
    const targetPath = link.getAttribute("href").split("/").pop();
    if (targetPath === currentPath) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  const moreButton = document.querySelector(".more-toggle");
  const currentMoreLink = document.querySelector('.more-menu a[aria-current="page"]');

  if (moreButton) {
    moreButton.classList.toggle("has-current", Boolean(currentMoreLink));
    moreButton.textContent = currentMoreLink
      ? `${t("nav-more", currentLang)} · ${currentMoreLink.textContent.trim()}`
      : t("nav-more", currentLang);
  }
}

function closeMenus() {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const moreButton = document.querySelector(".more-toggle");
  const moreMenu = document.querySelector(".more-menu");

  nav?.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  moreMenu?.classList.remove("open");
  moreButton?.setAttribute("aria-expanded", "false");
}

function initNavigation() {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const moreButton = document.querySelector(".more-toggle");
  const moreMenu = document.querySelector(".more-menu");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open", !expanded);
    });
  }

  if (moreButton && moreMenu) {
    moreButton.addEventListener("click", (event) => {
      event.stopPropagation();
      const expanded = moreButton.getAttribute("aria-expanded") === "true";
      moreButton.setAttribute("aria-expanded", String(!expanded));
      moreMenu.classList.toggle("open", !expanded);
    });
  }

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenus);
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav") && !event.target.closest(".menu-toggle")) {
      closeMenus();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenus();
    }
  });
}

function initLanguageToggle() {
  const langBtn = document.getElementById("lang-toggle");
  if (!langBtn) return;

  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "zh" ? "en" : "zh";
    localStorage.setItem("lang", currentLang);
    applyTranslations(currentLang);
  });
}

function initFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}

initFooterYear();
initNavigation();
initLanguageToggle();
updateCurrentNavState();
applyTranslations(currentLang);
