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
  $(".main-menu-popup .nav-item > a").removeClass("open-item")
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
var progressPath = document.querySelector('.progress-wrap path');
var pathLength = progressPath.getTotalLength();

progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

var updateProgress = function () {
  var scroll = $(window).scrollTop();
  var height = $(document).height() - $(window).height();
  var progress = pathLength - scroll * pathLength / height;
  progressPath.style.strokeDashoffset = progress;
};

updateProgress();

$(window).scroll(updateProgress);

var offset = 50;
var duration = 550;

jQuery(window).on('scroll', function () {
  if (jQuery(this).scrollTop() > offset) {
    jQuery('.progress-wrap').addClass('active-progress');
  } else {
    jQuery('.progress-wrap').removeClass('active-progress');
  }
});

jQuery('.progress-wrap').on('click', function (event) {
  event.preventDefault();
  jQuery('html, body').animate({ scrollTop: 0 }, duration);
  return false;
});
