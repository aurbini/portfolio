var lastScrollTop;
navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-80px';
    navbar.classList.remove('scroll-nav');
  } else {
    navbar.style.top = '0';
    navbar.classList.add('scroll-nav');
  }
  if (this.window.pageYOffset == 0) {
    navbar.classList.remove('scroll-nav');
  }
  lastScrollTop = scrollTop;
});
