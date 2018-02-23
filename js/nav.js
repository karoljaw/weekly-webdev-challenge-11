$(document).ready(function() {
    var navbar = $('.nav');

    $(".burger").on("click", function() {
        $(".list").toggleClass("active");
        navbar.removeClass('navbar-scroll');
    })
    $(".list__link").on("click", function() {
        $(".list").removeClass("active");
    })
    $(window).scroll(function(){
		if($(window).scrollTop() <= 40 || $(".list").hasClass("active")){
			navbar.removeClass('navbar-scroll');
		} else {
			navbar.addClass('navbar-scroll');
		}
	});
})

