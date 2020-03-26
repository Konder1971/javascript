gsap.registerPlugin(CSSRulePlugin)

const boxaf = CSSRulePlugin.getRule('.boxcss:after')
const boxcss = CSSRulePlugin.getRule('.boxcss')

gsap.to(boxcss, 2, {
  // duration: 2,
  repeat: -1,
  yoyo: true,
  // delay: 1,
  cssRule: {
    backgroundColor: '#999',
    color: '#000'
  }
})

gsap.to(boxaf, 2, {
  // duration: 2,
  repeat: -1,
  yoyo: true,
  // delay: 1,
  cssRule: {
    backgroundColor: '#600',
    color: 'white'
  }
})

gsap.to('div.cssrul > p', 5, {
  '--first-var': '#cc0',
  // margin: '50px 0 0 0',
  yoyo: true,
  repeat: -1,
  rotateX: -180
  // rotateY: -180,
  // rotateZ: -180,
  // ease: 'back'
})

gsap.to('h1', {
  duration: 2,
  color: '#cc0',
  yoyo: true,
  repeat: -1,
  rotateX: -180
})

// const hrh = CSSRulePlugin.getRule('.hrH1')
gsap.to('hr', {
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  opacity: 0
})
