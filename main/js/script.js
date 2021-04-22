//after load
document.body.onload = function(){
  // $("html").animate({scrollTop: 0});
  $(".PerehidnuyBlock").css("display", "block");
  $(".allContent").fadeOut();
      $(".startBlock").addClass("startBlockEndLoad");
    $(".flagsTextUa").addClass("flagActive");
  setTimeout(function(){
    $("#preloader1").fadeOut(700);
    $(".preloaderBg").fadeOut(800);  
  }, 1000);

setTimeout(function(){
     $(".PerehidnuyBlock").fadeOut();
     $(".allContent").fadeIn();
     $(".settings_end_menu").fadeIn();
     $("body").css("overflow", "auto");
}, 1650);

  setTimeout(function(){
    $('#particles-background').css("background", "#FFF");
  }, 3000);
}
//menu, settings and scrollTop

$(window).on("scroll", function() {
  if($(window).width() > 767){
  if ($(window).scrollTop() >= 900) {
     $(".settings_end_menu").css("color", "#111");
     $(".menuMinBock").css("background", "#111");
     $(".scrollTop").css("display", "block");
     $(".scrollTop").stop();
  }
  else {
     $(".settings_end_menu").css("color", "#FFF");
     $(".menuMinBock").css("background", "#FFF");
     $(".scrollTop").css("display", "none");
     $(".scrollTop").stop();
  }
}
});

//scrollTop
$(".scrollTop").click(function(){
    $("html").animate({scrollTop: 0}, 1000);
});

// menu
$(".menu").click(function(){
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
});

$(".closeMenu").click(function(){
   $("body").removeClass("settings_active");   
   $(".PerehidnuyBlockTop").css("display", "block");
   $("body").css("overflow-y", "auto");
   $(".closeMenu").fadeOut();
   setTimeout(function(){
    var menuAnimationDisplayNone = $(".WhiteMenuBlock, .BlackMenuBlock, .menuMinBlock, .menuImg, .moreMenu");
      $(".PerehidnuyBlockTop").fadeOut();
      menuAnimationDisplayNone.css("display", "none");
      setTimeout(function(){
    }, 400);
   }, 1650);
});

//settings
let window_width_2 = $(window).width();

$(document).ready(function(){
  $(window).resize(function(){
    window_width_2 = $(window).width();
    setting_background();
  });
});

