$(document).ready(function(){
  $('.option-bar').flickity({
    asNavFor: '.event-category',
    contain: true,
    pageDots: false,
    prevNextButtons: false,
    cellAlign: 'left'
  });
    
  $('.event-category').flickity({
    asNavFor: '.options-bar',
    pageDots: false,
    prevNextButtons: false,
    setGallerySize: false,
    cellAlign: 'left'
  });

  $('.js-tilt').tilt({
    glare: true,
    maxGlare: 1,
    perspective: 500
  });
});

$('.event').click(function(){
  $('.event-description').css({'opacity': 1, 'z-index': 3});
  $('.bg').css({'opacity': 0});
  $('.background').css('filter', 'blur(5px)');
});

$('.cross').click(function(){
  $('.bg').css({'opacity': 1});
  $('.event-description').css({'opacity': 0, 'z-index': -3});
  $('.background').css('filter', '');
});

