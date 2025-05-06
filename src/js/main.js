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
const loading = document.getElementById("loading");

const swiper = new Swiper(".swiper-container", {
  centeredSlides: true,
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  speed: 600,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    320: {
      spaceBetween: 40,
      slidesPerView: 1,
    },
    640: { slidesPerView: 1 },
    1024: { slidesPerView: 2 },
  },

  on: {
    init: () => {
      loading.style.display = "none";
    },
  },
});

const buttonHamburguer = document.getElementById("hamburguer");
const navMobile = document.getElementById("nav__mobile");

buttonHamburguer.addEventListener("click", IsOpen);

function IsOpen() {
  if (navMobile.classList.value == "nav__mobile") {
    navMobile.classList.add("nav__mobile-is-open");
  } else {
    navMobile.classList.remove("nav__mobile-is-open");
  }
}
