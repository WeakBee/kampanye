$(document).ready(function(){
    var navbar = $('#navbar');
    var sticky = navbar.offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() >= sticky) {
            navbar.addClass('fixed');
        } else {
            navbar.removeClass('fixed');
        }
    });
});
