$(document).ready(function(){
    $('.form').on('click','.tab',function(){
        //delete class active
        $('.form').find('.active').removeClass('active');
        //add class active
        $(this).addClass('active');
        $('.tab-form').eq($(this).index()).addClass('active');
    });
});