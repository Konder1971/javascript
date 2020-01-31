const a = {
  'ключ': 'значение',
  a: 5,
  b: "Hello",
  z2: "Hi",
  y43: 1999,
  "villa d": 3040
};
a.yyyy = 555;
a.b = "uuu";

delete a.a // удалили ключ a

let k = "e43";

let out = "";
for (let key in a) {
  out += key + ' - ' + a[key] + '<br />';
}
document.querySelector(".out").innerHTML = out;
