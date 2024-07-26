document.addEventListener("DOMContentLoaded", function () {
  let navBtn = document.querySelector(".nav-btn");
  let mobNav = document.querySelector(".mobile-menu");

  navBtn.addEventListener("click", function (e) {
    mobNav.classList.toggle("active");
    mobNav.classList.contains("active")
      ? navBtn.setAttribute("src", "/assets/icons/close_menu.png")
      : navBtn.setAttribute("src", "/assets/icons/nav_menu.png");
  });
});
