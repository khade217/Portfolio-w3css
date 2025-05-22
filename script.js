$(document).ready(function () {
  // Smooth scrolling for links
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const target = this.hash;
    $('html, body').animate({
      scrollTop: $(target).offset().top - 100
    }, 500);
  });
});