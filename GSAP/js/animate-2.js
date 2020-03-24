const h1 = document.querySelector('h1')
const rot = document.querySelector('.rot')
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
tl.to(rot, durationScale, {
  left: 'calc(-100% + 22px)'
})
tl.fromTo(
  box,
  duration,
  { opacity: 0, scale: 0 },
  { opacity: 1, scale: 1 },
  '-=2'
)
tl.to(box, duration, {
  left: '50%',
  transform: 'translate(-50%, 0)'
})
tl.to(box, duration, { rotate: 360, scale: 0, autoAlpha: alpha })
tl.to(box, duration, { rotate: -360, scale: 1, autoAlpha: 1 }, '+=.5')
tl.to(box, duration, { y: 100 })
tl.to(circle, duration, { x: -70, y: -50, backgroundColor: '#c00' }, '-=1')
tl.to(text, duration, {
  color: 'black',
  scale: 1.5,
  fontSize: 36,
  fontWeight: 900,
  rotate: -45,
  y: -23
})
tl.fromTo(box, durationScale, { rotate: 0 }, { rotate: 90 })
tl.to(box, duration, { rotateX: -180 })
tl.to(h1, duration, { rotateY: -180 }, '-=1')
tl.to(h1, duration, { rotateX: -180, autoAlpha: 0.5 })
tl.to(rot, durationScale, {
  left: 'auto'
})
