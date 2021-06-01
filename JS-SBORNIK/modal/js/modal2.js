function showModal() {
  let modalId = this.dataset.modal;
  document.querySelector(modalId).classList.remove('hide');
  document.onkeydown = function(event) {
    if(event.keyCode = 27) closeModal();
  }
};

function closeModal() {
  document.querySelectorAll('.modal-wrap').forEach(function(element){
    element.classList.add('hide');
  });
  document.onkeydown = null;
};

document.querySelectorAll('.modal-show').forEach(function(element){
  element.onclick = showModal;
});

document.querySelectorAll('.madal-close').forEach(function(element){
  element.onclick = closeModal;
});

document.querySelectorAll('.modal-wrap').forEach(function(element){
  element.onclick = closeModal;
});

document.querySelector('.modal').onclick = function() {
  event.stopPropagation()
}



