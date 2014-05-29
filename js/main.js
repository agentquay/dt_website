//Scroll fade for top button

  $(window).bind('scroll',function(e){
   		parallaxScroll();
   	});

   	function parallaxScroll(){
   		var scrolledY = $(window).scrollTop();
	
		
		 
		$('.goup').css('opacity',+(scrolledY/800));   



		
			}
