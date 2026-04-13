/**
 * Arrowfish Wiki — i18n language switcher
 * Supports ZH (default) and EN. Persists choice to localStorage key 'aw_lang'.
 * Usage: add data-i18n="key" to any element. Call initLang() on DOMContentLoaded.
 */

const T = {
  zh: {
    /* ── Index page ── */
    'logo.tag':          'Internal',
    'hero.title':        '团队内部文档中心',
    'hero.sub':          '产品说明、质量保证手册、项目演进故事——所有核心文档集中在这里',
    'filter.all':        '全部',
    'filter.prd':        'PRD',
    'filter.qa':         'QA',
    'filter.story':      'Story',
    'section.docs':      '文档列表',
    'card.prd.title':    'Arrowfish VPN 业务说明文档',
    'card.prd.desc':     '产品功能全貌、用户体系、套餐与支付、VPN连接机制、营销与内容模块的完整业务逻辑说明。BA / PM 产品上手必读。',
    'card.prd.audience': '适合：BA · PM · 非技术成员',
    'card.story.title':  '从 Arrowfish 到 FFF — 产品演进故事',
    'card.story.desc':   '为什么我们决定重建一款全新应用？Arrowfish 的现状、局限、FFF 的目标和时间线，帮助所有人理解项目方向。',
    'card.story.audience':'适合：全体团队成员',
    'card.qa.title':     'QA 测试手册 — 测试环境配置',
    'card.qa.desc':      'Staging 环境所有影响测试结果的配置一览：登录规则、免费时长、VPN 连接行为、版本控制、支付说明及常见误判对照。',
    'card.qa.audience':  '适合：QA 测试人员',
    'card.read':         '阅读文档',
    'footer':            'Arrowfish Team · 内部文档 · 请勿对外分享 · 2026',

    /* ── Doc page chrome ── */
    'doc.back':          '返回文档中心',
    'doc.toc.label':     '目录',
    'doc.toc.toggle':    '目录',
    'doc.date':          '2026年4月',
    'en.notice':         '',

    /* ── PRD TOC ── */
    'prd.toc.s1':  '一、产品是什么',
    'prd.toc.s2':  '二、产品战略方向',
    'prd.toc.s3':  '三、用户体系',
    'prd.toc.s4':  '四、会员套餐',
    'prd.toc.s5':  '五、支付方式',
    'prd.toc.s6':  '六、VPN 连接功能',
    'prd.toc.s7':  '七、免费体验与广告',
    'prd.toc.s8':  '八、积分与抽奖',
    'prd.toc.s9':  '九、推荐与佣金',
    'prd.toc.s10': '十、优惠券',
    'prd.toc.s11': '十一、营销与活动',
    'prd.toc.s12': '十二、内容模块',
    'prd.toc.s13': '十三、反馈与客服',
    'prd.toc.s14': '十四、消息通知',
    'prd.toc.s15': '十五、管理后台',
    'prd.toc.s16': '十六、合规与隐私',
    'prd.toc.s17': '十七、业务数据',

    /* ── Story TOC ── */
    'story.toc.s1': '背景：我们从哪里接手',
    'story.toc.s2': 'Arrowfish 的现状',
    'story.toc.s3': '为什么需要 FFF',
    'story.toc.s4': 'FFF 是什么',
    'story.toc.s5': '两个产品如何并存',
    'story.toc.s6': '里程碑时间线',
    'story.toc.s7': '对团队意味着什么',
    'story.toc.s8': '关键风险',

    /* ── QA TOC ── */
    'qa.toc.s1':  '测试环境基本信息',
    'qa.toc.s2':  '登录与账号安全',
    'qa.toc.s3':  '免费用户时长限制',
    'qa.toc.s4':  'VPN 连接行为',
    'qa.toc.s5':  '客户端版本控制',
    'qa.toc.s6':  '系统功能开关',
    'qa.toc.s7':  '广告配置',
    'qa.toc.s8':  '支付功能',
    'qa.toc.s9':  '节点同步机制',
    'qa.toc.s10': '常见误判对照表',
    'qa.toc.s11': '已知问题清单',
    'qa.toc.s12': '测试账号管理',
    'qa.toc.s13': '测试 vs 生产差异',
  },

  en: {
    /* ── Index page ── */
    'logo.tag':          'Internal',
    'hero.title':        'Team Internal Documentation Hub',
    'hero.sub':          'Product specs, QA handbooks, and project stories — all core docs in one place',
    'filter.all':        'All',
    'filter.prd':        'PRD',
    'filter.qa':         'QA',
    'filter.story':      'Story',
    'section.docs':      'Documents',
    'card.prd.title':    'Arrowfish VPN Business PRD',
    'card.prd.desc':     'Full product overview: user tiers, membership plans &amp; payments, VPN connection, marketing and content modules. Required reading for BA / PM.',
    'card.prd.audience': 'For: BA · PM · Non-technical members',
    'card.story.title':  'From Arrowfish to FFF — Product Evolution Story',
    'card.story.desc':   "Why we're rebuilding from scratch: Arrowfish's current state, limitations, FFF goals and timeline — helping everyone understand the product direction.",
    'card.story.audience':'For: All team members',
    'card.qa.title':     'QA Test Handbook — Staging Environment Config',
    'card.qa.desc':      'All staging configs that affect test outcomes: login rules, free duration, VPN connection behavior, versioning, payments, and common false-positive reference.',
    'card.qa.audience':  'For: QA Testers',
    'card.read':         'Read Document',
    'footer':            'Arrowfish Team · Internal · Do Not Share · 2026',

    /* ── Doc page chrome ── */
    'doc.back':          'Back to Docs',
    'doc.toc.label':     'Contents',
    'doc.toc.toggle':    'Contents',
    'doc.date':          'April 2026',
    'en.notice':         '&#128196; This document is in Chinese. English translation is in progress.',

    /* ── PRD TOC ── */
    'prd.toc.s1':  '1. What Is The Product',
    'prd.toc.s2':  '2. Product Strategy',
    'prd.toc.s3':  '3. User System',
    'prd.toc.s4':  '4. Membership Plans',
    'prd.toc.s5':  '5. Payment Methods',
    'prd.toc.s6':  '6. VPN Connection',
    'prd.toc.s7':  '7. Free Trial &amp; Ads',
    'prd.toc.s8':  '8. Points &amp; Lottery',
    'prd.toc.s9':  '9. Referral &amp; Commission',
    'prd.toc.s10': '10. Coupons',
    'prd.toc.s11': '11. Marketing &amp; Campaigns',
    'prd.toc.s12': '12. Content Modules',
    'prd.toc.s13': '13. Feedback &amp; Support',
    'prd.toc.s14': '14. Notifications',
    'prd.toc.s15': '15. Admin Dashboard',
    'prd.toc.s16': '16. Compliance &amp; Privacy',
    'prd.toc.s17': '17. Business Metrics',

    /* ── Story TOC ── */
    'story.toc.s1': 'Background: What We Inherited',
    'story.toc.s2': 'Arrowfish: Current State',
    'story.toc.s3': 'Why FFF',
    'story.toc.s4': 'What Is FFF',
    'story.toc.s5': 'How Both Products Coexist',
    'story.toc.s6': 'Milestone Timeline',
    'story.toc.s7': 'What This Means for the Team',
    'story.toc.s8': 'Key Risks',

    /* ── QA TOC ── */
    'qa.toc.s1':  'Testing Environment Overview',
    'qa.toc.s2':  'Login &amp; Account Security',
    'qa.toc.s3':  'Free User Time Limits',
    'qa.toc.s4':  'VPN Connection Behavior',
    'qa.toc.s5':  'Client Version Control',
    'qa.toc.s6':  'System Feature Toggles',
    'qa.toc.s7':  'Ad Configuration',
    'qa.toc.s8':  'Payment Features',
    'qa.toc.s9':  'Node Sync Mechanism',
    'qa.toc.s10': 'Common False Positives Reference',
    'qa.toc.s11': 'Known Issues List',
    'qa.toc.s12': 'Test Account Management',
    'qa.toc.s13': 'Staging vs Production Differences',
  }
};

function applyLang(lang) {
  const dict = T[lang] || T.zh;

  // Update html lang attribute
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';

  // Apply all translations
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Toggle active state on lang buttons
  var btnZH = document.getElementById('btnZH');
  var btnEN = document.getElementById('btnEN');
  if (btnZH) btnZH.classList.toggle('active', lang === 'zh');
  if (btnEN) btnEN.classList.toggle('active', lang === 'en');

  // Show/hide EN notice banners
  document.querySelectorAll('.en-notice').forEach(function(el) {
    el.style.display = lang === 'en' ? 'block' : 'none';
  });
}

function initLang() {
  var lang = localStorage.getItem('aw_lang') || 'zh';
  applyLang(lang);
}

window.setLang = function(lang) {
  localStorage.setItem('aw_lang', lang);
  applyLang(lang);
};
