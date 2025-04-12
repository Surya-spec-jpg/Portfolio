// Dark mode toggle functionality
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Toggle dark mode button icon
  if (body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "☀️"; // Switch to light mode icon
  } else {
    darkModeToggle.textContent = "🌙"; // Switch to dark mode icon
  }
});
