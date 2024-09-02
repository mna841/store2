$(function(){
    $('.togggle_btn').on('click', function () {
        console.log("クリックした");
        if ($('#header').hasClass('openn')) {
            $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
        
    });

    $('#mask').on('click', function() {
        $('#header').removeClass('open');
    });
});
