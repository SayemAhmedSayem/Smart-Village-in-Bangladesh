// Slick Slider Activation - Testimonial Slider
$(document).ready(function () {
  $('.test-slide').slick({
    loop: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-circle-arrow-right"></i></button>',
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-circle-arrow-left"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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
});

// Slick Slider Activation - All Slider
$(document).ready(function () {
  $('.post-slide').slick({
    loop: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angles-right"></i></button>',
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angles-left"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
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
});


// Counter Up Js
$(document).ready(function () {
  $('.counter').counterUp({
    delay: 5,
    time: 1000
  });
});

// Magnific Popup Js
$('.image').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true
  }
});
$('.video').magnificPopup({
  type: 'iframe',
  gallery: {
    enabled: true
  }
});
