function random(number) {
    return Math.ceil(Math.random() * number);
}

let name = prompt('Укажи Своё Имя');
while (name == '' || name == null) {
    name = prompt('Сука Имя Укажи');
}

let number = random(10);
let guess = prompt('Тебя звать ' + name + '\n\r' + 'Компьютер задумал число от 1 до 10' +
    '\n\r' + 'Угадай Сука');
let numberOfattempts = 1;

while (guess != number) {
    if (guess < number) {
        guess = prompt('больше')
        numberOfattempts = numberOfattempts + 1
    }
    if (guess > number) {
        guess = prompt('меньше');
        numberOfattempts = numberOfattempts + 1
    }
}
document.getElementById('namber').innerHTML = 'Угадал Сука\n\r' + 'Комп загадал ' + number +
    '\n\r' + 'Понадобилось: ' + numberOfattempts + ' попыток';