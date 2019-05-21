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

  $(".hamburger").click(function()
  {
      $(".navigation").toggleClass("open_menu");
  });
  
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
  
    $('li.nav-item a').removeClass('active');
    $(this).addClass('active');
    if( target.length ) {
        
        event.preventDefault();
        var top = (target.offset().top);
        $('html, body').stop().animate({
            scrollTop: top
        }, 1000);
    }
  });

  AOS.init();