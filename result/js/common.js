jQuery(document).ready(function( $ ) {


/************************************/

$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");

});

/************************************/


 $('.scard__thumb-big-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.scard__thumbs'
});

 $('.scard__thumbs').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.scard__thumb-big-slider',
  dots: false,
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

// CATALOG ALSO SLIDER
$(InitCatalogAlsoSlider);
$(document).on("reload", InitCatalogAlsoSlider);
function InitCatalogAlsoSlider() {
  var $sliders = $('.catalog-also-slider:not(.js-swiper-initialized)');
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

// CATALOG ALSO SLIDER
$(InitCatalogPdfSlider);
$(document).on("reload", InitCatalogPdfSlider);
function InitCatalogPdfSlider() {
  var $sliders = $('.catalogs-pdf-slider:not(.js-swiper-initialized)');
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
        slidesPerView: 6,
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

$('a[href*=\\#]:not([href=\\#])').click(function () {
  elementClick = $(this).attr("href");
  destination = $(elementClick).offset().top;
  $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 0}, 1100);
  return false;
});


}); //ready



