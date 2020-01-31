// https://coursehunter.net/course/prakticheskiy-javascript

let select = document.querySelector('#select-1');
let radio = document.querySelectorAll('input[name="rad-1"]');

select.onchange = function() {
  console.log(select.value);
  //console.log(radio.value);
}

let sendForm = document.querySelector('#send-form');
let form = document.querySelector('form');
sendForm.onclick = function(event) {
  event.preventDefault(); // отмена перезагрузки страинцы при отправки формы
  console.log(serialize(form));
}





document.querySelector(".btn").onclick = () => {
  let radio = document.querySelectorAll('.vibor input[type="radio"]');
  for (i = radio.length; i--; ) {
    if (radio[i].checked) {
      document.querySelector(".vib").innerHTML =
        'Выбран: Option ' + radio[i].value + ' ; ';
    }
  }
  let option = document.querySelectorAll(".vibor select option");
  for (i = option.length; i--; ) {
    if (option[i].selected) {
      document.querySelector(".vib").innerHTML += option[i].innerHTML;
    }
  }
};