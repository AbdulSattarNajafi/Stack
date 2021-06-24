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
const heroContainer = document.querySelector('.hero-container');

window.addEventListener('scroll', function() {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if(scrollHeight > navHeight) {
    navbar.classList.add('fixed-header');
    heroContainer.style.marginTop = '6rem';
  }else {
    navbar.classList.remove('fixed-header');
    heroContainer.style.marginTop = '0';
  }if(scrollHeight > 500){
    showTopLink.classList.add('show-top-link');
  }else{
    showTopLink.classList.remove('show-top-link');
  }
});


// Login
(function(){
  const loginHomeBtn = document.querySelector('#btn-signin');
  const signupBtn = document.querySelector('#signup-btn');
  const signinBtn = document.querySelector('#signin-btn');

  const formSignup = document.querySelector('.login-signup .sign-up-form');
  const formSignin = document.querySelector('.login-signup .signin-form');
  const loginContent = document.querySelector('.login-signup');

  loginHomeBtn.addEventListener('click', () => {
    loginContent.classList.add('active-login-signup');
    document.body.style.overflow = 'hidden';
    console.log('hihihi')
  });

  //Signin to sign up
  signupBtn.addEventListener('click', () => {
    formSignin.style.display = 'none';
    formSignup.style.display = 'block';
  });

  //Sign up to signin
  signinBtn.addEventListener('click', () => {
    formSignin.style.display = 'block';
    formSignup.style.display = 'none';
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
