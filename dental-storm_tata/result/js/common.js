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

  $('.completed-nav .tabs_control_link').click(function (e) {
    e.preventDefault();

    var item = $(this).closest('.completed-nav .tabs_control_item'),
    contentItem = $('.completed-nav .tabs_content_item'),
    itemPosition = item.index();

    contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');

  });


    $('.wrapper').prepend('<span class="eye-3"></span>');


  $('.eye-3').click(function (e) {
    e.preventDefault();
    $('body').toggleClass('active');
  });


  
  



  if ( $('.factories-w').length ) {
    new Swiper('.factories-w', {

      scrollbar: {
        el: '.swiper-scrollbar',      
      draggable: true
    },
    slidesPerView: 4,    
    simulateTouch: true,    
    touchRatio: 2,    
    touchAngle: 45,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      993: {
        slidesPerView: 4, 
        spaceBetween: 30,
        loop: false,
      },      
      769: {   
        slidesPerView: 3, 
        spaceBetween: 20,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      441: {   
        slidesPerView: 2, 
        spaceBetween: 20,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      200: {   
        slidesPerView: 1, 
        spaceBetween: 20,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
    },

  });
  }



  if ( $('.news-gal-cont').length ) {
    new Swiper('.news-gal-cont', {

      scrollbar: {
        el: '.swiper-scrollbar',      
      draggable: true
    },
    slidesPerView: 3,    
    simulateTouch: true,    
    touchRatio: 2,    
    touchAngle: 45,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      993: {
        slidesPerView: 3, 
        spaceBetween: 30,
        loop: false,
      },      
      769: {   
        slidesPerView: 3, 
        spaceBetween: 20,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      441: {   
        slidesPerView: 2, 
        spaceBetween: 20,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      200: {   
        slidesPerView: 1, 
        spaceBetween: 20,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
    },

  });
  }


  //$("#phone_1").mask("+7 (999) 999-99-99");



  $('.link').click(function(e) {
    $('.modal-overlay_1').fadeIn();
    e.preventDefault();
    $('body').addClass('ohi');    
  });


  $('.pop-close, .modal-overlay').click(function(e) {
    e.preventDefault();
    $('.modal-overlay').fadeOut();
    $('body').removeClass('ohi');
  });



  //$('select').fancySelect();

}); //ready

