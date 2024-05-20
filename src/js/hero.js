document.querySelectorAll('.socials-list .item').forEach(item => {
  item.addEventListener('click', function (event) {
    const link = item.querySelector('a');

    if (link) {
      const href = link.getAttribute('href');
      if (href.startsWith('mailto:')) {
        window.location.href = href;
      } else {
        window.open(href, '_blank');
      }
    }
  });
});
