let tab = document.querySelectorAll('.tab');

init();

tab.forEach(function(element){
  element.onclick = sowTabs;
});

function init() {
  let tabBody = document.querySelectorAll('.tab-body');
  for(let i=1; i<tabBody.length; i++) {
    tabBody[i].style.display = 'none';
  }
}

function sowTabs() {
  document.querySelector('.tab.active').classList.remove('active');
  let data = this.getAttribute('data');
  let tabBody = document.querySelectorAll('.tab-body');
  for(let i=0; i<tabBody.length; i++) {
    tabBody[i].style.display = 'none';
  }
  document.querySelector(`.tab[data="${data}"]`).classList.toggle('active');
  document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
};