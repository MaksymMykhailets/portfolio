import Accordion from 'accordion-js';
console.log('initSwiper');
import { initSwiper } from './swiper';
console.log(initSwiper);

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
    openOnInit: [0],
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
/*
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; // // init Swiper:
const aboutmeSwiper = new Swiper('.about-me-swiper', {
*/
const aboutmeSwiper = initSwiper('.about-me-swiper', {
  //modules: [Navigation], //Pagination],
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
});
const nextSlide_Btn = document.querySelector('.about-me-slide-next');
nextSlide_Btn.addEventListener('click', e => {
  console.log(e);
  aboutmeSwiper.slideNext();
});
