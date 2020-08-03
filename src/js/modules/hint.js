const hint = () => {
	const accordion = document.getElementById('accordion'),
		  span = accordion.querySelectorAll('span'),
		  accordionBlock = accordion.querySelectorAll('.accordion-block');

	const hideElements = () => {
		accordionBlock.forEach(item => {
			if (!item.classList.contains('active-content')) {
				item.classList.add('active-content')
			}
		})
	}
	
	hideElements();

	span.forEach(item => {
		item.addEventListener('click', function(e) {
			hideElements();

			const target = e.target;

			target.parentElement.nextElementSibling.classList.toggle('active-content')
			target.parentElement.nextElementSibling.classList.add('animated', 'fadeInDown')
		});
	})

}

export default hint;