import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';


  const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
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
  });

  console.log(swiper);

