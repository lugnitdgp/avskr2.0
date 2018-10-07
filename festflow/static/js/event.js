var name;
var logo;
var desc;
var venue;
var time;
var url;

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
  /* Dynamically change data */
  // jQuery(this).attr('data-title');
  name=jQuery(this).attr('data-name');
  logo=jQuery(this).attr('data-logo');
  desc=jQuery(this).attr('data-desc');
  venue=jQuery(this).attr('data-venue');
  time=jQuery(this).attr('data-time');
  url=jQuery(this).attr('data-url');
  $(".poster").attr("src", logo);
  $(".event-name").text(name);
  $(".description").text(desc);
  $(".event_venue").text(venue);
  $(".event_time").text(time);
  $("a").attr("href", url);

  $('.event-description').css({'opacity': 1, 'z-index': 3});
  $('.bg').css({'opacity': 0});
  $('.background').css('filter', 'blur(5px)');
});

$('.cross').click(function(){
  $('.bg').css({'opacity': 1});
  $('.event-description').css({'opacity': 0, 'z-index': -3});
  $('.background').css('filter', '');
});
