/* || Component - Form radiused
	 ========================================================================== */

const contactUsForm = $('#contactUsForm');

export default function addFormRadiusedEvents() {
	contactUsForm.attr('novalidate', '');

	contactUsForm.on('submit', function (event) {
		if (!contactUsFormValidation($(this))) {
			const globalErrorMsgElem = $(this).find('.form-rd-global-errormsg');
			globalErrorMsgElem.addClass('form-rd-g-errormsg-active');
			globalErrorMsgElem[0].textContent = 'Some error occured, please check and try again.';
			event.preventDefault();
		};
	});
}

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
