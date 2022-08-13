$('.nm-fs-transparent-bg').click(function () {

	// setting transparent background 
	$(this).toggleClass('nm-fs-tbg-active');

	// activate menu
	$('.menu-row-column').toggleClass('menu-rc-active');

	// toggle close and hamburger icon
	$(this).find('.hc-btn-icon').toggleClass("hc-btn-icon-inactive");

	// tittle changing based on the button type
	const hamburgerCloseBtn = $(this).find('.hamburger-close-btn');
	if (hamburgerCloseBtn.attr('data-buttontype') == 'menu') {
		hamburgerCloseBtn.attr('data-buttontype', 'close');
		hamburgerCloseBtn.attr('tittle', 'Close');

		// solve flex being spread over the other element
		$(this).parent().toggleClass('nav-menu-fs-active');
	} else {
		hamburgerCloseBtn.attr('data-buttontype', 'menu');
		hamburgerCloseBtn.attr('tittle', 'Menu');

		// solve flex being spread over the other element
		setTimeout(() => {
			$(this).parent().toggleClass('nav-menu-fs-active');
		}, 500);
	}
});