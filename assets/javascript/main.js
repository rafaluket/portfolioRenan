$(document).ready(function () {

    $('.skillsCarousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
      });
});

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar.bg-light");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $nav.toggleClass('mt-5', $(this).scrollTop() < $nav.height());
    });
  });