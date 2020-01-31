// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Indexed_collections
// https://habr.com/ru/company/ruvds/blog/430380/

var arr1 = [];
var arr1 = ["a", 1, true];
/* создали пустой массив, 
Вы говорите интерпретатору о создании нового массива времени выполнения. 
Никакой дополнительной обработки не требуется вообще. */

var arr2 = new Array(); 
var arr2 = new Array("a", 1, true);
/* Вы говорите интерпретатору, я хочу вызвать конструктор "Array" и сгенерировать объект. 
Затем он просматривает контекст выполнения, чтобы найти конструктор для вызова 
и вызывает его, создавая ваш массив.*/

// Следующие выражения создают одинаковые массивы:
// var arr = new Array(element0, element1, ..., elementN);
// var arr = Array(element0, element1, ..., elementN);
// var arr = [element0, element1, ..., elementN];

/* 
Array() это быстрая операция с постоянным временем, которая не выделяет память, 
тогда как [] - это операция с линейным временем, которая устанавливает тип и значение.
var points = new Array();  // Bad
var points = [];           // Good 

Вам никогда не нужно использовать new Object() в JavaScript. Вместо этого используйте литерал объекта {}. 
Аналогично, не используйте new Array(), вместо этого используйте литерал массива []. 
Массивы в JavaScript работают не так, как массивы в Java, и использование синтаксиса, подобного Java, 
смутит вас.

Не используйте new Number, new String или new Boolean. 
Эти формы создают ненужные обертки объектов. Просто используйте простые литералы.

Также проверьте комментарии - new Array(length) форма new Array(length) не служит какой-либо 
полезной цели (по крайней мере, в сегодняшних реализациях JavaScript).
*/


// ***************************************   Массивы Старт  *************************************** //

let arrBox = [];
let arrBoxsumma = 0;
for(i=10; i--;) {
  arrBox[i] = i + 1;
  arrBoxsumma = arrBoxsumma + arrBox[i];
};
document.getElementById('arrbox').innerHTML = 'Создали массив: ' + arrBox;
document.getElementById('arrboxslice').innerHTML = 'Создание копии массива: ' + arrBox.slice();
document.getElementById('arrBoxlength').innerHTML = 'Длинна массива = ' + arrBox.length;
document.getElementById('arrBoxel').innerHTML = 'Доступ к элементу массива №5 = ' + arrBox[5];
document.getElementById('arrBoxsumma').innerHTML = 'Сумма массива равна: = ' + arrBoxsumma;

// Сортируем массив в числовом порядке по убывыющей
arrBox.sort(function(a, b) {
  return b - a;
});
document.getElementById('arrBoxubivanie').innerHTML = 'Отсортировали по убывыющей: ' + arrBox;

// Сортируем массив в числовом порядке по возрастающей 
arrBox.sort(function(a, b) {
  return a - b;
});
document.getElementById('arrBoxvozrastanie').innerHTML = 'Отсортировали по возрастающей ' + arrBox;

// Перемешали массив
arrBox.sort(function(){
  return 0.5 - Math.random();
});
document.getElementById('arrboxSort').innerHTML = 'Перемешали элементы массива: ' + arrBox;

// Перемешали массив вариант 2
function shuffle(arrBox){
	var j, temp;
	for(var i = arrBox.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arrBox[j];
		arrBox[j] = arrBox[i];
		arrBox[i] = temp;
	}
	return arrBox;
}
shuffle(arrBox);
document.getElementById('arrboxSortv2').innerHTML = 'Перемешали элементы массива Вариант 2 = ' + arrBox;

// Вывели cлучайный элемент массива
var arrBoxrand = Math.floor(Math.random() * arrBox.length);
document.getElementById('arrBoxrand').innerHTML = 'Вывели cлучайный элемент массива = ' + arrBox[arrBoxrand];

