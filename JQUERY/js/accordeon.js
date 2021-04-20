
    $(document).ready(function() {
      $('#accordeon .acc-head').on('click', f_acc); //прикрепляем клик по заголовкам acc-head
    });
    function f_acc(){
      $('#accordeon .acc-body').not($(this).next()).slideUp(1000); //скрываем все кроме того, что должны открыть
      $(this).next().slideToggle(2000); // открываем или скрываем блок под заголовоком, по которому кликнули
    };