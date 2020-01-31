/*
function open() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'block';
};

function close() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';
};

let openM = document.querySelector('.open');
openM.onclick = open;

let closeM = document.querySelector('.close');
closeM.onclick = close;

document.querySelector('.closePopup').onclick = close;
*/

function open() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'block';
};

function close() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';
};

document.querySelector('.open').onclick = open;
document.querySelector('.close').onclick = close;
document.querySelector('.closePopup').onclick = close;

