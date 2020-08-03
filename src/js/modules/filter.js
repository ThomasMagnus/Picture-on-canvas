const filter = ({btns, photos, sharp}) => {
	const portfolioMenu = document.querySelector(btns),
		  portfolioBlock = document.querySelectorAll(photos),
		  portfolioNo = document.querySelector(sharp);

	const hideActivClass = () => {
		portfolioMenu.children.forEach(item => {
			item.classList.remove('active');
		})
	};

	const filterElems = (e) => {

		const target = e.target;

		let arr = [];

		hideActivClass();

		portfolioBlock.forEach((item) => {
			item.style.display = 'none';

			item.classList.forEach((elem) => {
				if (target.classList.value === elem) {
					item.style.display = 'block';
					item.classList.add('animated', 'fadeIn'); 

					arr.push(item);
				}
			})
		})
		
		target.classList.add('active');
		
		if (arr.length == 0) {
			portfolioNo.style.display = 'block';
			portfolioNo.classList.add('animated', 'fadeIn');
		} else {
			portfolioNo.style.display = 'none';
		}
	}

	portfolioMenu.addEventListener('click', filterElems)
}

export default filter;