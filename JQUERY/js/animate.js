$(function(){

// Как зациклить анимацию 
    function moveBlo() {
        var blo = $('.blo');
        var int = setInterval(function() {
            if (parseInt(blo.css('left')) >= 400) {
            blo.css('left', '0');
            }
            blo.animate({
            left: '+=50',
            }, 200);
        }, 1000);
    }
    moveBlo();



    // ЗАПУСТИТЬ АНИМАЦИЮ
    $('#go').on('click', f_startAnimation);
    $('#stopanim').on('click', f_stopAnimation);
    function f_stopAnimation (){
        $('.block').stop();
    }

    function f_startAnimation() {
        $('.block')

        .animate({
            width: '150px',
            height: '150px',
            opacity: 0.2,
        }, 1500 )

        .animate({
            'margin-left': '150px',
            'margin-top': '150px',
            opacity: 1
        }, 1500) 

        .animate({height: '300px', opacity: '0.2'}, "slow")
        .animate({width: '300px', opacity: '0.8'}, "slow")
        .animate({height: '100px', opacity: '0.3'}, "slow")
        .animate({width: '100px', opacity: '1'}, "slow")

        .animate({
            'margin-left': '0',
            'margin-top': '10px',
        }, 2000) 

    };


    // ЗАПУСТИТЬ/ОСТАНОВИТЬ ЗАЦИКЛЕННУЮ АНИМАЦИЮ
    $('#go-2').click(function start(){
        $('.block-2').animate({
            marginLeft: '100%', 
            opacity: '0.4'
        }, 1000)
            .animate({
            'marginLeft': '0', 
            opacity: '0.8'
        }, 1000, start)
    });
    $('#stopanim-2').on('click', f_stopAnimation);
        function f_stopAnimation (){
        $('.block-2').stop();
    }
        
    
});