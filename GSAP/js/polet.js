gsap.registerPlugin(MotionPathPlugin)

const plane = document.querySelector('.fa-plane')
const btmPlane = document.querySelector('.button')

gsap.set(plane, { rotate: 45 })

// .addPause() - осмтановить ход анимации

function startPlane() {
  const tl = gsap.timeline({ yoyo: true })
  tl.to(plane, {
    duration: 15,
    motionPath: {
      path: [
        { left: 300, top: 0 },
        { left: 600, top: 300 },
        { left: 300, top: 600 },
        { left: 0, top: 300 },
        { left: 300, top: 0 }
      ],
      autoRotate: 45
    }
  })
}
btmPlane.addEventListener('click', startPlane, false)
