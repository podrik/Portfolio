document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Change button text
        if (document.body.classList.contains("dark-mode")) {
            toggleButton.textContent = "☀️ Light Mode";
        } else {
            toggleButton.textContent = "🌙 Dark Mode";
        }
    });
});
