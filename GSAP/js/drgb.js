gsap.registerPlugin(Draggable)

// window.addEventListener('load', function() {}, false)

const boxDraggable = document.querySelector('.draggable')
const boxItem = document.querySelectorAll('.item')

Draggable.create(boxItem, {
  bounds: boxDraggable,
  type: 'x,y'
})
