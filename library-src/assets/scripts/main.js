$(function() {

	// -------------------------------------------------------------------------------
	// Brand Switching
	// -------------------------------------------------------------------------------
	$('.brand-switch li').click(function() {
		var $this = $(this);
		$('.brand-switch li').not($this).removeClass('active')
		$($this).addClass('active');
		if ( $($this).hasClass('brand__sz') ) {
			$('body').removeClass('wolf').addClass('subzero');
		};
		if ( $($this).hasClass('brand__wolf') ) {
			$('body').removeClass('subzero').addClass('wolf');
		};
		if ( $($this).hasClass('brand__neutral') ) {
			$('body').removeClass('subzero wolf');
		};
	});

	$('.brand-switch li a').click(function(event) {
		event.preventDefault();
	});

	// -------------------------------------------------------------------------------
	// Toggle background color of neutral icon examples
	// -------------------------------------------------------------------------------
	$('.js-iconBgToggle').click(function() {
		var theseIcons = $('.js-canToggleBg').find('.grid-block__content');
		if (theseIcons.hasClass('icon-example--dark-bg')) {
			theseIcons.removeClass('icon-example--dark-bg');
		} else {
			theseIcons.addClass('icon-example--dark-bg');
		}
	})

	// Manage Accordion
	manageAccordionNav()
});


// -------------------------------------------------------------------------------
// padding of section when hashed page landed on
// -------------------------------------------------------------------------------
function hasHash() {
	if(window.location.hash) {
		$('section').css('padding-top', '80px');
		var userSelection = location.hash.replace("#","");
		var goToSection = $('a[data-section=' + userSelection + ']').next('section');
		$(goToSection).addClass('hashPad');
	}
}
hasHash();

// -------------------------------------------------------------------------------
// ACCORDION NAVIGATION
// -------------------------------------------------------------------------------
// On viewport resize, if under 960, all items should be collapsed
//	- only account for items that aren't collapsed already
// On viewport resize, if above 960, all items should be expanded
// 	- if items that aren't expanded already
// If above 960 on pageload, add "open" class to all items before accordion runs
// -------------------------------------------------------------------------------

// $('.js-accordion-list__trigger').click(function () {
// 	$(this).parent('.js-accordion-list__item').toggleClass('js-manuallySelected');
// })

function manageAccordionNav() {
	var underBreakWidth = Modernizr.mq('(max-width: 1023px)'),
		overBreakWidth = Modernizr.mq('(min-width: 1024px)');

	if (overBreakWidth) {
		$('.js-accordion-list__item').each(function (i) {
			thisItem = $(this);
			thisItemInterior = $(this).find('js-accordion-interior');
			if ( !thisItem.hasClass('open') && !thisItem.hasClass('js-manuallySelected') ) {
				thisItem.find('.js-accordion-list__trigger').trigger('click');
			}
		});
	}
	
	if (underBreakWidth) {
		$('.js-accordion-list__item').each(function (i) {
			if ( $(this).hasClass('open') ) {
				$(this).find('.js-accordion-list__trigger').trigger('click');
			}
		});
	}
}

// Trigger functions on window resize
$(window).smartresize(function(){  
  	manageAccordionNav();
});