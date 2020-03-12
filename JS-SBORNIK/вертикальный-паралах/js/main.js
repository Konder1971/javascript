(function($) {
  const ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  })
  $('section').each(function() {
    new ScrollMagic.Scene({
      triggerElement: this
    })
      .setPin(this)
      .addTo(ctrl)
  })
})(jQuery)
