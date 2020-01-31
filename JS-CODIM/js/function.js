// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// https://habr.com/ru/company/ruvds/blog/430382/
// https://coursehunter.net/course/prakticheskiy-javascript
// аргументы функций -  урок 19 бонус

let number = 0;
let min = 0;
let max = 10;
function randomNumberGeneration(min, max) {
  return (number = Math.floor(min + Math.random() * (max + 1 - min)));
}
randomNumberGeneration(min, max);
document.getElementById("number").innerHTML =
  "Генерация случайного числа от 0 до 10 = " + number + "<hr />";
// *************************************** //

const myFunction1 = function() {
  // объявление обычной функции
  //...
};

const myFunction2 = () => {
  // объявление стрелочной функции
  //...
};



const myFunction3 = (a, b) => a + b;
console.log(myFunction3(1, 2)); //3

const myFunction4 = a => a / 2;
console.log(myFunction4(8)); //4

const myFunction5 = () => ({ value: "test" });
const obj5 = myFunction5();
console.log(obj5.value); //test
(function() {
  document.querySelector("h1").innerHTML += " Function";
})();


function test(a, c, d) {
  let b = `<p class="${c}">${a}</p><hr />`;
  document.querySelector(d).innerHTML = b;
}
let m = new Test("My Message", "cp", ".test");
let m2 = new Test2("My New Message", "cp2", ".test2", "account_balance");
m.showTest();
m2.showIconTest();
m.myTest();
m2.myTest();




function f1(z) {
  let zz = document.querySelector('#'+z);
  zz.innerHTML += ' Добавили Привет'; 
}
f1('one');
f1('two');


function umn(a = 1, b = 2, c = -0.0124){
  // b ? b=b : b = 2;  - тернарный оператор, усли b не определено ему присвоится значение 2
  return (a * b)/c;
}
document.querySelector('.umn').innerHTML += ' ' + umn(31, 18);






