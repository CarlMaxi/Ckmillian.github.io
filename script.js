// ===== Theme Toggle =====
const themeSwitch = document.getElementById('themeSwitch');
const htmlRoot = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
htmlRoot.setAttribute('data-theme', savedTheme);
themeSwitch.checked = savedTheme === 'dark';

themeSwitch.addEventListener('change', () => {
  const newTheme = themeSwitch.checked ? 'dark' : 'light';
  htmlRoot.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// ===== Active Nav Link Highlight =====
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// ===== Language Translations =====
const translations = {
  en: { title: "Welcome to Ckmillian", philosophy: "Philosophy", security: "Security", literacy: "Literacy", morality: "Morality", resources: "Resources" },
  fr: { title: "Bienvenue à Ckmillian", philosophy: "Philosophie", security: "Sécurité", literacy: "Alphabétisation", morality: "Moralité", resources: "Ressources" },
  sw: { title: "Karibu Ckmillian", philosophy: "Falsafa", security: "Usalama", literacy: "Elimu", morality: "Maadili", resources: "Rasilimali" },
  lg: { title: "Tukwanirizza ku Ckmillian", philosophy: "Efilosofi", security: "Obukuumi", literacy: "Obusomi", morality: "Obutuufu", resources: "Ebikozesebwa" },
  es: { title: "Bienvenido a Ckmillian", philosophy: "Filosofía", security: "Seguridad", literacy: "Alfabetización", morality: "Moralidad", resources: "Recursos" },
  ja: { title: "Ckmillianへようこそ", philosophy: "哲学", security: "セキュリティ", literacy: "リテラシー", morality: "道徳", resources: "リソース" },
  zh: { title: "欢迎来到Ckmillian", philosophy: "哲学", security: "安全", literacy: "素养", morality: "道德", resources: "资源" },
  ar: { title: "مرحبًا بك في Ckmillian", philosophy: "الفلسفة", security: "الأمن", literacy: "المحو الأمية", morality: "الأخلاق", resources: "الموارد" }
};

// ===== Language Toggle =====
const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
  // Load saved language
  const savedLang = localStorage.getItem('lang') || 'en';
  langToggle.value = savedLang;
  applyTranslations(savedLang);

  langToggle.addEventListener('change', (e) => {
    const lang = e.target.value;
    applyTranslations(lang);
    localStorage.setItem('lang', lang);
  });
}

function applyTranslations(lang) {
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Set RTL for Arabic
  if (lang === 'ar') {
    document.body.dir = 'rtl';
  } else {
    document.body.dir = 'ltr';
  }
}

// ===== Stub Login/Signup =====
function loginUser() {
  alert('Login not implemented yet.');
}

function signupUser() {
  alert('Sign-up not implemented yet.');
}
