import Swiper from 'swiper';
import 'swiper/css';
import {getApi} from './api';

const list = document.querySelector(".reviews_swiper_wrapper");

async function addCardsOnPage() {
    try {
     const data = await getApi();
     list.insertAdjacentHTML("beforeend", createMarkup(data));
    }
    catch (error) {
        console.log(error.message);
        
    }
    
}
 
function createMarkup(arr) {
    return arr.map(({ id, author, avatar_url, review }) => `
    <div class="reviews_swiper_slide">
    <li class="card" data-id ="${id}">
    <img class="card_img" src="${avatar_url}" alt="photo">
    <h3 class="card_title">${author}</h3>
    <p class="card_text">${review}</p> 
    </li>
    </div>
    `)
        .join("") 
}

addCardsOnPage()

