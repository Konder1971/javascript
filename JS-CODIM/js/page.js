
let number = 0;
let min = 0;
let max = 10;
function randomNumberGeneration(min, max) {
  return number = Math.floor(min + Math.random() * (max + 1 - min));
}
randomNumberGeneration(min, max);
document.getElementById('number').innerHTML = 'Генерация случайного чисела от 0 до 10 = ' + number + '<hr />';
// ***************************************   *************************************** //


var select = document.querySelector('select');
var para = document.querySelector('p.p-select');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;
  if (choice === 'sunny') {
    para.textContent = 'Сегодня хорошо и солнечно. Носите шорты! Идите на пляж, или в парк, и купите мороженое.';
  } else if (choice === 'rainy') {
    para.textContent = 'Дождь падает за окном; возьмите плащ и зонт, и не находитесь слишком долго на улице.';
  } else if (choice === 'snowing') {
    para.textContent = 'Снег падает - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.';
  } else if (choice === 'overcast') {
    para.textContent = 'Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.';
  } else {
    para.textContent = '';
  }
}

var cats = ['Билл', 'Макс', 'Пикси', 'Алиса', 'Жасмин'];
var info = 'Моих кошек зовут: ';
var para2 = document.querySelector('div.cats');
for (var i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    info += 'и ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }
}
para2.textContent = info;



// ************************************************************************** //
// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes/Class_fields
// https://www.youtube.com/watch?v=dB8EGjgEu0s

let privet = document.querySelector('.privet')
/*
function Person(name, family, age) {
  this.name = name
  this.family = family
  this.age = age

  Person.count  += 1
}
Person.count = 0
Person.prototype.sayHello = function sayHello () {
  privet.innerHTML += `Здрасте! Я ${this.name} ${this.family}. Мне ${this.age} лет.<br />`
}
Person.prototype.goToHome = function goToHome () {
  privet.innerHTML += `Персонаж ${this.name} ${this.family} - Самоликвидировался.<br />`
}
const person1 =  new Person('Васисуалий', 'Лоханкин', 24)
const person2 =  new Person('Игнатий', 'Иванопуло', 18)
const person3 =  new Person('Калистрат', 'Свиридонов', 32)
console.log('Количество персон = ' + Person.count)
person1.sayHello()
person1.goToHome()
person2.sayHello()
person2.goToHome()
*/



class Person {
  constructor (name, family, age) {
    this.name = name
    this.family = family
    this.age = age
    Person.count  += 1
  }
  sayHello () {
    privet.innerHTML += `Здрасте! Я ${this.name} ${this.family}. Мне ${this.age} лет.<br />`
  }
  goToHome () {
    privet.innerHTML += `Персонаж ${this.name} ${this.family} - Самоликвидировался.<br />`
  }
  static howMach () {
    console.log('Всего Количество Персон = ' + Person.count)
  }

}

Person.count = 0

const person1 =  new Person('Васисуалий', 'Лоханкин', 24)
const person2 =  new Person('Игнатий', 'Иванопуло', 18)
const person3 =  new Person('Калистрат', 'Свиридонов', 32)
const person4 =  new Person('Иннокентий', 'Зойцман', 46)

console.log('Всего Количество Персон = ' + Person.count)

person1.sayHello()
person1.goToHome()
person2.sayHello()
person2.goToHome()



// ******************************************************* //
// Наследование
let animal = document.querySelector('.animal')
class Animal {
  constructor(name) {
    this.name = name
    this.sound = ''
  }
  voice() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  constructor (name) {
    super(name) //  передали данные на уровень выше
    this.sound = 'Гав'
  }
  voice() {
    console.log('Собака Гавкает');
  }
}

class Cat extends Animal {
  constructor() {
    super(name) //  передали данные на уровень выше
    this.sound = 'Мяу'
  }
}

const dog = new Dog ('Бобик')
const cat = new Cat ('Мурка')
dog.voice()
cat.voice()
