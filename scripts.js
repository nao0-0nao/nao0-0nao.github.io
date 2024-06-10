// scripts.js
$(document).ready(function() {
    $('.hamburger').click(function() {
        $('.mobile-nav').slideToggle();
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        $('.main-content').css('opacity', 1 - scroll / 500);
    });
});