// Отримуємо всі елементи кнопок акордеону
const accordionButtons = document.querySelectorAll('.faq-btn');

// Додаємо подію кліку на кожну кнопку акордеону
accordionButtons.forEach(button => {
  button.addEventListener('click', () => toggleAccordion(button));
});

function toggleAccordion(button) {
  const listItem = button.closest('.faq-ac');
  const content = listItem.querySelector('.faq-ac-panel');
  const isActive = listItem.classList.contains('active');
  const allAccordions = document.querySelectorAll('.faq-ac');

  // Закриваємо всі активні елементи
  allAccordions.forEach(accordion => {
    if (accordion !== listItem) {
      accordion.classList.remove('active');
      accordion.querySelector('.faq-ac-panel').style.maxHeight = null;
      const sibling = accordion.nextElementSibling || accordion.previousElementSibling;
      if (sibling && sibling.classList.contains('faq-ac')) {
        sibling.querySelector('.faq-ac-panel').style.maxHeight = '0';
      }
    }
  });

  // Змінюємо розмір активного елемента
  listItem.classList.toggle('active', !isActive);
  content.style.maxHeight = isActive ? null : content.scrollHeight + 'px';

  // Змінюємо розмір сусіда, якщо він існує
  const sibling = isActive ? null : listItem.nextElementSibling || listItem.previousElementSibling;
  if (sibling && sibling.classList.contains('faq-ac')) {
    const siblingContent = sibling.querySelector('.faq-ac-panel');
    siblingContent.style.maxHeight = isActive ? '0' : siblingContent.scrollHeight + 'px';
  }
}
