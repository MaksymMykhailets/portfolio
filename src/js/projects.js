import Swiper from 'swiper';
import 'swiper/css';

const swiperEl = document.querySelector('.swiper-container')

const swiper = new Swiper(swiperEl, {
  // configuration options
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function () {
      if (swiper.isEnd) {
        swiper.navigation.next.disable();
      } else {
        swiper.navigation.next.enable();
      }

      if (swiper.isBeginning) {
        swiper.navigation.prev.disable();
      } else {
        swiper.navigation.prev.enable();
      }
    },
  },
});

  console.log(swiper);

//   const swiperEl = document.querySelector('.swiper').swiper;
// console.dir(swiperEl);
//   swiperEl.slideNext();
