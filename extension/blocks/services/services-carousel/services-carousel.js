/* || Block - Services with carousel
	 ========================================================================== */

import { laptopView, mobileLandscapeView } from '../../../../scripts/variables.js';

// Initialize services-carousel
export default function () {
	$('#scCarousel').slick({
		dots: true,
		autoplay: true,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: laptopView,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
				}
			},
			{
				breakpoint: mobileLandscapeView,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			}
		]
	});
}

