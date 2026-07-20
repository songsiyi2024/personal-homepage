import { execFileSync } from "node:child_process";
import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const warnings = [];

async function findFiles(directory, extension) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findFiles(fullPath, extension)));
    } else if (entry.isFile() && entry.name.endsWith(extension)) {
      files.push(fullPath);
    }
  }

  return files;
}

function count(text, pattern) {
  return [...text.matchAll(pattern)].length;
}

async function pathExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

const htmlFiles = await findFiles(rootDir, ".html");
const jsFiles = [
  ...(await findFiles(rootDir, ".js")),
  ...(await findFiles(rootDir, ".mjs")),
];

for (const filePath of htmlFiles) {
  const relativePath = path.relative(rootDir, filePath);
  const html = await readFile(filePath, "utf8");
  const h1Count = count(html, /<h1\b/g);

  if (h1Count !== 1) errors.push(`${relativePath}: expected one h1, found ${h1Count}`);
  if (!html.includes("site-shell:header:start")) errors.push(`${relativePath}: shared header marker missing`);
  if (!html.includes("site-shell:footer:start")) errors.push(`${relativePath}: shared footer marker missing`);
  if (!/<title(?:\s[^>]*)?>.+<\/title>/s.test(html)) errors.push(`${relativePath}: title missing`);

  for (const match of html.matchAll(/(?:href|src)\s*=\s*["']([^"'#?]+)["']/g)) {
    const reference = match[1];
    if (/^(?:https?:|mailto:|tel:|data:|javascript:)/.test(reference)) continue;
    const target = path.resolve(path.dirname(filePath), reference);
    if (!(await pathExists(target))) warnings.push(`${relativePath}: missing local reference ${reference}`);
  }
}

for (const filePath of jsFiles) {
  try {
    execFileSync(process.execPath, ["--check", filePath], { stdio: "pipe" });
  } catch {
    errors.push(`${path.relative(rootDir, filePath)}: JavaScript syntax check failed`);
  }
}

const css = await readFile(path.join(rootDir, "styles.css"), "utf8");
if (count(css, /\{/g) !== count(css, /\}/g)) errors.push("styles.css: unbalanced braces");

if (warnings.length) {
  console.warn(`Warnings (${warnings.length}):`);
  warnings.forEach((warning) => console.warn(`- ${warning}`));
}

if (errors.length) {
  console.error(`Errors (${errors.length}):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log(`Validated ${htmlFiles.length} HTML files and ${jsFiles.length} JavaScript files.`);
}
