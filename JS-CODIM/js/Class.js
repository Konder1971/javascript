// constructor - это функция которая запускается при создании обёекта на основе класса
class Test {
  constructor(a, c, d) {
    this.message = a;
    this.cssClass = c;
    this.out = d;
  }
  showTest() {
    document.querySelector(
      this.out
    ).innerHTML = `<p class="${this.cssClass}">${this.message}</p><hr />`;
  }
  myTest() {
    alert(this.message);
  }
}

class Test2 extends Test {
  constructor(a, c, d, icon) {
    super(a, c, d);
    this.icon = icon;
  }
  showIconTest() {
   document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}"><i class="material-icons">${this.icon}</i> ${this.message}</p><hr />`
  }
  myTest() {
    alert('Hi !!! ' + this.message + ' Do')
  }
}