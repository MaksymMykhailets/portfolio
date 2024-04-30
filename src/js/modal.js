const openModalBtn = document.querySelector('.open-modal-btn');
const closeModalBtn = document.querySelector('.close-modal-btn');
const modalListItem = document.querySelectorAll('.modal-item-link');
const modalCont = document.querySelector('.modal-window-cont');
const orderModalBtn = document.querySelector('.menu-order-btn');

openModalBtn.addEventListener('click', toggleMenu);
closeModalBtn.addEventListener('click', toggleMenu);
orderModalBtn.addEventListener('click', toggleMenu);
modalListItem.forEach(item => {
  item.addEventListener('click', toggleMenu);
});

function toggleMenu() {
  modalCont.classList.toggle('is-open');
  document.body.classList.toggle('menu-is-open');
}
document.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    modalCont.classList.remove('is-open');
  }
});
