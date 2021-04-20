// http://localstorage.ru/gienieratsiia-sluchainykh-chisiel-v-shirokom-intervale-na-javascript/
// генерация случайного числа от 0 до 49
let number = 0;
let min = 0;
let max = 49;
function randomNumberGeneration(min, max) {
    return number = Math.floor(min + Math.random() * (max + 1 - min));
}
randomNumberGeneration(min, max);
document.getElementById('number').innerHTML = number;


$(function(){

    const colorBody = () => {
        $('body').css({
            'background-color': '#295466',
            'color': '#fff',
        });
    }
    colorBody();

    $('<div>').prependTo('body').addClass('top').html('<h1>Заголовок H1</h1>');
    const headerBlock = () => {
        $('h1').wrap('<header>').css({
            color: '#AFA9C0',
            margin: 0,
            opacity: 0,
        });
        $('.top > header').css({
            border: '2px solid #AFA9C0',
            padding: '15px 19px',
        });
    };
    headerBlock();

    animateH1();
    function animateH1() {
        $('.top > header h1')
        .animate({
            opacity: 1,
            padding: '0 0 0 50px',
        }, 1000)
        .animate({ 
            opacity: 0,
            padding: 0,
        }, 1000, animateH1);
    };
    
    $('p').html('<em>' + number + '</em>'); // выводим случайно сгенерованного числа от 0 до 49
    $('span').text(number); // выводим случайно сгенерованного числа от 0 до 49


    let arr = [];
    for (let i = 1; i < 37; i++) {
        arr[i] = i;
    }
    $('#arr').html(arr);
    //document.getElementById('arr').innerHTML = arr;


});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Привет, Vue!',
        title: 'Hello World!' + ' ' + number,
    }
  })



  // сгенерировать 8 уникальных случайных числа от 1 до 100 (http://qaru.site/questions/16745/generate-unique-random-numbers-between-1-and-100)
  // этот вариант (arr8-v1) имеет болше всего положительных отзывов
  var arr8 = []
  while(arr8.length < 8){
      var r = Math.floor(Math.random()*100) + 1;
      if(arr8.indexOf(r) === -1) arr8.push(r);
  }
  document.getElementById('arr8-v1').innerHTML = arr8;

    // сгенерировать 8 (вариант 2) уникальных случайных числа от 1 до 100
    const nums = new Set();
    while(nums.size !== 8) {
    nums.add(Math.floor(Math.random() * 100) + 1);
    }
    document.getElementById('arr8-v2').innerHTML = [...nums];

    // сгенерировать 8 (вариант 3) уникальных случайных числа от 1 до 100
    var arr8v3 = []
    while(arr8v3.length < 8){
    var randomnumber=Math.ceil(Math.random()*100)
    if(arr8v3.indexOf(randomnumber) === -1){arr8v3.push(randomnumber)}  
    }
    document.getElementById('arr8-v3').innerHTML = arr8v3;

    // сгенерировать 8 (вариант 4) уникальных случайных числа от 1 до 100
    const numbers8 = [ ...Array(100).keys() ].map(num => num + 1);
    numbers8.sort(() => Math.random() - 0.5);
    document.getElementById('arr8-v4').innerHTML = numbers8.slice(0, 8);

    // Как рандомизировать (перетасовать) массив JavaScript? 
    // http://qaru.site/questions/12346/how-to-randomize-shuffle-a-javascript-array
    // https://bost.ocks.org/mike/shuffle/