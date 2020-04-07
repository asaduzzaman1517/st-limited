(function($) {
	"use strict";

	$(document).ready(function() {
		/**-----------------------------
		 *  Navbar fix
		 * ---------------------------*/

		$(document).on("click", "li.menu-item-has-children>a", function(e) {
			e.preventDefault();
		});
		// Toogle class on navbar
		$(".st_brand__icon-box").on("click", function() {
			$(this).toggleClass("active");
			$(".st_menu").toggleClass("active");
		});
		$(".st_menu__close").on("click", function() {
			$(".st_menu").toggleClass("active");
			$(".st_brand__icon-box").toggleClass("active");
		});



		// back to top
		$(document).on("click", ".back-to-top", function() {
			$("html,body").animate(
				{
					scrollTop: 0
				},
				2000
			);
		});
	});
})(jQuery);

var lastScrollTop = "";
$(window).on("scroll", function() {
	var st = $(this).scrollTop();
	lastScrollTop = st;

	var ScrollTop = $(".back-to-top");
	if ($(window).scrollTop() > 3000) {
		ScrollTop.fadeIn(1000);
	} else {
		ScrollTop.fadeOut(1000);
	}
});

// Parallax Plugin initialization
window.onload = function() {
	/*-----------------
        preloader
    ------------------*/
	var preLoder = $("#preloader");
	preLoder.fadeOut(1000);

	lax.setup(); // init

	const updateLax = () => {
		lax.update(window.scrollY);
		window.requestAnimationFrame(updateLax);
	};

	window.requestAnimationFrame(updateLax);
};