$(window).ready(function(){
  colorFun();
});
$("#cbx").click(function(){colorFun();});
$(".settings_end_menu").click(function(){colorFun();});
if(window_width_2 > 0){
  colorFun();
let check_setting = false;
$(".settingsIcon").click(function(){
if(check_setting == false){
  $(".settingsModalBlock_2").fadeIn(300); 
  check_setting = true;    
}else{
  $(".settingsModalBlock_2").fadeOut(300);
  check_setting = false;
}
});

$(window).click(function(event) {
  let e_class = event.target.className;
  if(event.target.className != "fas fa-cog settingsIcon" && e_class != "BlackWhite settingsContent" && e_class != "iconContent" && e_class != "check" && e_class != "toggle" && e_class != "toggle toggleLast" && e_class != "span_setting" && e_class != "col-4 flagUa flagsBlocks" && e_class != "col-4 flagEn flagsBlocks" && e_class != "col-4 flagRu flagsBlocks" && e_class != "row flagBlock" && e_class != "flag" && e_class != "flagsText flagsTextUa Ua flagActive" && e_class != "flagsText Ru" && e_class != "flagsText En" && e_class != "flagsText flagsTextEn En flagActive" && e_class != "flagsText flagsTextRu Ru flagActive" && e_class != "flag bigFlags" && e_class != "flagsText Ua" && e_class != "fas fa-mouse-pointer leftIncon settungsIcons" && e_class != "far fa-circle rightIcon IconVipLeft settungsIcons" && e_class != "settingsImgMrR" && e_class != "settingsImgMrR SettingsBlackImgs" && e_class != "fas fa-sun leftIncon IconVipRight settungsIcons" && e_class != "fas fa-sun leftIncon IconVipRight settungsIcons" && e_class != "BlackWhite settingsContent" && e_class != "col-3 classMenuForHoverSkull" && e_class != "CursorCryg settingsContent"  && e_class != "settingsImgMrL" && e_class != "ScrollScwipe settingsContent" && e_class != "fas fa-moon rightIcon settungsIcons" && e_class != "settingsModalBlockContent" && e_class != "col-md-4 flagUa flagsBlocks" && e_class != "col-md-4 flagEn flagsBlocks" && e_class != "col-md-4 flagRu flagsBlocks" && e_class != "flagsText flagsTextUa flagActive Ua"){
    $(".settingsModalBlock_2").fadeOut(300);
    if($("body").hasClass("settings_active")){
        $("body").css("overflow-y", "auto");
        $("body").removeClass("settings_active"); 
    }
    check_setting = false;
  }
  if($("body").hasClass("BlackDisink")){
  if($(window).scrollTop() >= 900){
    $(".settings_end_menu").css("color", "#FFF");
    $(".menuMinBock").css("background", "#FFF");
}
}else{
   if($(window).scrollTop() >= 900){
    $(".settings_end_menu").css("color", "#111");
    $(".menuMinBock").css("background", "#111");
}
} 
});
}else{
  $(".settings").click(function(){
  if(window_width_2 < 767){
   $(".PerehidnuyBlock").css("display", "block");
   $("body").css("overflow", "hidden");

setTimeout(function(){
  $(".PerehidnuyBlock").fadeOut();
  $(".PerehidnuyBlock0").fadeOut();
  $(".settingsModalBlock_2").fadeIn(0);
}, 1650);
}else{
  $(".settingsModalBlock_2").fadeIn(0);
  $(window).click(function(event) {
    let e_class = event.target.className;
    if(event.target.className != "fas fa-cog settingsIcon" && e_class != "BlackWhite settingsContent" && e_class != "iconContent" && e_class != "check" && e_class != "toggle" && e_class != "toggle toggleLast" && e_class != "span_setting" && e_class != "col-4 flagUa flagsBlocks" && e_class != "col-4 flagEn flagsBlocks" && e_class != "col-4 flagRu flagsBlocks" && e_class != "row flagBlock" && e_class != "flag" && e_class != "flagsText flagsTextUa Ua flagActive" && e_class != "flagsText Ru" && e_class != "flagsText En" && e_class != "flagsText flagsTextEn En flagActive" && e_class != "flagsText flagsTextRu Ru flagActive" && e_class != "flag bigFlags" && e_class != "flagsText Ua" && e_class != "fas fa-mouse-pointer leftIncon settungsIcons" && e_class != "far fa-circle rightIcon IconVipLeft settungsIcons" && e_class != "settingsImgMrR" && e_class != "settingsImgMrR SettingsBlackImgs" && e_class != "fas fa-sun leftIncon IconVipRight settungsIcons" && e_class != "fas fa-sun leftIncon IconVipRight settungsIcons" && e_class != "BlackWhite settingsContent" && e_class != "col-3 classMenuForHoverSkull" && e_class != "CursorCryg settingsContent"  && e_class != "settingsImgMrL" && e_class != "ScrollScwipe settingsContent" && e_class != "fas fa-moon rightIcon settungsIcons" && e_class != "settingsModalBlockContent" && e_class != "col-md-4 flagUa flagsBlocks" && e_class != "col-md-4 flagEn flagsBlocks" && e_class != "col-md-4 flagRu flagsBlocks" && e_class != "flagsText flagsTextUa flagActive Ua"){
    $(".settingsModalBlock_2").fadeOut(300);
    check_setting = false;
  }
});
}
});

$(".closeSettings").click(function(){
    $(".settings_end_menu").fadeIn();
    $("body").css("overflow-y", "auto");
    $(".settingsModalBlock_2").fadeOut(500);
});
}

function setting_background(){

  if(window_width_2 < 767){
     if($("#cbx").prop("checked")){
      $(".settingsModalBlock_2").css("background", "#111");
      $(".settings_end_menu").css("color", "#FFF");
      $(".menuMinBock").css("background", "#FFF");
    }
     else{
      $(".settingsModalBlock_2").css("background", "#FFF");
      $(".settings_end_menu").css("color", "#111");
      $(".menuMinBock").css("background", "#111");
    }
  }else{
    $(".settingsModalBlock_2").css("background", "none");
    if($("#cbx").prop("checked")){
      $(".settings_end_menu").css("color", "#FFF");
      $(".menuMinBock").css("background", "#FFF");
  }else{

    if($(window).scrollTop() >= 900){
    $(".settings_end_menu").css("color", "#111");
    $(".menuMinBock").css("background", "#111");
    }else{
    $(".settings_end_menu").css("color", "#FFF");
    $(".menuMinBock").css("background", "#FFF");
    }

  }
}
}


