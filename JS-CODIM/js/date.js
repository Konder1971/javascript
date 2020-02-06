// выведем текущее время
let time = setInterval(myTime, 1000);
function myTime() {
  let t = new Date();
  let td = t.toLocaleTimeString();
  document.querySelector('.time').innerHTML = td;
};

// Вы находитесь на странице ... секунд
// добавить <body onload="counttime()">
let ct = -1;
function counttime() {
  ct++;
  document.querySelector('.counttime').innerHTML = ct;
  setTimeout('counttime()', 1000);
};