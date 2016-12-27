$(function () {
		  	var menuOffset = $(".menu").offset().top;
		  	$(window).scroll(function () {
		    	if ($(window).scrollTop() > menuOffset)
		      	$(".menu").addClass("fixed");
		    	else
		      	$(".menu").removeClass("fixed");
		  	});
		  	$('a[href*=#]:not([href=#])').click(function (event) {
		    	event.preventDefault();
		    	var $anchor = $(this);
		    	$('html, body').stop().animate({
		      		scrollTop: $($anchor.attr('href')).offset().top - $(".menu").outerHeight() - 10
		    	}, 1500);
		  	});
		});	

