/* -----------------------------------------------------------------------------
	|| Components - Row direction full width tabs
	========================================================================== */

// Add tab events
export default function addRowFullWidthTabsEvents() {
	// selecting the block itself
	const rowFullWidthTabsElem = $('#rowFullWidthTabs');
	if (rowFullWidthTabsElem.length) {
		// finding all tab elements
		const tabElems = rowFullWidthTabsElem.find('.btn-no-bg-border');
		tabElems.each(function () {
			const btnElem = $(this);
			btnElem.on('click', function () {

				// removing all active class on tab and adding on the current active tab
				tabElems.removeClass('row-fwt-tab-active');
				btnElem.addClass('row-fwt-tab-active');

				const fwtTabSelector = `.row-fwt-content[data-fwt-content='${btnElem.attr('data-fwt-tab')}']`;

				// removing all active class and adding active class on content based on 
				// the active tab
				rowFullWidthTabsElem.find('.row-fwt-content').removeClass('row-fwt-content-active');

				rowFullWidthTabsElem.find(fwtTabSelector).addClass('row-fwt-content-active');
			});
		});
	}
}