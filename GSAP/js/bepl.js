gsap.registerPlugin(MotionPathPlugin)

const boxUno = document.querySelector('.uno')
const boxDuo = document.querySelector('.duo')
const boxTre = document.querySelector('.tre')

const btnUno = document.querySelector('.button-uno')
const btnDuo = document.querySelector('.button-duo')
// const btnTre = document.querySelector('.button-tre')

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
  const tl = new gsap.timeline({ yoyo: true, repeat: 1})
  tl.to(boxUno, 20, {
    motionPath: {
      path: [
        { x: 0, y: 0 },
        { x: 200, y: -100 },
        { x: 300, y: 200 },
        { x: 500, y: 500 },
        { x: 800, y: -150 },
        { x: 1000, y: 150 },
        { x: 1600, y: 650 }
      ],
      //type: 'cubic'
      autoRotate: true
    },
    ease: 'power2.out'
  })
}
btnDuo.addEventListener('click', bez, false)