// Реверс Массива
let arrRev = [1, 'bar', 2, 3, 'tolik', 8, 6, 9, 0, 'polka', 'stena'];
document.getElementById('arrRev').innerHTML = 'Массив arrRev: ' + arrRev;
arrRev.reverse()
document.getElementById('arrReverse').innerHTML = 'Реверс Массива arrRev: ' + arrRev;

// перевод строки в массив
var arrStr = "перевод строки в массив",
arrStr  = arrStr.replace(/\s/g, ''); // убираем пробелы
arrStr = arrStr.split('');
document.getElementById('arrStr').innerHTML = arrStr;

// Создали массив c 1 до 36, пермешали и вывели первых 6ть элементом:
let arrsp = [];
for (i=36; i--;) {
  arrsp[i] = i + 1;
}
function shuffle(arrsp){
	var j, temp;
	for(var i = arrsp.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arrsp[j];
		arrsp[j] = arrsp[i];
    arrsp[i] = temp;
	}
	return arrsp;
}
shuffle(arrsp);
let n = 6;
let ttt = arrsp.slice(0, n);
document.getElementById('arrsp36').innerHTML = arrsp.slice(0, n);


// Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
let arrjoin = ['Ветер', 'Дождь', 'Огонь', 'Земля', 'Метал', 'Сало'];
let arrjoin1 = arrjoin.join(); 
let arrjoin2 = arrjoin.join(', ');  
let arrjoin3 = arrjoin.join(' + '); 
let arrjoin4 = arrjoin.join('');   
let arrjoin5 = arrjoin.join(' ');    
document.getElementById('arrjoin1').innerHTML = arrjoin1;
document.getElementById('arrjoin2').innerHTML = arrjoin2;
document.getElementById('arrjoin3').innerHTML = arrjoin3;
document.getElementById('arrjoin4').innerHTML = arrjoin4;
document.getElementById('arrjoin5').innerHTML = arrjoin5;

// Другой способ преобразования массива в строку - использовать метод toString() 
// ,возможно, проще,чем join() поскольку он не принимает параметр, но это ограничивает его. 
// С join()вы можете указать разные разделители (попробуйте выполнить шаг 4 с другим символом, кроме запятой).
var arroStringtoString = ["Rocket","Flash","Bella","Slugger"];
arroStringtoString.toString();
document.getElementById('arroStringtoString').innerHTML = arroStringtoString;



// Перебор содержимого массива и добавление к элементам 2
let arrColors = ['red', 'green', 'blue', 'grey'];
for (var i = 0; i < arrColors.length; i++) {
  arrColors[i] = arrColors[i] + 2;
}
document.getElementById('arrColors').innerHTML = arrColors;



var employees=[]
employees[0]={name: "George", age: 32, retiredate: "March 12, 2014"}
employees[1]={name: "Edward", age: 17, retiredate: "June 2, 2023"}
employees[2]={name: "Sarah", age: 62, retiredate: "April 30, 2020"}
employees[3]={name: "Christine", age: 58, retiredate: "December 20, 2036"}

employees.sort(function(a, b){ // сортировка по ивозрасту
  return a.age - b.age
});
console.log(employees);
/*
employees.sort(function(a, b){
  var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
  if (nameA < nameB) //сортируем строки по возрастанию
    return -1
  if (nameA > nameB)
    return 1
  return 0 // Никакой сортировки
});
console.log(employees);

employees.sort(function(a, b){
  var dateA=new Date(a.retiredate), dateB=new Date(b.retiredate)
  return dateA-dateB //сортировка по возрастающей дате
});
console.log(employees);
*/

let d = [1,0,0,0,0,0,0];
document.querySelector('.out').innerHTML = d;
let k =0;
document.querySelector('button.btn').onclick = () => {
  if(k < d.length-1) {
    d[k] = 0;
    d[k + 1] = 1;
    k++;
  }
  else {
    document.querySelector('button.btn').disabled = true;
  }
  document.querySelector('.out').innerHTML = d;
}



// ***************************************   Массивы Стоп  *************************************** //




