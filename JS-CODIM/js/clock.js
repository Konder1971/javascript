// часы  https://codepen.io/StasLiudera/pen/VXwoeJ
var date = new Date(),
hours = date.getHours(),
minutes = date.getMinutes(),
seconds = date.getSeconds();

if (hours > 12) {
hours -= 12;
}

var secondsStartDegree = 360 / 60 * seconds,
minutesStartDegree = 360 / 60 * minutes + 6 / 60 * seconds,
hoursStartDegree = 360 / 12 * hours + 30 / 60 * minutes + 0.5 / 60 * seconds;

var style = document.createElement('style');

style.type = 'text/css';
style.innerHTML = '\
@keyframes clock-hand-rotate--hour {\
from {transform: rotate(' + hoursStartDegree + 'deg)}\
to {transform: rotate(' + (hoursStartDegree + 360) + 'deg)}\
}\
@keyframes clock-hand-rotate--minute {\
from {transform: rotate(' + minutesStartDegree + 'deg)}\
to {transform: rotate(' + (minutesStartDegree + 360) + 'deg)}\
}\
@keyframes clock-hand-rotate--second {\
from {transform: rotate(' + secondsStartDegree + 'deg)}\
to {transform: rotate(' + (secondsStartDegree + 360) + 'deg)}\
}\
.clock__hand--hour {\
animation: clock-hand-rotate--hour 43200s linear infinite;\
}\
.clock__hand--minute {\
animation: clock-hand-rotate--minute 3600s linear infinite;\
}\
.clock__hand--second {\
animation: clock-hand-rotate--second 60s linear infinite;\
}';

document.getElementsByTagName('head')[0].appendChild(style);