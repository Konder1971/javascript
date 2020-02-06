// https://learn.javascript.ru/while-for
// http://www.cyberforum.ru/javascript/thread565601.html   Бесконечный цикл
/*
setTimeout - функция которая откладывает выполнения определенной части кода, на указанное время. Выполняется однократно.
setInterval -функция которая запускает выполнение части кода через указанный промежуток времени. Выполняется условно бесконечно.
clearTimeout( идентификатор );
clearInterval( идентификатор );
*/

// https://www.youtube.com/watch?v=Tk57Fo6Dl_0
// Вы находитесь на странице ... секунд
let ct = -1;
function counttime() {
  ct++;
  document.querySelector('.counttime').innerHTML = ct;
  setTimeout('counttime()', 1000);
}

// Часы
let data = setInterval(myData, 1000);
function myData() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.querySelector('.data').innerHTML = t;
}




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
var t;
var timer_is_on2 = 0;
let launch = document.querySelector('.launch');
let stop = document.querySelector('.stop');
let proceed = document.querySelector('.proceed');
let back = document.querySelector('.back');
let discharge = document.querySelector('.discharge');
let timerBlock = document.querySelector('.timer');

function timedCount2() {
  timerBlock.innerHTML+= i + ' ';
  i++;
  t = setTimeout(timedCount2, 300);
}

function startCount2() {
  if (!timer_is_on2) {
    //launch.disabled = true;
    timer_is_on2 = 1;
    timedCount2();
  }
}

function stopCount2() {
  clearTimeout(t);
  timer_is_on2 = 0;
};

launch.onclick = function() {
  startCount2();
  //proceed.disabled = false;
}

stop.onclick = function() {
  clearTimeout(t);
  timer_is_on2 = 0;
};

//proceed.disabled = true;
proceed.onclick = function() {
  startCount2();
}

discharge.onclick = function() {
  //launch.disabled = false;
  timerBlock.innerHTML = '';
  i = 0;
  stopCount2();
};



















/*
function countdown() {
  document.querySelector('.timer').innerHTML += i + ' ';
  document.querySelector('.liner').style.width = `${i*10}px`; // https://learn.javascript.ru/styles-and-classes
  i++;
}
function reduce() {
  document.querySelector('.timer').innerHTML += i + ' ';
  i--;
}


launch.onclick = function() {
  launch.disabled = true;
  setTimeout(function() { // кнопка станет активна через 2.5 секунд
    launch.disabled = false;
  }, 2500);
  interval = setInterval(countdown, 200);
}
   
stop.onclick = function() {
  clearInterval(interval);
}

proceed.onclick = function() {
  interval = setInterval(countdown, 200);
}

back.onclick = function() {
  interval = setInterval(reduce, 200);
}

discharge.onclick = function() {
  clearTimeout(interval);
  i = 0;
  interval = 0;
  launch.disabled = false;
  document.querySelector('.timer').innerHTML = '';
}

*/