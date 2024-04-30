// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/keyboard';
// import 'swiper/css/mousewheel';
// import 'swiper/css/navigation';

// import Swiper from 'swiper/bundle';

// import 'swiper/css/bundle';
 
// const swiper = new Swiper('.swiper', {
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     slidesPerView: 1,
//     on: {
//       slideChange: function () {
//         if (swiper.isEnd) {
//           swiper.navigation.nextEl.classList.add('swiper-button-disabled');
//         } else {
//           swiper.navigation.nextEl.classList.remove('swiper-button-disabled');
//         }
  
//         if (swiper.isBeginning) {
//           swiper.navigation.prevEl.classList.add('swiper-button-disabled');
//         } else {
//           swiper.navigation.prevEl.classList.remove('swiper-button-disabled');
//         }
//       },
//     },
//   });

// console.log(swiper);

import { initSwiper } from "./swiper";

const param = {
  navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        mousewheel: {
          invert: true,
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        grabCursor: true,
        slidesPerView: 1,
        on: {
          slideChange: function () {
            if (swiper.isEnd) {
              swiper.navigation.nextEl.classList.add('swiper-button-disabled');
            } else {
              swiper.navigation.nextEl.classList.remove('swiper-button-disabled');
            }
      
            if (swiper.isBeginning) {
              swiper.navigation.prevEl.classList.add('swiper-button-disabled');
            } else {
              swiper.navigation.prevEl.classList.remove('swiper-button-disabled');
            }
          },
        },   
};

const swiperEl = document.querySelector('.swiper');

const swiper = initSwiper(swiperEl, param);