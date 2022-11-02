/* || Component - Navbar responsive right menu
	 ========================================================================== */

export default function addNavbarResponsiveRMEvents() {

	// click event for hamburger or close button
	$('.nm-fs-transparent-bg').on('click', function () {

		// setting transparent background 
		$(this).toggleClass('nm-fs-tbg-active');

		// activate menu
		$('.nm-fs-menu').toggleClass('nm-fs-menu-active');

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
}