var $ = jQuery;
var logo = $(".logo");
var movingLogo = $(".moving-logo");
var hashMenuItem = $(".header-menu a");
var stickyNav = $(".sticky");

$(document).ready(function() {
	hashMenuItem.click(function(event) {
		event.preventDefault();
		var hash = $(this).attr("href");

		$(".header-menu li").removeClass("active");
		$(this).parent().addClass("active");

		// $(".header-menu li a").removeClass("border-left");
		// $(this).parent().addClass("border-left");

		hashMenuItem.each(function(index, el) {
			if($(this).attr("href") == hash) {
				$(this).parent().addClass("active");
			}
		});

		slideDown($(this));
	});
});

$(window).on("load", function() {
	logo.removeClass("padding-left");
	movingLogo.removeClass("on-top");
});

$(window).on("scroll", function() {
	if($(this).scrollTop() >= 500) {
		stickyNav.addClass("is-visible");
	} else if($(this).scrollTop() == 0) {
		$(".header-menu li").removeClass("active");
	} else {
		stickyNav.removeClass("is-visible");
	}
});

function initMap() {
	var uluru = {lat: -25.363, lng: 131.044};
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 4,
		center: uluru
	});

	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}

function slideDown(target) {
	var href = target.attr("href");
	$("html, body").animate({
		scrollTop: $(href).offset().top
	},{
		duration: 1000,
		complete: function(){
			logo.removeClass("padding-left");
			movingLogo.removeClass("on-top");
		}
	});
	return false;
}

