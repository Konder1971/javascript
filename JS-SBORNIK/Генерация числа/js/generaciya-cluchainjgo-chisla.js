/*
https://learn.javascript.ru/task/random-int-min-max - Случайное целое от min до max
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random  - Math.random()
https://javascript.ru/manual/method  - Глобальные методы
https://myrusakov.ru/js-random-numbers.html - Генерация случайных чисел
*/



// Генерация случайных чисела от - до
function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}
document.getElementById('sch1').innerHTML = 'Генерация случайного числа от 5 до 66 = ' + randomInteger(5, 66);