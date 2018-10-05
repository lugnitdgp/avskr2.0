var name;
var logo;
var desc;
var venue;
var time;

$(document).ready(function() {
  console.log("hello");
  name=$('.work-1').data('name');
  logo=$('.work-1').data('logo');
  desc=$('.work-1').data('desc');
  venue=$('.work-1').data('venue');
  time=$('.work-1').data('time');
  $(".poster").attr("src", logo);
  $(".event-name").text(name);
  $(".description").text(desc);
  $(".event_venue").text(venue);
  $(".event_time").text(time);
});

if($(window).width() < 600){
  $('.event-description').css({'opacity': 0 ,'z-index':-1});
}
  $('.work-1').click(function(){
    name=jQuery(this).attr('data-name');
    logo=jQuery(this).attr('data-logo');
    desc=jQuery(this).attr('data-desc');
    venue=jQuery(this).attr('data-venue');
    time=jQuery(this).attr('data-time');
    $(".poster").attr("src", logo);
    $(".event-name").text(name);
    $(".description").text(desc);
    $(".event_venue").text(venue);
    $(".event_time").text(time);

    $('.event-description').css({'opacity': 1 , 'z-index':5});
    if($(window).width() < 600)
      $('.work').css({'opacity': 0 ,'z-index':-1})
  });


  $('.work-2').click(function(){

    name=jQuery(this).attr('data-name');
    logo=jQuery(this).attr('data-logo');
    desc=jQuery(this).attr('data-desc');
    venue=jQuery(this).attr('data-venue');
    time=jQuery(this).attr('data-time');
    $(".poster").attr("src", logo);
    $(".event-name").text(name);
    $(".description").text(desc);
    $(".event_venue").text(venue);
    $(".event_time").text(time);

    $('.event-description').css({'opacity': 1, 'z-index':5 });
    if($(window).width() < 600)
      $('.work').css({'opacity': 0 ,'z-index':-1})
  });


  $('.work-3').click(function(){

    name=jQuery(this).attr('data-name');
    logo=jQuery(this).attr('data-logo');
    desc=jQuery(this).attr('data-desc');
    venue=jQuery(this).attr('data-venue');
    time=jQuery(this).attr('data-time');
    $(".poster").attr("src", logo);
    $(".event-name").text(name);
    $(".description").text(desc);
    $(".event_venue").text(venue);
    $(".event_time").text(time);

    $('.event-description').css({'opacity': 1, 'z-index':5 });
    if($(window).width() < 600)
      $('.work').css({'opacity': 0 ,'z-index':-1})
  });

  $('.cross').click(function(){
    $('.event-description').css({'opacity': 0 ,'z-index':-1});
    $('.work').css({'opacity': 1 ,'z-index':0})
  });
