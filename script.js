// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.checked = false;
    });
});
