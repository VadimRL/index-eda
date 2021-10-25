const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  autoHeight: true,
  speed: 1000,
  spaceBetween: 30,
  effect: 'coverflow',

  coverflowEffect: {
   rotate: 50,
   stretch: 10,
   slideShadows: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  keyboard: { 
    enabled: true, 
    onlyInViewport: true, 
    pageUpDown: true, 
  },

});