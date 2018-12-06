$(document).ready(function(){
	$('.photos').css('opacity',0).animate({ opacity:1 },1000,'linear');
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
      
   

         