"use strict";

$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  dots: false,
  responsive: [{
    breakpoint: 1424,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 800,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});