// ===== Dark/Light Toggle =====
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  const current = document.body.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  document.body.setAttribute("data-theme", next);
  themeBtn.textContent = next === "light" ? "Dark" : "Light";
});
