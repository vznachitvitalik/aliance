const navbar = document.querySelector(".navbar");  /*найти навбар и переместить в переменную navbar в js*/
const logo = document.querySelector(".logo-svg use");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");
const isFront = document.body.classList.contains("front-page");

 const lightModeOn = (event) => {
   navbar.classList.add("navbar-light");
 };
 const lightModeOff = (event) => {
   navbar.classList.remove("navbar-light");
 }

const changeNavHeight = (height) => {
  navbar.style.height = height;

}


const openMenu = (event) => {    /*функция открывания меню */
  menu.classList.add("is-open");  /*вешает класс is-open */
  mMenuToggle.classList.add("close-menu");
  document.body.style.over = "hidden";  // запрещаем прокрутку сайта
  lightModeOn();
};
const closeMenu = (event) => {    /*функция закрываания меню */
  menu.classList.remove("is-open");  /*убирает класс is-open */
  mMenuToggle.classList.remove("close-menu");
  document.body.style.over = "";  // возвращает прокрутку сайта
  lightModeOff();
};

window.addEventListener("scroll", () => {
  this.scrollY > 1 ? changeNavHeight('72px') : changeNavHeight('94px');
  if (isFront) {
    this.scrollY > 1 ? lightModeOn() : lightModeOff();
  }
});

mMenuToggle.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.contains("is-open") ? closeMenu() : openMenu();
});

const swiperSteps = new Swiper(".steps-slider", {
  speed: 400,
  slidesPerView: 4,
  navigation: {
    nextEl: ".steps-button-next",
    prevEl: ".steps-button-prev",
  }
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
    },
  },
});

const swiper = new Swiper(".swiper", {
  speed: 400,
  autoHeight: true, 
  slidesPerView: 1,
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
    },
  },
});

const swiperBlog = new Swiper(".blog-slider", {
speed:400,
slidesPerView: 2,
spaceBetween: 30,
navigation: {
  nextEl: ".blog-button-next",
  prevEl: ".blog-button-prev",
}
});

const modal = document.querySelector(".modal");
const modalDialog = document.querySelector(".modal-dialog");

document.addEventListener("click", (event) => {
  if (
    event.target.dataset.toggle == "modal" || 
    event.target.parentNode.dataset.toggle == "modal" ||
    (!event.composedPath().includes(modalDialog) &&
    modal.classList.contains("is-open"))
  ) {
    event.preventDefault();
    modal.classList.toggle('is-open');
  }
});
document.addEventListener("keyup", (event) => {
 if (event.key == "Escape" && modal.classList.contains("is-open")) {
  modal.classList.toggle('is-open');
 }
});