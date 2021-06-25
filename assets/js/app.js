'use strict';

const navbar = document.querySelector('.page-header');
const openMenuBtn = document.querySelector('#opne-menu');
const closeMenuBtn = document.querySelector('#close-menu');
const navMenu = document.querySelector('.tablet-side-menu');
const menuOverlay = document.querySelector('#menu-overlay');

//Fixed Navbar
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

openMenuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('nav-list-active');
  menuOverlay.style.display = 'block';
  document.body.style.overflowY = 'hidden';
});

//closing the side menu
closeMenuBtn.addEventListener('click', closeSideMenu);
menuOverlay.addEventListener('click', closeSideMenu);

//Function for close Menu
function closeSideMenu() {
  navMenu.classList.remove('nav-list-active');
  menuOverlay.style.display = 'none';
  document.body.style.overflowY = 'auto';
};

// Login
(function(){
  const loginHomeBtn = document.querySelector('#btn-signin');
  const signupBtn = document.querySelector('#signup-btn');
  const signupTabletBtn = document.querySelector('#signup-tablet');
  const loginTabletBtn = document.querySelector('#login-tablet');
  const signinBtn = document.querySelector('#signin-btn');
  const tabletLinks = document.querySelectorAll('.tablet-links');

  const formSignup = document.querySelector('.login-signup .sign-up-form');
  const formSignin = document.querySelector('.login-signup .signin-form');
  const loginContent = document.querySelector('.login-signup');

  // display singin
  loginHomeBtn.addEventListener('click', showSignin);
  signupTabletBtn.addEventListener('click', () => {
    showSignin();
    SigninToSignup();
    closeSideMenu();
  });
  loginTabletBtn.addEventListener('click', () => {
    showSignin();
    closeSideMenu();
  });

  tabletLinks.forEach(tabletLink => {
    tabletLink.addEventListener('click', closeSideMenu);
  });

  //Signin to sign up
  signupBtn.addEventListener('click', SigninToSignup);

  //Sign up to signin
  signinBtn.addEventListener('click', signupToSignin);

  // Show signin
  function showSignin() {
    loginContent.classList.add('active-login-signup');
  };

  //Signin to sign up
  function SigninToSignup() {
    formSignin.style.display = 'none';
    formSignup.style.display = 'block';
  };

  //Sign up to signin
  function signupToSignin() {
    formSignin.style.display = 'block';
    formSignup.style.display = 'none';
  };

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
