
function ajax(url, method, functionName, dataArrey) {
  let xhttp = new XMLHttpRequest(); // создали запрос
  xhttp.open(method, url, true); // открыли запрос, указали куда посылать
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // сконфигурирвали тип данных
  xhttp.send(dataArrey); // добавили данные и отправили на сервер

  xhttp.onreadystatechange = function() { // проверка состояния сервера
    if (this.readyState == 4 && this.status == 200) {
      functionName(this);
    }
  };

};

function requestData(dataArrey) {
  let out = '';
  for (let key in dataArrey) {
    out += `${key}=${dataArrey[key]}&`
  }
  return out;
}

function f1(data) {
  console.log(data);
}

let a = {
  'name': 'Peter',
  'age': 42,
}

ajax('back.php', 'POST', f1, requestData(a));
