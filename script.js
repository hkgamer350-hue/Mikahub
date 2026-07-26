const menuToggle = document.getElementById("menu-toggle");
const menuIcon = document.querySelector(".menu-icon");
const menuLinks = document.querySelectorAll(".menu a");

if (menuIcon && menuToggle) {
    menuIcon.addEventListener("click", function () {
        menuToggle.checked = !menuToggle.checked;
    });
}

menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        menuToggle.checked = false;
    });
});
