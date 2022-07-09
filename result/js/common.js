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


// CATALOG SIMILARY SLIDER
$(InitCatalogSimilarySlider);
$(document).on("reload", InitCatalogSimilarySlider);
function InitCatalogSimilarySlider() {
  var $sliders = $('.catalog-similary-slider:not(.js-swiper-initialized)');
  if ($sliders.length > 0) {
    $sliders.each(function () {
      var $swiperBlock = $(this);
      
      var swiperOpts = {
        init: true,
        loop: false,
        speed: 300,
        navigation: {
          prevEl: $swiperBlock.find('.swiper-button.prev'),
          nextEl: $swiperBlock.find('.swiper-button.next')
        },
        initialSlide: 0,
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 30,
        pagination: {
          el: $swiperBlock.find('.swiper-pagination'),
          clickable: true,
          type: 'bullets'
        },
        breakpoints: {
          1799: {
            slidesPerView: 5
          },
          1399: {
            slidesPerView: 4
          },
          1199: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          1023: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          767: {
            slidesPerView: 'auto',
            spaceBetween: 10,
          }
        }
      };
      
      var sw = new Swiper($swiperBlock.find('.swiper-container'), swiperOpts);
      $swiperBlock.data('swiper', sw).addClass('js-swiper-initialized');
    });
  }
}


}); //ready



