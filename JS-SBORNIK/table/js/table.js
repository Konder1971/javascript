/* Не стоит использовать createElement в цикле, это очень тяжёлая операция. 
Не стоит собирать строку в цикле добавлением текста в конец строки, по сравнению 
с добавлением элемента в массив, это тоже дорогая операция. Поэтому лучше собрать 
фрагменты текста в массив и выполнить join:
*/

let tableArr=['<table>'];
for (i = 1; i < 5; i++) {
    tableArr.push(`<tr><td> td 1 </td><td> td 2 </td><td> td 3 </td></tr>`);
}
tableArr.push('</table>');
document.getElementById('table').innerHTML = tableArr.join('\n');