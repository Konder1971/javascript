gsap.registerPlugin(CSSRulePlugin)
const rule = CSSRulePlugin.getRule('.boxcss:after')
gsap.to(rule, {
  duration: 1,
  cssRule: { backgroundColor: '#600', color: 'white' }
})
