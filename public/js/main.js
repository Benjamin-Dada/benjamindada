$(document).ready(function() {

	$('body').scrollspy({target: ".navbar", offset:50 });

	$("nav#my-nav ul li a[href^='#']").on('click', function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top - 50
	     }, 300, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });

	});
	
	if($(window).width() > 1200) {
		$('div.about-section').height($('div.about-section').height());
	}
});