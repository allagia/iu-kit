const toggleBtn = document.querySelector('.header__btn');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const mainNav = document.querySelector('.header__list');
const links = document.querySelectorAll('header__link');

if(toggleBtn) {

  const hideMenu = function () {
    body.classList.remove('scroll-lock');
    header.classList.remove('opened');
  };

  const toggleMenu = function () {
    body.classList.toggle('scroll-lock');
    header.classList.toggle('opened');
  };


  const onEscKeyDown = function (evt) {
    if (evt.key === 'Escape') {
      hideMenu();
      document.removeEventListener('keydown', function (e) {
        onEscKeyDown(e);
      });
    }
  };

  const onWindowChange = function () {
    hideMenu();
  };

  document.addEventListener('DOMContentLoaded', onWindowChange);

  let width = window.innerWidth;
  window.addEventListener('resize', () => {
    if (window.innerWidth !== width) {
      hideMenu();
    }
  });

  toggleBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    toggleMenu();
    document.addEventListener('keydown', function (e) {
      onEscKeyDown(e);
    });
  });

  // mainNav.addEventListener('click', function () {
  //   hideMenu();
  // });

  // for (let i = 0; i < mainNav.childNodes.length; i++) {
  //   mainNav.childNodes[i].addEventListener('click', function (event) {
  //     event.stopPropagation();
  //   });
  // }

  links.forEach(function (link){
    link.addEventListener('click', hideMenu());
  });
}




