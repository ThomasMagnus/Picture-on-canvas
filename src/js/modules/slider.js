const slider = () => {
	const mainSlider = document.querySelector('.main-slider'),
		  mainSliderItem = document.querySelectorAll('.main-slider-item');

	let heightImg;
	let count = 1;
	let offset = 0;

	mainSliderItem.forEach(item => {
		heightImg = parseFloat(getComputedStyle(item).height); 
	})

	mainSlider.style.cssText = `
		height: ${heightImg}px;
		overflow: hidden;
	`;

	const showSlider = () => {
		count < mainSliderItem.length ? offset += -heightImg : (offset = 0, count = 0);
		mainSliderItem.forEach(item => {
			item.style.cssText = `
				transform: translateY(${offset}px);
				transition: all 0.5s linear;
			`
		})
		count++;
	}

	setInterval(() => {
		showSlider()
	}, 4500);

	//////////////////////////////////////////////////////////////////////////////////

	const sliderWrapper = document.querySelector('.slider__wrapper'),
		  feedbackSlideritem = document.querySelectorAll('.feedback-slider-item'),
		  mainPrevBtn = document.querySelector('.main-prev-btn'),
		  mainNextBtn = document.querySelector('.main-next-btn');

	let widthImg;
	let counter = 1;
	let offsetWidth = 0;

	feedbackSlideritem.forEach(item => {
		widthImg = parseFloat(getComputedStyle(item).width); 
	})

	const showSlides = () => {
		feedbackSlideritem.forEach(item => {
			item.style.cssText = `
				transform: translateX(${offsetWidth}px);
				transition: all 0.5s linear;
			`
		})
	};

	sliderWrapper.style.cssText = `
		width: ${widthImg}px;
		overflow: hidden;
	`;

	const nextSlide = () => {
		counter < feedbackSlideritem.length ? offsetWidth += -widthImg : (offsetWidth = 0, counter = 0);
		showSlides();
		counter++;
	}

	const prevSlide = () => {
		counter > 1 ? offsetWidth += widthImg : 
		(offsetWidth = ((feedbackSlideritem.length - 1) * -widthImg), counter = (feedbackSlideritem.length + 1));
		showSlides();
		counter--;
	}

	mainNextBtn.addEventListener('click', nextSlide)
	mainPrevBtn.addEventListener('click', prevSlide)

	let interval;

	function slideInterval() {
		interval = setInterval(nextSlide, 4500);
	}

	slideInterval()

	feedbackSlideritem.forEach(element => {
		element.addEventListener('mouseenter', () => {
			clearInterval(interval)
		})
		element.addEventListener('mouseleave', () => {
			slideInterval()
		})
	});
}

export default slider