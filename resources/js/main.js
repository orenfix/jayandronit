$(document).ready(function(){
	$('main').css('opacity',0).animate({ opacity:1 },600,'linear');
    $('.menu').click(function() {
        $('nav ul').slideToggle();
    });

    $(window).resize(function() {
        var windowWidth = $(window).width();
        if ( windowWidth > 970 ) {
            $('nav ul').css('display','flex');
        } else {
            $('nav ul').slideUp(0);
        }
    });

    $('.mawwiage').mouseover (function() {
        if ( $('audio')[0].ended ) {
            $('.play').removeClass('fa-pause').addClass('fa-play');
        } else if ( $('audio')[0].paused ) {
            $('.play').removeClass('fa-pause').addClass('fa-play');
        } else {
            $('.play').removeClass('fa-play').addClass('fa-pause');
        }
    });

    $('.mawwiage').click(function() {
        if ( $('audio')[0].paused ) {
            $('audio')[0].play();
            $('.play').removeClass('fa-play').addClass('fa-pause');
        } else {
            $('audio')[0].pause();
            $('audio')[0].currentTime=0;
            $('.play').removeClass('fa-pause').addClass('fa-play');
        }
    });
 });
   

         