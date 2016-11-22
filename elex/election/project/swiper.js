$(document).ready(function () {
    //initialize swiper when document ready
    var swiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      speed: 100,
      keyboardControl: true,
      loop: false,
      onSlideNextStart: function onSlideNextStart(swiper) {
        slideIt('next',swiper.activeIndex);
      },
      onSlidePrevStart: function onSlidePrevStart(swiper) {
        slideIt('prev',swiper.activeIndex);
      },
    })
  });
