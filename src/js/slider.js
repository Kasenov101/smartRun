
 
const sliderControl = () => {
	const controlEl= document.getElementsByClassName("slider__control");
	for (const control of controlEl) {
		control.addEventListener("click", () =>  getAnotherImg(control));
	}
}

const getAnotherImg = (controlBtn) => {
	const images = document.getElementsByClassName("slider__image");
	let nextSlide;
	for(let i = 0; i < images.length; i++) {
		if (images[i].classList.contains("slide_vissible")) {
			nextSlide = controlBtn.classList.contains("slide_left")? i - 1 : i + 1;
			images[i].classList.remove("slide_vissible") 
			break;
		}
	}
	if (nextSlide < 0) {
		images[images.length - 1].classList.add("slide_vissible");
	} else if (nextSlide === images.length) {
		images[0].classList.add("slide_vissible");
	} else { 
		images[nextSlide].classList.add("slide_vissible");
	}
}


sliderControl();