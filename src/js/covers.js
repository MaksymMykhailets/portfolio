const сontainerForCovers = document.getElementById('animation')
 
export async function checkViewport(container) {
  return new Promise(resolve, reject => {
    let rect = container.getBoundingClientRect();
    resolve(
      (rect.top >= 0 && rect.bottom <= window.innerHeight) ||
      (rect.bottom >= 0 && rect.top <= window.innerHeight)
    );
   });
}

export async function animateCovers() {
  let coversSection = document.querySelector('.covers');
  let marqueeLines = coversSection.querySelectorAll('.marquee-line');

  marqueeLines.forEach(async (line) => {
    let isVisible = await checkViewport(coversSection);
    if (isVisible) {
      line.classList.add('animate-covers');
    } else {
      line.classList.remove('animate-covers');
    }
  });
}

document.addEventListener('DOMContentLoaded', animateCovers)
window.addEventListener('scroll', animateCovers)