// ANIMATION BRAND
var typewriter = new Typewriter("#typewriter", {
  loop: true,
  autoStart: true,
  cursor: "",
});

typewriter
  .pauseFor(2000)
  .typeString(`iuseppe`)
  .pauseFor(2500)
  .changeDeleteSpeed(11)
  .start();

// SLIDER
const swiper = new Swiper(".swiper-container", {
  centeredSlides: true,
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  speed: 600,
  autoplay: {
    delay: 100,
    pauseOnMouseEnter: true,
  },

  on: {
    init: function () {
      console.log("Swiper Carregado.");
    },
  },
});
