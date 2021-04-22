var window_width = $(window).width();

$(window).on("scroll", function(){
    window_width = $(window).width();
});

$(".menu").click(function(){
  var window_width = $(window).width();
  if(window_width <= 730){
  $("body").css("overflow-y", "hidden");
   $(".PerehidnuyBlock").css("display", "block");
   setTimeout(function(){
     $(".PerehidnuyBlock").fadeOut();
     $(".WhiteMenuBlock").css("display", "block");
       $(".moreMenu").css("display", "block");
    setTimeout(function(){
        $(".BlackMenuBlock").css("display", "block");
        setTimeout(function(){
           $(".menuMinBlock").css("display", "block");
           $(".menuImg").css("display", "block");
           $(".closeMenu").fadeIn();
        }, 800); 
     }, 300);
   }, 1650);
}else{
  $("body").css("overflow-y", "hidden");
   $(".PerehidnuyBlock").css("display", "block");
   setTimeout(function(){
     $(".PerehidnuyBlock").fadeOut();
     $(".WhiteMenuBlock").css("display", "block");
       $(".moreMenu").css("display", "block");
    setTimeout(function(){
        $(".BlackMenuBlock").css("display", "block");
        setTimeout(function(){
           $(".menuMinBlock").css("display", "block");
           $(".menuImg").css("display", "block");
           $(".closeMenu").fadeIn();
        }, 1500); 
     }, 300);
   }, 1650)
 }
});

$(".window1_button").click(function() {
  var windowHeight = $(window).height();
  var window_width = $(window).width();
  var scrollAmount;


if(window_width > 500){

if(window_width > 500 && window_width <= 767){
  var scrollAmount = parseInt( $(".window_2").offset().top ) - 25
  setTimeout(function(){
  $("html").animate({scrollTop: scrollAmount}, 800);
}, 200);
}

if(window_width > 767 && window_width <= 900){
  var scrollAmount = parseInt( $(".window_2").offset().top ) - 105
  setTimeout(function(){
  $("html").animate({scrollTop: scrollAmount}, 800);
}, 200);
}

if(window_width > 900 && window_width <= 1100){
  var scrollAmount = parseInt( $(".window_2").offset().top ) - 65
  setTimeout(function(){
  $("html").animate({scrollTop: scrollAmount}, 800);
}, 200);
}

if(window_width > 1100 && window_width <= 1400){
  var scrollAmount = parseInt( $(".window_2").offset().top ) - 15
  setTimeout(function(){
    $("html").animate({scrollTop: scrollAmount}, 800);
}, 200);
  }

if(window_width > 1400){
  var scrollAmount = parseInt( $(".window_2").offset().top ) - 15
  setTimeout(function(){
  $("html").animate({scrollTop: scrollAmount}, 800);
}, 200);
}
}else{

if (windowHeight > 0 && windowHeight <= 600 && window_width > 0 && window_width <= 350) {
if ($("body").hasClass("scrollUa")) {
  scrollAmount = 580
}

if ($("body").hasClass("scrollUa1")) {
  scrollAmount = 580
}


if ($("body").hasClass("scrollRu")) {
  scrollAmount = 590
}

if ($("body").hasClass("scrollEn")) {
  scrollAmount = 585
}
}

if(window_width > 351 && window_width <= 400){
  if ($("body").hasClass("scrollUa")) {
  scrollAmount = 650
}

if ($("body").hasClass("scrollUa1")) {
  scrollAmount = 650
}


if ($("body").hasClass("scrollRu")) {
  scrollAmount = 677
}

if ($("body").hasClass("scrollEn")) {
  scrollAmount = 655
}
}

if(window_width > 401 && window_width <= 500){
if ($("body").hasClass("scrollUa")) {
  scrollAmount = 720
}

if ($("body").hasClass("scrollUa1")) {
  scrollAmount = 720
}

if ($("body").hasClass("scrollRu")) {
  scrollAmount = 735
}

if ($("body").hasClass("scrollEn")) {
  scrollAmount = 685
}
}
}

if (windowHeight > 800 && windowHeight <= 850 && window_width > 374 && window_width <= 415) {
   if ($("body").hasClass("scrollUa")) {
  scrollAmount = 785
}

if ($("body").hasClass("scrollUa1")) {
  scrollAmount = 785
}


if ($("body").hasClass("scrollRu")) {
  scrollAmount = 800
}

if ($("body").hasClass("scrollEn")) {
  scrollAmount = 780
}
}

  setTimeout(function(){
    $("html").animate({scrollTop: scrollAmount}, 800);
}, 200);
});




