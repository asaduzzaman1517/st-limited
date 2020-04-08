(function($) {
	"use strict";

	$(document).ready(function() {
		/**-----------------------------
		 *  Award Slider
		 * ---------------------------*/
		let awardFor = $(".award-slider");
		if(awardFor.length) {
			awardFor.slick({
				mobileFirst: true,
				arrows: false,
				asNavFor: ".award-slider-nav"
			});
		}
		let awardNav = $(".award-slider-nav");
		if(awardNav.length) {
			awardNav.slick({
				mobileFirst: true,
				asNavFor: ".award-slider"
			});
		}
		/**-----------------------------
		 *  Video Play Popup
		 * ---------------------------*/
		let playOne = $(".video-play--1");
		if (playOne.length) {
			playOne.magnificPopup({
				items: {
					src: "https://www.youtube.com/watch?v=kshIWIc15yg"
				},
				type: "iframe",
				iframe: {
					markup:
						'<div class="mfp-iframe-scaler">' +
						'<div class="mfp-close"></div>' +
						'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
						"</div>",
					patterns: {
						youtube: {
							index: "youtube.com/",
							id: "v=",
							src: "//www.youtube.com/embed/kshIWIc15yg"
						}
					},
					srcAction: "iframe_src"
				}
			});
		}
		let playTwo = $(".video-play--2");
		if (playTwo.length) {
			playTwo.magnificPopup({
				items: {
					src: "https://www.youtube.com/watch?v=kshIWIc15yg"
				},
				type: "iframe",
				iframe: {
					markup:
						'<div class="mfp-iframe-scaler">' +
						'<div class="mfp-close"></div>' +
						'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
						"</div>",
					patterns: {
						youtube: {
							index: "youtube.com/",
							id: "v=",
							src: "//www.youtube.com/embed/kshIWIc15yg"
						}
					},
					srcAction: "iframe_src"
				}
			});
		}
		let playThree = $(".video-play--3");
		if (playThree.length) {
			playThree.magnificPopup({
				items: {
					src: "https://www.youtube.com/watch?v=kshIWIc15yg"
				},
				type: "iframe",
				iframe: {
					markup:
						'<div class="mfp-iframe-scaler">' +
						'<div class="mfp-close"></div>' +
						'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
						"</div>",
					patterns: {
						youtube: {
							index: "youtube.com/",
							id: "v=",
							src: "//www.youtube.com/embed/kshIWIc15yg"
						}
					},
					srcAction: "iframe_src"
				}
			});
		}
		/**-----------------------------
		 *  Feedback slider
		 * ---------------------------*/
		let feedbackSlider = $('.feedback-slider');
		if(feedbackSlider.length) {
			feedbackSlider.slick({
				mobileFirst: true,
				arrows: false,
				responsive: [
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 1600,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1,
						}
					}
				]
			});
		}
		/**-----------------------------
		 *  Project slider
		 * ---------------------------*/
		let projectSlider = $('.project-slider');
		if(projectSlider.length) {
			projectSlider.slick({
				mobileFirst: true,
				arrows: false,
				responsive: [
					{
						breakpoint: 575,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
							dots: true
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
							dots: true
						}
					},
					{
						breakpoint: 1199,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1,
							dots: true
						}
					},
					{
						breakpoint: 1600,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 1,
							dots: true
						}
					}
				]
			});
		}
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
