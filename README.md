# Personal Homepage

我的个人网站，用来整理和展示学习、研究、项目、写作与生活记录。

网站围绕数学建模、生物数学、数据分析、形式化验证与 AI 应用展开，也收录课程资料、跑步记录和阶段性计划。整个项目使用原生 HTML、CSS 和 JavaScript 构建，保持简单、轻量，并便于长期维护。

## Features

- 响应式页面，适配桌面端与移动端
- 中英文界面切换
- 项目、文章、研究和课程资料展示
- 站内搜索与数据驱动的内容渲染
- 无前端框架、无第三方运行时依赖

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Node.js（仅用于本地预览和仓库检查）

## Local Preview

```bash
git clone https://github.com/songsiyi2024/personal-homepage.git
cd personal-homepage
npm run dev
```

打开 <http://127.0.0.1:8000> 即可在本地查看网站。

## Project Structure

```text
.
├── index.html          # 首页
├── styles.css          # 全站样式
├── script.js           # 页面交互与内容渲染
├── data-*.js           # 网站内容数据
├── articles/           # 文章页面
├── projects/           # 项目页面
├── docs/               # 课程与项目资料
└── tools/              # 本地开发与检查脚本
```

更多维护说明见 [MAINTENANCE.md](MAINTENANCE.md)。
