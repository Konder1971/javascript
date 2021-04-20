$(function(){

  // добавление класса в меню для a при переходе на эту страницу 
  // смотреть тут http://qaru.site/questions/163253/jquery-add-class-active-on-menu
  var url = window.location.pathname, 
  urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");
  $('nav a').each(function(){
      if(urlRegExp.test(this.href.replace(/\/$/,''))){
          $(this).addClass('active');
      }
  });



    $('h1').parent().addClass('header-page');
    $('nav').after($('header.header-page'));

    $('article').parent().addClass('section-article'); // выбор всех прямых предков элементов p
    $('article').children('div').addClass('div-content');

   // зацикливание выполнения кода
   setInterval(function(){
     $('nav a').delay(300).fadeToggle(500);
   }, 500);



   // Чтобы выполнять функцию myFuncSuper() раз в 2 секунды, пишем так:
   setInterval(myFuncSuper, 2000);
    function myFuncSuper() {
      $('nav').css({
        'background-color': 'rgba(0,0,0,0.2)',
      });
    }



    $('figure').css({
        'text-align': 'center',
    });


    // Плавный скроллинг вариант 1
    $('nav ul li a').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      scrollToDiv(elWrapped,40);
      return false;
    });
    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;
      $('body,html').animate({
          scrollTop: totalScroll
      }, 500);
    }

    // добавление класса при скроле 100px
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100){  
          $('.header-page').addClass('headerFixed');
      } else {
          $('.header-page').removeClass('headerFixed');
      }
    });


    $('h3 + p').before('<h4>И снова здравствуйте!</h4>');
    $('h3 + h4').css({'color': '#555'});
    $('h3 + h4 + p').prepend('<span>добавочный техт</span>');
    $('h3 + h4 + p > span').css({'display': 'block', 'color': '#666'});
    $('body').append('Вот и конец документа');


    // ВКЛЮЧАЕМ АНИМАЦИЮ ПАНДЫ
    animPanda();
    function animPanda() {
    $('figure img[src="images/panda.png"]').animate({
      'width': '150%',
      'left': '-37.5%',
      'top': '-37.5%'
      }, 3000)
    .animate({
      'width': '100%',
      'left': '0',
      'top': '0'
      }, 3000, animPanda);
    };

    // Растянуть блок div по высоте окна браузера
    function fullHeight(){ // функция узнает размер окна браузера, и задает её для блока nav
      $('nav').css({
          height: $(window).height() + 'px'
      });
    }
    fullHeight(); // задаем высоту при первичной загрузке
    $(window).resize( fullHeight ); // высота при изменении размера окна браузера

    // скрипт для таблицы - Фиксированный заголовок таблицы HTML
    $(window).on("load resize ", function() {
      var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
      $('.tbl-header').css({'padding-right':scrollWidth});
    }).resize();


    // установим обработчик события resize
    $(window).resize(function(){
      // window.location.href = 'http://sundead.zzz.com.ua'
    });
    $(window).resize();// вызовем событие resize
      
});








// В этом примере с помощью метода .resize() и метода .height() мы отслеживаем высоту области просмотра браузера 
// и при её изменении устанавливаем определённый цвет заднего фона элементу <body>.
/*
$(document).ready(function(){
  $(window).resize(function() {
     if ( $(this).height() < 800 && $(this).height() > 600 ) {
      $( "body" ).css( "background-color", "yellow" );
    } else if ( $(this).height() < 600 && $(this).height() > 400 ) {
      $( "body" ).css( "background-color", "green" );
      } else {
    	$( "body" ).css( "background-color", "blue" );
    }
  });
});
*/


// изменение размера
/*
$(document).ready(function(){
  $('button').click(function(){
     $('button').outerHeight(80).outerWidth(300);

     $(this).outerHeight(function( index, currentValue ){
      return currentValue - 50; // возвращаем новое значение высоты элемента (текущее значение минус 50 пикселей) 
    });

  });
});
*/



// взять высоту одного блока и присвоить её другому
/*
$(function() {
  var height = $('figure img[src="images/panda.png"]').outerHeight(); //получаем высоту одного элемента
  $('nav').outerHeight(height).css({
    'background' : '#f0f',
  }); //записываем высоту другому элементу
});
*/



// добавление/удаление класса при скроллинге
/*
$(window).scroll(function(){
  var hh = $('.header-page').height(); //получаем высоту одного элемента 
  var mth = $('nav').outerHeight();
  if ($(this).scrollTop()){
      $('.header-page').addClass("fixed-nav");
      $('.header-page').outerHeight(hh).css({
        'background' : '#c0f',
        'margin-top' : mth,
        'opacity': .7,
      });
      $('.header-page').animate({
      }, 3000);
      $('.header-page').animate({
      }, 3000);
  }
  else{
      $('.header-page').removeClass("fixed-nav");
      $('.header-page').outerHeight(hh).css({
        'background' : '#ccc',
        'margin-top' : 0,
        'opacity': 1,
      });
  }
});
*/

// удаление/добавление атрибутов
/*
$(function() {
  $('*').removeAttr('id class style');
  find($('section').addClass('sect-666')); 


  $( 'section' ) 
    .attr( 'id', function( arr ) {
      return 'section-id' + arr;
  })

  $('main').attr('id','special-' + (new Date()).getTime());
  
});
*/


// добавление обертки для a имеющего текст Link 4
/*
$(function() {
  $('a').wrap( function(){
    if( $(this).text() == 'Link 4' ) {
      return '<div class="div-l4">';
    }
    else {
      return '';
    }
  });
});
*/


/*
$(function() {
  $('nav').height(Math.round($(window).height()/2 - 30));
});
*/


// перезагрузка при изменении окна браузера
/*
$( function() {
  $(window).resize( function() {window.location.href = window.location.href;});
});
*/
