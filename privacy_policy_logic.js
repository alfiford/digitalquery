// 
$(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
        $('.sticky-top').addClass('sticky-nav').css('top', '0px');
    } else {
        $('.sticky-top').removeClass('sticky-nav').css('top', '-100px');
    }
});