let currentSlide = 1;
let $slider = $(".slides");
let slideCount = $slider.children().length;
let slideTime = 3000;
let animationTime = 800;
setInterval(function(){
  $slider.animate({
      marginLeft : '-=100%'
  } , animationTime , function() {
    currentSlide++;
    if(currentSlide === slideCount){
      currentSlide = 1;
      $this.css("margin-left" , "0px")
    }
  })
}, slideTime)

