// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");
    const navMenu = document.getElementById("navMenu");
    const menuToggle = document.getElementById("menuToggle");

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        toggleButton.textContent = document.body.classList.contains("dark-mode")
            ? "☀️ Light Mode"
            : "🌙 Dark Mode";
    });

    // Mobile menu toggle
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
});
