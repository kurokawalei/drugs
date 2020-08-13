/*--------------------------------------
		CUSTOM FUNCTION WRITE HERE		
--------------------------------------*/
"use strict";
jQuery(document).on('ready', function() {
	/*--------------------------------------
			MOBILE MENU						
	--------------------------------------*/
	function collapseMenu(){
		jQuery('.tg-navigation ul li.menu-item-has-children, .tg-navigation ul li.menu-item-has-mega-menu').prepend('<span class="tg-dropdowarrow"><i class="fa fa-angle-down"></i></span>');
		jQuery('.tg-navigation ul li.menu-item-has-children span, .tg-navigation ul li.menu-item-has-mega-menu span').on('click', function() {
			jQuery(this).parent('li').toggleClass('tg-open');
			jQuery(this).next().next().slideToggle(300);
		});
	}
	collapseMenu();
	/*--------------------------------------
			MEGA MENU						
	--------------------------------------*/
	jQuery(function ($) {
		function hoverIn() {
			var a = jQuery(this);
			var nav = a.closest('.tg-navigation');
			var mega = a.find('.mega-menu');
			var offset = rightSide(nav) - leftSide(a);
			mega.width(Math.min(rightSide(nav), columns(mega)*390));
			mega.css('left', Math.min(0, offset - mega.width()));
		}
		function hoverOut() {}
		function columns(mega) {
			var columns = 0;
			mega.children('.mega-menu-row').each(function () {
				columns = Math.max(columns, jQuery(this).children('.mega-menu-col').length);
			});
			return columns;
		}
		function leftSide(elem) {
			return elem.offset().left;
		}
		function rightSide(elem) {
			return elem.offset().left + elem.width();
		}
		jQuery('.menu-item-has-mega-menu').hover(hoverIn, hoverOut);
	});
	/*--------------------------------------
			THEME SEARCH					
	--------------------------------------*/
	if(jQuery('#tg-searcharea').length > 0){
		var _tg_togglesearch = jQuery('#tg-btnsearch, #tg-btnclosesearch');
		var _tg_searcharea = jQuery('#tg-searcharea');
		_tg_togglesearch.on('click', function(){
			_tg_searcharea.slideToggle();
		});
	}
	/* -------------------------------------
			SCROLL TO TOP
	-------------------------------------- */
	var _tg_btnscrolltotop = jQuery(".tg-btnscrolltotop");
	_tg_btnscrolltotop.on('click', function(){
		var _scrollUp = jQuery('html, body');
		_scrollUp.animate({ scrollTop: 0 }, 'slow');
	});
	/* -------------------------------------
			HOME sLIDER V ONE
	-------------------------------------- */
	var _tg_homeslidersame = jQuery('[id="tg-homeslidervone"], [id="tg-homeslidervtwo"], [id="tg-homeslidervfive"], [id="tg-homeslidervten"], [id="tg-homesliderveleven"], [id="tg-homeslidervfourteen"]');
	if(_tg_homeslidersame.hasClass('tg-homeslider')){
		_tg_homeslidersame.owlCarousel({
			items: 1,
			nav:true,
			loop:true,
			dots: true,
			autoplay: false,
			dotsClass: 'tg-sliderdots',
			navClass: ['tg-prev', 'tg-next'],
			navContainerClass: 'tg-slidernav',
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
		});
	}
	/* -------------------------------------
			HOME BANNER V THREE SLIDER		
	-------------------------------------- */
	var _tg_homeslidersamevtwo = jQuery('#tg-homeslidervthree, #tg-homeslidervsix');
	_tg_homeslidersamevtwo.pogoSlider({
		pauseOnHover: false,
		autoplay: false,
		generateNav: false,
		displayProgess: false,
		autoplayTimeout: 6000,
		targetHeight: 370,
		responsive: true,
	}).data('plugin_pogoSlider');
	/* -------------------------------------
			HOME BANNER V FOUR SLIDER		
	-------------------------------------- */
	var _tg_homeslidervthree = jQuery('#tg-homeslidervfour');
	_tg_homeslidervthree.pogoSlider({
		pauseOnHover: false,
		autoplay: false,
		generateNav: false,
		displayProgess: false,
		autoplayTimeout: 6000,
		targetHeight: 450,
		responsive: true,
	}).data('plugin_pogoSlider');
	/* -------------------------------------
			HOME BANNER V FIVE SLIDER
	-------------------------------------- */
	var _tg_homeslidervfive = jQuery('#tg-homeslidervfive');
	_tg_homeslidervfive.owlCarousel({
		items: 1,
		nav:true,
		loop:true,
		dots: true,
		smartSpeed:450,
		autoplay: true,
		dotsClass: 'tg-sliderdots',
		navClass: ['tg-prev', 'tg-next'],
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		navContainerClass: 'tg-slidernav',
		navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
	});
	/* -------------------------------------
			HOME BANNER V SEVEN SLIDER		
	-------------------------------------- */
	var _tg_homeslidervthree = jQuery('#tg-homeslidervseven');
	_tg_homeslidervthree.pogoSlider({
		pauseOnHover: false,
		autoplay: false,
		generateNav: false,
		displayProgess: true,
		autoplayTimeout: 6000,
		targetHeight: 490,
		responsive: true,
	}).data('plugin_pogoSlider');
	/* -------------------------------------
			HOME BANNER V SEVEN SLIDER		
	-------------------------------------- */
	var _tg_homeslidervthree = jQuery('#tg-homesliderveight, #tg-homeslidervnine');
	_tg_homeslidervthree.pogoSlider({
		pauseOnHover: false,
		autoplay: false,
		generateNav: false,
		displayProgess: false,
		autoplayTimeout: 6000,
		targetHeight: 450,
		responsive: true,
	}).data('plugin_pogoSlider');
	/* -------------------------------------
			HOME BANNER V SEVEN SLIDER		
	-------------------------------------- */
	var _tg_homeslidervtwelve = jQuery('#tg-homeslidervtwelve');
	_tg_homeslidervtwelve.pogoSlider({
		pauseOnHover: false,
		autoplay: false,
		generateNav: false,
		displayProgess: false,
		autoplayTimeout: 6000,
		targetHeight: 500,
		responsive: true,
	}).data('plugin_pogoSlider');
	/* -------------------------------------
			HOME BANNER V FOUR SLIDER		
	-------------------------------------- */
	var _tg_homeslidervthirteen = jQuery('#tg-homeslidervthirteen, #tg-homeslidervsixteen');
	_tg_homeslidervthirteen.pogoSlider({
		pauseOnHover: false,
		autoplay: false,
		generateNav: false,
		displayProgess: false,
		autoplayTimeout: 6000,
		targetHeight: 400,
		responsive: true,
		onSlideStart: (function(){
			var _slideslength = jQuery('.tg-homeslidervthirteen').find('.pogoSlider-slide').length;
			console.log(_slideslength);
			var _currentSlide = this.currentSlideIndex + 1;
			jQuery('#tg-totalslides').text(_slideslength);
			jQuery('#tg-currentslide').text(_currentSlide);
		}),
	}).data('plugin_pogoSlider');
	/* -------------------------------------
			JQUERY GOAL SLIDER
	-------------------------------------- */
	if(jQuery('.tg-skillbar').length > 0){
		var _sample_goal = jQuery('.tg-skillbar');
		_sample_goal.each(function(){
			jQuery(this).find('.tg-skillbarbar').animate({
				width:jQuery(this).attr('data-percent')
			},3000);
		});
	}
	/* -------------------------------------
			CAUSES SLIDER
	-------------------------------------- */
	if(jQuery('#tg-causesslider').length > 0){
		var _tg_causesslider = jQuery('#tg-causesslider');
		_tg_causesslider.owlCarousel({
			items: 3,
			nav:true,
			loop:false,
			dots: true,
			autoplay: false,
			responsiveClass:true,
			dotsClass: 'tg-sliderdots',
			navClass: ['tg-prev', 'tg-next'],
			navContainerClass: 'tg-slidernav',
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive:{
				0:{
					items:1,
				},
				600:{
					items:2,
				},
				992:{
					items:3,
				}
			}
		});
	}
	/* -------------------------------------
			CAUSES SLIDER
	-------------------------------------- */
	if(jQuery('#tg-othercausesslider').length > 0){
		var _tg_othercausesslider = jQuery('#tg-othercausesslider');
		_tg_othercausesslider.owlCarousel({
			items: 3,
			nav:true,
			loop:false,
			dots: true,
			autoplay: false,
			responsiveClass:true,
			dotsClass: 'tg-sliderdots',
			navClass: ['tg-prev', 'tg-next'],
			navContainerClass: 'tg-slidernav',
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive:{
				0:{
					items:1,
				},
				600:{
					items:2,
				},
				992:{
					items:3,
				}
			}
		});
	}
	/* -------------------------------------
			EVENT SLIDER
	-------------------------------------- */
	if(jQuery('#tg-eventsslider').length > 0){
		var _tg_eventsslider = jQuery('#tg-eventsslider');
		_tg_eventsslider.owlCarousel({
			items: 3,
			nav:true,
			loop:true,
			dots: true,
			autoplay: false,
			responsiveClass:true,
			dotsClass: 'tg-sliderdots',
			navClass: ['tg-prev', 'tg-next'],
			navContainerClass: 'tg-slidernav',
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive:{
				0:{
					items:1,
				},
				600:{
					items:2,
				},
				992:{
					items:3,
				}
			}
		});
	}
	/* -------------------------------------
			WIDGET CAUSE SLIDER
	-------------------------------------- */
	if(jQuery('#tg-widgetcausesslider').length > 0){
		var _tg_widgetcausesslider = jQuery('#tg-widgetcausesslider');
		_tg_widgetcausesslider.owlCarousel({
			items: 1,
			nav:true,
			loop:true,
			dots: true,
			autoplay: false,
			dotsClass: 'tg-sliderdots',
			navClass: ['tg-prev', 'tg-next'],
			navContainerClass: 'tg-slidernav',
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
		});
	}
	/* -------------------------------------
			CURRENT STORIES SLIDER
	-------------------------------------- */
	if(jQuery('#tg-currentstoriesslider').length > 0){
		var _tg_currentstoriesslider = jQuery('#tg-currentstoriesslider');
		_tg_currentstoriesslider.owlCarousel({
			items: 1,
			nav:true,
			loop:true,
			dots: true,
			autoplay: false,
			dotsClass: 'tg-sliderdots',
			navClass: ['tg-prev', 'tg-next'],
			navContainerClass: 'tg-slidernav',
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
		});
	}
	/* -------------------------------------
			CAUSES V Two SLIDER
	-------------------------------------- */
	if(jQuery('#tg-cuaseslidervtwo').length > 0){
		var _tg_cuaseslidervtwo = jQuery('#tg-cuaseslidervtwo');
		_tg_cuaseslidervtwo.owlCarousel({
			items: 2,
			nav:false,
			loop:false,
			dots: true,
			autoplay: false,
			responsiveClass:true,
			dotsClass: 'tg-sliderdots',
			navClass: ['tg-prev', 'tg-next'],
			navContainerClass: 'tg-slidernav',
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive:{
				0:{
					items:1,
				},
				640:{
					items:2,
				},
				768:{
					items:1,
				},
				992:{
					items:2,
				}
			}

		});
	}
	/* -------------------------------------
			YOUTUBE VIDEO POPUP
	-------------------------------------- */
	if(jQuery('.tg-vieoshortcode').length > 0){
		jQuery('.tg-btnplayvideo, .tg-smbtnplayvideo').YouTubePopUp();
	}
	/* -------------------------------------
			CAUSES SLIDER
	-------------------------------------- */
	if(jQuery('#tg-productsslider').length > 0){
		var _tg_productsslider = jQuery('#tg-productsslider');
		_tg_productsslider.owlCarousel({
			items: 4,
			nav:true,
			loop:true,
			dots: true,
			autoplay: false,
			responsiveClass:true,
			dotsClass: 'tg-sliderdots',
			navClass: ['tg-prev', 'tg-next'],
			navContainerClass: 'tg-slidernav',
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive:{
				0:{
					items:1,
				},
				600:{
					items:3,
				},
				992:{
					items:4,
				}
			}
		});
	}
	/* -------------------------------------
			RELATED PRODUCT SLIDER
	-------------------------------------- */
	if(jQuery('#tg-relatedproductslider').length > 0){
		var _tg_relatedproductslider = jQuery('#tg-relatedproductslider');
		_tg_relatedproductslider.owlCarousel({
			items: 2,
			nav:true,
			loop:true,
			dots: true,
			margin:30,
			autoplay: false,
			dotsClass: 'tg-sliderdots',
			navClass: ['tg-prev', 'tg-next'],
			navContainerClass: 'tg-slidernav',
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
		});
	}
	/* -------------------------------------
			DONATION CHART
	-------------------------------------- */
	if(jQuery('#tg-donationChart').length > 0){
		var data = [{
			values: [15, 5, 80],
			labels: ['Fundraising activities', 'Adminisration affairs', 'Spend on causes'],
			domain: {
				x: [0, .48]
			},
			name: '',
			hoverinfo: 'label+percent+name',
			hole: .6,
			type: 'pie'
		}];
		Plotly.newPlot('tg-donationChart', data);
	}
	/* -------------------------------------
			NEWS ARTICLE SLIDER
	-------------------------------------- */
	if(jQuery('#tg-postsslider').length > 0){
		var _tg_postsslider = jQuery('#tg-postsslider');
		_tg_postsslider.owlCarousel({
			items: 3,
			nav:false,
			margin:30,
			loop:true,
			dots: true,
			autoplay: false,
			responsiveClass:true,
			dotsClass: 'tg-sliderdots',
			navClass: ['tg-prev', 'tg-next'],
			navContainerClass: 'tg-slidernav',
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive:{
				0:{
					items:1,
				},
				600:{
					items:2,
				},
				768:{
					items:3,
				},
			}
		});
	}
	/* -------------------------------------
			EVENT LIST SLIDER
	-------------------------------------- */
	if(jQuery('#tg-eventslidervtwo').length > 0){
		var _tg_eventslidervtwo = jQuery('#tg-eventslidervtwo');
		_tg_eventslidervtwo.owlCarousel({
			items: 1,
			nav:false,
			loop:true,
			dots: true,
			autoplay: false,
			dotsClass: 'tg-sliderdots',
			navClass: ['tg-prev', 'tg-next'],
			navContainerClass: 'tg-slidernav',
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
		});
	}
	/* -------------------------------------
			EVENT LIST SLIDER
	-------------------------------------- */
	if(jQuery('#tg-postlistslider').length > 0){
		var _tg_postlistslider = jQuery('#tg-postlistslider');
		_tg_postlistslider.owlCarousel({
			items: 1,
			nav:false,
			loop:true,
			dots: true,
			autoplay: false,
			dotsClass: 'tg-sliderdots',
			navClass: ['tg-prev', 'tg-next'],
			navContainerClass: 'tg-slidernav',
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
		});
	}
	/* -------------------------------------
			OTHER WAY TO HELP SLIDER
	-------------------------------------- */
	if(jQuery('#tg-otherwaytohelpslider').length > 0){
		var _tg_otherwaytohelpslider = jQuery('#tg-otherwaytohelpslider');
		_tg_otherwaytohelpslider.owlCarousel({
			items: 1,
			nav:false,
			loop:true,
			dots: true,
			autoplay: false,
			dotsClass: 'tg-sliderdots',
			navClass: ['tg-prev', 'tg-next'],
			navContainerClass: 'tg-slidernav',
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
		});
	}
	/* -------------------------------------
			JGALLERY
	-------------------------------------- */
	jQuery( function() {
		jQuery( '#tg-imggallery' ).jGallery({
		height: '500px',
		canZoom: false,
		backgroundColor: 'none',
		slideshow: false,
		slideshowAutostart: true,
		autostartAtImage: 1,
		thumbnailsFullScreen: false
		});
	});
	/*--------------------------------------
			PROGRESS BAR					
	--------------------------------------*/
	if(jQuery('#tg-ourskill').length > 0){
		var _tg_ourskill = jQuery('#tg-ourskill');
		_tg_ourskill.appear(function () {
			jQuery('.skill-holder').each(function () {
				jQuery(this).find('.skill-bar').animate({
					width: jQuery(this).attr('data-percent')
				}, 2500);
			});
		});
	}
	/*--------------------------------------
			COUNTER							
	--------------------------------------*/
	if(jQuery('#tg-counters').length > 0){
		var _tg_counters = jQuery('#tg-counters');
		_tg_counters.appear(function () {
			jQuery('.tg-timer').countTo()
		});
	}
	/*--------------------------------------
			THEME ACCORDION 				
	--------------------------------------*/
	if(jQuery('.tg-panelheading').length > 0){
		var _tg_panelheading = jQuery('.tg-panelheading');
		_tg_panelheading.on('click',function () {
			jQuery('.panel-heading').removeClass('active');
			jQuery(this).parents('.panel-heading').addClass('active');
			jQuery('.panel').removeClass('active');
			jQuery(this).parent().addClass('active');
		});
	}
	/*--------------------------------------
			Google Map
	--------------------------------------*/
	if(jQuery('#tg-locationmap').length > 0){
		var _tg_locationmap = jQuery('#tg-locationmap');
		_tg_locationmap.gmap3({
			marker: {
				address: 'Suite 07, Chicago Center, 37 West Street, USA',
				options: {
					title: 'Donation One step can change alot'
				}
			},
			map: {
				options: {
					zoom: 16,
					scrollwheel: false,
					disableDoubleClickZoom: true,
				}
			},
			infowindow: {
				address: 'Suite 07, Chicago Center, 37 West Street, USA',
				options:{
					content: '<div class="tg-locationaddressinfo"><h2>Our location:</h2><ul><li><i class="fa fa-location-arrow"></i><span>Suite 07, Chicago Center, 37 West Street, USA</span></li><li><i class="fa fa-phone"></i><span>0800 1234 5678 - 9</span></li><li><i class="fa fa-envelope-o"></i><span><a href="mailto:donate@domain.com">donate@domain.com</a></span></li><li><i class="fa fa-skype"></i><span>donation772</span></li></ul></div>'
				}
			},
		});
	}
	/*--------------------------------------
			PRETTY PHOTO GALLERY			
	--------------------------------------*/
	if(jQuery('#tg-prettyphoto').length > 0){
		jQuery("a[data-rel]").each(function () {
			jQuery(this).attr("rel", jQuery(this).data("rel"));
		});
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
			slideshow: 3000,
			social_tools: false,
			theme: 'dark_square',
			autoplay_slideshow: false,
			animation_speed: 'normal',
		});
	}
	/*--------------------------------------
			MAGNIFIC POPUP GALLERY			
	--------------------------------------*/
	if(jQuery('#tg-gallery').length > 0){
		jQuery('#tg-gallery').magnificPopup({
			gallery: {
				enabled: true,
			},
			mainClass: 'mfp-with-zoom', // this class is for CSS animation below
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it
				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function
				opener: function(openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			},
			delegate:'a',
			type:'image',
			midClick: true,
			removalDelay: 300,
			mainClass: 'mfp-fade',
		});
	}
	/* -------------------------------------
			TESTIMONIALS SLIDER
	-------------------------------------- */
	function productSlider(){
		var sync1 = jQuery("#tg-productslider");
		var sync2 = jQuery("#tg-producttumbslider");
		var slidesPerPage = 5;
		var syncedSecondary = true;
		sync1.owlCarousel({
			items : 1,
			slideSpeed : 2000,
			autoplay: false,
			loop: true,
			dots: false,
			responsiveRefreshRate : 200,
		}).on('changed.owl.carousel', syncPosition);
		sync2
			.on('initialized.owl.carousel', function () {
				sync2.find(".owl-item").eq(0).addClass("current");
		})
		.owlCarousel({
			items : slidesPerPage,
			dots: false,
			nav: false,
			margin:10,
			smartSpeed: 200,
			slideSpeed : 500,
			slideBy: slidesPerPage,
			responsiveRefreshRate : 100
		}).on('changed.owl.carousel', syncPosition2);
		function syncPosition(el) {
			var count = el.item.count-1;
			var current = Math.round(el.item.index - (el.item.count/2) - .5);
			if(current < 0) {
				current = count;
			}
			if(current > count) {
				current = 0;
			}
			sync2
			.find(".owl-item")
			.removeClass("current")
			.eq(current)
			.addClass("current");
			var onscreen = sync2.find('.owl-item.active').length - 1;
			var start = sync2.find('.owl-item.active').first().index();
			var end = sync2.find('.owl-item.active').last().index();
			if (current > end) {
				sync2.data('owl.carousel').to(current, 100, true);
			}
			if (current < start) {
				sync2.data('owl.carousel').to(current - onscreen, 100, true);
			}
		}
		function syncPosition2(el) {
			if(syncedSecondary) {
				var number = el.item.index;
				sync1.data('owl.carousel').to(number, 100, true);
			}
		}
		sync2.on("click", ".owl-item", function(e){
			e.preventDefault();
			var number = jQuery(this).index();
			sync1.data('owl.carousel').to(number, 300, true);
		});
	}
	productSlider();
	/* -------------------------------------
			SCROLLBAR
	-------------------------------------- */
	jQuery('.tg-themescrollbar, .tg-emailnavscroll').mCustomScrollbar({
		axis:"y",
	});
	jQuery('.tg-horizontalthemescrollbar').mCustomScrollbar({
		axis:"x",
	});
	/*------------------------------------------
			PRODUCT INCREASE
	------------------------------------------*/
	jQuery('em.minus').on('click', function () {
		jQuery('#quantity1').val(parseInt(jQuery('#quantity1').val(), 10) - 1);
	});
	jQuery('em.plus').on('click', function () {
		jQuery('#quantity1').val(parseInt(jQuery('#quantity1').val(), 10) + 1);
	});
});
/* -------------------------------------
		PRELOADER
-------------------------------------- */
jQuery(window).load(function() {
	jQuery(".preloader-outer").delay(1000).fadeOut();
	jQuery(".loader").delay(500).fadeOut("slow");
});