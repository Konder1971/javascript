// https://www.youtube.com/watch?v=PSuOPbQQjuk&list=PLM7wFzahDYnEltE-aVGhRHYPwIJn0Xquu&index=28

let arr1 = [4, 5, 12, -8, 200, 1, 0, -2];

let a = arr1.map(function(item, index) {
  console.log(item);
  return item;
});
console.log(a);
document.querySelector(".a").innerHTML = "массив a: " + a + "<hr />";

let b = arr1.map(function(item, index) {
  return item * 2;
});
console.log(b);
document.querySelector(".b").innerHTML = "массив b: " + b + "<hr />";

let c = arr1.map(item => item + 4);
console.log(c);
document.querySelector(".c").innerHTML = "массив c: " + c + "<hr />";

let d = arr1.filter(function(item, index) {
  if (item % 2 == 0) {  // отфильтровали только четные 
    return true; 
  }
});
console.log(d);
document.querySelector(".d").innerHTML = "массив d: " + d + "<hr />";


let e = 'Hello hi mahai';
e = e.split(''); 
console.log(e);
document.querySelector(".e").innerHTML = "разбили строку на массив e: " + e + "<hr />";
