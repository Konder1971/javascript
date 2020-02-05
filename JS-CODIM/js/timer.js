// https://learn.javascript.ru/while-for
// http://www.cyberforum.ru/javascript/thread565601.html   Бесконечный цикл
/*
setTimeout - функция которая откладывает выполнения определенной части кода, на указанное время. Выполняется однократно.
setInterval -функция которая запускает выполнение части кода через указанный промежуток времени. Выполняется условно бесконечно.
clearTimeout( идентификатор );
clearInterval( идентификатор );
*/

// add inline css
var sheet = document.createElement('style')
sheet.innerHTML = `div.timer{
  border: 2px solid #333; 
  background-color: #efefef; 
  padding: 10px 15px;
  font-size: 24px;
}`;
document.head.appendChild(sheet);


let i = 0;
let interval = 0;
let launch = document.querySelector('.launch');
let stop = document.querySelector('.stop');
let proceed = document.querySelector('.proceed');
let back = document.querySelector('.back');
let discharge = document.querySelector('.discharge');


function countdown() {
  document.querySelector('.timer').innerHTML += i + ' ';
  i++;
}
function reduce() {
  document.querySelector('.timer').innerHTML += i + ' ';
  i--;
}


launch.onclick = function() {
  launch.disabled = true;
  interval = setInterval(countdown, 100);
}
   
stop.onclick = function() {
  clearInterval(interval);
}

proceed.onclick = function() {
  interval = setInterval(countdown, 100);
}

back.onclick = function() {
  interval = setInterval(reduce, 100);
}

discharge.onclick = function() {
  clearTimeout(interval);
  i = 0;
  interval = 0;
  launch.disabled = false;
}