$(function(){

    // .append() — добавляет контент в конец выбранного элемента
    // .appendTo() — добавляет контент в конец выбранного элемента

    // .prepend() — добавляет контент в начало выбранного элемента
    // .prependTo() — добавляет контент в начало выбранного элемента

    // .after() — добавляет контент после выбранного элемента
    // .insertAfter () — добавляет контент после выбранного элемента

    // .before() — добавляет контент перед выбранным элементом
    // .insertBefore() — добавляет контент перед выбранным элементом

    // Получение контента — text(), html(), val()
    // .text() — устанавливает или возвращает контент в выбранном элементе
    // .html() — устанавливает или возвращает контент выбранного элемента (включаю HTML разметку)
    // .val() — устанавливает или возвращает значение из элемента input

    // .first()
    // .last()

    const colorBody = () => {
        $('body').css({
            'background-color': '#295466',
            'color': '#fff',
        });
    }
    colorBody();

    const headerBlock = () => {
        $('h1').wrap('<header>').css({
            border: '2px solid #AFA9C0',
            padding: '15px 19px',
            color: '#AFA9C0',
        });
    }
    headerBlock();

    $('<h3>').insertAfter($('body > header:first-child()')).addClass('h3-class').text('Заголовок H3');
    $('<h2>').insertAfter($('body > header:first-child()')).addClass('h2-class').text('Заголовок H2');

    $('div').first().before('<h4>И снова здравствуйте! Добавили заголовок h4 перед тэгом div</h4>'); // Добавили заголовок h4 перед первым тэгом div
    $('<span>').appendTo('p'); // добавили тэг span в конец элемента p перед закрывающим </p>

    $('div p:nth-child(5)').addClass('p-n5'); // добавляем класс p-n5 пятому элементу p
    $('div p:nth-child(odd)').css({color: '#cc0',})
    $('div p:nth-child(even)').css({color: '#AFA9C0',})
    $('div p:nth-child(6)').css({color: '#c0c',})

    $('ul').insertAfter($('.p-n5')); // Мы можем выбрать элемент на странице и вставить его за другим: Выберем Ul и вставим его после элемента с классом p-n5. 

    $('li').first().css('color', 'red'); // Изменили цвет первого элемента li
    $('li').last().css('color', 'green'); // Изменили цвет последнего элемента li
    $('li').first().append('<span>'); // добавили тэг span в конец первого элемента li перед закрывающим </li>
    $('li').last().append('<em>'); // добавили тэг em в конец последнего элемента li перед закрывающим </li>





    $('<article>').appendTo('body').addClass('articleLast');

    $('<header>').prependTo('.articleLast').addClass('headerLast');
    $('.headerLast').css({
        border: '2px solid #AFA9C0',
        padding: '15px 19px',
        color: '#AFA9C0',
    });

    $('<h2>').prependTo('.headerLast')
        .text(
            'Заголовок для articleLast размещеный в headerLast'
        )
        .css({
            margin: '0',
            color: 'rgb(204, 204, 0)',
            position: 'relative',
            opacity: 0,
        });
    $('.headerLast h2').animate({
        opacity: 1,
    }, 1000);

    $('<p>').insertAfter('.headerLast').text(
        'Добавочный текст в тэг p для articleLast'
    );

    $('body').append('<br />Вот и конец документа. Добавили текст перед закрывающим body'); // Добавили текст перед закрывающим body
});