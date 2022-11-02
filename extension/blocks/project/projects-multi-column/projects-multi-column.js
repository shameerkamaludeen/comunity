/* || Block - Projects multi column layout
	 ========================================================================== */

import { mobileLandscapeView, clientWidth } from '../../../../scripts/variables.js';

export default function addProjectsEvents() {
	const projectsElem = $('#projects');
	if (!projectsElem.length || clientWidth < mobileLandscapeView) return;
	const modalFWCElem = $('#modalFWC');
	// close btn click event
	modalFWCElem.on('click', function () {
		$(this).toggleClass('modal-fwc-active');
		$('html').toggleClass('overflow-hidden');
	});

	// to not affect modal close on click on the modal body
	modalFWCElem.find('.modal-fwc-carousel').on('click', e => {
		e.stopPropagation();
	});

	// Projects items click event
	projectsElem.find('.img-fg-id-tab-wr').each(function () {
		const projctItemTabElem = $(this);
		projctItemTabElem.attr('tabindex', '0');
		projctItemTabElem.on('click', () => {
			$('html').toggleClass('overflow-hidden');
			modalFWCElem.find('#modalFWCCarousel').slick('getSlick').slickGoTo(projctItemTabElem.attr('data-prject-item'));
			modalFWCElem.toggleClass('modal-fwc-active');
		});
	});
}