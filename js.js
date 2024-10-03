// JavaScript for adding/removing CSS class on scroll
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset > 0) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

function removeSmallNav() {
  document.getElementById('close_button').click();
}
