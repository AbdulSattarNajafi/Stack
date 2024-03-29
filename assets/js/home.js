'use strict';

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

//Slider
$('.owl-carousel').owlCarousel({
  loop:true,
  dots:true,
  autoplay:true,
  margin:30,
  dotsEach: true,
  // autoplayHoverPause: true, When mouse over stop auto play
  responsiveClass:true,
  responsive:{
      0:{
          items:1
      },
      767:{
          items:2
      },
      1000:{
          items:2
      },
      1200:{
        items:3,
    }
  }
});