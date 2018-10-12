var name;
var logo;
var desc;
var venue;
var time;

$('.event-description').css({'opacity': 0 ,'z-index':-1});

  $('.work-1').click(function(){
    $('.event-description').css({'opacity': 1 , 'z-index':1});

      name=jQuery(this).attr('data-name');
      logo=jQuery(this).attr('data-logo');
      desc=jQuery(this).attr('data-desc');
      venue=jQuery(this).attr('data-venue');
      time=jQuery(this).attr('data-time');
      $(".poster").attr("src", logo);
      $(".event-name").html(name);
      $(".description").html(desc);
      $(".event_venue").html(venue);
      $(".event_time").html(time);
    $('.work').css({'opacity': 0 ,'z-index':-1})
  });


  $('.work-2').click(function(){
    $('.event-description').css({'opacity': 1, 'z-index':1 });

    name=jQuery(this).attr('data-name');
    logo=jQuery(this).attr('data-logo');
    desc=jQuery(this).attr('data-desc');
    venue=jQuery(this).attr('data-venue');
    time=jQuery(this).attr('data-time');
    $(".poster").attr("src", logo);
    $(".event-name").html(name);
    $(".description").html(desc);
    $(".event_venue").html(venue);
    $(".event_time").html(time);
    $('.work').css({'opacity': 0 ,'z-index':-1})
  });


  $('.work-3').click(function(){
    $('.event-description').css({'opacity': 1, 'z-index':1 });

    name=jQuery(this).attr('data-name');
    logo=jQuery(this).attr('data-logo');
    desc=jQuery(this).attr('data-desc');
    venue=jQuery(this).attr('data-venue');
    time=jQuery(this).attr('data-time');
    $(".poster").attr("src", logo);
    $(".event-name").html(name);
    $(".description").html(desc);
    $(".event_venue").html(venue);
    $(".event_time").html(time);
    $('.work').css({'opacity': 0 ,'z-index':-1})
  });

  $('.work-4').click(function(){
    $('.event-description').css({'opacity': 1, 'z-index':1 });

    name=jQuery(this).attr('data-name');
    logo=jQuery(this).attr('data-logo');
    desc=jQuery(this).attr('data-desc');
    venue=jQuery(this).attr('data-venue');
    time=jQuery(this).attr('data-time');
    $(".poster").attr("src", logo);
    $(".event-name").html(name);
    $(".description").html(desc);
    $(".event_venue").html(venue);
    $(".event_time").html(time);
    $('.work').css({'opacity': 0 ,'z-index':-1})
  });
  $('.work-5').click(function(){
    $('.event-description').css({'opacity': 1, 'z-index':1 });

    name=jQuery(this).attr('data-name');
    logo=jQuery(this).attr('data-logo');
    desc=jQuery(this).attr('data-desc');
    venue=jQuery(this).attr('data-venue');
    time=jQuery(this).attr('data-time');
    $(".poster").attr("src", logo);
    $(".event-name").html(name);
    $(".description").html(desc);
    $(".event_venue").html(venue);
    $(".event_time").html(time);
    $('.work').css({'opacity': 0 ,'z-index':-1})
  });

  $('.work-6').click(function(){
    $('.event-description').css({'opacity': 1, 'z-index':1 });
    name=jQuery(this).attr('data-name');
    logo=jQuery(this).attr('data-logo');
    desc=jQuery(this).attr('data-desc');
    venue=jQuery(this).attr('data-venue');
    time=jQuery(this).attr('data-time');
    $(".poster").attr("src", logo);
    $(".event-name").html(name);
    $(".description").html(desc);
    $(".event_venue").html(venue);
    $(".event_time").html(time);
    $('.work').css({'opacity': 0 ,'z-index':-1})
  });

  $('.cross').click(function(){
    $('.event-description').css({'opacity': 0 ,'z-index':-1});
    $('.work').css({'opacity': 1 ,'z-index':0})
  });
