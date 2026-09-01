/* ============================================================
   SITE RENDERING
   ------------------------------------------------------------
   You should rarely need to edit this file.
   Content lives in publications.js and news.js.
   The nav and footer are defined once here, at the top.
   ============================================================ */

/* ---- Nav: edit once, applies to every page ----
   TO HIDE THE LAB PAGE: comment out the lab.html line below, and remove
   the "The Lab" link near the end of the Research Directions section in
   index.html. Nothing else depends on it. */
const NAV = [
  { href: "index.html",        label: "Home" },
  { href: "research.html",     label: "Research" },
  /*{ href: "lab.html",          label: "Lab" },*/
  { href: "publications.html", label: "Publications" },
  { href: "teaching.html",     label: "Teaching" },
  { href: "service.html",      label: "Service" },
];

const FOOTER = `Sikha Pentyala &middot;
  <a href="mailto:sikha@uw.edu">sikha@uw.edu</a> &middot;
  University of Washington Tacoma`;

const NEWS_ON_HOME = 8;   // how many news items the home page shows


/* ============================================================
   Helpers
   ============================================================ */

/* Bolds your name. The * you put after a mentored student's name in
   publications.js is kept in the data but not shown on the site. */
function formatAuthors(s) {
  return s
    .replace(/\*/g, "")
    .replace(/S\. Pentyala/g, "<strong>S. Pentyala</strong>");
}

/* Label shown for each publication type. */
const KIND_LABEL = {
  conference: "Proceedings",
  journal:    "Journal",
  workshop:   "Workshop",
  preprint:   "Preprint",
  patent:     "Patent",
};

const areaOf = key => AREAS.find(a => a.key === key) || { label: key, color: "grey" };

/* One publication as a list item.
   showAreas = false drops the research-area chips (used on the research
   page, where the surrounding section already names the area). */
function pubItem(p, showAreas = true) {
  const title = p.url
    ? `<a href="${p.url}" target="_blank" rel="noopener">${p.title}</a>`
    : p.title;
  const kind = KIND_LABEL[p.kind]
    ? `<span class="pub-kind kind-${p.kind}">${KIND_LABEL[p.kind]}</span>` : "";
  const note = p.note ? `<span class="pub-note">${p.note}</span>` : "";

  const areas = (showAreas && (p.areas || []).length)
    ? `<div class="pub-areas">` + p.areas.map(k => {
        const a = areaOf(k);
        return `<span class="pub-area tab-${a.color || "grey"}">${a.label}</span>`;
      }).join("") + `</div>`
    : "";

  return `<li class="pub" data-areas="${(p.areas || []).join(" ")}">
      <div class="pub-title">${title}</div>
      <div class="pub-authors">${formatAuthors(p.authors)}</div>
      <div class="pub-meta"><span class="pub-venue">${p.venue} ${p.year}</span>${kind}${note}</div>
      ${areas}
    </li>`;
}

const pubUL = (items, showAreas = true) =>
  `<ul class="pub-list">${items.map(p => pubItem(p, showAreas)).join("")}</ul>`;

const byYear = (a, b) => b.year - a.year;


/* ============================================================
   Renderers — each looks for its container and fills it in.
   ============================================================ */

function renderNav() {
  const el = document.getElementById("nav");
  if (!el) return;
  let page = location.pathname.split("/").pop();
  if (!page) page = "index.html";
  const links = NAV.map(n =>
    `<li><a href="${n.href}"${n.href === page ? ' class="active"' : ""}>${n.label}</a></li>`
  ).join("");
  el.innerHTML = `<div class="nav-inner">
      <a class="nav-brand" href="index.html">Sikha Pentyala</a>
      <ul class="nav-links">${links}</ul>
    </div>`;
}

function renderFooter() {
  const el = document.getElementById("footer");
  if (el) el.innerHTML = FOOTER;
}

/* Home page: the papers flagged selected: true */
function renderSelectedPubs() {
  const el = document.getElementById("selected-pubs");
  if (el) el.innerHTML = pubUL(PUBLICATIONS.filter(p => p.selected).sort(byYear));
}

/* Publications page: one chronological list, plus filter tabs. */
function renderAllPubs() {
  const el = document.getElementById("all-pubs");
  if (!el) return;

  const tabs = [{ key: "all", label: "All", color: "grey" }, ...AREAS]
    .map((a, i) => `<button class="tab tab-${a.color || "grey"}${i === 0 ? " active" : ""}" data-area="${a.key}">${a.label}</button>`)
    .join("");

  el.innerHTML = `<div class="tabs">${tabs}</div>` +
                 pubUL([...PUBLICATIONS].sort(byYear));

  el.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
      el.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const want = btn.dataset.area;
      el.querySelectorAll(".pub").forEach(li => {
        const has = li.dataset.areas.split(" ").includes(want);
        li.style.display = (want === "all" || has) ? "" : "none";
      });
    });
  });
}

/* Research page: hand-picked papers for one research direction.
   A paper appears here when you add the direction's key to its
   `featured` list in publications.js. Order follows that file.
   Used via <div class="theme-pubs" data-featured="sdg"></div> */
function renderThemePubs() {
  document.querySelectorAll(".theme-pubs").forEach(el => {
    const key = el.dataset.featured;
    const items = PUBLICATIONS.filter(p => (p.featured || []).includes(key));
    if (!items.length) { el.innerHTML = ""; return; }
    el.innerHTML = `<div class="theme-pubs-label">Selected papers</div>` +
                   pubUL(items, false);
  });
}

function renderNews() {
  const el = document.getElementById("news");
  if (!el) return;
  el.innerHTML = `<ul class="news-list">${NEWS.slice(0, NEWS_ON_HOME).map(n =>
    `<li><span class="news-date">${n.date}</span><span class="news-text">${n.text}</span></li>`
  ).join("")}</ul>`;
}


document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderFooter();
  renderNews();
  renderSelectedPubs();
  renderAllPubs();
  renderThemePubs();
});
