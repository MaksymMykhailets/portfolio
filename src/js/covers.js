function animateElementsOnScroll() {
  const coverBlock = document.querySelector('.content');  
  const images = document.querySelectorAll('.marquee__line');  

  function handleEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        images.forEach(image => image.classList.add('animate-covers'));  
      } else {
        images.forEach(image => image.classList.remove('animate-covers')); 
      }
    });
  }

  let options = {
    threshold: [0.5],  
  };

  let observer = new IntersectionObserver(handleEntry, options);  

  observer.observe(coverBlock); 
}

 
animateElementsOnScroll();