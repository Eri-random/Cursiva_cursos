$(document).ready(function() {
  $('.slider__div').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $('.pagos').slick({
  infinite: true,
  speed: 300,
  slidesToShow:5,
  slidesToScroll:1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

});
