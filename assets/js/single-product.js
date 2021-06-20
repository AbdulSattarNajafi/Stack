'use strict';

//Tabs
(function() {
  const tabBtns = document.querySelectorAll('.products-lists .product-link');

  tabBtns.forEach(tabBtn => {
    tabBtn.addEventListener('click', function(e) {
      e.preventDefault();
      let id = e.currentTarget.dataset.id;
      
      document.querySelector('.products-lists .active').classList.remove('active');
      const currentContent = document.querySelector(`#single-products-wrapper .${id}`);
      document.querySelector('#single-products-wrapper .active-single-product').classList.remove('active-single-product');
      currentContent.classList.add('active-single-product');

      let currentBtn;
      if(currentBtn){
        if(currentBtn != e.currentTarget){
          currentBtn.classList.remove('active');
        }
      }
      currentBtn = e.currentTarget;
      currentBtn.classList.add('active')
    });

  });
})();

// FAQ
(function() {
  const faqCards = document.querySelectorAll('.faq-container .faq-elements');
  const faqBtns = document.querySelectorAll('.faq-show-btn');

  faqBtns.forEach(faqBtn => {
    faqBtn.addEventListener('click', function(e) {
      e.preventDefault();

      let currentFaq = e.currentTarget.parentElement.parentElement;

      currentFaq.classList.toggle('active-faq')
    })
  })
})();