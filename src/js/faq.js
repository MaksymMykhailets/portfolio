class Accordion {
  constructor(element) {
    this.element = element;
    this.content = this.element.querySelector('.faq-ac-panel');
    this.arrow = this.element.querySelector('.faq-btn');
    this.element.addEventListener('click', () => this.toggle());
    this.content.style.display = 'none';
  }

  toggle() {
    this.element.classList.toggle('active');
    this.content.style.display = this.content.style.display === 'block' ? 'none' : 'block';
    this.arrow.style.transform = this.arrow.style.transform === 'rotate(0.5turn)' ? 'none' : 'rotate(0.5turn)';
  }
}

document.addEventListener('DOMContentLoaded', initializeAccordion);

function initializeAccordion() {
  const accordions = document.querySelectorAll('.faq-ac');
  accordions.forEach(accordion => new Accordion(accordion));
}
