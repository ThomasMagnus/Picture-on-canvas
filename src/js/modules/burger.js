const burger = () => {
	const burgerMenu = document.querySelector('.burger-menu'),
		  burgerBtn = document.querySelector('.burger');

	const showMenuOnWidth = () => {
		window.addEventListener('scroll', () => {
			if (document.documentElement.clientWidth > 992) {
				burgerMenu.classList.remove('active-burger')
			}
		})
	}

	showMenuOnWidth()

	const showMenu = () => {
		if (document.body.clientWidth <= 992) {
			burgerMenu.classList.toggle('active-burger');
			burgerMenu.classList.add('animated', 'fadeIn');
		} else {
			return
		}
	}

	burgerBtn.addEventListener('click', showMenu)
}

export default burger;