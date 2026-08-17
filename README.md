# 宋思逸的个人主页

这是一个使用原生 HTML、CSS 和 JavaScript 构建的个人主页，用于集中展示个人介绍、项目、文章、研究与课程资料，也记录近期计划、跑步和英语测试等内容。

网站不依赖前端框架或第三方构建服务，可以直接部署到任意静态网站托管平台。页面支持中英文切换、站内搜索和响应式布局。

## 本地运行

请先安装 [Node.js](https://nodejs.org/)，然后在仓库根目录运行：

```bash
npm run dev
```

浏览器访问 <http://127.0.0.1:8000> 即可预览。项目没有第三方 npm 依赖，因此无需先运行 `npm install`。

## 常用命令

```bash
# 启动本地预览服务器
npm run dev

# 根据配置同步所有页面的导航和页脚
npm run build

# 检查页面结构、本地资源引用和 JavaScript 语法
npm run check

# 同步公共页面结构并执行完整检查
npm run validate
```

> `npm run build` 会改写所有 HTML 文件中 `site-shell` 标记之间的导航和页脚。请通过 `site.config.mjs` 修改这些公共区域，不要直接编辑自动生成的内容。

## 内容维护

主要内容采用数据与页面分离的方式维护：

| 内容 | 数据文件 |
| --- | --- |
| 项目 | `data-projects.js` |
| 文章 | `data-articles.js` |
| 随笔 | `data-notes.js` |
| 近期计划 | `data-calendar.js` |
| 跑步记录 | `data-running.js` |
| 英语测试记录 | `data-english-tests.js` |
| 路跑与越野赛事 | `data-race-calendar.js` |
| 课程作业 | `docs/coursework/entries.js` |
| 高考数学资料 | `docs/gaokao-math/entries.js` |

全站导航、页脚和品牌配置位于 `site.config.mjs`。更具体的编辑约定与新增随笔流程请参阅 [MAINTENANCE.md](MAINTENANCE.md)。

## 项目结构

```text
.
├── index.html              # 首页
├── *.html                  # 各内容栏目页面
├── styles.css              # 全站样式
├── script.js               # 翻译、交互、搜索与内容渲染
├── data-*.js               # 各栏目结构化数据
├── articles/               # 独立文章与相关资料
├── projects/               # 独立项目介绍页
├── docs/                   # 课程、项目和高考数学文档
├── site.config.mjs         # 公共导航与页脚配置
└── tools/                  # 本地服务器、页面同步和检查脚本
```

## 发布

发布前建议运行：

```bash
npm run validate
```

检查通过后，将仓库根目录作为静态站点目录部署即可。服务器应以 `index.html` 作为入口，并保留现有目录结构，以确保页面、脚本和文档链接正常工作。
