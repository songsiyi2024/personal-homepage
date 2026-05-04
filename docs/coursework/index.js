function getCourses() {
  return Array.isArray(window.courseworkCourses) ? window.courseworkCourses : [];
}

function getCourseworkLang() {
  return window.currentLang || localStorage.getItem("lang") || "zh";
}

function getCourseworkText(key) {
  const lang = getCourseworkLang();
  if (typeof window.t === "function") {
    return window.t(key, lang);
  }

  const fallback = {
    zh: {
      "cwk-doc-invalid-title": "未指定课程",
      "cwk-doc-invalid-desc": "请从课程作业页面选择课程卡片后进入目录。",
      "cwk-doc-file-directory-suffix": "文件目录",
      "cwk-doc-detail-desc-default": "目录清单",
    },
    en: {
      "cwk-doc-invalid-title": "Course Not Specified",
      "cwk-doc-invalid-desc": "Please select a course card from the coursework page, then open this directory.",
      "cwk-doc-file-directory-suffix": "File Directory",
      "cwk-doc-detail-desc-default": "Directory",
    },
  };

  return fallback[lang]?.[key] || fallback.zh[key] || key;
}

function getCourseworkLocalizedValue(value) {
  const lang = getCourseworkLang();
  if (value && typeof value === "object") {
    return value[lang] || value.zh || value.en || "";
  }
  return value || "";
}

function getCourseFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get("course") || "";
}

function renderCourseEntries(course) {
  const list = document.getElementById("coursework-doc-list");
  const detailTitle = document.getElementById("coursework-detail-title");
  const detailDesc = document.getElementById("coursework-detail-desc");

  if (!list || !detailTitle || !detailDesc) {
    return;
  }

  detailTitle.textContent = `${getCourseworkLocalizedValue(course.title)} ${getCourseworkText("cwk-doc-file-directory-suffix")}`;
  detailDesc.textContent = getCourseworkLocalizedValue(course.description) || getCourseworkText("cwk-doc-detail-desc-default");
  list.innerHTML = "";

  (course.entries || []).forEach((item) => {
    const li = document.createElement("li");
    // Keep original file names unchanged in UI.
    li.innerHTML = `<a href="${item.file}" target="_blank" rel="noopener noreferrer">${item.file}</a>`;
    list.appendChild(li);
  });
}

function renderInvalidState() {
  const list = document.getElementById("coursework-doc-list");
  const detailTitle = document.getElementById("coursework-detail-title");
  const detailDesc = document.getElementById("coursework-detail-desc");

  if (!list || !detailTitle || !detailDesc) {
    return;
  }

  detailTitle.textContent = getCourseworkText("cwk-doc-invalid-title");
  detailDesc.textContent = getCourseworkText("cwk-doc-invalid-desc");
  list.innerHTML = "";
}

function initCourseworkDocs() {
  const rerender = () => {
    const courses = getCourses();
    const courseId = getCourseFromQuery();
    const selected = courses.find((item) => item.id === courseId);

    if (!selected) {
      renderInvalidState();
      return;
    }

    renderCourseEntries(selected);
  };

  rerender();
  document.addEventListener("languagechange", rerender);
}

initCourseworkDocs();
