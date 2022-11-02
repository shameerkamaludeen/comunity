import { animateOnScroll, animateValue } from '../../../../scripts/utilities.js';

// counter
let isCountersCaseAnimated = false;
let isCountersConsultantAnimated = false;
let isCountersCustomerAnimated = false;
let isCountersAwardAnimated = false;

// animate couters
export default function animateCounters() {
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
}
