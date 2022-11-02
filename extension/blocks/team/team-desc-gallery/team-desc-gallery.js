/* || Block - Team with description and gallery
	 ========================================================================== */

import { animateOnScroll } from '../../../../scripts/utilities.js';

// animate team gallery
export default function animateTeamGallery() {
	const teamDGGalleryElem = $('#teamDGGallery');
	if (teamDGGalleryElem.length && !teamDGGalleryElem.hasClass('team-dg-gallery-animate')) {
		animateOnScroll(teamDGGalleryElem, (elem = teamDGGalleryElem) => {
			elem.addClass('team-dg-gallery-animate');
		});
	}
}