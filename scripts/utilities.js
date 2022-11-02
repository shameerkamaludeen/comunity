export function animateOnScroll(elem, callbackFunction) {
	if (elem.length) {
		const elemWindowTopGap = elem[0].getBoundingClientRect().top;
		if (elemWindowTopGap < window.innerHeight) {
			callbackFunction();
		}
	}
}

export function animateValue(obj, start, end, duration) {
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