import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';

const swiperEl = document.querySelector('.swiper-container')

const swiper = new Swiper(swiperEl, {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // on: {
  //   slideChange: function () {
  //     if (swiper.isEnd) {
  //       swiper.navigation.next.disable();
  //     } else {
  //       swiper.navigation.next.enable();
  //     }

  //     if (swiper.isBeginning) {
  //       swiper.navigation.prev.disable();
  //     } else {
  //       swiper.navigation.prev.enable();
  //     }
  //   },
  // },
});

  console.log(swiper);

