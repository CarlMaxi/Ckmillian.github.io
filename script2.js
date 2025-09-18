// script2.js — triple-checked, robust, blueprint-friendly
// Features: theme toggle (checkbox/button), language translations (8 langs),
// mobile nav toggle, active link marking, typing restart, lucide icon refresh.

(function () {
  'use strict';

  // Run after DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement; // use data-theme & class 'dark' for compatibility
    // --- THEME HANDLING ---
    const THEME_KEY = 'ckm_theme';
    const LANG_KEY = 'ckm_lang';

    // Find theme controls (support multiple markup variants)
    const checkboxTheme = document.querySelector('#themeSwitch') || document.querySelector('#theme-switch') || document.querySelector('input[type="checkbox"][data-theme-toggle]');
    const buttonTheme = document.querySelector('#theme-toggle') || document.querySelector('.theme-toggle') || null;
    const themeKnob = document.querySelector('#theme-knob') || document.querySelector('.theme-knob') || (buttonTheme && buttonTheme.querySelector('span')) || null;
    const themeIconEl = (buttonTheme && buttonTheme.querySelector('[data-lucide], .theme-icon')) || null;

    // Apply saved or default theme
    const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
    applyTheme(savedTheme, false);

    // Theme toggle listeners
    if (checkboxTheme) {
      checkboxTheme.checked = (savedTheme === 'dark');
      checkboxTheme.addEventListener('change', () => {
        const newTheme = checkboxTheme.checked ? 'dark' : 'light';
        applyTheme(newTheme, true);
        restartTyping(); // small polish: restart typing when user explicitly toggles theme
      });
    }

    if (buttonTheme) {
      buttonTheme.setAttribute('aria-pressed', savedTheme === 'dark' ? 'true' : 'false');
      buttonTheme.addEventListener('click', () => {
        const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next, true);
        restartTyping();
      });
    }

    // Apply theme helper
    function applyTheme(theme, persist = true) {
      // set a data-theme attribute (used by your CSS) and also a 'dark' class (used by Tailwind if configured)
      root.setAttribute('data-theme', theme);
      if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark');

      // sync UI toggles
      if (checkboxTheme) checkboxTheme.checked = theme === 'dark';
      if (buttonTheme) {
        buttonTheme.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
        // try to move knob via Tailwind class or inline transform if needed
        if (themeKnob) {
          // prefer class toggle (Tailwind blueprint used translate-x-4)
          themeKnob.classList.toggle('translate-x-4', theme === 'dark');
          // fallback inline transform for other styles
          if (!themeKnob.classList.contains('translate-x-4')) {
            themeKnob.style.transform = theme === 'dark' ? 'translateX(26px)' : 'translateX(0)';
          }
        }
        // swap lucide icon if present
        if (themeIconEl) {
          try {
            if (themeIconEl.hasAttribute && themeIconEl.hasAttribute('data-lucide')) {
              themeIconEl.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
              if (window.lucide && typeof lucide.createIcons === 'function') lucide.createIcons();
            } else {
              // fallback text icon
              themeIconEl.textContent = theme === 'dark' ? '☀️' : '🌙';
            }
          } catch (e) { /* swallow any icon refresh errors */ }
        }
      }

      if (persist) localStorage.setItem(THEME_KEY, theme);
    }

    // --- MOBILE NAV HANDLING ---
    const menuBtn = document.getElementById('menu-toggle') || document.querySelector('.menu-toggle') || null;
    // prefer explicit mobile nav container; fallback to nav / .nav-links / nav ul
    const mobileNav = document.getElementById('mobile-nav') ||
                      document.querySelector('#mobile-nav') ||
                      document.querySelector('.nav-links') ||
                      document.querySelector('nav ul') ||
                      document.querySelector('nav');

    if (menuBtn && mobileNav) {
      // initialize aria
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.addEventListener('click', () => {
        // Toggle both common CSS paradigms: hidden (Tailwind) and show (custom)
        mobileNav.classList.toggle('hidden');
        mobileNav.classList.toggle('show');
        const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      });
    }

    // --- ACTIVE NAV LINK (pathname-aware) ---
    (function markActiveNav() {
      const navLinks = Array.from(document.querySelectorAll('nav a'));
      if (!navLinks.length) return;
      // current pathname w/o trailing slash
      const cur = (window.location.pathname || '/').replace(/\/$/, '') || '/';
      navLinks.forEach(a => {
        try {
          const href = a.getAttribute('href') || a.href;
          // handle absolute and relative
          const url = new URL(href, window.location.origin);
          const path = (url.pathname || '/').replace(/\/$/, '') || '/';
          if (path === cur) {
            a.classList.add('active');
            a.setAttribute('aria-current', 'page');
          } else {
            a.classList.remove('active');
            a.removeAttribute('aria-current');
          }
        } catch (e) {
          // ignore bad hrefs
        }
      });
    })();

    // --- TRANSLATIONS (8 languages) ---
    const translations = {
      en: {
        home: "Home", literacy: "Literacy", morality: "Morality", security: "Security", resources: "Resources",
        mission: "Our Mission",
        missionText: "We empower individuals to engage confidently and responsibly in the digital sphere by providing clear, research-backed guidance on literacy, ethical conduct, and robust security practices.",
        getStarted: "Get Started", preview: "Preview Our Sections"
      },
      fr: {
        home: "Accueil", literacy: "Alphabétisation", morality: "Moralité", security: "Sécurité", resources: "Ressources",
        mission: "Notre Mission",
        missionText: "Nous permettons aux individus de s'engager avec confiance et responsabilité dans le monde numérique en fournissant des conseils clairs et fondés sur la recherche.",
        getStarted: "Commencer", preview: "Aperçu de nos sections"
      },
      sw: {
        home: "Nyumbani", literacy: "Elimu", morality: "Maadili", security: "Usalama", resources: "Rasilimali",
        mission: "Dhamira Yetu",
        missionText: "Tunawahimiza watu kushiriki kwa kujiamini na kwa uwajibikaji katika ulimwengu wa kidijitali kwa kutoa mwongozo ulioegemea utafiti.",
        getStarted: "Anza", preview: "Angalia Sehemu"
      },
      lg: {
        home: "Awaka", literacy: "Obusomi", morality: "Obutuufu", security: "Obukuumi", resources: "Ebikozesebwa",
        mission: "Omulamwa gwaffe",
        missionText: "Tuyamba abantu okweyambisa obutereevu mu nsi y'ebyuma nga tubawa emikwano egiva ku kunoonyereza.",
        getStarted: "Tandika", preview: "Gaanira Ebigambo"
      },
      es: {
        home: "Inicio", literacy: "Alfabetización", morality: "Moralidad", security: "Seguridad", resources: "Recursos",
        mission: "Nuestra Misión",
        missionText: "Empoderamos a las personas para participar con confianza y responsabilidad en el ámbito digital mediante orientación clara basada en investigación.",
        getStarted: "Comenzar", preview: "Vista previa"
      },
      ja: {
        home: "ホーム", literacy: "リテラシー", morality: "道徳", security: "セキュリティ", resources: "リソース",
        mission: "私たちの使命",
        missionText: "私たちは、研究に基づいた明確なガイダンスを提供することで、人々がデジタル領域に自信を持って責任を持って関わることを可能にします。",
        getStarted: "始める", preview: "セクションのプレビュー"
      },
      zh: {
        home: "首页", literacy: "素养", morality: "道德", security: "安全", resources: "资源",
        mission: "我们的使命",
        missionText: "我们通过提供清晰、基于研究的指导，帮助个人自信且负责任地参与数字领域。",
        getStarted: "开始", preview: "部分预览"
      },
      ar: {
        home: "الرئيسية", literacy: "المحو الأمية", morality: "الأخلاق", security: "الأمن", resources: "الموارد",
        mission: "مهمتنا",
        missionText: "نمكن الأفراد من المشاركة بثقة ومسؤولية في المجال الرقمي من خلال تقديم إرشادات واضحة تستند إلى البحوث.",
        getStarted: "ابدأ", preview: "معاينة الأقسام"
      }
    };

    const langSelect = document.querySelector('#lang-toggle') || document.querySelector('select[name="lang"]') || null;
    const savedLang = localStorage.getItem(LANG_KEY) || 'en';
    if (langSelect) {
      // set initial value, apply translations
      try { langSelect.value = savedLang; } catch (e) { /* ignore */ }
      applyTranslations(savedLang);

      langSelect.addEventListener('change', (e) => {
        const lang = (e.target.value || 'en');
        localStorage.setItem(LANG_KEY, lang);
        applyTranslations(lang);
        restartTyping(); // nice touch: replay the hero typing on language switch
      });
    } else {
      // still apply saved language even if no UI select (useful for multi-page site)
      applyTranslations(savedLang);
    }

    function applyTranslations(lang) {
      if (!translations[lang]) lang = 'en';
      // set direction for Arabic
      if (lang === 'ar') root.setAttribute('dir', 'rtl'); else root.setAttribute('dir', 'ltr');

      // text replacements for elements with data-translate="key"
      document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (!key) return;
        const val = translations[lang][key];
        if (typeof val === 'undefined') return;
        // if it's an input placeholder
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = val;
        } else {
          el.textContent = val;
        }
      });

      // optional: update nav link labels if they use data-translate on anchors
      document.querySelectorAll('nav a[data-translate]').forEach(a => {
        const k = a.getAttribute('data-translate');
        if (translations[lang][k]) a.textContent = translations[lang][k];
      });
    }

    // --- TYPING ANIMATION RESTART (hero h1) ---
    // Works by temporarily turning off animation and forcing reflow.
    function restartTyping() {
      const h = document.querySelector('.hero h1, .hero .typing, .hero .typewriter');
      if (!h) return;
      // stop any css animation
      h.style.animation = 'none';
      // force reflow
      // eslint-disable-next-line no-unused-expressions
      void h.offsetWidth;
      // let CSS reapply (small timeout to be safe)
      setTimeout(() => {
        h.style.animation = null;
      }, 30);
    }

    // run a single restart on load to ensure animation triggers cleanly
    setTimeout(restartTyping, 120);

    // --- UTILITY: re-render lucide icons if library present ---
    function refreshLucideIcons() {
      try {
        if (window.lucide && typeof lucide.createIcons === 'function') lucide.createIcons();
      } catch (e) { /* ignore */ }
    }

    // refresh lucide once (in case icons were dynamically changed)
    refreshLucideIcons();

    // --- SAFETY: expose small API for dev console if needed ---
    window.__CKM = {
      applyTheme,
      applyTranslations,
      restartTyping,
      refreshLucideIcons
    };

  }); // DOMContentLoaded
})();
