import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { siteConfig } from "../site.config.mjs";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const headerStart = "<!-- site-shell:header:start -->";
const headerEnd = "<!-- site-shell:header:end -->";
const footerStart = "<!-- site-shell:footer:start -->";
const footerEnd = "<!-- site-shell:footer:end -->";

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findHtmlFiles(fullPath)));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(fullPath);
    }
  }

  return files;
}

function getPrefix(filePath) {
  const relativeDirectory = path.relative(rootDir, path.dirname(filePath));
  if (!relativeDirectory) return "";
  return "../".repeat(relativeDirectory.split(path.sep).length);
}

function renderLink(item, prefix, className = "") {
  const classAttribute = className ? ` class="${className}"` : "";
  return `<a href="${prefix}${item.href}"${classAttribute} data-i18n="${item.key}">${item.label}</a>`;
}

function renderSearchLink(prefix) {
  const item = siteConfig.search;
  return `<a class="search-link" href="${prefix}${item.href}" aria-label="${item.label}" data-i18n-aria-label="${item.key}"><span aria-hidden="true"></span></a>`;
}

function renderHeader(prefix) {
  const primaryLinks = siteConfig.primaryNav
    .map((item) => `          ${renderLink(item, prefix)}`)
    .join("\n");
  const archiveLinks = siteConfig.archiveNav
    .map((item) => `            ${renderLink(item, prefix)}`)
    .join("\n");

  return `${headerStart}
    <header class="site-header">
      <a class="logo" href="${prefix}index.html" aria-label="返回首页" data-i18n-aria-label="${siteConfig.brand.homeAriaKey}">${siteConfig.brand.label}</a>
      <button class="menu-toggle" type="button" aria-label="打开菜单" aria-expanded="false" aria-controls="main-nav" data-i18n-aria-label="menu-aria">
        <span></span>
        <span></span>
      </button>
      <nav class="nav" id="main-nav" aria-label="核心导航" data-i18n-aria-label="nav-core-label">
        <div class="nav-primary">
${primaryLinks}
        </div>
        <div class="nav-secondary">
          <button class="more-toggle" type="button" aria-expanded="false" aria-controls="more-menu" data-i18n="nav-more">更多</button>
          <div class="more-menu" id="more-menu">
${archiveLinks}
          </div>
        </div>
        ${renderSearchLink(prefix)}
        ${renderLink(siteConfig.contact, prefix, "pill")}
        <button id="lang-toggle" class="lang-toggle" type="button" data-i18n="lang-btn" data-i18n-aria-label="lang-aria">EN</button>
      </nav>
    </header>
${headerEnd}`;
}

function renderFooter(prefix) {
  const footerLinks = siteConfig.footerNav
    .map((item) => `          ${renderLink(item, prefix)}`)
    .join("\n");

  return `${footerStart}
    <footer class="site-footer">
      <div class="footer-inner container">
        <div class="footer-brand-row">
          <a class="footer-brand" href="${prefix}index.html" aria-label="返回首页" data-i18n-aria-label="${siteConfig.brand.homeAriaKey}">${siteConfig.brand.label}</a>
          <nav class="footer-nav" aria-label="页脚导航" data-i18n-aria-label="nav-footer-label">
${footerLinks}
          </nav>
        </div>
        <p>© <span id="year"></span> <span data-i18n="global-footer">宋思逸。用心构建。</span></p>
      </div>
    </footer>
${footerEnd}`;
}

function replaceHeader(html, replacement) {
  const managedPattern = new RegExp(`${headerStart}[\\s\\S]*?${headerEnd}`);
  if (managedPattern.test(html)) return html.replace(managedPattern, replacement);
  return html.replace(/    <header class="site-header(?: container)?">[\s\S]*?    <\/header>/, replacement);
}

function replaceFooter(html, replacement) {
  const managedPattern = new RegExp(`${footerStart}[\\s\\S]*?${footerEnd}`);
  if (managedPattern.test(html)) return html.replace(managedPattern, replacement);

  const footerPattern = /    <footer class="site-footer(?: container)?">[\s\S]*?    <\/footer>/;
  if (footerPattern.test(html)) return html.replace(footerPattern, replacement);

  const scriptIndex = html.search(/    <script\b/);
  if (scriptIndex >= 0) {
    return `${html.slice(0, scriptIndex)}${replacement}\n\n${html.slice(scriptIndex)}`;
  }

  return html.replace("  </body>", `${replacement}\n  </body>`);
}

const htmlFiles = await findHtmlFiles(rootDir);

for (const filePath of htmlFiles) {
  const prefix = getPrefix(filePath);
  const original = await readFile(filePath, "utf8");
  const withoutLegacyDecoration = original.replace(
    /\s*<div class="bg-orb orb-1" aria-hidden="true"><\/div>\s*<div class="bg-orb orb-2" aria-hidden="true"><\/div>/,
    "",
  );
  const withHeader = replaceHeader(withoutLegacyDecoration, renderHeader(prefix));
  const next = replaceFooter(withHeader, renderFooter(prefix));
  await writeFile(filePath, next, "utf8");
}

console.log(`Synchronized shared shell across ${htmlFiles.length} HTML files.`);
