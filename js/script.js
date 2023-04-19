// A class for adding/removing the active class
function toggleMenu() {
  document.querySelector('.menu__list').classList.toggle('active');
  document.querySelector('.burger').classList.toggle('active');
}

// Attach an event handler to a click on the burger menu
document.querySelector('.burger').addEventListener('click', toggleMenu);
//
$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    pauseOnFocus:false,
    adaptiveHeight:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });
});
