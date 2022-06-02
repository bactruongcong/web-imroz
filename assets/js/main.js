$(document).ready(function () {
  $(".carouselmain-items").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    infinite: true,
    easing: "fade",
    infinite: true,
    adaptiveHeight: true,
    dots: true,
  });
});
$(".togle-menu").on("click", function (e) {
  e.preventDefault();
  $(".menu-popup").addClass("open");
  $(".menu-popup > .menu-inner").addClass("open-menu");
  $("html").css({
    overflow: "hidden",
  });
});
$(".close-menu").on("click", function (e) {
  e.preventDefault();
  $(".menu-popup").removeClass("open");
  $(".menu-popup > .menu-inner").removeClass("open-menu");
  $(".main-menu-popup .nav-item > a")
    .siblings(".dropdown-menu")
    .removeClass("active")
    .slideUp("400");
  $("html").css({
    overflow: "",
  });
});
$(".main-menu-popup .nav-item > a").on("click", function (e) {
  e.preventDefault();
  $(this).siblings(".dropdown-menu").toggleClass("active").slideToggle("400");
  $(this).toggleClass("open-item");
  $("html").css({
    overflow: "",
  });
});
