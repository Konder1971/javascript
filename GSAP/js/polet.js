gsap.registerPlugin(MotionPathPlugin)

const plane = document.querySelector('.fa-plane')
const btmPlane = document.querySelector('.button')

gsap.set(plane, { rotate: 45 })

// .addPause() - осмтановить ход анимации

const points = [
  { left: 260, top: -37 },
  { left: 600, top: 300 },
  { left: 260, top: 600 },
  { left: 0, top: 300 },
  { left: 260, top: -37 }
]
function startPlane() {
  const tl = new gsap.timeline({ yoyo: true })
  tl.to(plane, {
    duration: 10,
    // type: 'thru',
    autoRotate: true,
    motionPath: {
      path: [
        { left: 260, top: -37 },
        { left: 600, top: 300 },
        { left: 260, top: 600 },
        { left: 0, top: 300 },
        { left: 260, top: -37 }
      ]
    }
  })
}
btmPlane.addEventListener('click', startPlane, false)
