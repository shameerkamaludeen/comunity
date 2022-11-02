import { animateOnScroll } from '../../../../scripts/utilities.js'
export default function animateHeroIDImage() {
	const heroIDImg = $('#heroIDImg');
	if (heroIDImg.length && !heroIDImg.hasClass('hero-id-img-animate')) {
		animateOnScroll(heroIDImg, (elem = heroIDImg) => {
			elem.addClass('hero-id-img-animate');
		});
	}
}