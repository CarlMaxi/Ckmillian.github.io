// ===== Theme Toggle =====
const themeToggle = document.querySelector("#theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);
}

// ===== Mobile Nav =====
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

// ===== Translations =====
const translations = {
  en: {
    title: "Welcome to Ckmillian",
    philosophy: "Philosophy",
    security: "Security",
    literacy: "Literacy",
    morality: "Morality",
    resources: "Resources"
  },
  fr: {
    title: "Bienvenue à Ckmillian",
    philosophy: "Philosophie",
    security: "Sécurité",
    literacy: "Alphabétisation",
    morality: "Moralité",
    resources: "Ressources"
  },
  sw: {
    title: "Karibu Ckmillian",
    philosophy: "Falsafa",
    security: "Usalama",
    literacy: "Elimu",
    morality: "Maadili",
    resources: "Rasilimali"
  },
  lg: {
    title: "Tukwanirizza ku Ckmillian",
    philosophy: "Efilosofi",
    security: "Obukuumi",
    literacy: "Obusomi",
    morality: "Obutuufu",
    resources: "Ebikozesebwa"
  },
  es: {
    title: "Bienvenido a Ckmillian",
    philosophy: "Filosofía",
    security: "Seguridad",
    literacy: "Alfabetización",
    morality: "Moralidad",
    resources: "Recursos"
  },
  ja: {
    title: "Ckmillianへようこそ",
    philosophy: "哲学",
    security: "セキュリティ",
    literacy: "リテラシー",
    morality: "道徳",
    resources: "リソース"
  },
  zh: {
    title: "欢迎来到Ckmillian",
    philosophy: "哲学",
    security: "安全",
    literacy: "素养",
    morality: "道德",
    resources: "资源"
  },
    ar: {
    title: "مرحبًا بك في Ckmillian",
    philosophy: "الفلسفة",
    security: "الأمن",
    literacy: "المحو الأمية",
    morality: "الأخلاق",
    resources: "الموارد"
  }
};

// ===== Language Toggle =====
const langToggle = document.querySelector("#lang-toggle");
if (langToggle) {
  langToggle.addEventListener("change", (e) => {
    const lang = e.target.value;
    applyTranslations(lang);
    localStorage.setItem("lang", lang);
  });

  // Load saved language
  const savedLang = localStorage.getItem("lang") || "en";
  langToggle.value = savedLang;
  applyTranslations(savedLang);
}

function applyTranslations(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
