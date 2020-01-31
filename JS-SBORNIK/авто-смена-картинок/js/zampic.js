
// Замена картинки скриптом 1
var image_count = 3;
var interval = 2000; //пауза
var time_out = 15; //скорость смены картинки
var i = 3;
var timeout;
var opacity = 100;
function change_image() {
  opacity--;
  var j = i + 1;
  var current_image = "img_" + i;
  if (i == image_count) j = 1;
  var next_image = "img_" + j;
  document.getElementById(current_image).style.opacity = opacity / 100;
  document.getElementById(current_image).style.filter =
    "alpha(opacity=" + opacity + ")";
  document.getElementById(next_image).style.opacity = (100 - opacity) / 100;
  document.getElementById(next_image).style.filter =
    " alpha(opacity=" + (100 - opacity) + ")";
  timeout = setTimeout("change_image()", time_out);
  if (opacity == 1) {
    opacity = 100;
    clearTimeout(timeout);
    i++;
    if (i > image_count) i = 1;
    timeout = setTimeout("change_image()", interval);
  }
}
change_image();



// Замена картинки скриптом 2
var images  = ['images/pic-1.png', 'images/pic-2.png', 'images/pic-3.png'],
    length  = images.length,
    index   = 1;
setInterval(function() {
    if(index == length) index = 0;
    document.getElementById('image_id').src = images[index++];
}, 1000);



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


