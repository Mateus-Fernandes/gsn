$('.itens_diferenciais').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.itens_segmentos').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.itens_depoimentos').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$(".hamburger").click(function () {
  $(".navigation").toggleClass("open_menu");
});

$('header a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'));

  $('li.nav-item a').removeClass('active');
  $(this).addClass('active');
  if (target.length) {

    event.preventDefault();
    var top = (target.offset().top) - 89;
    $('html, body').stop().animate({
      scrollTop: top
    }, 1000);
  }
});

$('.mobile_menu a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'));

  $(".navigation").toggleClass("open_menu");
  if (target.length) {

    event.preventDefault();
    var top = (target.offset().top) - 89;
    $('html, body').stop().animate({
      scrollTop: top
    }, 1000);
  }
});

$('.topa').on('click', function (event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {

    event.preventDefault();
    var top = (target.offset().top) - 89;
    $('html, body').stop().animate({
      scrollTop: top
    }, 1000);
  }
});

AOS.init();

$(document).ready(function () {
  var $videoSrc;
  $('.video-btn').click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);

  $('#ModalVideo').on('shown.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  })
  $('#ModalVideo').on('hide.bs.modal', function (e) {

    $("#video").attr('src', $videoSrc);
  })
 
});

// Sticky navbar
// =========================
$(document).ready(function () {

  var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
      var stickyHeight = sticky.outerHeight();
      var stickyTop = stickyWrapper.offset().top;
      if (scrollElement.scrollTop() >= stickyTop) {
          stickyWrapper.height(stickyHeight);
          sticky.addClass("is-sticky");
      }
      else {
          sticky.removeClass("is-sticky");
          stickyWrapper.height('auto');
      }
  };
  $('[data-toggle="sticky-onscroll"]').each(function () {
      var sticky = $(this);
      var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
      sticky.before(stickyWrapper);
      sticky.addClass('sticky');
      $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
          stickyToggle(sticky, stickyWrapper, $(this));
      });
      stickyToggle(sticky, stickyWrapper, $(window));
  });

  $(".carousel").carousel({
    interval: false,
    pause: true
  });
  
  $( ".carousel .carousel-inner" ).swipe( {
    swipeLeft: function ( event, direction, distance, duration, fingerCount ) {
      this.parent( ).carousel( 'next' );
    },
    swipeRight: function ( ) {
      this.parent( ).carousel( 'prev' );
    },
    threshold: 0,
    tap: function(event, target) {
      window.location = $(this).find('.carousel-item.active a').attr('href');
    },
    excludedElements:"label, button, input, select, textarea, .noSwipe"
  } );
  
  $('.carousel .carousel-inner').on('dragstart', 'a', function () {
    return false;
  });    
});

$(function(){
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      console.log(scroll);
      var os = $('footer').offset().top;
      var ht = $('footer').height();
      if(scroll > (os - 1000)){
          $('.whats_button').addClass('bottom_size');
      }else{
        $('.whats_button').removeClass('bottom_size');
      }
  });
});

document.addEventListener('touchmove', function(event) {
  event = event.originalEvent || event;
  if (event.scale !== 1) {
     event.preventDefault();
  }
}, false);