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

//Mobile Nav

$('.f_toggle').click(function () {
    $('.fixed_nav').addClass('show');
   });

$('.fixed_nav a').click(function () {
    $('.fixed_nav').removeClass('show');
   });
