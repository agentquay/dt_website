//Scroll fade for top button

  $(window).bind('scroll',function(e){
   		parallaxScroll();
   	});

   	function parallaxScroll(){
   		var scrolledY = $(window).scrollTop();
	
		
		 
		$('.goup').css('opacity',+(scrolledY/800));   



		
			}

var num = 50; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.logo').addClass('ftop');
    } else {
        $('.logo').removeClass('ftop');
    }
});
