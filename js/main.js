const navbar = document.querySelector(".navbar");  /*найти навбар и переместить в переменную navbar в js*/
const logo = document.querySelector(".logo-svg use");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");

const lightModeOn = (event) => {
  navbar.classList.add("navbar-light");
   logo.href.baseVal = "img/sprite.svg#logo";
};

const lightModeOff = (event) => {
  navbar.classList.remove("navbar-light");
  logo.href.baseVal = "img/sprite.svg#logo-light";
}


const openMenu = (event) => {    /*функция открывания меню */
  menu.classList.add("is-open");  /*вешает класс is-open */
  mMenuToogle.classList.add ("close-menu");
  document.body.style.over="hidden";  // запрещаем прокрутку сайта 
  lightModeOn ();
};
const closeMenu = (event) => {    /*функция закрываания меню */
  menu.classList.remove("is-open");  /*убирает класс is-open */
  mMenuToogle.classList.remove ("close-menu");
  document.body.style.over="";  // возвращает прокрутку сайта 
  lightModeOff ();
};

window.addEventListener("scroll", ()=>{
this.scrollY > 1 ? lightModeOn () : lightModeOff ();
});

mMenuToggle.addEventListener("click", (event)=> {
  event.preventDefault();
  menu.classList.contains ("is-open") ? closeMenu () : openMenu ();
});