/*global $, alert, console*/
$(function() {
    'use strict';
    //adjust header height
    var myHeader = $('.header');

    myHeader.height($(window).height());
    $(window).resize(function() {
        myHeader.height($(window).height());


    });


    //  Smooth scroll to div
    $('.links li a').click(function() {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 2000);

    });


    // Trigger Mix it up
    $('#Container').mixItUp();

    //Adjuset listfood Links
    $('.listfood li').click(function() {

        $(this).addClass('selected').siblings().removClass('Selected')
    });

});