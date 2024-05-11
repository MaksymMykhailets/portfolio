let acc = document.getElementsByClassName('faq-btn');
let line = document.querySelector('.faq-line');

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    let faqAc = this.parentElement.parentElement;

    if (faqAc.classList.contains('active')) {
      faqAc.classList.remove('active');
      faqAc.querySelector('.faq-ac-panel').style.maxHeight = null;
      this.children[0].classList.remove('rotate');
    } else {
      document.querySelectorAll('.faq-ac.active').forEach(activeEl => {
        activeEl.classList.remove('active');
        activeEl.querySelector('.faq-ac-panel').style.maxHeight = null;
        activeEl.querySelector('.faq-arrow-down').classList.remove('rotate');
      });

      faqAc.classList.add('active');
      faqAc.querySelector('.faq-ac-panel').style.maxHeight =
        faqAc.querySelector('.faq-ac-panel').scrollHeight + 'px';
      this.children[0].classList.add('rotate');
    }

    let activePanels = document.querySelectorAll('.faq-ac.active');
    let totalHeight = 0;
    activePanels.forEach(panel => {
      totalHeight += panel.querySelector('.faq-ac-panel').scrollHeight;
    });
    line.style.height = totalHeight + 'px';
  });
}

let css = document.createElement('style');
css.innerHTML =
  '.rotate { transform: rotate(180deg); transition: transform 0.6s ease-in-out; }';
document.body.appendChild(css);
