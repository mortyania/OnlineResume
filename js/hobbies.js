$(document).ready(function(){
    $('.hobby-slider').slick({
    accessibility: true, //default
    adaptiveHeight: true, 
    autoplay: true, //default
    autoplaySpeed: 5000,
    arrows: false, //default
    //appendArrows: $('.your-class') //where arrows are attached
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    dots: false
    });
  });
  
  
  