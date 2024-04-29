import Accordion from 'accordion-js';
/*import 'accordion-js/dist/accordion.min.css';*/
//import Swiper from 'swiper';
//import 'swiper/css';
/*import '../css/about-me.css';*/
document.addEventListener('DOMContentLoaded', function () {
  const accordions = Array.from(
    document.querySelectorAll('.accordion-container')
  );
  new Accordion(accordions, {
    duration: 400,
    openOnInit: 'all',
    showMultiple: true,
    beforeOpen: function (currentElement) {
      let use = currentElement.querySelector('use[href]');
      use.setAttribute('href', '../icons/icon-sprite.svg#icon-arrow-up');
    },
    beforeClose: function (currentElement) {
      let use = currentElement.querySelector('use[href]');
      use.setAttribute('href', '../icons/icon-sprite.svg#icon-arrow-down');
    },
  });
});
//swiper//
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; // // init Swiper:
// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],
// });
const aboutmeSwiper = new Swiper('.about-me-swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  spaceBetween: 0,
  slidesPerView: 2,
  direction: 'horizontal',
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },
  // navigation: {
  // nextEl: '.about-me-slide-next',
  // prevEl: '.projects-button-prev',
  // },
});
const nextSlideBtn = document.querySelector('.about-me-slide-next');
nextSlideBtn.addEventListener('click', e => {
  console.log('click-nextSlideBtn');
  aboutmeSwiper.slideNext();
});
