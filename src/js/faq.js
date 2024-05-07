// Отримуємо всі елементи кнопок акордеону
const accordionButtons = document.querySelectorAll('.faq-btn');

  toggle() {
    this.element.classList.toggle('active');
    this.arrow.style.transform =
      this.arrow.style.transform === 'rotate(0.5turn)'
        ? 'none'
        : 'rotate(0.5turn)';
    if (this.content.style.maxHeight !== '0') {
    } else {
      this.content.style.maxHeight = this.content.scrollHeight + 'px';
    }
  }
}

