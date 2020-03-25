gsap.registerPlugin(MotionPathPlugin)

const boxUno = document.querySelector('.uno')
const boxDuo = document.querySelector('.duo')
const boxTre = document.querySelector('.tre')

const btnUno = document.querySelector('.button-uno')
const btnDuo = document.querySelector('.button-duo')
const btnTre = document.querySelector('.button-tre')

function simpleAnima() {
  const simpleAnimation = new gsap.timeline({ yoyo: true, repeat: 1 })
  simpleAnimation.staggerTo(
    [boxUno, boxDuo, boxTre],
    1,
    {
      left: 'calc(100% - 80px)',
      delay: 1,
      repeatDelay: 0.5,
      ease: 'none'
    },
    0.1
  )
}
btnUno.addEventListener('click', simpleAnima, false)

function bez() {
  const tl = new gsap.timeline({ yoyo: true, repeat: 1 })
  tl.to(boxUno, {
    duration: 20,
    motionPath: {
      path: [
        { x: 0, y: 0 },
        { x: 200, y: -100 },
        { x: 300, y: 200 },
        { x: 500, y: 500 },
        { x: 1600, y: 650 }
      ]
    },
    ease: 'power2.out'
  })
}
btnDuo.addEventListener('click', bez, false)

function complexTre() {
  const tlComplex = gsap.timeline({ yoyo: true, repeat: 1 })
  tlComplex.to(
    boxUno,
    {
      duration: 20,
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 100, y: -100 },
          { x: 300, y: 0 },
          { x: 500, y: 500 },
          { x: 1600, y: 250 }
        ],
        autoRotate: true
      },
      type: 'thru',
      ease: 'power2.out'
    },
    0
  )
  tlComplex.to(
    boxDuo,
    {
      duration: 20,
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 100, y: 100 },
          { x: 300, y: 240 },
          { x: 500, y: 0 },
          { x: 1600, y: 350 }
        ],
        type: 'thru',
        autoRotate: true
      },
      ease: 'power2.out'
    },
    0
  )
  tlComplex.to(
    boxTre,
    {
      duration: 20,
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 50, y: 100 },
          { x: 300, y: -200 },
          { x: 500, y: 0 },
          { x: 1600, y: 50 }
        ],
        type: 'thru',
        autoRotate: true
      },
      ease: 'power2.out'
    },
    0
  )
}
btnTre.addEventListener('click', complexTre, false)
