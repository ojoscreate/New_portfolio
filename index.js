// update the year in the footer
document.getElementById("yr").textContent = new Date().getFullYear();

// navbar
const navToggle = document.querySelector(".hamburger");
const navmenu = document.querySelectorAll(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navmenu.forEach((menu) => {
      menu.classList.remove("active");
    });
  });
});

navToggle.addEventListener("click", () => {
  navmenu.forEach((menu) => {
    menu.classList.toggle("active");
  });
});
