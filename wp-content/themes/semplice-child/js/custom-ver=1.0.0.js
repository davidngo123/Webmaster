(function($) {

	// VIMEO-CTRLS

	function swapVimeo($video) {
		var newVideoId = $video.attr('data-id');
		$('#vimeo-frame').attr('src', 'http://player.vimeo.com/video/' + newVideoId + '?api=1&player_id=vimeo-frame&autoplay=true');
	}

	$('.vimeo-player--item').on('click', function() {
		if(!$(this).hasClass('is-selected')) {
			$('.vimeo-player--item').removeClass('is-selected');
			$(this).addClass('is-selected');
			swapVimeo($(this));
		}
	});

	if(window.location.hash) {
		var hash = window.location.hash.substring(1);
	}

	$('#vtour-info').on('click', function(){
		var t = this;
		var source = $('#vtour-iframe');
		$(t).hide();
		source.attr({
			src: source.data('src')
		});
		console.log(source.data('src'));
		$('#vtour-exit').removeClass('is-hidden');

		if (typeof ga != 'undefined') {
        	// ga('send', 'event', 'category', 'action', 'label', #);
            ga('send', 'event', 'button', 'click', 'Start Vtour');
        }
	});	

	$('#vtour-exit').on('click', function(){
		$('#vtour-info').show();
		$('#vtour-exit').addClass('is-hidden');
		$('#vtour-iframe').attr('src', '');
		if (typeof ga != 'undefined') {
        	// ga('send', 'event', 'category', 'action', 'label', #);
            ga('send', 'event', 'button', 'click', 'Exit Vtour');
        }
	});

	// END VTOUR
	
})( jQuery );