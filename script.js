// ===== Theme Toggle =====
const themeSwitch = document.getElementById("themeSwitch");

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light";
document.body.setAttribute("data-theme", savedTheme);
if (themeSwitch) themeSwitch.checked = savedTheme === "dark";

if (themeSwitch) {
  themeSwitch.addEventListener("change", () => {
    const newTheme = themeSwitch.checked ? "dark" : "light";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
}

// ===== Mobile Navigation =====
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

// ===== Active Link Highlight =====
document.querySelectorAll("nav a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// ===== Translations =====
const translations = {
  en: { title: "Welcome to Ckmillian", philosophy: "Philosophy", security: "Security", literacy: "Literacy", morality: "Morality", resources: "Resources", home: "Home" },
  fr: { title: "Bienvenue à Ckmillian", philosophy: "Philosophie", security: "Sécurité", literacy: "Alphabétisation", morality: "Moralité", resources: "Ressources", home: "Accueil" },
  sw: { title: "Karibu Ckmillian", philosophy: "Falsafa", security: "Usalama", literacy: "Elimu", morality: "Maadili", resources: "Rasilimali", home: "Nyumbani" },
  lg: { title: "Tukwanirizza ku Ckmillian", philosophy: "Efilosofi", security: "Obukuumi", literacy: "Obusomi", morality: "Obutuufu", resources: "Ebikozesebwa", home: "Wankubadde" },
  es: { title: "Bienvenido a Ckmillian", philosophy: "Filosofía", security: "Seguridad", literacy: "Alfabetización", morality: "Moralidad", resources: "Recursos", home: "Inicio" },
  ja: { title: "Ckmillianへようこそ", philosophy: "哲学", security: "セキュリティ", literacy: "リテラシー", morality: "道徳", resources: "リソース", home: "ホーム" },
  zh: { title: "欢迎来到Ckmillian", philosophy: "哲学", security: "安全", literacy: "素养", morality: "道德", resources: "资源", home: "主页" },
  ar: { title: "مرحبًا بك في Ckmillian", philosophy: "الفلسفة", security: "الأمن", literacy: "المحو الأمية", morality: "الأخلاق", resources: "الموارد", home: "الرئيسية" }
};

// ===== Language Toggle =====
const langToggle = document.getElementById("lang-toggle");
if (langToggle) {
  const savedLang = localStorage.getItem("lang") || "en";
  langToggle.value = savedLang;
  applyTranslations(savedLang);

  langToggle.addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    applyTranslations(selectedLang);
    localStorage.setItem("lang", selectedLang);
  });
}

// ===== Apply Translations =====
function applyTranslations(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// ===== Stub Login/Signup =====
function loginUser() {
  alert("Login not implemented yet");
}

function signupUser() {
  alert("Sign-up not implemented yet");
}
