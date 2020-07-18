const showContent = () => {
	const buttonStyles = document.querySelector('.button-styles'),
		  hiddenLg = document.querySelectorAll('.hidden-lg');

	const getContent = () => {
		hiddenLg.forEach(item => {
			item.classList.remove('hidden-lg')
		});
	}

	buttonStyles.addEventListener('click', function() {
		this.remove()
		getContent()
	})
}

export default showContent;