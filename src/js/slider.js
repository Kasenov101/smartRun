document.addEventListener("DOMContentLoaded", () => {
	
	const sliderControl = () => {
		let side;
		if (screen.width >= 1200) {
			const controlEl= document.getElementsByClassName("slider__control");
			for (const control of controlEl) {
				side = control.classList.contains("slide_left")? "left" : "right";
				control.addEventListener("click", () =>  getAnotherImg(side));
			}
		} else {
			const controlEl = document.getElementsByClassName("slider__wraper");
			controlEl[0].addEventListener("touchstart", () => getAnotherImg("left"));
		}
	}
	
	
	const getAnotherImg = (side, e) => {
		const images = document.getElementsByClassName("slider__image");
		let nextSlide;
		for(let i = 0; i < images.length; i++) {
			if (images[i].classList.contains("slide_vissible")) {
				nextSlide = side === "left"? i - 1 : i + 1;
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
	
  });