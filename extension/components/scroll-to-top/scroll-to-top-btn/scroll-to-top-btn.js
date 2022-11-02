/* || Component - Scroll to top button
	 ========================================================================== */

import { clientWidth, mobileLandscapeView } from '../../../../scripts/variables.js';
export default function activateScrollToTop() {
	const scrollToTopElem = $('#scrollToTop');
	if (!scrollToTopElem.length || clientWidth < mobileLandscapeView) return;
	if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
		scrollToTopElem.addClass('scroll-tt-btn-active');
	}
}

const scrollToTopElem = $('#scrollToTop');
if (scrollToTopElem.length) {
	scrollToTopElem.on('click', () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
}