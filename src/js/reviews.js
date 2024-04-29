import Swiper from 'swiper';
import 'swiper/css';

import { getApi } from './api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const list = document.querySelector('.reviews-swiper-wrapper');
const placeholderText = document.querySelector('.placeholder_text');

async function addCardsOnPage() {
  try {
    const data = await getApi();
    list.insertAdjacentHTML('beforeend', createMarkup(data));
  } catch (error) {
    placeholderText.classList.replace('visually-hidden', 'title_not_found');
    iziToast.show({
      message: 'Reviews Not found',
      backgroundColor: '#ed3b44',
      messageColor: '#fafafa',
      position: 'topRight',
      timeout: 2000,
    });
  }
}

function createMarkup(arr) {
  return arr
    .map(
      ({ id, author, avatar_url, review }) => `
    <div class="swiper-slide">
    <li class="card" data-id ="${id}">
    <img class="card_img" src="${avatar_url}" alt="photo">
    <h3 class="card_title">${author}</h3>
    <p class="card_text">${review}</p> 
    </li>
    </div>
    `
    )
    .join('');
}

addCardsOnPage();
