$(function(){

    // return - выход из функции

    let arr1 = [];
    for (let i = 0; i < 14; i++) {
        arr1[i] = i;
    }
    $('.arr1').text(arr1);

    const headerBlock = () => {
        $('h1').wrap('<header>').css({
            border: '2px solid #AFA9C0',
            padding: '15px 19px',
            color: '#AFA9C0',
        });
    }
    headerBlock();

    $('<h2>').insertAfter($('body > header:first-child()')).addClass('h2-class').text('Заголовок H2');
    
    const doSomething = foo => {
        $('body').css({
            'background-color': '#295466',
        });
    }
    doSomething();

    const colorDiv = () => {
        $('div').css({
            color: '#D65550',
        });
    }
    colorDiv();

    const colorP = function() {
        $('p').css({
            color: '#fff',
        });
    }
    colorP();

});