$(".window2_button").click(function() {
  var windowHeight = $(window).height();
  var window_width = $(window).width();
  var scrollAmount

if(window_width > 500){

if(window_width > 500 && window_width <= 767){
  var scrollAmount = parseInt( $(".window_3").offset().top ) - 25
  setTimeout(function(){
  $("html").animate({scrollTop: scrollAmount}, 800);
}, 200);
}

if(window_width > 767 && window_width <= 900){
  var scrollAmount = parseInt( $(".window_3").offset().top ) - 105
  setTimeout(function(){
  $("html").animate({scrollTop: scrollAmount}, 800);
}, 200);
}

if(window_width > 900 && window_width <= 1100){
  var scrollAmount = parseInt( $(".window_3").offset().top ) - 65
  setTimeout(function(){
  $("html").animate({scrollTop: scrollAmount}, 800);
}, 200);
}

if(window_width > 1100 && window_width <= 1400){
  var scrollAmount = parseInt( $(".window_3").offset().top ) - 15
  setTimeout(function(){
    $("html").animate({scrollTop: scrollAmount}, 800);
}, 200);
  }

if(window_width > 1400){
  var window_width = $(window).width();
  var scrollAmount = parseInt( $(".window_3").offset().top ) - 15
  setTimeout(function(){
  $("html").animate({scrollTop: scrollAmount}, 800);
}, 200);
}
}else{

if (windowHeight > 0 && windowHeight <= 600 && window_width > 0 && window_width <= 350) {
if ($("body").hasClass("scrollUa")) {
  scrollAmount = 1180
}

if ($("body").hasClass("scrollUa1")) {
  scrollAmount = 1180
}

if ($("body").hasClass("scrollRu")) {
  scrollAmount = 1190
}

if ($("body").hasClass("scrollEn")) {
  scrollAmount = 1185
}
}

if(window_width > 350 && window_width <= 400){
  if ($("body").hasClass("scrollUa")) {
  scrollAmount = 1343
}

if ($("body").hasClass("scrollUa1")) {
  scrollAmount = 1343
}

if ($("body").hasClass("scrollRu")) {
  scrollAmount = 1374
}

if ($("body").hasClass("scrollEn")) {
  scrollAmount = 1345
}
}

if(window_width > 400 && window_width <= 500){

  if ($("body").hasClass("scrollUa")) {
  scrollAmount = 1430
}

  if ($("body").hasClass("scrollUa1")) {
  scrollAmount = 1430
}

if ($("body").hasClass("scrollRu")) {
  scrollAmount = 1430
}

if ($("body").hasClass("scrollEn")) {
  scrollAmount = 1400
}

}

if (windowHeight > 800 && windowHeight <= 850 && window_width > 374 && window_width <= 415) {
   if ($("body").hasClass("scrollUa")) {
  scrollAmount = 1560
}

if ($("body").hasClass("scrollUa1")) {
  scrollAmount = 1560
}


if ($("body").hasClass("scrollRu")) {
  scrollAmount = 1570
}

if ($("body").hasClass("scrollEn")) {
  scrollAmount = 1560
}
}
}

setTimeout(function(){
    $("html").animate({scrollTop: scrollAmount}, 800);
}, 200);
});


