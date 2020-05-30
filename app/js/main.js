$(function(){

    $(".rate__star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
      });  

      $('.template__slider-inner').slick({
        prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
        appendArrows: '.arrows-wrap'

    });



$(".js-range-slider").ionRangeSlider({
  type: "double",
  min: 0,
  max: 1000,
  from: 200,
  to: 500,
  grid: true
});


var mixer = mixitup('.products__inner-mix-box');  
});
