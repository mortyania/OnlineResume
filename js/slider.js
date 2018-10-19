$(document).ready(function(){
  $('.slickreel').slick({
  accessibility: true, //default
  adaptiveHeight: true, 
  autoplay: false, //default
  arrows: true, //default
  //appendArrows: $('.your-class') //where arrows are attached
  prevArrow: '<button type="button" class="slick-prev">Previous</button>',
  nextArrow: '<button type="button" class="slick-next">Next</button>',
  dots: true 
  });

  $('.slickreel').on('beforeChange', function(){
    let currentSlide = $('.slickreel').slick('slickCurrentSlide');
    if(currentSlide === 0){
      $('#slide-zero').fadeOut(500);
    }else if(currentSlide === 1){
      $('#slide-one').fadeOut(500);
    }else if(currentSlide === 2){
      $('#slide-two').fadeOut(500);
    }
  });

  $('.slickreel').on('afterChange', function(){
    let currentSlide = $('.slickreel').slick('slickCurrentSlide');
    if(currentSlide === 0){
      $('#slide-zero').fadeIn(500);      
    }else if(currentSlide === 1){
      $('#slide-one').fadeIn(500);      
    }else if(currentSlide === 2){
      $('#slide-two').fadeIn(500);      
    }
  });

  $('#fyp-image').click(function(){
    $(this).html("<iframe src='https://drive.google.com/file/d/1ztmquLrVtKzuSAjK3ImdTp2wLxqF4Cjg/preview' class='video' width='720' height='576'></iframe>");
  });

  $('#vs-image').click(function(){
    $(this).html("<iframe src='https://drive.google.com/file/d/1Q0jjN3LnQeiC_7oZu_3tMqZPiIRpzKQx/preview' class='video' width='720' height='576'></iframe>");
  });
});


