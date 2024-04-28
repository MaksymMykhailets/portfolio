import Accordion from 'accordion-js';
/*import 'accordion-js/dist/accordion.min.css';*/
import Swiper from 'swiper';
import 'swiper/css';
import '../css/about-me.css';
document.addEventListener("DOMContentLoaded", function() {
    const accordions = Array.from(document.querySelectorAll('.accordion-container'));
    new Accordion(accordions, {
        duration: 400,
        openOnInit: 'all',
        showMultiple: true,
        onOpen: function (currentElement) {
            let use = currentElement.querySelector('use[href]');
            use.setAttribute('href', '../img/icons.svg#icon-arrow-up');
        },
        onClose: function (currentElement) {
            let use = currentElement.querySelector('use[href]');
            use.setAttribute('href', '../img/icons.svg#icon-arrow-down');
        },
    });
});