let h1 = document.createElement("h1");
h1.textContent = "Вложенные Циклы";
h1.classList.add("h1");
document.querySelector("body").appendChild(h1);

let h2 = document.createElement("h2");
h2.textContent = "Таблица умножения";
h2.classList.add("h2");
document.querySelector("body").appendChild(h2);


let wh = document.createElement("div");
wh.classList.add("wh");
document.querySelector("body").appendChild(wh);
let whj = 0;
let whflag = 10;
let whstr = "";
while (whj <= 10) {
  let whk = 0;
  while (whk < 10) {
    if (whk < whflag) {
      whstr += " 0 ";
    } else {
      whstr += " * ";
    }
    whk++;
  }
  whflag--;
  whstr += "<br />";
  whj++;
}
wh.innerHTML = whstr;


let btnOn = document.createElement("button");
btnOn.textContent = "Показать";
document
  .querySelector("body")
  .appendChild(btnOn)
  .classList.add("button", "btn", "btnOn");

let btnOff = document.createElement("button");
btnOff.textContent = "Скрыть";
document
  .querySelector("body")
  .appendChild(btnOff)
  .classList.add("button", "btn", "btnOff");

btnOn.onclick = function tabumnOn() {
  let tabumn = document.createElement("div");
  tabumn.classList.add("tabumn");
  document.querySelector("body").appendChild(tabumn);
  for (let i = 1; i < 10; i++) {
    let blockumn = document.createElement("p");
    blockumn.classList.add("blockumn", `blockumn-${i}`);
    document.querySelector(".tabumn").appendChild(blockumn);
    for (let k = 1; k < 10; k++) {
      blockumn.innerHTML += `<span>${i}*${k}=${i * k}</span>`;
    }
  }
  document.querySelector(".btnOn").disabled = true;
};

btnOff.onclick = function tabumnOff() {
  document.querySelector(".btnOn").disabled = false;
  document.querySelector(".tabumn").remove();
};