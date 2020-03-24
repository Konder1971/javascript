const h1 = document.querySelector('h1')
const hrH1 = document.querySelector('.hrH1')

const duration = 1
const durationScale = 2
const alpha = 0

const tl = new gsap.timeline()
tl.fromTo(h1, duration, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 }, 1)
tl.fromTo(
  hrH1,
  durationScale,
  { opacity: 0, width: 0 },
  { opacity: 1, width: '100%' }
)