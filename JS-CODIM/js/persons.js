


document.querySelector('h1').classList.add("h1")

let countpersons = document.querySelector('.countpersons')
let personsblock = document.querySelector('.personsblock')

class Person {
  constructor(name, family, gender, age) {
    this.name = name;
    this.family = family;
    this.gender = gender;
    this.age = age;
    Person.count += 1;
  }

  showPerson() {
    personsblock.innerHTML += `${this.name} ${this.family} ${this.gender} ${this.age}.<br />`
  }
  
}

Person.count = 0;

const person1 = new Person("Васисуалий", "Лоханкин", "Мужик", 24);
const person2 = new Person("Игнатий", "Иванопуло", "Мужик", 18);
const person3 = new Person("Калистрат", "Свиридонов", "Мужик", 32);
const person4 = new Person("Иннокентий", "Зойцман", "Мужик", 46);
const person5 = new Person("Рафик", "Кихберджаев", "Осёл", 16);

countpersons.innerHTML += `Всего Количество Персон = ${Person.count}`

let btn1 = document.querySelector('.btn-1')
btn1.onclick = function() {
  person1.showPerson()
}

let btn2 = document.querySelector('.btn-2')
btn2.onclick = function() {
  person2.showPerson()
}

let btn3 = document.querySelector('.btn-3')
btn3.onclick = function() {
  person3.showPerson()
}

let btn4 = document.querySelector('.btn-4')
btn4.onclick = function() {
  person4.showPerson()
}

let btn5 = document.querySelector('.btn-5')
btn5.onclick = function() {
  person5.showPerson()
}