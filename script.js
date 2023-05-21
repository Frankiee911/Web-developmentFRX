// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#menuu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Outer sidebar blank
const hamburger = document.querySelector("#menuu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
