const btn1 = document.querySelector('.button1')
const btn2 = document.querySelector('.button2')
const textbox1tp = document.querySelector('.textbox1tp')
const textbox2tp = document.querySelector('.textbox2tp')
const newText1 =
  'С самого, встречи, потому что, как муки боли была в экспликации сама жизнь, бежать, они обвиняют нас просьба представить в болях того времени, из которых можно выбрать то, что есть! Однако для того, отвергая некоторые и брак или стать слепым, никто не знает, как трудоемкое большое удовольствие, тем больше Minneapolis? Миннеаполис имеет суровый для некоторых, и других достойных удовольствий, которое он желает получить ...'
const newText2 =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ipsam perspiciatis quia, accusamus dolores provident sunt fugiat vitae expedita doloremque doloribus ipsum placeat ut eligendi illo ab quas quae! At ut reiciendis atque obcaecati aspernatur vel, nemo voluptatum magnam laboriosam nesciunt maiores consectetur? Consectetur asperiores aliquam, quibusdam velit ullam vel voluptatum dignissimos adipisci, labore iusto minima eveniet. Neque animi, officia laborum...'

function bt1f() {
  gsap.to(textbox1tp, {
    duration: 2,
    text: {
      value: newText1,
      newClass: 'class2',
      delimiter: ' '
    },
    ease: Linear.easeNone
  })
}
btn1.addEventListener('click', bt1f, false)

function bt2f() {
  gsap.to(textbox2tp, {
    duration: 2,
    text: {
      value: newText2,
      newClass: 'class2',
      delimiter: ' '
    }
  })
}
btn2.addEventListener('click', bt2f, false)
