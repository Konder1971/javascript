let container = document.createElement("div");
container.classList.add("container");
document.querySelector("body").appendChild(container);

let h1 = document.createElement("h1");
h1.classList.add("h1");
h1.textContent += "DOM";
document.querySelector(".container").appendChild(h1);

let h2 = document.createElement("h2");
h2.classList.add("h2");
h2.textContent += "Работаем с dom";
document.querySelector(".container").appendChild(h2);

let lorem1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
let p1 = document.createElement("p");
p1.classList.add("p1");
p1.innerHTML += lorem1;
document.querySelector(".container").appendChild(p1);

var script = document.createElement("script"); // добавили скрипт на страницу
script.src = "jquery-3.4.1.min.js";
document.body.appendChild(script);

// http://webdiz.com.ua/glava6-rabota-s-dom/sozdanie-dobavlenie-i-udalenie-elementov-html-stranicy/

/*
createElement(elementName):  создает новый элемент в качестве параметра надо передать любой тег html-страницы, возвращает html-элемент
createTextNode(text):  создает текстовый узел и возвращает его же.


appendChild(newNode):  добавляет новый элемент в конец того элемента у которого был вызван этот метод
insertBefore(newNode, referenceNode): добавляет новый узел перед узлом который указан в качестве второго параметра.


getElementById(value): ищет элемент по id
getElementsByTagName(value):  ищет элементы по тегам. Функции надо передать тег, а вернет функция массив или коллекцию элементов
getElementsByClassName(value): ищет элементы по классу, возвращает массив
querySelector(value): выбирает элемент  по селектору. Поддерживаются все селекторы css
querySelectorAll(value):  Аналогично предыдущей функции querySelector тоже ищет элементы по селектору css, но возвращает массив или коллекцию элементов.


childNodes: возвращает коллекцию дочерних узлов  элемента
firstChild: позволяет получить первый дочерний узел элемента
lastChild: позволяет получить последний дочерний узел текущего узла
previousSibling: находит предыдущий элемент, который находится на одном уровне модели DOM (так называемый сестринский элемент)
nextSibling:  находит следующий элемент, который находится на одном уровне с текущим
ownerDocument: вернет корневой узел  элемента
parentNode: возвращает родительский узел найденного элемента
nodeName: позволяет получить имя узла
nodeType: вернет тип узла в виде числа
nodeValue: вернет или установит значение узла в виде простого текста
*/
