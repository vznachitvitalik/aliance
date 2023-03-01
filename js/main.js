const navbar = document.querySelector(".navbar");  /*найти навбар и переместить в переменную navbar в js*/
const logo = document.querySelector(".logo-svg use");
window.addEventListener("scroll", ()=>{
  if (this.scrollY > 1) {
    navbar.classList.add("navbar-light");
   logo.href.baseVal = "img/sprite.svg#logo";
  } else {
    navbar.classList.remove("navbar-light");
    logo.href.baseVal = "img/sprite.svg#logo-light";
  }
});