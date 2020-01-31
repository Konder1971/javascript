// генерация случайного числа от 0 до 49
let number = 0;
let min = 0;
let max =49;
function randomNumberGeneration(min, max) {
    return number = Math.floor(min + Math.random() * (max + 1 - min));
}
randomNumberGeneration(min, max);
document.getElementById('number').innerHTML = number;


/*
https://learn.javascript.ru/task/random-int-min-max - Случайное целое от min до max
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random  - Math.random()
https://javascript.ru/manual/method  - Глобальные методы
https://myrusakov.ru/js-random-numbers.html - Генерация случайных чисел
*/