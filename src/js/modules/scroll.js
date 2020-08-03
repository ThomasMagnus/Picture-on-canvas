const scroll = () => {

	const stylesBtn = document.querySelectorAll('[href="#styles"]'),
		  portfolioBtn = document.querySelectorAll('[href="#portfolio"]'),
		  questionsBtn = document.querySelectorAll('[href="#often-questions"]'),
		  styles = document.getElementById('styles'),
		  portfolio = document.getElementById('portfolio'),
		  oftenQuestions = document.getElementById('often-questions'),
		  pageup = document.querySelector('.pageup');

	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 760) {
			pageup.style.opacity = '1'
		} else {
			pageup.style.opacity = ''
		}
	})

	const scrollTo = (elem) => {
		window.scroll({
			left: 0,
			top:  elem.offsetTop,
			behavior: 'smooth'
		})
	}

	const getScroll = (btn, scrollSelector) => {
		btn.forEach(item => {
			item.addEventListener('click', (e) => {
				e.preventDefault()
				scrollTo(scrollSelector)
			})
		})
	}

	getScroll(stylesBtn, styles);
	getScroll(portfolioBtn, portfolio);
	getScroll(questionsBtn, oftenQuestions);

	const toScr = () => {
		if (window.pageYOffset > 0) {
			window.scrollBy(0, -100)
			requestAnimationFrame(toScr);
		}
	}

	pageup.addEventListener('click', (e) => {
		e.preventDefault()
		toScr()
	})

}

export default scroll