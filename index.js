const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

// Check saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeIcon.classList.replace("bi-moon", "bi-sun");
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeIcon.classList.replace("bi-moon", "bi-sun");
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.classList.replace("bi-sun", "bi-moon");
    localStorage.setItem("theme", "light");
  }
});
