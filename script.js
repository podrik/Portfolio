// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded ✅"); // Check in browser console

    const toggleButton = document.getElementById("darkModeToggle");

    if (!toggleButton) {
        console.error("❌ Dark Mode Toggle button not found");
        return;
    }

    toggleButton.addEventListener("click", function () {
        console.log("🌙 Toggle clicked"); // Debug log
        document.body.classList.toggle("dark-mode");

        // Change button text dynamically
        if (document.body.classList.contains("dark-mode")) {
            toggleButton.textContent = "☀️ Light Mode";
        } else {
            toggleButton.textContent = "🌙 Dark Mode";
        }
    });
});
