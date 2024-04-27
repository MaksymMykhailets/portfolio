const containerForCovers = document.getElementById('animation');

function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    return (
        (rect.top >= 0 && rect.bottom <= window.innerHeight) ||
        (rect.bottom >= 0 && rect.top <= window.innerHeight)
    );
}

function animateCircular() {
    let coversSection = document.querySelector('.covers.section');
    let marqueeLines = coversSection.querySelectorAll('.marquee-line');

    marqueeLines.forEach(function (line) {
        if (isInViewport(coversSection)) {
            line.classList.add('circular-animation');
        } else {
            line.classList.remove('circular-animation');
        }
    });
}

document.addEventListener('DOMContentLoaded', animateCircular);
window.addEventListener('scroll', animateCircular);