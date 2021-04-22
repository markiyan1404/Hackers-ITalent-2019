$(window).ready(function(){
  $(".fon").fadeIn();
  setTimeout(function(){
  $(".content").fadeIn();
}, 600);
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
   $(".PerehidnuyBlockTop").css("display", "block");
   $(".closeMenu").fadeOut();
   setTimeout(function(){
    $("body").css("overflow", "auto");
    var menuAnimationDisplayNone = $(".WhiteMenuBlock, .BlackMenuBlock, .menuMinBlock, .menuImg, .moreMenu");
      $(".PerehidnuyBlockTop").fadeOut();
      menuAnimationDisplayNone.css("display", "none");
   }, 1650);
});

//settings
let window_width = $(window).width();

$(document).ready(function(){
  $(window).resize(function(){
    window_width = $(window).width();
    setting_background();
  });
});

$(window).ready(function(){
  colorFun();
});
$("#cbx").click(function(){colorFun();});
$(".settings_end_menu").click(function(){colorFun();});
if(window_width > 0){
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
    $("body").css("overflow", "auto");
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
  $(".settingsIcon").click(function(){
  if(window_width < 767){
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
    $("body").css("overflow-x", "hidden");
      $(".settingsModalBlock_2").fadeOut(500);    
});
}

function setting_background(){

  if(window_width < 767){
     $(".settingsModalBlock_2").css("background", "#111");
  }else{
    $(".settingsModalBlock_2").css("background", "none");
  }
}
function colorFun(){}


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

$(".menuLi3").click(function(){
    location.reload();
});

$("#cbx2").click(function(){
if($("#cbx2").prop("checked")){
// var cursorActiveBlocks = $('.window_button, .window1ButtonText, .menuLi, .settingsIcon, .closeSettings, .menu, .toggle, .dot, .scrollTop, .ulmenu');
// cursorActiveBlocks.addClass("cursorActive");
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
// var cursorActiveBlocks = $('.window_button, .window1ButtonText, .menuLi, .settingsIcon, .closeSettings, .menu, .toggle, .dot, .scrollTop, .ulmenu');
// cursorActiveBlocks.removeClass("cursorActive");
}
});

$(".back").click(function(){
       $(".PerehidnuyBlockTop").css("display", "block");
    setTimeout(function(){
    location.href = "../black_hat.html"
  }, 1650);
});

$(".menuLi1").click(function(){
  if($("#cbx").prop("checked")){
  $(".PerehidnuyBlock").css("background", "#FFF");
}else{
  $(".PerehidnuyBlock").css("background", "#111");
}
  $(".PerehidnuyBlock").css("display", "block");
     setTimeout(function(){
        location.href = '../../../index.html';
     }, 1800);
});

$(".menuLi2").click(function(){
      $("body").css("overflow", "hidden");
      $(".perenosHidde1, .perenosHidde2").css("display", "block");  
    $(".perenosHidde1").animate({top: 0}, 1000);
    $(".perenosHidde2").animate({bottom: 0}, 1000);
    setTimeout(function(){
    $(".perenos01").css("display", "block")
    setTimeout(function(){
     $(".perenosLinia01").animate({width: "40%"}, 500);
     setTimeout(function(){
        location.href = '../../../history/history.html';
     }, 650);
    }, 0);
}, 1120);
});

$(".menuLi3").click(function(){
  location.reload();
});

// простенький класс, для упрощения сохранения 
// и чтения массивов объектов в localStorage
class Stogage {
    constructor(name){
      // конструктор. создает в localStorage 
      // именованное хранилище
      // запоминаем название именованного хранилища
      this.name = name;
      // создаем ассоциативный массив в котором для
      // быстрого доступа будут кэшироваться объекты
      // сохраняемые в именованном хранилище
      this.hash = {};
      // если в localStorage уже есть данные 
      // сохраненые под ключем с именем this.name
      // то считываем их в this.hash
      let text = localStorage.getItem(this.name);
      if(text)
        this.hash = JSON.parse(text);
      // сохраняем ассоциативный массив this.hash в
      // localStorage под именем this.name 
      this.save();  
    }
    get(id){
      // получить значение по его id из именованного хранилища 
      // с именем this.name
      return this.item.find(item=>item.id===id)
    }
    add(id, data){
      // сохранить значение по его id в именованном хранилище
      // с именем this.name
      this.hash[id] = data;
      this.save();
    }
    del(id){
      // удалить значение по его id в именованном хранилище
      // с именем this.name
      delete this.hash[id];
      this.save();
    }
    save(){
      // преобразуем ассоциативный массив this.hash в массив list
      this.list = Object.values(this.hash);
      
      // преобразуем массив list в строку text
      const text = JSON.stringify(this.hash);
      
      // сохраняем строку text в localStorage под
      // именем this.name
      localStorage.setItem(this.name, text);      
    }
}
// создаем объект класса Stogage для хранения данных о состоянии checkbox-в в localStorage
const checkbox_store = new Stogage('checkbox_store');
// восстанавливает состояния checkbox-в сохраненные в localstorage checkbox_store
checkbox_store.list.forEach(item=>{
  // если есть такой элемент, выставляем ему запомненное состояние
  if( item.state === "on" )
     return $('#' + item.id).prop('checked', item.state);
  checkbox_store.del(item.id);
});
// устанавливаем обработчик для фиксации изменения состояния checkbox-в с классом check
$('body').on('change', '.check', function(event){
  let id = $(this).attr('id');
  let state = event.currentTarget.checked?"on":undefined;
  checkbox_store.add(id, {
    id: id,
    state: state
  });
});

$(window).ready(function(){
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

var titleUa = "Гарі Маккінон";
var titleRu = "Гэри Маккиннон";
var titleEn = "Gary Mckinnon";

$(".flagUa").click(function(){
    $("body").addClass("scrollUa");
    document.title = titleUa;
    localStorage.setItem('body-class', 'scrollUa');
    localStorage.setItem('title', titleUa);
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
    document.title = titleRu;
    localStorage.setItem('body-class', 'scrollRu');
    localStorage.setItem('title', titleRu);
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
    document.title = titleEn;
    localStorage.setItem('body-class', 'scrollEn');
    localStorage.setItem('title', titleEn);
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
    document.title = titleUa;
   });
}

if($("body").hasClass("scrollUa")){
   $("body").ready(function(){
    document.title = titleUa;
   });
}

if($("body").hasClass("scrollRu")){
   $("body").ready(function(){
    document.title = titleRu;
   });
}

if($("body").hasClass("scrollEn")){
   $("body").ready(function(){
    document.title = titleEn;
   });
}

 $(".settings").click(function(){
    if(window_width < 767){
      $("body").css("overflow", "hidden");
    }
}); 