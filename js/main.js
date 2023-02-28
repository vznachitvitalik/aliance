const navbar = document.querySelector(".navbar");  /*найти навбар и переместить в переменную navbar в js*/
window.addEventListener("scroll", ()=>{
  if (this.scrollY > 1) {
    navbar.classList.add("navbar-light")
  } else {
    navbar.classList.remove("navbar-light");
  }
});