$("#cbx2").click(function(){
if($("#cbx2").prop("checked")){
      var cursor = document.getElementById('cursor');
document.addEventListener('mousemove' , function(e){
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
}); 
  $("body").css("cursor", "none");
  $("#cursor").fadeIn();
}else{
  $("body").css("cursor", "auto");
  $("#cursor").css("display", "none");
}
});

isChecked = $('#cbx3').is(':checked');
$("#cbx3").click(function(){
    isChecked = $(this).is(':checked')
    if($("#cbx3").prop("checked")){
  $(".swipeScroll").css("display", "block");
  $(".SwipeNoActive").addClass("SwipeActive");
  $("*").css("user-select", "none");
}else{
  $(".swipeScroll").css("display", "none");
  $(".SwipeNoActive").removeClass("SwipeActive");
  $("*").css("user-select", "text");
}
});
//window_3
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var window3liTrukytnuk = document.getElementsByClassName("window3liTrukytnuk");
  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
 }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
      $(".window3hrs").addClass("noactive");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

//window_4

$(".window4_button").click(function(){
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
}); 

//lengwiths
var vseUa = $('.Ru, .En');
var vseRu = $('.Ua, .En');
var vseEn = $('.Ua, .Ru');
var body = $("body");

$(".Ru").css("display", "none");
$(".En").css("display", "none");
$(".Ua").css("display", "none");
body.addClass("scrollUa1");

$(".flagUa").click(function(){
  vseUa.fadeOut(0);
  $(".Ua").fadeIn(0);
  body.addClass("scrollUa");
  body.removeClass("scrollRu");
  body.removeClass("scrollEn");
  body.removeClass("scrollUa1");
  $(".flagsTextUa").addClass("flagActive");
});

$(".flagRu").click(function(){
    vseRu.fadeOut(0);
  $(".Ru").fadeIn(0);
  body.addClass("scrollRu");
  body.removeClass("scrollUa");
  body.removeClass("scrollEn");
  body.removeClass("scrollUa1");
  $(".flagsTextRu").addClass("flagActive");
});

$(".flagEn").click(function(){
  vseEn.fadeOut(0);
  $(".En").fadeIn(0);
  body.addClass("scrollEn");
  body.removeClass("scrollUa");
  body.removeClass("scrollRu");
  body.removeClass("scrollUa1");
  $(".flagsTextEn").addClass("flagActive");
});

// меню
$(".menuLi1").click(function(){
    location.reload();
});

$(".menuLi2").click(function(){
      $("body").css("overflow", "hidden");
      $(".perenosHidde1, .perenosHidde2").css("display", "block");
    $(".perenosHidde1").animate({top: 0}, 1000);
    $(".perenosHidde2").animate({bottom: 0}, 1000);
    setTimeout(function(){
    $(".perenos").css("display", "block")
    setTimeout(function(){
     $(".perenosLinia").animate({width: "40%"}, 500);
     setTimeout(function(){
        location.href = 'history/history.html';
     }, 650);
    }, 0);
}, 1120);
});

$(".menuLi3").click(function(){
      $("body").css("overflow", "hidden");
      $(".perenosHidde1, .perenosHidde2").css("display", "block");
    $(".perenosHidde1").animate({top: 0}, 1000);
    $(".perenosHidde2").animate({bottom: 0}, 1000);
    setTimeout(function(){
    $(".perenos").css("display", "block")
    setTimeout(function(){
     $(".perenosLinia").animate({width: "40%"}, 500);
     setTimeout(function(){
        location.href = 'celebrites/celebrites.html';
     }, 650);
    }, 0);
}, 1120);
});

