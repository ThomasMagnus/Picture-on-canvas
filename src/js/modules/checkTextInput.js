const checkTextInput = () => {
	const input = document.querySelectorAll('[type="text"]');

	input.forEach(item => {
		if (!item.classList.contains('promocode')) {
			item.addEventListener('keypress', (e) => {
				if (e.key.match(/[^а-яё 0-9]/ig)) {
					e.preventDefault()
				}
			})
		}
	})
}

export default checkTextInput;