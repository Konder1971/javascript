// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set

let a = new Set();
a.add(1);
a.add(2);
a.add(3);
a.add("Hello");
a.add(4);
a.add(5);
a.add(1); // этот элемент не добавится в набор
a.add("1"); // этот элемент добавится в набор
// a.delete("Hello"); //удаляет элемент
// a.clear(); // очищает набор

console.log(a);
console.log(a.size); // количество элементов

// проверяем наличие
console.log(a.has(2)); // true - есть
console.log(a.has("2")); // false - нет

// для Set новый рабочий цикл - выведет элементы по порядку
for (let item of a) {
  console.log(item);
}

let arr = [1, 2, 3, 1, 4, 5, "Hello", 5, 1, 3, 8];
let myArr = new Set(arr);
console.log(myArr); // получили уникальные элементы, ничего не продублировалось
console.log(myArr.size); // колличество уникальныч элементов набора

let myArr2 = Array.from(myArr); // преобразует Set в Array
console.log(myArr2);