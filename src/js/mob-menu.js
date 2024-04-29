const menuBtn = document.querySelector('.open-menu-btn');
const menuListItems = document.querySelectorAll('.header-menu-item');
const menuList = document.querySelector('.header-menu-list');

menuBtn.addEventListener('click', openMenu);
menuListItems.forEach(item => {
  item.addEventListener('click', openMenu);
});

function openMenu() {
  menuList.classList.toggle('slide');
}