/* || Block - company with tab contents
	 ========================================================================== */

import { animateOnScroll } from '../../../../scripts/utilities.js'

export { default as addRowFullWidthTabsEvents } from '../../../components/tab/row-full-width-tabs/row-full-width-tabs.js';
export { default as animateCounters } from '../../../components/counter/conters-splitter-tag/conters-splitter-tag.js';
// animate company image
export function animateCTCImage() {
	const companyImg = $('#companyTCImg');
	if (companyImg.length && !companyImg.hasClass('ctc-img-animate')) {
		animateOnScroll(companyImg, (elem = companyImg) => {
			elem.addClass('ctc-img-animate');
		});
	}
}
