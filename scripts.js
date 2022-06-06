var lastScrollTop;
navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
  console.log('object');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-80px';
  } else {
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop;
});
