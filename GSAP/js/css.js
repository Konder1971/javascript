const rule = CSSRulePlugin.getRule('.boxcss:after')
gsap.to(rule, {
  duration: 3,
  cssRule: { backgroundColor: '#600', color: 'white' }
})
