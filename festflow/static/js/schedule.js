 if($(window).width() >800){
$(".c1").css("display","block");
$(".c2").css("display","none");
$(".c3").css("display","none");
$(".c4").css("display","none");
  $(".round1").css("background-color","white");
$( document ).ready(function() {

   $(".round1").on("click",function(){
      $(".tl-round").css("background-color","blue");
      $(".round1").css("background-color","white");
      $(".parcours-active").removeClass("parcours-active");
      $(".parc1").addClass("parcours-active");
      $(".timeline-indicator").css("width","0");
			$(".c1").css("display","block");
			$(".c2").css("display","none");
			$(".c3").css("display","none");
			$(".c4").css("display","none");

   })

   $(".round2").click(function(){
      $(".tl-round").css("background-color","blue");
      $(".round1").css("background-color","white");
      $(".round2").css("background-color","white");
      $(".parcours-active").removeClass("parcours-active");
      $(".parc2").addClass("parcours-active");
      $(".timeline-indicator").css("width","240");
			$(".c2").css("display","block");
			$(".c1").css("display","none");
			$(".c3").css("display","none");
			$(".c4").css("display","none");

   });

   $(".round3").on("click",function(){
      $(".tl-round").css("background-color","blue");
      $(".round1").css("background-color","white");
      $(".round2").css("background-color","white");
      $(".round3").css("background-color","white");
      $(".parcours-active").removeClass("parcours-active");
      $(".parc3").addClass("parcours-active");
      $(".timeline-indicator").css("width","480");
			$(".c3").css("display","block");
			$(".c2").css("display","none");
			$(".c1").css("display","none");
			$(".c4").css("display","none");
   })

   $(".round4").on("click",function(){
      $(".tl-round").css("background-color","rgb(85, 69, 69)");
      $(".round1").css("background-color","white");
      $(".round2").css("background-color","white");
      $(".round3").css("background-color","white");
      $(".round4").css("background-color","white");
      $(".parcours-active").removeClass("parcours-active");
      $(".parc4").addClass("parcours-active");
      $(".timeline-indicator").css("width","720");
			$(".c4").css("display","block");
			$(".c2").css("display","none");
			$(".c3").css("display","none");
			$(".c1").css("display","none");
   })

});
}
else  if($(window).width() <800){
    $(".card").css("margin","5vh");
    $(".timeline-parcours").css("display","none");
      $(".contain").css("top","15%");
      $(".c4").css("margin-bottom","15vh");
}
