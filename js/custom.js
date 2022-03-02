$(function () {
    // Gallery slider
$('.Gallery-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    speed:1500,
    autoplaySpeed: 1000,
  });

  // gallery lightbox
  $('.venobox').venobox(); 

  //counterUp
  $('.counter').counterUp({
    delay: 3,
    time: 2500
  }); 
//preloder
$(window).on('load', function(){
    $('.preloader').delay(500).fadeOut(500);
});
	// Gallery
var containerEl = document.querySelector('.gal-main');
var mixer = mixitup(containerEl);

// back to top


$('.back-to-top').click(function(){
	$('html, body').animate({scrollTop:0}, 300);
});
$(window).scroll(function(){
	var scrolling = $(this).scrollTop();
	if(scrolling >200){
		$('.back-to-top').fadeIn(500);

	}
	else{
		$('.back-to-top').fadeOut(500);

	};
	if(scrolling > 100){
		$('.nav').addClass('bg');
	}
	else {
		$('.nav').removeClass('bg');
	};

});
//animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 60
            }, 300);
            return false;
        }
    }
});
 

  
    })(jQuery);
