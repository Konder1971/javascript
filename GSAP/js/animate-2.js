const h1 = document.querySelector('h1')
const hrH1 = document.querySelector('.hrH1')
const btnPlay = document.querySelector('#button-play')
const btnPause = document.querySelector('#button-pause')
const btnReverse = document.querySelector('#button-reverse')
const btnRestart = document.querySelector('#button-restart')
const box = document.querySelector('.box')
const circle = document.querySelector('.circle')
const text = document.querySelector('.text')
const duration = 1
const durationScale = 2
const alpha = 0

function animaPlay() {
  tl.play()
}
function animaPause() {
  tl.pause()
}
function animaReverse() {
  tl.reverse()
}
function animaRestart() {
  tl.restart()
}
btnPlay.addEventListener('click', animaPlay, false)
btnPause.addEventListener('click', animaPause, false)
btnReverse.addEventListener('click', animaReverse, false)
btnRestart.addEventListener('click', animaRestart, false)

const tl = new gsap.timeline({ paused: true })
tl.fromTo(h1, duration, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 }, 1)
// .addPause() - осмтановить ход анимации
tl.fromTo(
  hrH1,
  durationScale,
  { opacity: 0, width: 0 },
  { opacity: 1, width: '100%' }
)
tl.fromTo(box, duration, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 })
tl.to(box, duration, {
  left: '50%',
  transform: 'translate(-50%, 0)'
})
tl.to(box, duration, { rotate: 360, scale: 0, autoAlpha: alpha })
tl.to(box, duration, { rotate: -360, scale: 1, autoAlpha: 1 }, '+=.5')
tl.to(box, duration, { y: 100 })
tl.to(circle, duration, { x: -70, y: -50, backgroundColor: '#6fb936' }, '-=1')
tl.to(text, durationScale, {
  color: 'green',
  scale: 1.5,
  fontSize: 32,
  fontWeight: 'bold',
  rotate: -45,
  y: -20
})
