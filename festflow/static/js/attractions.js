
if($(window).width() < 600){
  $('.event-description').css({'opacity': 0 ,'z-index':-1});
}
  $('.work-1').click(function(){
    $('.event-description').css({'opacity': 1 , 'z-index':5});
    if($(window).width() < 600)
      $('.work').css({'opacity': 0 ,'z-index':-1})
  });


  $('.work-2').click(function(){
    $('.event-description').css({'opacity': 1, 'z-index':5 });
    if($(window).width() < 600)
      $('.work').css({'opacity': 0 ,'z-index':-1})
  });


  $('.work-3').click(function(){
    $('.event-description').css({'opacity': 1, 'z-index':5 });
    if($(window).width() < 600)
      $('.work').css({'opacity': 0 ,'z-index':-1})
  });

  $('.work-4').click(function(){
    $('.event-description').css({'opacity': 1, 'z-index':5 });
    if($(window).width() < 600)
      $('.work').css({'opacity': 0 ,'z-index':-1})
  });

  $('.cross').click(function(){
    $('.event-description').css({'opacity': 0 ,'z-index':-1});
    $('.work').css({'opacity': 1 ,'z-index':0})
  });
