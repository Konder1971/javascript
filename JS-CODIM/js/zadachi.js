// http://shpargalkablog.ru/2013/08/appendchild-removechild-javascript.html

const container = document.createElement('div')
container.classList.add('container')
document.querySelector('body').appendChild(container)

const du = document.createElement('div')
du.classList.add('du')
document.querySelector('.container').appendChild(du)

const h2du = document.createElement('h2')
h2du.classList.add('h2du')
h2du.textContent += 'Добавление/Удаление элемента при клике'
document.querySelector('.du').appendChild(h2du)

const duButtons = document.createElement('div')
duButtons.classList.add('dubuttons')
document.querySelector('.h2du').after(duButtons)

const dButton = document.createElement('button')
dButton.classList.add('btn')
dButton.textContent += 'Добавить'
document.querySelector('.dubuttons').appendChild(dButton)

const uButton = document.createElement('button')
uButton.classList.add('btn')
uButton.textContent += 'Удалить'
document.querySelector('.dubuttons').appendChild(uButton)

const duContent = document.createElement('div')
duContent.classList.add('ducontent')
document.querySelector('.dubuttons').after(duContent)

uButton.disabled = true
let i = 0
dButton.onclick = function() {
  i++
  if (i >= 0 && i <= 8) {
    const kw = document.createElement('div')
    kw.classList.add('kw', 'kw-' + i)
    kw.innerHTML = i
    document.querySelector('.ducontent').appendChild(kw)
    uButton.disabled = false
    setTimeout(function() {
      kw.classList.add('active')
    }, 200)
  }
  if (i == 8) {
    dButton.disabled = true
  }
}
uButton.onclick = function() {
  if (i >= 0 && i <= 8) {
    duContent.lastChild.remove()
    i--
  }
  if (i > 0 && i < 8) {
    dButton.disabled = false
  }
  if (i == 0) {
    uButton.disabled = true
  }
}

// Генерация и вывод элементов

const zd = document.createElement('div')
zd.classList.add('zd')
document.querySelector('.container').appendChild(zd)

const h2zd = document.createElement('h2')
h2zd.classList.add('h2zd')
h2zd.textContent += 'Генерация и вывод элементов'
document.querySelector('.zd').appendChild(h2zd)

const zdButtons = document.createElement('div')
zdButtons.classList.add('zdbuttons')
document.querySelector('.h2zd').after(zdButtons)

const genButton = document.createElement('button')
genButton.classList.add('btn')
genButton.textContent += 'Генерировать'
document.querySelector('.zdbuttons').appendChild(genButton)

const zapButton = document.createElement('button')
zapButton.classList.add('btn')
zapButton.textContent += 'Вывести'

const chistkaButton = document.createElement('button')
chistkaButton.classList.add('btn')
chistkaButton.textContent += 'Очистить'

const zdContent = document.createElement('div')
zdContent.classList.add('zdcontent')
document.querySelector('.zdbuttons').after(zdContent)

const genNumber = document.createElement('div')
genNumber.classList.add('genumber')
document.querySelector('.zdcontent').appendChild(genNumber)

const genBlocks = document.createElement('div')
genBlocks.classList.add('genblocks')
document.querySelector('.genumber').after(genBlocks)

let int = 0
let z = 1
let number = 0
const min = 8
const max = 16
genButton.onclick = function() {
  numberGen(min, max)
  function numberGen(min, max) {
    return (number = Math.floor(min + Math.random() * (max + 1 - min)))
  }
  genNumber.innerHTML = 'Сгенерировано Блоков: ' + number
  genButton.disabled = true
  document.querySelector('.zdbuttons').appendChild(zapButton)
}

zapButton.onclick = function() {
  if (z >= 1 && z <= number) {
    zapButton.disabled = true
    int = setInterval(zapEl, 100)
    setTimeout(() => zapButton.remove(), 2000)
    setTimeout(() => {
      document.querySelector('.zdbuttons').appendChild(peremeshatButton)
      document.querySelector('.zdbuttons').appendChild(chistkaButton)
    }, 100)
  }
}

function zapEl() {
  if (z <= number) {
    const kwGen = document.createElement('div')
    kwGen.classList.add('kwgen')
    kwGen.innerHTML = z
    setTimeout(() => {
      kwGen.classList.add('active')
      kwGen.classList.add('rotate')
      kwGen.classList.add('opacityNone')
    }, 100)
    document.querySelector('.genblocks').appendChild(kwGen)
    z++
  }
}

chistkaButton.onclick = function() {
  zapButton.disabled = false
  zapButton.remove()
  genButton.disabled = false
  genNumber.innerHTML = ''
  genBlocks.innerHTML = ''
  chistkaButton.remove()
  peremeshatButton.remove()
  genBlocks.classList.remove('kwbox2')
  genBlocks.classList.remove('rotate')
  number = 0
  z = 1
  clearInterval(int)
}

// перемешали блоки div
const peremeshatButton = document.createElement('button')
peremeshatButton.classList.add('btn')
peremeshatButton.textContent += 'Перемешать'
peremeshatButton.onclick = function() {
  genBlocks.classList.add('kwbox2')
  setTimeout(() => {
    genBlocks.classList.add('rotate')
  }, 100)
  function mix(b) {
    for (var c = document.createElement('div'), d = 0; d < b.length; d++) {
      var a = Math.floor(Math.random() * b.length)
      const e = b[d]
      const f = e.parentNode
      var a = b[a]
      const g = a.parentNode
      f.insertBefore(c, e)
      g.insertBefore(e, a)
      f.insertBefore(a, c)
    }
    c.parentNode.removeChild(c)
  }
  mix(document.querySelectorAll('.kwgen'))
}

// Шары
/*
let sh = document.createElement('div');
sh.classList.add('sh');
document.querySelector('.container').appendChild(sh);

let h2sh = document.createElement('h2');
h2sh.classList.add('h2sh');
h2sh.textContent += 'Шары';
document.querySelector('.sh').appendChild(h2sh);

let shButtons = document.createElement('div');
shButtons.classList.add('shbuttons');
document.querySelector('.h2sh').after(shButtons);

let shButton1 = document.createElement('button');
shButton1.classList.add('btn');
shButton1.textContent += 'Кнопка 1';
document.querySelector('.shbuttons').appendChild(shButton1);

let shButton2 = document.createElement('button');
shButton2.classList.add('btn');
shButton2.textContent += 'Кнопка 2';
document.querySelector('.shbuttons').appendChild(shButton2);

let shContent = document.createElement('div');
shContent.classList.add('shcontent');
document.querySelector('.shbuttons').after(shContent);


let shar = document.createElement('div');
shar.classList.add('shar');
document.querySelector('.shcontent').appendChild(shar);
*/

// https://www.youtube.com/watch?v=v6AVfIupNB8
