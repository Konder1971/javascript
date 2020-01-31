// https://openweathermap.org/api
// http://bulk.openweathermap.org/sample/
// Key: 4c845b317133d4af97c720972e177b20

// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4c845b317133d4af97c720972e177b20'

fetch('http://api.openweathermap.org/data/2.5/weather?id=706483&appid=4c845b317133d4af97c720972e177b20')
.then(function (resp) {return resp.json()})
.then(function (data) { 
    console.log(data); 
    document.querySelector('.package-name').textContent = data.name;
    document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
    document.querySelector('.fearures').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
})
.catch( function () { })

// (method) Body,json(): Promise<any>