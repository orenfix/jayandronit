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

//YouTube API
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    var player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            width: 300,
            height: 168.7,
            playerVars: { 
                'controls': 0, 
                'modestbranding': 1,
                'loop': 1,
                'autoplay': 1,
                'playlist': 'prjAQqgqyJE',
                'playsinline': 1,
                'enablejsapi': 1,
                'origin': 'https://jayandronit.com'
                },
            videoId: 'prjAQqgqyJE'
            }
         )};  
      
   

         