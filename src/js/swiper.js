import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

export function initSwiper(swiperEl, param){
    return new Swiper(swiperEl, param);
}