// Запомятовування чекбоксів в Local Storage 
class Stogage {
    constructor(name){
      this.name = name;
      this.hash = {};
      let text = localStorage.getItem(this.name);
      if(text)
        this.hash = JSON.parse(text);
      this.save();  
    }
    get(id){
      return this.item.find(item=>item.id===id)
    }
    add(id, data){
      this.hash[id] = data;
      this.save();
    }
    del(id){
      delete this.hash[id];
      this.save();
    }
    save(){
      this.list = Object.values(this.hash);
      const text = JSON.stringify(this.hash);
      localStorage.setItem(this.name, text);      
    }
}
const checkbox_store = new Stogage('checkbox_store');
checkbox_store.list.forEach(item=>{
  if( item.state === "on" )
     return $('#' + item.id).prop('checked', item.state);
  checkbox_store.del(item.id);
});
$('body').on('change', '.check', function(event){
  let id = $(this).attr('id');
  let state = event.currentTarget.checked?"on":undefined;
  checkbox_store.add(id, {
    id: id,
    state: state
  });
});


colorFun();

$("#cbx").click(function (){
 colorFun();
});


// зміна курсору
$(window).ready(function(){
if($("#cbx2").prop("checked")){
if($(window).width() > 767){
var cursor = document.getElementById('cursor');
    document.addEventListener('mousemove' , function(e){
      if($(window).width() > 767){
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
  }else{$("#cursor").css("display", "none");$("body").css("cursor", "auto");}
}); 
  $("body").css("cursor", "none");
  $("#cursor").fadeIn();
}
}else{
  $("body").css("cursor", "auto");
  $("#cursor").css("display", "none");
}
});

// свайп
isChecked = $('#cbx3').is(':checked');
$(window).ready(function(){
    if($("#cbx3").prop("checked")){
  $(".swipeScroll").css("display", "block");
  $(".SwipeNoActive").addClass("SwipeActive");
  $("*").css("user-select", "none");
}else{
  $(".swipeScroll").css("display", "none");
  $(".SwipeNoActive").removeClass("SwipeActive");
  $("*").css("user-select", "text");
}
  swipe();
});

function swipe(){

var y1;
var y2;
var cursor2 = document.getElementById('cursor2');
    $("body").mousedown(function fun1(e){ 
      if(!isChecked || e.target.id == 'cbx3') return true
      var x = e.clientX;
      var y = e.clientY;
      cursor2.style.left = x + "px";
      cursor2.style.top = y + "px";
      y1 = y;
      // console.log(y1 + " mousedown");
});

    $("body").mouseup(function fun2(e){ 
      if(!isChecked || e.target.id == 'cbx3') return true
      var x = e.clientX;
      var y = e.clientY;
      var scroll = $(window).scrollTop();
      cursor2.style.left = x + "px";
      cursor2.style.top = y + "px";
      var y2 = y;
      // console.log(y2 + " mouseup");
      
   if(y1 > y2){
    var swipeBottom = y1 - y2;
    // console.log(swipeBottom + " swipeBottom")
 $('html, body').stop().animate({
  scrollTop: scroll + swipeBottom + 'px'
}, 600);
        // console.log(scroll + " scroll");
        // console.log("y1 > y2");
      }else{
        var swipeTop = y2 - y1;
         $('html, body').stop().animate({
         scrollTop: scroll - swipeTop + 'px'
}, 600);
        // console.log(scroll + " scroll");
        // console.log("y2 > y1");
      }
  });  
}

//перевірка да надання мови при загрузці сайту
$("body").ready(function(){
  var hah = $("body").hasClass("scrollUa");
  if(hah == true){
  vseUa.fadeOut(0);
  $(".Ua").fadeIn(0);
  body.removeClass("scrollRu");
  body.removeClass("scrollEn");
  $(".flagsTextUa").addClass("flagActive");
}
});

$("body").ready(function(){
  var hah = $("body").hasClass("scrollUa1");
  if(hah == true){
  vseUa.fadeOut(0);
  $(".Ua").fadeIn(0);
  $(".flagsTextUa").addClass("flagActive");
}
});

$("body").ready(function(){
  var hah = $("body").hasClass("scrollRu");
  if(hah == true){
 vseRu.fadeOut(0);
  $(".Ru").fadeIn(0);
  body.removeClass("scrollUa");
  body.removeClass("scrollEn");
  $(".flagsTextRu").addClass("flagActive");
}
});

$("body").ready(function(){
  var hah = $("body").hasClass("scrollEn");
  if(hah == true){
  vseEn.fadeOut(0);
  $(".En").fadeIn(0);
  body.removeClass("scrollUa");
  body.removeClass("scrollRu");
  $(".flagsTextEn").addClass("flagActive");
}
});

let cls = localStorage.getItem('body-class');

if (cls) {
  $("body").addClass(cls);
}

