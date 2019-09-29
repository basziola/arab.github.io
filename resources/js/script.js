$(document).ready(function () {

    $('.js--section').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '60px;'
        });

    $('.js--action-button').click(function () {
        $('html,body').animate({ scrollTop: $('.js--section').offset().top }, 1000);
    });

    $('.js--scroll-to-service').click(function () {
        $('html,body').animate({ scrollTop: $('.js--section-service').offset().top }, 1000);
    });

    $('.js--scroll-to-home').click(function () {
        $('html,body').animate({ scrollTop: $('.js--header-section').offset().top }, 1000);
    });

    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated wobble');
    }, {
            offset: '50%'
        });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated wobble');
    })
});