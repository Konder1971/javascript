// https://www.youtube.com/watch?v=sLXKWggE5ww

const t = [
  'Привет Жорик Абрамович\n',
  'Пока Пендаль Карлович\n',
];

function typeText() {
  let line = 0;
  let count = 0;
  let out = '';
  let htmlOut = document.querySelector('.out');

  function typeLine() {
    let interval = setTimeout(function () {
      out += t[line][count];
      htmlOut.innerHTML = out + '|';
      count++;

        if(count >= t[line].length) {
          count = 0;
          line++;
          if(line == t.length) {
            clearTimeout(interval);
            htmlOut.innerHTML = out;
            return true;
          }
        };
        typeLine();
    }, getRandomInt(getRandomInt(350 * 3.0)));
  }

  typeLine();
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

typeText();