
let one = document.querySelector("#one");
function myClick() {
  console.log("1 click");
  one.classList.add("bg1");
  one.onclick = null; // функция фыполнится только один раз
  let two = document.querySelector("#two");
  two.onclick = myClick2;
}
function myClick2() {
  console.log("22 22");
  let two = document.querySelector("#two");
  two.classList.add("bg2");
  two.onclick = myClick3;
}
function myClick3() {
  console.log("33 33 33");
  three.classList.add("bg3");
  three.onclick = myClick4;
}
function myClick4() {
  console.log("444 44 444 4 4 4");
  four.classList.add("bg4");
}
one.onclick = myClick; // прикрепили функцию к сюбытию на элементе

//////////////////////////////////////////////////////////////////////

document.querySelector("#myoneClick").onclick = function(event) {
  //console.log(event.target);
  if (event.target.id == "myoneClick") {
    four.classList.add("bg1");
  }
};

document.querySelector(".two").onclick = function() {
  event.stopPropagation();
  console.log("cccc yyyy llll");
};
document.querySelector(".three").onclick = function() {
  this.style.display = "none";
};

//////////////////////////////////////////////////////////////////////

// https://www.youtube.com/watch?v=Sczl4lT7huk
document.querySelector("#five").addEventListener(
  "click",
  function() {
    document.querySelector("#five + p").classList.add("bg2", "st5");
  },
  {
    capture: true,
    once: true, // обработчик сработает один раз
    passive: true
  }
);
