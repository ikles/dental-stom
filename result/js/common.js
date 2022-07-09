jQuery(document).ready(function( $ ) {

 $('.swf__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.sdfsfc__slider-nav'
});
 $('.sfdsdf__slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.swf__slider',
  dots: true,
  centerMode: false,
  focusOnSelect: true,
  vertical: true
});


if ( $('.eqslider__slider').length ) {
    $('.eqslider__slider').slick({            
    infinite: true,    
    slidesToShow: 1,
    speed: 600,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    fade: true,    
    dots: true,          
    arrow: true,          
  });
}


}); //ready



