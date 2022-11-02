/* || Block - Testimonial carousel
	=========================================================================== */

import { laptopView, mobileLandscapeView } from '../../../../scripts/variables.js';

// Initialize testimonial-carousel
export default function () {
	$('#testimonialCarousel').slick({
		dots: true,
		autoplay: false,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 2,
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
