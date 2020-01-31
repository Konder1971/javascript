// http://webdiz.com.ua/glava-4-stroki/regulyarnye-vyrazheniya-patterny-i-flagi
// https://www.youtube.com/watch?v=WdFg5XfOs04

let exone = document.querySelector('.exone');
let exOne = 'НаЧИНаем изучать регулярные чин выражкния чи javascript';
exone.textContent += exOne;
let patternOne = /чин/ig;
console.log(exOne.search(patternOne)); // search ищет только до первого совпадения
console.log(exOne.match(patternOne));

// i - flag для регистронезависимого поиска
// g - flag для полнотестового поиска ищет все совпадения в строке

let exTwo = 'Начинаем изучать регулярные выражкния...ЧИН';
patternTwo = /чин/gi;
console.log(exTwo.split(' '));
console.log(exTwo.replace(' ', ':')); 
console.log(exTwo.replace(/ /g, ':'));
console.log(exTwo.replace(/изучать/, '$$'));
console.log(exTwo.replace(/изучать/i, 'Сосредотачиваться и $&')); 
console.log(exTwo.replace( /(начинаем) (изучать)/i, '$2 $1' ));


let exThree = 'Камиль камиль kamil';

function myFunc(match, offset, str) {
    //return 'Камиль с большой буквы'
    return match.toUpperCase();
}
console.log(exThree.replace(/камиль/, myFunc));


function secondFunc(match, firstParam, secondParam, offset, str) {
    return secondParam + ' and ' + firstParam;
}
console.log(exThree.replace(/(камиль) (kamil)/, secondFunc));




/*

var str1 = "Я люблю Регулярные выражения!"; // будем искать в этой строке
var reg = /лю/;
console.log( str1.search(reg) ); // 2

// Следующий пример устанавливает значение переменной count в количество вхождений буквы в в строку str:
var str = 'Быть или не быть, вот в чём вопрос.';
var count = 0;
var pos = str.indexOf('в');
while (pos !== -1) {
  count++;
  pos = str.indexOf('в', pos + 1);
}
console.log(count); // отобразит 3

// В следующем примере в журнал попадает сообщение, зависящее от успешности или неуспешности прохождения проверки.
function testInput(re, str) {
  var midstring;
  if (str.search(re) != -1) {
    midstring = ' содержит ';
  } else {
    midstring = ' не содержит ';
  }
  console.log(str + midstring + re);
}
var testString  = 'hey JuDe';
var re = /[A-Z]/g;
testInput(re, testString); // выведет: hey Jude содержит /[A-Z]/g
*/