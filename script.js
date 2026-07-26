const menuToggle = document.getElementById("menu-toggle");
const menuIcon = document.querySelector(".menu-icon");
const menuLinks = document.querySelectorAll(".menu a");

menuIcon.addEventListener("click", () => {
    menuToggle.checked = !menuToggle.checked;
});

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.checked = false;
    });
});