$(".window3_button").click(function() {
  var windowHeight = $(window).height();
  var window_width = $(window).width();
  var scrollAmount

if(window_width > 500){

if(window_width > 500 && window_width <= 767){
  var scrollAmount = parseInt( $(".window_4").offset().top ) - 25
  setTimeout(function(){
  $("html").animate({scrollTop: scrollAmount}, 800);
}, 200);
}

if(window_width > 767 && window_width <= 900){
  var scrollAmount = parseInt( $(".window_4").offset().top ) - 105
  setTimeout(function(){
  $("html").animate({scrollTop: scrollAmount}, 800);
}, 200);
}

if(window_width > 900 && window_width <= 1100){
  var scrollAmount = parseInt( $(".window_4").offset().top ) - 65
  setTimeout(function(){
  $("html").animate({scrollTop: scrollAmount}, 800);
}, 200);
}

if(window_width > 1100 && window_width <= 1400){
  var scrollAmount = parseInt( $(".window_4").offset().top ) - 30
  setTimeout(function(){
    $("html").animate({scrollTop: scrollAmount}, 800);
}, 200);
  }

if(window_width > 1400){
  var scrollAmount = parseInt( $(".window_4").offset().top ) - 15
  setTimeout(function(){
  $("html").animate({scrollTop: scrollAmount}, 800);
}, 200);
}
}else{

if (window_width > 0 && window_width <= 400) {
  scrollAmount = 2200
}

if(window_width > 400 && window_width <= 767){
  scrollAmount = 2400
}

if(window_width > 767 && window_width <= 1200){
  scrollAmount = 2500
}

if(window_width > 1200 && window_width <= 1600){
  scrollAmount = 2800
}

if(window_width > 1601 && window_width <= 1850){
  scrollAmount = 3000
}

if(window_width > 1851 && window_width <= 2000){
  if ($("body").hasClass("scrollUa")) {
  scrollAmount = 3100
}

  if ($("body").hasClass("scrollUa1")) {
  scrollAmount = 3100
}


if ($("body").hasClass("scrollRu")) {
  scrollAmount = 3225
}

if ($("body").hasClass("scrollEn")) {
  scrollAmount = 3165
}
}

if(window_width > 2001 && window_width <= 3000){
  if ($("body").hasClass("scrollUa")) {
  scrollAmount = 5100
}

  if ($("body").hasClass("scrollUa1")) {
  scrollAmount = 5100
}


if ($("body").hasClass("scrollRu")) {
  scrollAmount = 5225
}

if ($("body").hasClass("scrollEn")) {
  scrollAmount = 5165
}
}

if(window_width > 3000){
  if ($("body").hasClass("scrollUa")) {
  scrollAmount = 7100
}

  if ($("body").hasClass("scrollUa1")) {
  scrollAmount = 7100
}


if ($("body").hasClass("scrollRu")) {
  scrollAmount = 7100
}

if ($("body").hasClass("scrollEn")) {
  scrollAmount = 7100
}
}

if (windowHeight > 800 && windowHeight <= 850 && window_width > 374 && window_width <= 415) {
   if ($("body").hasClass("scrollUa")) {
  scrollAmount = 2500
}

if ($("body").hasClass("scrollUa1")) {
  scrollAmount = 2500
}


if ($("body").hasClass("scrollRu")) {
  scrollAmount = 2500
}

if ($("body").hasClass("scrollEn")) {
  scrollAmount = 2500
}
}
}

  setTimeout(function(){
    $("html").animate({scrollTop: scrollAmount}, 800);
}, 200);

});

$(window).ready(function(){
  if($(window).width() < 767){
   if($("#cbx").prop("checked")){
    $(".settings_end_menu").css("color", "#FFF");
    $(".menuMinBock").css("background", "#FFF");
   }else{
     $(".settings_end_menu").css("color", "#111");
     $(".menuMinBock").css("background", "#111");
   }
 }
});

$(".closeSettings").click(function(){
  if($(window).width() < 767){
   if($("#cbx").prop("checked")){
    $(".settings_end_menu").css("color", "#FFF");
    $(".menuMinBock").css("background", "#FFF");
   }else{
     $(".settings_end_menu").css("color", "#111");
     $(".menuMinBock").css("background", "#111");
   }
 }
});

$(window).on("scroll", function(){
      if($(window).width() < 767){
   if($("#cbx").prop("checked")){
    $(".settings_end_menu").css("color", "#FFF");
    $(".menuMinBock").css("background", "#FFF");
   }else{
     $(".settings_end_menu").css("color", "#111");
     $(".menuMinBock").css("background", "#111");
   }
 }
});
