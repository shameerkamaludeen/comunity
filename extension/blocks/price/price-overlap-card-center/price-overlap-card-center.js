/* || Block - Price overlaped cards with centered content
	 ========================================================================== */

import { animateOnScroll } from '../../../../scripts/utilities.js';

// animate prices
export default function animatePrices() {
	const priceOCCPriceWrElem = $('#priceOCCPriceWr');
	if (priceOCCPriceWrElem.length) {
		priceOCCPriceWrElem.find('.price-occ-price').each(function () {
			const priceElem = $(this);
			if (!priceElem.hasClass('price-occ-price-animate')) {
				animateOnScroll(priceElem, (elem = priceElem) => {
					elem.addClass('price-occ-price-animate');
				});
			}
		});
	}
}