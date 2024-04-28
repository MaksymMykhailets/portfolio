const containerForCovers = document.getElementById('animation');

function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    return (
        (rect.top >= 0 && rect.bottom <= window.innerHeight) ||
        (rect.bottom >= 0 && rect.top <= window.innerHeight)
    );
}

function animateCircular() {
    let marquee = document.querySelector('.marquee');

    if (isInViewport(marquee)) {
        let marqueeLines = marquee.querySelectorAll('.marquee__line');
        marqueeLines.forEach(function (line) {
            line.classList.add('animate-covers');
        });
    } else {
        let marqueeLines = marquee.querySelectorAll('.marquee__line');
        marqueeLines.forEach(function (line) {
            line.classList.remove('animate-covers');
        });
    }
}

document.addEventListener('DOMContentLoaded', animateCircular);
window.addEventListener('scroll', animateCircular);