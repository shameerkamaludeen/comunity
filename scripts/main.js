// Variables
const windowInnerHeight = window.innerHeight;
let clientWidth = document.documentElement.clientWidth;

// counter
let isCountersCaseAnimated = false;
let isCountersConsultantAnimated = false;
let isCountersCustomerAnimated = false;
let isCountersAwardAnimated = false;

// Viewports
const mobileSmallView = 320; // 320px standard
const mobilePortraitView = 480; // 480px standard
const mobileLandscapeView = 640; // 640px standard
const tabletView = 768; // 768px standard
const laptopView = 1024; // 1024px standard
const desktopView = 1200; // 1200px standard


// run functions on document is ready(loaded)
$(function () {
	initCarouselElements();
	addFullWidthTabsEvents();
	animationOnScrollLoad();
	$('#contactUsForm').attr('novalidate', '');
});

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

function initCarouselElements() {
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

function addFullWidthTabsEvents() {
	// selecting the block itself
	const rowFullWidthTabsElem = $('#companyRowFullWidthTabs');
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

function animateValue(obj, start, end, duration) {
	let startTimestamp = null;
	const step = (timestamp) => {
		if (!startTimestamp) startTimestamp = timestamp;
		const progress = Math.min((timestamp - startTimestamp) / duration, 1);
		obj.innerHTML = Math.floor(progress * (end - start) + start);
		if (progress < 1) {
			window.requestAnimationFrame(step);
		}
	};
	window.requestAnimationFrame(step);
}

function animateOnScroll(elem, callbackFunction) {
	if (elem.length) {
		const elemWindowTopGap = elem[0].getBoundingClientRect().top;
		if (elemWindowTopGap < windowInnerHeight) {
			callbackFunction();
		}
	}
}

$(window).on('scroll', function () {
	animationOnScrollLoad();
	activateScrollToTop();
});

function animationOnScrollLoad() {
	// animate couters
	const counterComponentElem = $('#countersSplitterTag');
	if (counterComponentElem.length) {
		if (!isCountersCaseAnimated) {
			animateOnScroll(counterComponentElem.find('.cst-counter-cases'), () => {
				animateValue(counterComponentElem.find('.cst-counter-cases')[0], 0, 267, 1500);
				isCountersCaseAnimated = true;
			});
		}

		if (!isCountersConsultantAnimated) {
			animateOnScroll(counterComponentElem.find('.cst-counter-consultant'), () => {
				animateValue(counterComponentElem.find('.cst-counter-consultant')[0], 0, 173, 1500);
				isCountersConsultantAnimated = true;
			});
		}

		if (!isCountersAwardAnimated) {
			animateOnScroll(counterComponentElem.find('.cst-counter-customers'), () => {
				animateValue(counterComponentElem.find('.cst-counter-customers')[0], 0, 875, 1500);
				isCountersAwardAnimated = true;
			});
		}

		if (!isCountersCustomerAnimated) {
			animateOnScroll(counterComponentElem.find('.cst-counter-awards'), () => {
				animateValue(counterComponentElem.find('.cst-counter-awards')[0], 0, 478, 1500);
				isCountersCustomerAnimated = true;
			});
		}
	}

	// animate hero image
	const heroIDImg = $('#heroIDImg');
	if (heroIDImg.length && !heroIDImg.hasClass('hero-id-img-animate')) {
		animateOnScroll(heroIDImg, (elem = heroIDImg) => {
			elem.addClass('hero-id-img-animate');
		});
	}

	// animate company image
	const companyImg = $('#companyTCImg');
	if (companyImg.length && !companyImg.hasClass('ctc-img-animate')) {
		animateOnScroll(companyImg, (elem = companyImg) => {
			elem.addClass('ctc-img-animate');
		});
	}

	// animate team gallery
	const teamDGGalleryElem = $('#teamDGGallery');
	if (teamDGGalleryElem.length && !teamDGGalleryElem.hasClass('team-dg-gallery-animate')) {
		animateOnScroll(teamDGGalleryElem, (elem = teamDGGalleryElem) => {
			elem.addClass('team-dg-gallery-animate');
		});
	}

	// animate prices
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

$('#contactUsForm').on('submit', function (event) {
	if (!contactUsFormValidation($(this))) {
		const globalErrorMsgElem = $(this).find('.form-rd-global-errormsg');
		globalErrorMsgElem.addClass('form-rd-g-errormsg-active');
		globalErrorMsgElem[0].textContent = 'Some error occured, please check and try again.';
		event.preventDefault();
	};
});

function contactUsFormValidation(contactUsFormElem) {
	let isContactUsFormValid = true;
	// Name (text)
	const nameElem = contactUsFormElem.find('#name');
	if (!nameElem[0].validity.valid) {
		if (nameElem[0].validity.valueMissing || nameElem.value.trim() === '') {
			nameElem.next()[0].textContent = 'Name required!';
		}
		nameElem.next().addClass('form-rd-errormsg-active');
		nameElem.addClass('form-rd-input-text-error');
		isContactUsFormValid = false;
	} else {
		nameElem.next().removeClass('form-rd-errormsg-active');
		nameElem.removeClass('form-rd-input-text-error');
	}

	// email (email)
	const emailElem = contactUsFormElem.find('#email');
	if (!emailElem[0].validity.valid) {
		if (emailElem[0].validity.valueMissing || emailElem.value.trim() === '') {
			emailElem.next()[0].textContent = 'Email required!';
		} else if (emailElem.validity.typeMismatch) {
			emailElem.next()[0].textContent = 'Email not valid!';
		}
		emailElem.next().addClass('form-rd-errormsg-active');
		emailElem.addClass('form-rd-input-email-error');
		isContactUsFormValid = false;
	} else {
		nameElem.next().removeClass('form-rd-errormsg-active');
		nameElem.removeClass('form-rd-input-email-error');
	}

	return isContactUsFormValid;
}

function activateScrollToTop() {
	const scrollToTopElem = $('#scrollToTop');
	if (clientWidth > mobileLandscapeView && scrollToTopElem.length) {
		if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
			scrollToTopElem.addClass('scroll-tt-btn-active');
		} else {
			scrollToTopElem.removeClass('scroll-tt-btn-active');
		}
	}
}

$(window).on('resize', function () {
	clientWidth = document.documentElement.clientWidth;
});

const scrollToTopElem = $('#scrollToTop');
if (scrollToTopElem.length) {
	scrollToTopElem.on('click', () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
}
