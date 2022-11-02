/* || Component - Form radiused
	 ========================================================================== */

const contactMFForm = $('#contactMFForm');

export default function addFormRadiusedEvents() {
	contactMFForm.attr('novalidate', '');

	contactMFForm.on('submit', function (event) {
		if (!contactMFFormValidation($(this))) {
			const globalErrorMsgElem = $(this).find('.form-rd-global-errormsg');
			globalErrorMsgElem.addClass('form-rd-g-errormsg-active');
			globalErrorMsgElem[0].textContent = 'Some error occured, please check and try again.';
			event.preventDefault();
		};
	});
}

function contactMFFormValidation(contactMFFormElem) {
	let isContactMFFormValid = true;
	// Name (text)
	const nameElem = contactMFFormElem.find('#name');
	if (!nameElem[0].validity.valid) {
		if (nameElem[0].validity.valueMissing || nameElem.value.trim() === '') {
			nameElem.next()[0].textContent = 'Name required!';
		}
		nameElem.next().addClass('form-rd-errormsg-active');
		nameElem.addClass('form-rd-input-text-error');
		isContactMFFormValid = false;
	} else {
		nameElem.next().removeClass('form-rd-errormsg-active');
		nameElem.removeClass('form-rd-input-text-error');
	}

	// email (email)
	const emailElem = contactMFFormElem.find('#email');
	if (!emailElem[0].validity.valid) {
		if (emailElem[0].validity.valueMissing || emailElem.value.trim() === '') {
			emailElem.next()[0].textContent = 'Email required!';
		} else if (emailElem.validity.typeMismatch) {
			emailElem.next()[0].textContent = 'Email not valid!';
		}
		emailElem.next().addClass('form-rd-errormsg-active');
		emailElem.addClass('form-rd-input-email-error');
		isContactMFFormValid = false;
	} else {
		nameElem.next().removeClass('form-rd-errormsg-active');
		nameElem.removeClass('form-rd-input-email-error');
	}

	return isContactMFFormValid;
}
