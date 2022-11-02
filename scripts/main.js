import * as variables from './variables.js';
import initServicesCarousel from '../extension/blocks/services/services-carousel/services-carousel.js';
import initTestimonialCarousel from '../extension/blocks/testimonial/testimonial-carousel/testimonial-carousel.js';
import initModalFWCarousel from '../extension/components/modal/modal-full-window-carousel/modal-full-window-carousel.js';
import * as ctc from '../extension/blocks/company/company-tab-contents/company-tab-contents.js';
import animateHeroIDImage from '../extension/blocks/hero/hero-img-desc/hero-img-desc.js';
import animateTeamGallery from '../extension/blocks/team/team-desc-gallery/team-desc-gallery.js';
import animatePrices from '../extension/blocks/price/price-overlap-card-center/price-overlap-card-center.js';
import addFormRadiusedEvents from '../extension/blocks/contact/contact-map-form/contact-map-form.js';
import addProjectsEvents from '../extension/blocks/project/projects-multi-column/projects-multi-column.js';
import activateScrollToTop from '../extension/components/scroll-to-top/scroll-to-top-btn/scroll-to-top-btn.js';
import addNavbarResponsiveRMEvents from '../extension/components/navigation/navbar-responsive-right-menu/navbar-responsive-right-menu.js';

// run functions on document is ready(loaded)
$(function () {
	addNavbarResponsiveRMEvents();
	animationOnScrollLoad();
	initServicesCarousel();
	initTestimonialCarousel();
	initModalFWCarousel();
	ctc.addRowFullWidthTabsEvents();
	addProjectsEvents();
	addFormRadiusedEvents();
});

function animationOnScrollLoad() {
	animateHeroIDImage();
	ctc.animateCounters();
	ctc.animateCTCImage();
	animateTeamGallery();
	animatePrices();
}

$(window).on('scroll', function () {
	animationOnScrollLoad();
	activateScrollToTop();
});

$(window).on('resize', function () {
	variables.setClientWidth(document.documentElement.clientWidth);
});