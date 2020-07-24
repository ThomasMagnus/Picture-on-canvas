const calc = () => {
	const size = document.getElementById('size'),
		  material = document.getElementById('material'),
		  options = document.getElementById('options'),
		  promocode = document.getElementById('promocode'),
		  calcPrice = document.querySelector('.calc-price'),
		  buttonOrder = document.querySelector('.button-order'),
		  calcForm = document.querySelector('.calc-form');

	calcForm.addEventListener('change', (e) => {
		const target = e.target;

		if (target.tagName === 'SELECT') {
			if (target.classList.contains('size')) {
				console.log('true');
			}
			console.log(target.selectedOptions[0].dataset.price);
		}
	})
}

export default calc;