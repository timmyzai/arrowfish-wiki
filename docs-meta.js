/**
 * Arrowfish Wiki — single source of truth for per-document metadata.
 * To bump a doc's date, edit ONE line below. Cards (index.html), topbar pill,
 * and hero "Updated:" line all read from here.
 *
 * Markup contract:
 *   - Doc page <body data-doc-id="qa">       → fills [data-meta="dateShort"|"dateFull"]
 *   - Index card <span data-card-date="qa">  → filled with that doc's dateShort
 *
 * Re-renders on every language switch (called from lang.js applyLang).
 */

const DOCS_META = {
  prd: {
    dateShort: { zh: '2026年4月',  en: 'Apr 2026' },
    dateFull:  { zh: '整理日期：2026年4月',  en: 'Compiled: Apr 2026' },
  },
  story: {
    dateShort: { zh: '2026年4月',  en: 'Apr 2026' },
    dateFull:  { zh: '整理日期：2026年4月',  en: 'Compiled: Apr 2026' },
  },
  dev: {
    dateShort: { zh: '2026年4月',  en: 'Apr 2026' },
    dateFull:  { zh: '更新日期：2026年4月24日', en: 'Updated: 2026-04-24' },
  },
  ops: {
    dateShort: { zh: '2026年5月',  en: 'May 2026' },
    dateFull:  { zh: '更新于：2026年5月',     en: 'Updated: May 2026' },
  },
  ba: {
    dateShort: { zh: '2026年5月',  en: 'May 2026' },
    dateFull:  { zh: '更新日期：2026年5月9日', en: 'Updated: 2026-05-09' },
  },
  qa: {
    dateShort: { zh: '2026年5月',  en: 'May 2026' },
    dateFull:  { zh: '更新日期：2026年5月9日', en: 'Updated: 2026-05-09' },
  },
};

function applyDocMeta(lang) {
  var L = (lang === 'en') ? 'en' : 'zh';

  // Doc page: fill all [data-meta] elements from this body's doc id
  var docId = document.body && document.body.dataset && document.body.dataset.docId;
  if (docId && DOCS_META[docId]) {
    var meta = DOCS_META[docId];
    document.querySelectorAll('[data-meta]').forEach(function(el) {
      var key = el.getAttribute('data-meta');
      if (meta[key]) el.textContent = meta[key][L] || meta[key].zh;
    });
  }

  // Index page: fill each card's date from its referenced doc id
  document.querySelectorAll('[data-card-date]').forEach(function(el) {
    var id = el.getAttribute('data-card-date');
    if (DOCS_META[id]) el.textContent = DOCS_META[id].dateShort[L] || DOCS_META[id].dateShort.zh;
  });
}
