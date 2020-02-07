// https://www.youtube.com/watch?v=J7auwe4rSrw&list=PLM7wFzahDYnEltE-aVGhRHYPwIJn0Xquu&index=27
// http://www.cyberforum.ru/javascript/thread565601.html   Бесконечный цикл

/*
let arr1 = [4,7,9];
for(let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
console.log('---------------------------------');

let arr2 = [44,77,99];
for(let key in arr2) { // для ассоциативного массива
  console.log(key); // вывод ключей
  console.log(arr2[key]); // вывод значений
}
console.log('---------------------------------');

let arr3 = [555,666,888];
for(let item of arr3) {
  console.log(item); // для fot of в качестве ключей выводятся значения
  console.log(arr3[item]); // для fot of получаем undefined
}
console.log('---------------------------------');
*/

// html колекция
let allP = document.getElementsByTagName('p');
let qP = document.querySelectorAll('p');


console.log(allP);
for(let i = 0; i < allP.length; i++) {
  console.log(allP[i]);
}
console.log('---------------------------------');

// для html колекция for in не работает
/*
for(let key in allP) {
  //console.log(allP);
  //console.log(allP[key]);
}
*/


for(let item of allP) {
  console.log(item); 
  //console.log(allP[item]); // для html колекция for of не работает
}
