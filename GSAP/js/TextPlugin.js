const h1 = document.querySelector('h1')
const hrH1 = document.querySelector('.hrH1')

const duration = 1
const durationScale = 2

const tl = new gsap.timeline()
tl.fromTo(h1, duration, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 }, 1)
tl.fromTo(
  hrH1,
  durationScale,
  { opacity: 0, width: 0 },
  { opacity: 1, width: '100%' }
)

const tp = document.querySelector('.tp')
const buttonText = document.querySelector('.block-button')
const textBlock = document.querySelector('.block')
const newText =
  'Бихевиоризм (англ. behaviour — поведение) – направление в психологии, изучающее поведение человека как объективный феномен психики. Основоположником бихевиоризма стал американский психолог Джон Уотсон.'

tl.fromTo(tp, duration, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 })

function replaseText() {
  TweenLite.to(textBlock, 10, {
    text: {
      value: newText,
      delimiter: ' ',
      // oldClass: 'textbox1tp',
      newClass: 'class2'
    }
  })
}
buttonText.addEventListener('click', replaseText, false)

const tp2 = document.querySelector('.tp2')
const buttonText2 = document.querySelector('.block-button2')
const textBlock2 = document.querySelector('.block2')
const newText2 =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ipsam perspiciatis quia, accusamus dolores provident sunt fugiat vitae expedita doloremque doloribus ipsum placeat ut eligendi illo ab quas quae! At ut reiciendis atque obcaecati aspernatur vel, nemo voluptatum magnam laboriosam nesciunt maiores consectetur? Consectetur asperiores aliquam, quibusdam velit ullam vel voluptatum dignissimos adipisci, labore iusto minima eveniet. Neque animi, officia laborum...'

tl.fromTo(tp2, duration, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 })

function replaseText2() {
  TweenLite.to(textBlock2, 10, {
    text: {
      value: newText2,
      delimiter: ' ',
      newClass: 'class3'
    }
  })
}
buttonText2.addEventListener('click', replaseText2, false)
