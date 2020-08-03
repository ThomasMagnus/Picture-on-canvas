const calc = ({size, material, options, promoCode, price}) => {
	const calcSize = document.getElementById(size),
		  calcMaterial = document.getElementById(material),
		  calcOptions = document.getElementById(options),
		  calcPromoCode = document.querySelector(promoCode),
		  calcPrice = document.querySelector(price);

	let sum = 0;

	const calcFunc = () => {
		sum = +calcSize.value + +calcMaterial.value + +calcOptions.value;

		if (calcSize.value == '' || calcMaterial.value == '') {
			calcPrice.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
		} else if (calcPromoCode.value === 'IWANTPOPART') {
			calcPrice.textContent = Math.round(sum * 0.7);
		} else {
			calcPrice.textContent = sum;
		}
	}

	calcSize.addEventListener('change', calcFunc);
	calcMaterial.addEventListener('change', calcFunc);
	calcOptions.addEventListener('change', calcFunc);
	calcPromoCode.addEventListener('input', calcFunc);
	
}

export default calc;