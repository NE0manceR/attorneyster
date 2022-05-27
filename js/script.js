const logoWrap = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0 && window.innerWidth > 500) {
    logoWrap.classList.add('header_small');
  } else {
    logoWrap.classList.remove('header_small');
  }
});
