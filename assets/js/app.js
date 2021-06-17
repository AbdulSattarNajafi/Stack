'use strict';

const openMenuBtn = document.querySelector('#opne-menu');
const closeMenuBtn = document.querySelector('#close-menu');
const navMenu = document.querySelector('.nav-list');
const menuOverlay = document.querySelector('#menu-overlay');

openMenuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('nav-list-active');
  menuOverlay.style.display = 'block';
});

//closing the side menu
closeMenuBtn.addEventListener('click', closeSideMenu);
menuOverlay.addEventListener('click', closeSideMenu);

//Function for close Menu
function closeSideMenu() {
  navMenu.classList.remove('nav-list-active');
  menuOverlay.style.display = 'none';
}

//Fixed Navbar
const navbar = document.querySelector('.page-header');
const showTopLink = document.querySelector('.scroll-up-container');

window.addEventListener('scroll', function() {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if(scrollHeight > navHeight) {
    navbar.classList.add('fixed-header');
  }else {
    navbar.classList.remove('fixed-header')
  }if(scrollHeight > 500){
    showTopLink.classList.add('show-top-link');
  }else{
    showTopLink.classList.remove('show-top-link');
  }
});

//Tabs
(function() {
  const tabBtns = document.querySelectorAll('#tabs-btns-container .tabs-btn');

  tabBtns.forEach(tabBtn => {
    tabBtn.addEventListener('click', function(e) {
      e.preventDefault();
      let id = e.currentTarget.dataset.id;
      
      document.querySelector('.active-tab').classList.remove('active-tab');
      const currentContent = document.querySelector(`.${id}`);
      document.querySelector('.active-content').classList.remove('active-content');
      currentContent.classList.add('active-content');

      let currentBtn;
      if(currentBtn){
        if(currentBtn != e.currentTarget){
          currentBtn.classList.remove('active-tab');
        }
      }
      currentBtn = e.currentTarget;
      currentBtn.classList.add('active-tab')
    });

  });
})();

// Footer

(function() {
  const showlinksBtn = document.querySelectorAll('.show-footer-links');
  const linksContent = document.querySelectorAll('.footer-links-container');

  showlinksBtn.forEach(showlink => {
    showlink.addEventListener('click', (e) => {
      e.preventDefault();
      let currentContainer = e.currentTarget.parentElement.parentElement;

      linksContent.forEach(linkContent => {
        if(currentContainer === linkContent) {
          linkContent.classList.toggle('active-links')
        }else{
          linkContent.classList.remove('active-links')
        }
      })
      
    })
  })

})();
