

// Смена фона body скриптом
changeBody();
function changeBody(i) {
  var colors = ['red', 'green', 'blue', 'yellow'];
  if(typeof(i) == 'undefined' || i > colors.length) i = 0;
  $('body').css('background-color', colors[i]);
  setTimeout(changeBody, 3000, i+1);
}




// Смена background-image в div скриптом
// .csa-head = тот самый див с классом "csa-head"
// imgHead = массив картинок, сюда впиши их расположение.
// Где значения "200" это скорость появления и затухания.
// Где значение "8000", это интервал через какой оно будет изменяться (8000 - это 8 секунд)
var imgHead = [
  'images/pic-1.png',
  'images/pic-2.png',
  'images/pic-3.png'
], i=1;
function csaHead(){
if(i > (imgHead.length-1)){
  $('.csa-head').animate({'opacity':'0'},200,function(){
    i=1;
    $('.csa-head').css({'background':'url('+imgHead[0]+')'});
  });
  $('.csa-head').animate({'opacity':'1'},200);
  }else{
    $('.csa-head').animate({'opacity':'0'},200,function(){
      $('.csa-head').css({'background':'url('+imgHead[i]+')'});
      i++;
    });
    $('.csa-head').animate({'opacity':'1'},200);
  }
}
var intervalCsaHead = setInterval(csaHead,2000);



// Один Цикл смена background-image в div скриптом
// Нужно просто остановить таймер.
var imgHead2 = [
  'images/pic-1.png',
  'images/pic-2.png',
  'images/pic-3.png'
], y=1;
function csaHead2(){
  if(y > (imgHead2.length-1)){
    clearInterval(intervalCsaHead2); // Остановка таймера
  }else{
    $('.csa-head2').animate({'opacity':'0'},200,function(){
      $('.csa-head2').css({'background':'url('+imgHead2[y]+')'});
      y++;
    });
    $('.csa-head2').animate({'opacity':'1'},200);
  }
}
var intervalCsaHead2 = setInterval(csaHead2,2000);



// Смена фона скриптом
$('.header__bg:first').addClass('is-current');
setInterval(function(){
  var $next = $('.header__bg.is-current')
  	.removeClass('is-current')
  	.next('.header__bg');
  
  $next.length ? $next.addClass('is-current') : $('.header__bg:first').addClass('is-current');
}, 1500);

