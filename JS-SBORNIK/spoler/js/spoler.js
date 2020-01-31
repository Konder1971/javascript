// https://www.youtube.com/watch?v=Cj8hWtm_40M

$(document).ready(function () {

  $('.title').click(function (event) {
    if($('.block').hasClass('accodion')) {
      $('.title').not($(this)).removeClass('active');
      $('.text').not($(this).next()).slideUp(500);
    };
    $(this).toggleClass('active').next().slideToggle(500);
  });

  $('.spoler-title').click(function () {
    $(this).next().slideToggle(500);
    $('.spoler-text').click(function () {
      $(this).slideUp(500);
    });
  })

});