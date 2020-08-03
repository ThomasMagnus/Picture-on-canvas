const photosEvent = ({sizeBlock, imagies}) => {
	const sizesBlock = document.querySelector(sizeBlock),
		  img = sizesBlock.querySelectorAll(imagies);

	const showImg = (e) => {
		const target = e.target;

		if (target.tagName === 'IMG') {
			target.src = target.src.slice(0, -4) + '-1.png';
			target.parentElement.querySelectorAll('p').forEach(elem => {
				if (!elem.classList.contains('sizes-hit')) {
					elem.style.display = 'none'
				}
			})
		}
	}

	const hideImg = (e) => {
		const target = e.target;

		if (target.tagName === 'IMG') {
			target.src = target.src.slice(0, -6) + '.png';
			target.parentElement.querySelectorAll('p').forEach(elem => {
				elem.style.display = 'block'
			})
		}
	}

	img.forEach(item => {
		item.addEventListener('mouseover', showImg);
		item.addEventListener('mouseleave', hideImg)
	})

	
}

export default photosEvent;