(function(window, document, undefined){
	function getScrollPosition(el){
		if (!el)
			return;
		var offset = $(el).offset(),
			scrollTop = parseInt(offset && offset.top);
		return $(document).scrollTop() - scrollTop;
	}
	function getTranslateCSSObject(str){
		return {
		  '-webkit-transform': 'translate('+str+')',
		     '-moz-transform': 'translate('+str+')',
		      '-ms-transform': 'translate('+str+')',
		       '-o-transform': 'translate('+str+')',
		          'transform': 'translate('+str+')'
		}
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
						scrollTop: top - 25
				}, 800, callback);
			};
			$('#menu-whyamihere, #carousel-button-2, #carousel-button-3').click(function(e){
				e.preventDefault();
				scroll_to('#whyamihere');
			});
			$('#menu-hire-me, #carousel-button-1').click(function(e){
				e.preventDefault();
				scroll_to('#hire-me');
			});				
			$('#menu-gallery, #carousel-button-4').click(function(e){
				e.preventDefault();
				scroll_to('#gallery');
			});
			$('#menu-prizes').click(function(e){
				e.preventDefault();
				scroll_to('#prizes');
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
				$hire_me_text.css(getTranslateCSSObject('0px'));
				hire_me_text_triggered = true;
			}
			$(window).scroll(function(){
				var scrollTop = $(document).scrollTop();
				fadeNavigator(scrollTop);
				slideHireMeText(scrollTop);
			});
			// register WhyAreYouHere texts
			(function(){
				$('#whyamihere').find('.sliding-text-wrapper').each(function(){
					var wrapper = this;
					$(window).scroll(function(){
						if (getScrollPosition(wrapper) < -500)
							return;
						$(wrapper).css(getTranslateCSSObject('0px'));
						$(window).unbind('scroll', arguments.callee);
					});				
				});
			})();		
		})();
	});
})(this, this.document);