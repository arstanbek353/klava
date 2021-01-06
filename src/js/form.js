// Сообщение об отправке формы
function alertMessage(btn, data, className) {
    $(btn).addClass(className);
    let text = $(btn).text();
    data = 'Отправлено';
    if (className == 'my-error') {
        data = 'Ошибка';
    } else {
        data = 'Отправлено';
    }
    $(btn).text(data);
    function sayBy() {
        $(btn).removeClass(className);
        $(btn).text(text);
    }
    setTimeout(sayBy, 5000);
}

function reset () {
    $('textarea').val('');
    $('input').val('');
};

$(document).ready(function() {

    $('.form.request__form').submit(function(){
        var that = $(this);
        var data = that.serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(true);
                reset ();

            },
            error:function(e){
                console.log(false);
            }
        });
        return false;

    })

});