let cls2 = localStorage.getItem('title');

if (cls2) {
  document.title = cls2
}

$(".flagUa").click(function(){
    $("body").addClass("scrollUa");
    document.title = 'головна';
    localStorage.setItem('body-class', 'scrollUa');
    localStorage.setItem('title', 'головна');
    if($("body").hasClass('scrollRu')){
          localstorage.removeItem('body-class', 'scrollRu');
    }
    if($("body").hasClass('scrollEn')){
          localstorage.removeItem('body-class', 'scrollEn');
    }
    
    if($("body").hasClass('scrollUa1')){
          localstorage.removeItem('body-class', 'scrollUa1');
    }
});

$(".flagRu").click(function(){
    $("body").addClass("scrollRu");
    document.title = 'главная';
    localStorage.setItem('body-class', 'scrollRu');
    localStorage.setItem('title', 'главная');
    if($("body").hasClass('scrollUa')){
          localstorage.removeItem('body-class', 'scrollUa');
    }
    if($("body").hasClass('scrollEn')){
          localstorage.removeItem('body-class', 'scrollEn');
    }
    
    if($("body").hasClass('scrollUa1')){
          localstorage.removeItem('body-class', 'scrollUa1');
    }
});

$(".flagEn").click(function(){
    $("body").addClass("scrollEn");
    document.title = 'main';
    localStorage.setItem('body-class', 'scrollEn');
    localStorage.setItem('title', 'main');
    if($("body").hasClass('scrollUa')){
          localstorage.removeItem('body-class', 'scrollUa');
    }
    if($("body").hasClass('scrollRu')){
          localstorage.removeItem('body-class', 'scrollRu');
    }
    
    if($("body").hasClass('scrollUa1')){
          localstorage.removeItem('body-class', 'scrollUa1');
    }
});

if($("body").hasClass("scrollUa1")){
   $("body").ready(function(){
    document.title = 'головна';
   });
}

if($("body").hasClass("scrollUa")){
   $("body").ready(function(){
    document.title = "головна";
   });
}

if($("body").hasClass("scrollRu")){
   $("body").ready(function(){
    document.title = "главная";
   });
}

if($("body").hasClass("scrollEn")){
   $("body").ready(function(){
    document.title = "main";
   });
}


// зміна тем сайту 
$("body").ready(function(){
if($("body").hasClass("BlackDisink")){
  $(".PerehidnuyBlock").css("background", "#111");
  // setTimeout(function(){
  //       $(".PerehidnuyBlock").css("background", "#FFF");
  // }, 2000)
}else{
  $(".PerehidnuyBlock").css("background", "#FFF");
  //  setTimeout(function(){
  //       $(".PerehidnuyBlock").css("background", "#111");
  // }, 2000)
}
});

