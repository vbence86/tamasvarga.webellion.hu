(function(window, document, undefined){
	function getScrollPosition(el){
		if (!el)
			return;
		var offset = $(el).offset(),
			scrollTop = parseInt(offset && offset.top);
		return $(document).scrollTop() - scrollTop;
	}
	$(document).ready(function(){
		// Scroll to the menus
		(function(){
			var scroll_to = function(element, callback){
				if (!$(element).position()){
					window.location = '/' + element.toString();
					return;
				}
				var top = $(element).position().top;
				$('body,html').animate({
						scrollTop: top - 80
				}, 800, callback);
			};
			$('#menu-whyamihere, #carousel-whyamihere').click(function(e){
				e.preventDefault();
				scroll_to('#whyamihere');
			});
			$('#menu-hire-me').click(function(e){
				e.preventDefault();
				scroll_to('#hire-me');
			});				
			$('#menu-gallery').click(function(e){
				e.preventDefault();
				scroll_to('#gallery');
			});			
			$('#menu-contact-me').click(function(e){
				e.preventDefault();
				scroll_to('#contact-me');
			});			
		})();
		// Parallex events
		(function(){
			function fadeNavigator(scrollTop){
				var $navbar = $('#navbar'),
					opacity;
				opacity = scrollTop > 0 
					? Math.max(1 - scrollTop / 300, 0) 
					: 1;
				$navbar.css({opacity:opacity});				
			}
			var hire_me_text_triggered = false;
			function slideHireMeText(scrollTop){
				if (hire_me_text_triggered)
					return;
				var $hire_me_text,
					animation;			
				$hire_me_text = $('#hire-me-text');
				if (getScrollPosition($hire_me_text) < -500){
					return;
				}
				$hire_me_text.css({
					  '-webkit-transform': 'translate(0px)',
					     '-moz-transform': 'translate(0px)',
					      '-ms-transform': 'translate(0px)',
					       '-o-transform': 'translate(0px)',
					          'transform': 'translate(0px)'
				});
				hire_me_text_triggered = true;
			}
			$(window).scroll(function(){
				var scrollTop = $(document).scrollTop();
				fadeNavigator(scrollTop);
				slideHireMeText(scrollTop);
			});
		})();
	});
})(this, this.document);