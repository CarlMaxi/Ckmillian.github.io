// ===== Dark/Light Theme Toggle =====
const themeSwitch = document.getElementById("themeSwitch");
if (themeSwitch) {
  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);
  themeSwitch.checked = savedTheme === "dark";

  themeSwitch.addEventListener("change", () => {
    const newTheme = themeSwitch.checked ? "dark" : "light";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

// ===== Mobile Nav Toggle =====
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
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
const langToggle = document.getElementById("lang-toggle");
if (langToggle) {
  // Load saved language
  const savedLang = localStorage.getItem("lang") || "en";
  langToggle.value = savedLang;
  applyTranslations(savedLang);

  langToggle.addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    localStorage.setItem("lang", selectedLang);
    applyTranslations(selectedLang);
  });
}

// ===== Apply Translations Function =====
function applyTranslations(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// ===== Active Link Highlighting =====
document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// ===== Stub for Auth Buttons =====
function loginUser() { alert("Login feature not implemented"); }
function signupUser() { alert("Sign-up feature not implemented"); }