function colorFun(){
    if(window_width_2 > 767) backgroundBlack = $("body, .PerehidnuyBlockTop, .PerehidnuyBlock, .WhiteMenuBlock, .pashalca");
    else backgroundBlack = $("body, .settingsModalBlock_2, .PerehidnuyBlockTop, .PerehidnuyBlock, .WhiteMenuBlock, .pashalca");
    var backgroundWhite = $(".windows_glaw_text hr, .BlackMenuBlock, .skillbar-bar");
    var colorBlack = $(".flagBlock, .settungsIcons, .BlackText, .pashalcaP");
    var colorWhite = $(".closeSettings, .welcome_p, .glitch, .WhiteText, .pashalcaP");
    var colorDisplayNone = $(".settingsImgMrR, .settingsImgMrL, .loaderImg1, .pashalcaImg_black");
    var colorDisplayBlock = $(".SettingsBlackImgs, .loaderImg2, .pashalcaImg_white");

if($("#cbx").prop("checked")){
   backgroundBlack.css("background", "#111");
   backgroundWhite.css("background", "#FFF");
   colorBlack.css("color", "#111");
   colorWhite.css("color", "#FFF");
   colorDisplayNone.fadeOut(0);
   colorDisplayBlock.fadeIn(0);
   $("body").addClass("BlackDisink");
   $(".settingsModalBlockContent").css("background", "linear-gradient(-135deg, transparent 73px, #FFF 0)");
   $(".flagUa").click(function(){$(".flagsTextUa").css("border-bottom", "2px solid #111");});$(".flagRu").click(function(){$(".flagsTextRu").css("border-bottom", "2px solid #111");});$(".flagEn").click(function(){$(".flagsTextEn").css("border-bottom", "2px solid #111");});
   $(".flagActive").css("border-bottom", "2px solid #111");
   $(".activeWcladka").css("border-bottom", "5px solid #111");
   $(".PerehidnuyBlockTop").css("border-bottom", "1px solid #FFF");
   $(".PerehidnuyBlock").css("border-top", "1px solid #FFF");

   $(window).on("scroll", function() {
    if($(window).width() > 767){
  if ($(window).scrollTop() >= 900) {
     $(".settings_end_menu").css("color", "#FFF");
     $(".menuMinBock").css("background", "#FFF");
     $(".scrollTop").css("display", "block");
     $(".scrollTop").stop();
  }
  else {
     $(".settings_end_menu").css("color", "#FFF");
     $(".menuMinBock").css("background", "#FFF");
     $(".scrollTop").css("display", "none");
     $(".scrollTop").stop();
  }
}
});

}
else{
  backgroundBlack.css("background", "#FFF");
  backgroundWhite.css("background", "#111");
  colorBlack.css("color", "#FFF");
  colorWhite.css("color", "#111");
  colorDisplayNone.fadeIn(0);
  colorDisplayBlock.fadeOut(0);
  $("body").removeClass("BlackDisink");
  $(".settingsModalBlockContent").css("background", "linear-gradient(-135deg, transparent 73px, #111 0)");$(".flagUa").click(function(){$(".flagsTextUa").css("border-bottom", "2px solid #FFF");});$(".flagRu").click(function(){$(".flagsTextRu").css("border-bottom", "2px solid #FFF");});$(".flagEn").click(function(){$(".flagsTextEn").css("border-bottom", "2px solid #FFF");});
  $(".flagActive").css("border-bottom", "2px solid #FFF");
  $(".activeWcladka").css("border-bottom", "5px solid #FFF");
  $(".PerehidnuyBlockTop").css("border-bottom", "1px solid #111");
  $(".PerehidnuyBlock").css("border-top", "1px solid #111");

$(window).on("scroll", function() {
  if($(window).width() > 767){
  if ($(window).scrollTop() >= 900) {
     $(".settings_end_menu").css("color", "#111");
     $(".menuMinBock").css("background", "#111");
     $(".scrollTop").css("display", "block");
     $(".scrollTop").stop();
  }
  else {
     $(".settings_end_menu").css("color", "#FFF");
     $(".menuMinBock").css("background", "#FFF");
     $(".scrollTop").css("display", "none");
     $(".scrollTop").stop();
  }
}
});
}
}

if(window_width_2 > 768){

$("body").ready(function(){

setTimeout(function(){
if($("body").hasClass("BlackDisink")){
  $(".PerehidnuyBlock").css("background", "#111");
}else{
  $(".PerehidnuyBlock").css("background", "#FFF");
}
}, 1900);
});
 
//Пасхалка
var aboutMe = '';
var codeEn = "acker";
var codeUa = "акер";

$(document).on("keydown", startCollect);

function startCollect(e){
   if(e.key == "h" || e.key == "х"){
     $(document).off("keydown", startCollect);
     $(document).on("keydown", collectSymbol);
   }
}

function collectSymbol(e){
  if(e.key == codeEn || aboutMe == codeUa){
    stopCollect();
  }else{
       aboutMe+=e.key;
       if(aboutMe == codeEn || aboutMe == codeUa){
        $(".pashalca").fadeIn();
        $("body").css("overflow", "hidden");
        stopCollect();
       }
  }
  // console.log(e.key);
}
function stopCollect(){
  aboutMe = '';
  $(document).off("keydown", startCollect);
  $(document).off("keydown", collectSymbol);
}
}

$(".pashalca_btn").click(function(){
  $(".skillbar").fadeIn(500);
  var out_time_pashalca = 2000;
  $(".skillbar").each(function(){
    $(this).find('.skillbar-bar').animate({
        width:$(this).attr("data-percent")
    }, out_time_pashalca);
});
  setTimeout(function(){
  $(".pashalca").fadeOut();
  $("body").css("overflow", "auto");
}, out_time_pashalca + 200);
})


$(".settings").click(function(){
    if(window_width_2 < 767){
      $("body").css("overflow", "hidden");
      $("body").addClass("settings_active")
    }
}); 