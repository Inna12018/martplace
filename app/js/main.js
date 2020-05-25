$(function(){

    $(".rate__star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
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
