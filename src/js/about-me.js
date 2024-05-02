import Accordion from 'accordion-js';
import { initSwiper } from './swiper';
import '../css/accordion.css';

document.addEventListener('DOMContentLoaded', function () {
  const accordion = document.querySelector('.about-me-accordion-container');
  new Accordion(accordion, {
    duration: 400,
    openOnInit: [0],
    showMultiple: true,
    beforeOpen: function (currentElement) {
      let use = currentElement.querySelector('use[href]');
      use.setAttribute(
        'href',
        '/portfolio/assets/icon-sprite-1e5406a1.svg#icon-arrow-up'
      );
    },
    beforeClose: function (currentElement) {
      let use = currentElement.querySelector('use[href]');
      use.setAttribute(
        'href',
        '/portfolio/assets/icon-sprite-1e5406a1.svg#icon-arrow-down'
      );
    },
  });

  //swiper//
  const aboutmeSwiper = initSwiper('.about-me-swiper', {
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
  const nextSlide_Btn = document.querySelector('.about-me-slide-next-btn');
  nextSlide_Btn.addEventListener('click', e => {
    aboutmeSwiper.slideNext();
  });
});
