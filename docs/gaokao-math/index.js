function getGaokaoLang() {
  return window.currentLang || localStorage.getItem("lang") || "zh";
}

function getGaokaoText(key) {
  const lang = getGaokaoLang();
  if (typeof window.t === "function") {
    return window.t(key, lang);
  }

  const fallback = {
    zh: {
      "gk-filter-all": "全部",
      "gk-difficulty-label": "难度系数",
      "gk-difficulty-unrated": "待评估",
      "gk-region-uncategorized": "未分类",
      "gk-file-pending": "文件待上传",
    },
    en: {
      "gk-filter-all": "All",
      "gk-difficulty-label": "Difficulty",
      "gk-difficulty-unrated": "Unrated",
      "gk-region-uncategorized": "Uncategorized",
      "gk-file-pending": "File pending upload",
    },
  };

  return fallback[lang]?.[key] || fallback.zh[key] || key;
}

function getGaokaoLocalizedValue(value) {
  const lang = getGaokaoLang();
  if (value && typeof value === "object") {
    return value[lang] || value.zh || value.en || "";
  }
  return value || "";
}

function getDifficultyText(item) {
  if (typeof item.difficulty === "number") {
    return item.difficulty.toFixed(1);
  }
  return getGaokaoText("gk-difficulty-unrated");
}

function getRegionKey(item) {
  if (item.regionKey) {
    return item.regionKey;
  }

  if (typeof item.region === "string" && item.region.trim()) {
    return item.region.trim();
  }

  if (item.region && typeof item.region === "object") {
    return item.region.zh || item.region.en || "uncategorized";
  }

  return "uncategorized";
}

function getRegionLabel(item) {
  const text = getGaokaoLocalizedValue(item.region);
  return text || getGaokaoText("gk-region-uncategorized");
}

function buildRegionOptions(entries) {
  const map = new Map();

  entries.forEach((item) => {
    const key = getRegionKey(item);
    if (!map.has(key)) {
      map.set(key, getRegionLabel(item));
    }
  });

  return [...map.entries()].map(([value, label]) => ({ value, label }));
}

function initGaokaoFilter(options = {}) {
  const listId = options.listId || "gaokao-doc-list";
  const yearFilterId = options.yearFilterId || "gaokao-year-filter";
  const regionFilterId = options.regionFilterId || "gaokao-region-filter";
  const filePrefix = options.filePrefix || "";

  const list = document.getElementById(listId);
  const yearSelect = document.getElementById(yearFilterId);
  const regionSelect = document.getElementById(regionFilterId);

  if (!list || !yearSelect || !regionSelect || !Array.isArray(window.gaokaoEntries)) {
    return;
  }

  const entries = [...window.gaokaoEntries].sort((a, b) => Number(b.year) - Number(a.year));

  function populateFilters(keepSelection) {
    const prevYear = keepSelection ? yearSelect.value : "all";
    const prevRegion = keepSelection ? regionSelect.value : "all";
    const years = [...new Set(entries.map((item) => item.year))].sort((a, b) => Number(b) - Number(a));
    const regions = buildRegionOptions(entries);

    yearSelect.innerHTML = "";
    regionSelect.innerHTML = "";

    const allYear = document.createElement("option");
    allYear.value = "all";
    allYear.textContent = getGaokaoText("gk-filter-all");
    yearSelect.appendChild(allYear);

    years.forEach((year) => {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);
    });

    const allRegion = document.createElement("option");
    allRegion.value = "all";
    allRegion.textContent = getGaokaoText("gk-filter-all");
    regionSelect.appendChild(allRegion);

    regions.forEach((region) => {
      const option = document.createElement("option");
      option.value = region.value;
      option.textContent = region.label;
      regionSelect.appendChild(option);
    });

    if (keepSelection) {
      yearSelect.value = years.includes(prevYear) ? prevYear : "all";
      regionSelect.value = regions.some((item) => item.value === prevRegion) ? prevRegion : "all";
    }
  }

  function renderList() {
    const selectedYear = yearSelect.value;
    const selectedRegion = regionSelect.value;

    const rows = entries.filter((item) => {
      const matchYear = selectedYear === "all" || item.year === selectedYear;
      const matchRegion = selectedRegion === "all" || getRegionKey(item) === selectedRegion;
      return matchYear && matchRegion;
    });

    list.innerHTML = "";

    rows.forEach((item) => {
      const li = document.createElement("li");
      const title = getGaokaoLocalizedValue(item.title);
      const region = getRegionLabel(item);
      const difficulty = getDifficultyText(item);
      const difficultyLabel = getGaokaoText("gk-difficulty-label");

      if (item.file) {
        const link = document.createElement("a");
        link.href = `${filePrefix}${item.file}`;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = item.file;
        li.appendChild(link);
        li.append(` · ${item.year} · ${region} · ${difficultyLabel} ${difficulty}`);
      } else {
        li.textContent = `${title} · ${item.year} · ${region} · ${difficultyLabel} ${difficulty} (${getGaokaoText("gk-file-pending")})`;
      }

      list.appendChild(li);
    });
  }

  populateFilters(false);
  renderList();

  const rerender = () => renderList();
  yearSelect.addEventListener("change", rerender);
  regionSelect.addEventListener("change", rerender);

  document.addEventListener("languagechange", () => {
    populateFilters(true);
    renderList();
  });
}

initGaokaoFilter();
initGaokaoFilter({
  listId: "gaokao-doc-list-main",
  yearFilterId: "gaokao-year-filter-main",
  regionFilterId: "gaokao-region-filter-main",
  filePrefix: "docs/gaokao-math/",
});
