

 class Accordion {
   constructor(element) {
     this.element = element;
     this.content = this.element.querySelector('.faq-ac-panel');
     this.arrow = this.element.querySelector('.faq-btn');
     this.element.addEventListener('click', () => this.toggle());
   }

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

 document.addEventListener('DOMContentLoaded', initializeAccordion);

 function initializeAccordion() {
   const accordions = document.querySelectorAll('.faq-ac');
   accordions.forEach(accordion => new Accordion(accordion));
 }


