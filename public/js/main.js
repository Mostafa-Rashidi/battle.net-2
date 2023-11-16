import Header from "../module/header.js";
import navbar from "../module/navbar.js";
import slider1 from "../module/slider1.js";
import product from "../module/product.js";
import footer from "../module/footer.js";
Header();
navbar();
slider1();
product();
footer();

// slider-1
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// slider-2
var swiper = new Swiper(".weSwiper", {
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});