jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });


  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });




//levels menu
let isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return(isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows())}}

let body = document.querySelector('body');


if ( isMobile.any() ) {
  body.classList.add('touch');
  let arrow = document.querySelectorAll('.menu-arrow');
  arrow.forEach(function (item) {
    let thisLink = item.previousElementSibling;
    let subMenu = item.nextElementSibling;
    let thisArrow = item;

    thisLink.classList.add('parent');
    item.addEventListener('click', function () {      
      subMenu.classList.toggle('open');
      thisArrow.classList.toggle('active');
    });
  });
}
else {
  body.classList.add('mouse')
}






let timerId = setInterval(() => $('.slider-3').css('transform', 'translateX(-1px)'), 1000);


$('.slider-1').slick({
  infinite: true,    
  speed: 6900,
  slidesToScroll: 1,
  autoplay: true,    
  slidesToShow: 4,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 0,  
  arrows: false,
  pauseOnHover: true,  
});

$('.slider-2').slick({
  infinite: true,    
  speed: 6900,
  slidesToScroll: 1,
  autoplay: true,    
  slidesToShow: 4,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 0,
  rtl: true ,
  arrows: false,
  pauseOnHover: true,
})


/************************************/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");

});*/

/************************************/



function popup(openLink, windowEl, closeEl) {  
  $(openLink).click(function(e) {
    e.preventDefault();
    $(windowEl).fadeIn();
    $('body').addClass('ohi');
  });
  $(closeEl).click(function(e) {
    e.preventDefault();
    $(windowEl).fadeOut();
    $('body').removeClass('ohi');
  });
  $('.modal-overlay').click(function () {
    $(this).fadeOut();
    $('body').removeClass('ohi');
  });
  $('.modal-form__block').click(function (e) {
    e.stopPropagation();  
  });
  
}

popup('.link2', '.modal-overlay_2', '.modal-close_2');
popup('.link', '.modal-overlay_1', '.modal-close_1');


$('a[href*=\\#]:not([href=\\#])').click(function () {
  elementClick = $(this).attr("href");
  destination = $(elementClick).offset().top;
  $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 85}, 1100);
  return false;
});


$(window).scroll(function(){
  var wt = $(window).scrollTop();  
  var wh = $(window).height();    
  if (wt > 600) {
    $('.serv-arr-up').show(400);
  }
  else {
   $('.serv-arr-up').hide();
 }
});

if($('select').length) {
  $('select').select2({
    minimumResultsForSearch: -1
  });
}

}); //ready

