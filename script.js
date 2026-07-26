const menuLinks = document.querySelectorAll(".menu a");
const menuToggle = document.getElementById("menu-toggle");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.checked = false;
  });
});
