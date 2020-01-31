// ttps://jsfiddle.net/om0feqjc/

let arr = [
  "First",
  "Second",
  "Third",
  "Fourth",
  "Шесть",
  "Семь",
  "Восемь",
  "Девять",
  "Десять"
];
function shuffle(arr) {
  return arr.sort(function() {return 0.5 - Math.random()});
}
shuffle(arr);
for(var i=0; i<arr.length; i++){
var li = document.createElement("LI");
li.appendChild(document.createTextNode(arr[i]));
document.querySelectorAll("ol")[0].appendChild(li);
}


// http://www.cyberforum.ru/javascript/thread1979966.html
let arr2 = [
  "First",
  "Second",
  "Third",
  "Fourth",
  "Шесть",
  "Семь",
  "Восемь",
  "Девять",
  "Десять"
];
function shuffle(arr2) {
  return arr2.sort(function() {return 0.5 - Math.random()});
}

var ul = document.querySelectorAll("ul");
for(var i=0; i<ul.length; i++){
  shuffle(arr2);
  for(var j=0; j<arr2.length; j++){
    var li = document.createElement("LI");
    li.appendChild(document.createTextNode(arr2[j]));
    ul[i].appendChild(li);
  }
}











let arrDp = [
  "<span>bl-1</span>",
  "<span>bl-2</span>",
  "<span>bl-3</span>",
  "<span>bl-4</span>",
  "<span>bl-5</span>",
  "<span>bl-6</span>",
  "<span>bl-7</span>",
  "<span>bl-8</span>",
];
/*
function shufflearrDp(arrDp){
	var j, temp;
	for(var i = arrDp.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arrDp[j];
		arrDp[j] = arrDp[i];
		arrDp[i] = temp;
	}
	return arrDp;
}
shufflearrDp(arrDp);

for(var i=0; i<arrDp.length; i++){
  var p = document.createElement("p");
  p.appendChild(document.createTextNode(arrDp[i]));
  p.classList.add('p-'+i)
  document.querySelectorAll("div")[0].appendChild(p);
}
*/

let perm = document.querySelector('.perm');
perm.onclick = function () {
  function shufflearrDp(arrDp){
    var j, temp;
    for(var i = arrDp.length - 1; i > 0; i--){
      j = Math.floor(Math.random()*(i + 1));
      temp = arrDp[j];
      arrDp[j] = arrDp[i];
      arrDp[i] = temp;
    }
    return arrDp;
  }
  shufflearrDp(arrDp);
  for(var i=0; i<arrDp.length; i++){
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(arrDp[i]));
    p.classList.add('p-'+i)
    document.querySelectorAll("div")[0].appendChild(p);
  }
}