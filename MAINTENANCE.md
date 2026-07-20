# 个人主页维护说明

这个站点继续使用普通 HTML、CSS 和 JavaScript，不依赖框架或第三方构建服务。

## 常用操作

同步全站导航和页脚：

```powershell
npm.cmd run build
```

检查页面结构、本地引用和 JavaScript 语法：

```powershell
npm.cmd run check
```

发布前完整检查：

```powershell
npm.cmd run validate
```

## 内容放在哪里

- 项目：`data-projects.js`
- 文章：`data-articles.js`
- 近期计划：`data-calendar.js`
- 跑步记录：`data-running.js`
- 英语测试：`data-english-tests.js`
- 路跑和越野赛事：`data-race-calendar.js`
- 课程作业：`docs/coursework/entries.js`
- 高考数学资料：`docs/gaokao-math/entries.js`

## 全站结构

- 导航和页脚配置：`site.config.mjs`
- 导航和页脚同步：`tools/sync-shell.mjs`
- 全站样式：`styles.css`
- 翻译、交互和内容渲染：`script.js`

修改 `site.config.mjs` 后运行 `npm.cmd run build`，所有 HTML 页面会同步更新。页面中的
`site-shell` 标记之间属于自动生成区域，不应直接手工编辑。

## 页面约定

- 每个页面只保留一个 `h1`
- 页面内容放在 `main` 中
- 独立栏目优先复用现有卡片、列表、表格和状态样式
- 新增页面后运行 `npm.cmd run validate`
- 内容数据与页面排版分开维护
