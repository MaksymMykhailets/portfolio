import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const accordion = new Accordion('.accordion', {
    duration: 600,
    showMultiple: false,
  });

  const accButtons = document.querySelectorAll('.ac-expand');

  accButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const acItem = btn.closest('.ac-item');

      if (acItem.classList.contains('open')) {
        acItem.classList.remove('open');
      } else {
        document.querySelectorAll('.ac-item.open').forEach(activeItem => {
          activeItem.classList.remove('open');
        });
        acItem.classList.add('open');
      }
    });
  });

  document.querySelectorAll('.ac-arrow').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('up');
      button.classList.toggle('down');
    });
  });

  document.querySelectorAll('.ac-item.open').forEach(activeItem => {
    activeItem.classList.remove('open');
  });
});