
let min = 0;
let max = 49;
var summaArr = 0;
const arr = [];
for (i = 0; i < 10; i++) {
    function randomNumberGeneration(min, max) {
        return number = Math.floor(min + Math.random() * (max + 1 - min));
    }
    randomNumberGeneration(min, max);
    arr[i] = number;
    summaArr = summaArr + arr[i];
}
/*
for (i = 0; i < arr.length; i++ ) {
    summaArr = summaArr + arr[i];
}
*/
document.getElementById('arr').innerHTML =  'Выводим массив случайных чиспел: ' + arr;
document.getElementById('summa-arr').innerHTML = 'сумма массива = ' + summaArr ;

// случайный элемент массива
var rand = Math.floor(Math.random() * arr.length);
document.getElementById('slm').innerHTML = 'случайный элемент массива = ' + arr[rand];

// перевод строки в массив
var s = "перевод строки в массив",
arrS = s.split('');
document.getElementById('s').innerHTML = arrS;

// Вывод элемента массива
var matrix = [
    [1, 2, 3],
    [4, '5 - matrix CENTER', 6],
    [7, 8, 9]
];
document.getElementById('matrix').innerHTML = matrix[1][1];


/* Фильтр диапазона
Создайте функцию filterRange(arrA, a, b), 
которая принимает массив чисел arr и возвращает новый массив, 
который содержит только числа из arr из диапазона от a до b. 
То есть, проверка имеет вид a ≤ arrA[i] ≤ b. 
Функция не должна менять arr.
*/
var arrA = [
        [1, 2, 55, 30, 15, 43, 17, 3, 11, 12, 18, 21, 44,],
        [51, 14, 33, 86, 22, 0, 1, 2, 3, 5, 6, 7, 9, 10, 11, 12, 18, 21, 44, 55, 30, 15, 43, 17, 50, 4, 52, 0, 2, 3, 53, 4, 3, 8, 66, 14, 56, 33, 21, 59],
        [7, 8, 9]
    ];
var a = 12;
var b = 49;
function filterRange(arrA, a, b) {
    var arrFR = [];
    for (var i = 0; i < arrA[0].length; i++) {
        if (arrA[0][i] >= a & arrA[0][i] <= b) {
            arrFR.push(arrA[0][i]);
        }
    }
    return arrFR;
}
var arrFR = filterRange(arrA, a, b);
document.getElementById('arrFR').innerHTML = 'Выводим отфильтрованный массив arrFR: ' + arrFR;



