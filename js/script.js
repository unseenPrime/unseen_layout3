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
//
const feedbackBtn = document.getElementsByClassName("header__feedback-btn")[0];
const feedbackFormWrapper = document.getElementsByClassName("feedback-form-wrapper")[0];
const closeBtn = document.getElementsByClassName("feedback-form__close-btn")[0];

feedbackBtn.addEventListener("click", () => {
  feedbackFormWrapper.style.display = "flex";
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    feedbackFormWrapper.style.opacity = "1";
  }, 10);
});

closeBtn.addEventListener("click", () => {
  feedbackFormWrapper.style.opacity = "0";
  document.body.style.overflow = "visible";
  setTimeout(() => {
    feedbackFormWrapper.style.display = "none";
  }, 500);
});


feedbackFormWrapper.addEventListener("click", (event) => {
  if (event.target === feedbackFormWrapper) {
    feedbackFormWrapper.style.opacity = "0";
    document.body.style.overflow = "visible";
    setTimeout(() => {
      feedbackFormWrapper.style.display = "none";
    }, 500);
  }
});
