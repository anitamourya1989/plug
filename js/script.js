(function($) {

	"use strict";


	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}


	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var mainheader = $('.main-header')
			var scroll = $('.scroll-to-top')
			if (windowpos >= 200) {
				mainheader.addClass('fixed-header');
				scroll.fadeIn(300);
			} else {
				mainheader.removeClass('fixed-header');
				scroll.fadeOut(300);
			}
		}
	}

	//Submenu Dropdown Toggle
	function menu() {
		if($('.main-header li.dropdown ul').length){
			$('.main-header li.dropdown').append('<div class="dropdown-btn"></div>');

			//Dropdown Button
			$('.main-header li.dropdown .dropdown-btn').click(function() {
				$(this).prev('ul').slideToggle(500);
			});

			//Disable dropdown parent link
			$('.navigation li.dropdown > a').click(function(e) {
				e.preventDefault();
			});
		}

	}

	//Hidden Bar Menu Config
	function hiddenBarMenuConfig() {
		var menuWrap = $('.hidden-bar .side-menu');
		// appending expander button
		menuWrap.find('.dropdown').children('a').append(function () {
			return '<button type="button" class="btn expander"><i class="icon fa fa-angle-down"></i></button>';
		});
		// hidding submenu
		menuWrap.find('.dropdown').children('ul').hide();
		// toggling child ul
		menuWrap.find('.btn.expander').each(function () {
			$(this).click(function () {
				$(this).parent() // return parent of .btn.expander (a)
					.parent() // return parent of a (li)
						.children('ul').slideToggle();

				// adding class to expander container
				$(this).parent().toggleClass('current');
				// toggling arrow of expander
				$(this).find('i').toggleClass('fa-minus fa-bars');

				return false;

			});
		});
	}


	//Custom Scroll for Hidden Sidebar
	function hiddenbarwrapper (){
		if ($('.hidden-bar-wrapper').length) {
			$('.hidden-bar-wrapper').mCustomScrollbar();
		}
	}

	//Hidden Bar Toggler
	function hiddenbarcloser (){
		if ($('.hidden-bar-closer').length) {
			$('.hidden-bar-closer').click(function () {
				$('.hidden-bar').removeClass('visible-sidebar');
			});
		}
	}

	function hiddenbaropener (){
		if ($('.hidden-bar-opener').length) {
			$('.hidden-bar-opener').click(function () {
				$('.hidden-bar').addClass('visible-sidebar');
			});
		}
	}

	//Revolution Slider Style One
	function mainslider () {
		if($('.main-slider .tp-banner').length){

			jQuery('.main-slider .tp-banner').show().revolution({
			  delay:10000,
			  startwidth:1200,
			  startheight:850,
			  hideThumbs:600,

			  thumbWidth:80,
			  thumbHeight:50,
			  thumbAmount:5,

			  navigationType:"bullet",
			  navigationArrows:"0",
			  navigationStyle:"preview3",

			  touchenabled:"on",
			  onHoverStop:"off",

			  swipe_velocity: 0.7,
			  swipe_min_touches: 1,
			  swipe_max_touches: 1,
			  drag_block_vertical: false,

			  parallax:"mouse",
			  parallaxBgFreeze:"on",
			  parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

			  keyboardNavigation:"off",

			  navigationHAlign:"center",
			  navigationVAlign:"bottom",
			  navigationHOffset:0,
			  navigationVOffset:40,

			  soloArrowLeftHalign:"left",
			  soloArrowLeftValign:"center",
			  soloArrowLeftHOffset:20,
			  soloArrowLeftVOffset:0,

			  soloArrowRightHalign:"right",
			  soloArrowRightValign:"center",
			  soloArrowRightHOffset:20,
			  soloArrowRightVOffset:0,

			  shadow:0,
			  fullWidth:"on",
			  fullScreen:"off",

			  spinner:"spinner4",

			  stopLoop:"off",
			  stopAfterLoops:-1,
			  stopAtSlide:-1,

			  shuffle:"off",

			  autoHeight:"off",
			  forceFullWidth:"on",

			  hideThumbsOnMobile:"on",
			  hideNavDelayOnMobile:1500,
			  hideBulletsOnMobile:"on",
			  hideArrowsOnMobile:"on",
			  hideThumbsUnderResolution:0,

			  hideSliderAtLimit:0,
			  hideCaptionAtLimit:0,
			  hideAllCaptionAtLilmit:0,
			  startWithSlide:0,
			  videoJsPath:"",
			  fullScreenOffsetContainer: ""
		  });

		}
	}
	
	//Progress Bar / Levels
	function progressbar () {
		if($('.progress-levels .progress-box .bar-fill').length){
			$(".progress-box .bar-fill").each(function() {
				var progressWidth = $(this).attr('data-percent');
				$(this).css('width',progressWidth+'%');
				//$(this).parents('.progress-box').children('.percent').html(progressWidth+'%');
			});
		}
	}
	
	//Accordion Box
	function accordionbox () {
		if ($('.accordion-box').length) {
		    $('.accordion-box .acc-btn').click(function() {
		        if ($(this).hasClass('active') !== true) {
		            $('.accordion-box .acc-btn').removeClass('active');
		        }

		        if ($(this).next('.acc-content').is(':visible')) {
		            $(this).removeClass('active');
		            $(this).next('.acc-content').slideUp(500);
		        } else {
		            $(this).addClass('active');
		            $('.accordion-box .acc-content').slideUp(500);
		            $(this).next('.acc-content').slideDown(500);
		        }
		    });
		}
	}

	// add your custom functions 
	function teamCarosule () {
		if ($('.dedicated-team-area .owl-carousel').length) {
			$('.dedicated-team-area .owl-carousel').owlCarousel({
			    loop: true,
			    margin: 30,
			    nav: true,
			    dots: false,
	            navText: [
	                '<i class="fa fa-angle-left"></i>',
	                '<i class="fa fa-angle-right"></i>'
	            ],
			    autoplay: 5000,
			    autoplayTimeout: 3000,
			    autoplayHoverPause: true,
			    responsive: {
			        0:{
			            items:1
			        },
			        480:{
			            items:1
			        },
			        600:{
			            items:2
			        },
			        980:{
			            items:3
			        },
			        1000:{
			            items:3
			        },
			        1200:{
			            items:4
			        }
			    }
			});
		}
	}
	
	// Fact Counter
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .counter-column.animated').each(function() {
		
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}
				
			});
		}
	}
	
	// add your custom functions 
	function testimonialCarosule () {
		if ($('.single-item-carousel').length) {
			$('.single-item-carousel').owlCarousel({
			    loop: true,
			    margin: 30,
			    nav: true,
			    dots: false,
			    autoplay: 5000,
			    autoplayTimeout: 3000,
			    autoplayHoverPause: true,
			    responsive: {
			        0:{
			            items:1
			        },
			        480:{
			            items:1
			        },
			        600:{
			            items:1
			        },
			        980:{
			            items:1
			        },
			        1000:{
			            items:1
			        },
			        1200:{
			            items:1
			        }
			    }
			});
		}
	}

	//Stacked Image Carousel
	function stackedimagecarousel () {
		if($('.stacked-image-carousel').length){
			function slideSwitch() {
				var $active = $('.stacked-image-carousel .slides .slide.active');
				if ($active.length == 0) $active = $('.stacked-image-carousel .slides .slide:last');
				var $next =  $active.next().length ? $active.next() : $('.stacked-image-carousel .slides .slide:first');
				$('.stacked-image-carousel .slides .slide').removeClass('active');
				$next.addClass('active');
			}
			
			var myVar = setInterval(function(){slideSwitch();},5000);

			$('.stacked-image-carousel .slides .slide').click(function() {
				var current = $(this).attr('class','slide');
				$('.stacked-image-carousel .slides .slide').removeClass('active');
				$(current).addClass('active');
				clearInterval(myVar);
				slideSwitch();
			});
		}
	}

	//LightBox / Fancybox
	function lightbox () {
		if($('.lightbox-image').length) {
			$('.lightbox-image').fancybox({
				openEffect  : 'fade',
				closeEffect : 'fade',
				helpers : {
					media : {}
				}
			});
		}
	}
	
	//Masonary
	function enableMasonry() {
		if($('.gallery-section .masonry-layout').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.gallery-section .masonry-layout');
	
			$container.isotope({
				itemSelector: '.gallery-item',
				 masonry: {
					columnWidth : 1 
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
	
			winDow.bind('resize', function(){

				$container.isotope({ 
					itemSelector: '.gallery-item',
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
		}
	}
	

	//Jquery Spinner / Quantity Spinner
	function quantityspinner () {
		if($('.quantity-spinner').length){
			$("input.quantity-spinner").TouchSpin({
			  verticalbuttons: true
			});
		}
	}

	//Price Range Slider
	function rangesliderprice () {
		if($('.range-slider-price').length){

			var priceRange = document.getElementById('range-slider-price');

			noUiSlider.create(priceRange, {
				start: [ 100, 300 ],
				limit: 500,
				behaviour: 'drag',
				connect: true,
				range: {
					'min': 50,
					'max': 500
				}
			});

			var limitFieldMin = document.getElementById('min-value-rangeslider');
			var limitFieldMax = document.getElementById('max-value-rangeslider');

			priceRange.noUiSlider.on('update', function( values, handle ){
				(handle ? limitFieldMax : limitFieldMin).value = values[handle];
			});
		}
	}

	//Contact Form Validation
	function contactform () {
		if($('#contact-form').length){
			$('#contact-form').validate({
				rules: {
					username: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					phone: {
						required: true
					},
					company: {
						required: true
					},
					message: {
						required: true
					}
				}
			});
		}
	}

	// Scroll to a Specific Div
	function scrolltotarget () {
		if($('.scroll-to-target').length){
			$(".scroll-to-target").click(function() {
				var target = $(this).attr('data-target');
			   // animate
			   $('html, body').animate({
				   scrollTop: $(target).offset().top
				 }, 1000);

			});
		}
	}

	// add your custom functions 
	function team2Carosule () {
		if ($('.team-section .owl-carousel').length) {
			$('.team-section .owl-carousel').owlCarousel({
			    loop: true,
			    margin: 30,
			    nav: true,
			    dots: false,
	            navText: [
	                '<i class="fa fa-angle-left"></i>',
	                '<i class="fa fa-angle-right"></i>'
	            ],
			    autoplay: 5000,
			    autoplayTimeout: 3000,
			    autoplayHoverPause: true,
			    responsive: {
			        0:{
			            items:1
			        },
			        480:{
			            items:1
			        },
			        600:{
			            items:2
			        },
			        900:{
			            items:3
			        },
			        1000:{
			            items:3
			        },
			        1200:{
			            items:4
			        }
			    }
			});
		}
	}
	
	// Elements Animation
	function wow() {
		if($('.wow').length){
			var wow = new WOW(
			  {
				boxClass:     'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset:       0,          // distance to the element when triggering the animation (default is 0)
				mobile:       true,       // trigger animations on mobile devices (default is true)
				live:         true       // act on asynchronously loaded content (default is true)
			  }
			);
			wow.init();
		}
	}


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

	$(window).scroll(function() {
		headerStyle();
		factCounter();
		progressbar();
	});
	

/* ==========================================================================
   When window is Resized, do
   ========================================================================== */

	$(window).resize(function() {
		enableMasonry();
	});

/* ==========================================================================
   When document is loading, do
   ========================================================================== */

	jQuery(document).ready(function () {
		(function ($) {
			// add your functions
			teamCarosule();
			team2Carosule();
			hiddenbarwrapper();
			hiddenbarcloser();
			hiddenbaropener();
			mainslider();
			testimonialCarosule ();
			handlePreloader();
			enableMasonry();
			accordionbox();
			menu();
			wow();
			scrolltotarget ();
			lightbox();
			rangesliderprice ();
			stackedimagecarousel();
			quantityspinner();
			contactform();
			
		})(jQuery);
	});




})(window.jQuery);
