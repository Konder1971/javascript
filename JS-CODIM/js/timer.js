// https://learn.javascript.ru/while-for
// http://www.cyberforum.ru/javascript/thread565601.html   Бесконечный цикл
/*
setTimeout - функция которая откладывает выполнения определенной части кода, на указанное время. Выполняется однократно.
setInterval -функция которая запускает выполнение части кода через указанный промежуток времени. Выполняется условно бесконечно.

setInterval(function() {
      // Do something every 5 seconds
}, 5000);

setTimeout(func, delay);

clearTimeout( идентификатор );
clearInterval( идентификатор );
*/

// выведем текущее время
myTime();
let mytime = setInterval(myTime, 1000);
function myTime() {
  let t = new Date();
  let td = t.toLocaleTimeString();
  document.querySelector('.data').innerHTML = td;
};

// https://www.youtube.com/watch?v=Tk57Fo6Dl_0
// Вы находитесь на странице ... секунд
let ct = -1;
function counttime() {
  ct++;
  document.querySelector('.counttime').innerHTML = ct;
  setTimeout('counttime()', 1000);
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


function timedCountPlus() {
  document.querySelector('.timer').innerHTML += i + ' ';
  document.querySelector('.liner').style.width = `${i}px`; // https://learn.javascript.ru/styles-and-classes
  i++;
  t = setTimeout(timedCountPlus, 300);
}

function startCountPlus() {
  if (!timer_is_on2) {
    //launch.disabled = true;
    timer_is_on2 = 1;
    timedCountPlus();
  }
}

function timedCountMinus() {
  timerBlock.innerHTML+= i + ' ';
  i--;
  t = setTimeout(timedCountMinus, 300);
}
function startCountMinus() {
  if (!timer_is_on2) {
    //launch.disabled = true;
    timer_is_on2 = 1;
    timedCountMinus();
  }
}


function stopCountPlus() {
  clearTimeout(t);
  timer_is_on2 = 0;
};
function stopCountMinus() {
  clearTimeout(t);
  timer_is_on2 = 0;
};


launch.onclick = function() {
  startCountPlus();
  /*
  proceed.disabled = false;
  setTimeout(function() { // кнопка станет активна через 2.5 секунд
    launch.disabled = false;
  }, 2500);
  */
}

stop.onclick = function() {
  clearTimeout(t);
  timer_is_on2 = 0;
};

//proceed.disabled = true;
proceed.onclick = function() {
  stopCountMinus();
  startCountPlus();
}

back.onclick = function() {
  stopCountPlus();
  startCountMinus();
}

discharge.onclick = function() {
  //launch.disabled = false;
  timerBlock.innerHTML = '';
  i = 0;
  stopCountPlus();
  stopCountMinus();
  document.querySelector('.liner').style.width = 0;
};