// https://www.w3schools.com/jsref/jsref_obj_date.asp

// выведем текущую дату
let mydate = new Date();
document.querySelector('.mydate').innerHTML = mydate;
document.querySelector('.year').innerHTML = mydate.getFullYear();
document.querySelector('.month').innerHTML = mydate.getMonth()+1;

// выведем текущее время
myTime();
let mytime = setInterval(myTime, 1000);
function myTime() {
  let t = new Date();
  let td = t.toLocaleTimeString();
  document.querySelector('.mytime').innerHTML = td;
};

// Вы находитесь на странице ... секунд
// добавить <body onload="counttime()">
let ct = -1;
function counttime() {
  ct++;
  document.querySelector('.counttime').innerHTML = ct;
  setTimeout('counttime()', 1000);
};