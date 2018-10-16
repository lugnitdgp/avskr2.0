var name;
var logo;
var desc;
var venue;
var time;
var url;
var contact;
var problem_statement="null";

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

$('.event.tile-medium').click(function(){
    problem_statement="null";
  /* Dynamically change data */
  // jQuery(this).attr('data-title');
  name=jQuery(this).attr('data-name');
  logo=jQuery(this).attr('data-logo');
  desc=jQuery(this).attr('data-desc');
  venue=jQuery(this).attr('data-venue');
  time=jQuery(this).attr('data-time');
  // url=jQuery(this).attr('data-url');
  contact=jQuery(this).attr('data-contact');
  problem_statement=jQuery(this).attr('data-problem_statement');

  $(".poster").attr("src", logo);
  $(".event-name").html(name);
  $(".description").html(desc);
  $(".event_venue").html(venue);
  $(".event_time").html(time);
  // $(".event-info a").attr("href", url);
  $(".event_contact").html(contact);
  console.log(problem_statement);
  if(problem_statement=="") {
      $(".problem_statement").hide();
  }
  else {
      $(".problem_statement").show();
      $(".problem_statement a").attr("href", problem_statement);
  }

  $('.event-description').css({'opacity': 1, 'z-index': 3});
  $('.bg').css({'opacity': 0});
  $('.background').css('filter', 'blur(5px)');
});

$('.cross').click(function(){
  $('.bg').css({'opacity': 1});
  $('.event-description').css({'opacity': 0, 'z-index': -3});
  $('.background').css('filter', '');
});
