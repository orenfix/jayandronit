$(document).ready(function(){
	$('.photos').css('opacity',0).animate({ opacity:1 },1000,'linear');
	
	$('.mute').click( function (){
    	if( $('.video').prop('muted') ) {
        	$('.video').prop('muted',false);
        	$('.mute').html('Mute');
    	} else {
    		$('.video').prop('muted',true);
    		$('.mute').html('Unmute');
    	}
	});
});