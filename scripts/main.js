// Variables
const windowInnerHeight = window.innerHeight;

// counter
let countersAnimationCase = true;
let countersAnimationConsultant = true;
let countersAnimationAward = true;

// Viewports
const mobileViewSmall = 20; // 320px standard
const mobileViewPortrait = 30; // 480px standard
const mobileViewLandscape = 40; // 640px standard
const tabletView = 48; // 768px standard
const laptopView = 64; // 1024px standard
const desktopView = 75; // 1200px standard

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
				breakpoint: (laptopView * 16),
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
				}
			},
			{
				breakpoint: (mobileViewLandscape * 16),
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
				breakpoint: (laptopView * 16),
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
				}
			},
			{
				breakpoint: (mobileViewLandscape * 16),
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
	const elemWindowTopGap = elem.getBoundingClientRect().top;
	if (elemWindowTopGap < windowInnerHeight) {
		callbackFunction();
	}
}

$(window).on('scroll', function () {
	animationOnScrollLoad();
});

function animationOnScrollLoad() {
	// animate couters
	const counterComponentElem = $('#countersSplitterTag');
	animateOnScroll(counterComponentElem.find('.cst-counter-cases')[0], () => {
		if (countersAnimationCase) {
			animateValue(counterComponentElem.find('.cst-counter-cases')[0], 0, 267, 1500);
			countersAnimationCase = false;
		}
	});

	animateOnScroll(counterComponentElem.find('.cst-counter-consultant')[0], () => {
		if (countersAnimationConsultant) {
			animateValue(counterComponentElem.find('.cst-counter-consultant')[0], 0, 173, 1500);
			countersAnimationConsultant = false;
		}
	});

	animateOnScroll(counterComponentElem.find('.cst-counter-awards')[0], () => {
		if (countersAnimationAward) {
			animateValue(counterComponentElem.find('.cst-counter-awards')[0], 0, 478, 1500);
			countersAnimationAward = false;
		}
	});

	// animate images
	const heroIDImg = $('#heroIDImg');
	animateOnScroll(heroIDImg[0], (elem = heroIDImg) => {
		elem.addClass('hero-id-img-animate');
	});

	const companyImg = $('#ctcImg');
	animateOnScroll(companyImg[0], (elem = companyImg) => {
		$('#ctcImg').addClass('ctc-img-animate');
	});

	// animate team gallery
	$('#galleryQueue').find('.gq-img-wr-animation').each(function () {
		const currentElem = $(this);
		animateOnScroll(currentElem[0], (elem = currentElem) => {
			elem.addClass('gq-img-wr-animate');
		});
	});
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