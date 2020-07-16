const modals = () => {

	let dir = false;

	const bindModal = (btnSelector, modalSelector, closeBtn) => {

		const btn = document.querySelectorAll(btnSelector),
			  modal = document.querySelector(modalSelector),
			  scrollWidth = hideScroll();
	
		function hideScroll() {
			const div = document.createElement('div');
	
			div.style.width = '50px';
			div.style.height = '50px';
			div.style.overflowY = 'scroll';
			div.style.visibility = 'hidden'
	
			document.body.append(div)
	
			const scroll = div.offsetWidth - div.clientWidth;
	
			div.remove();
	
			return scroll;
		}
	
		const showModal = () => {
	
			modal.classList.add('animated', 'fadeIn');
			modal.style.display = 'block';
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = `${scrollWidth}px`;
	
			if (modalSelector === '.popup-gift') {
				document.querySelector('.fixed-gift').remove();
			}
		}
	
		const hideModal = () => {
			modal.style.display = 'none';
			document.body.style.overflow = '';
			document.body.style.marginRight = `0px`;
		}
	
		btn.forEach(item => {
			item.addEventListener('click', () => {
				showModal();
				dir = true;
			})
		})
	
		modal.addEventListener('click', (e) => {
			const target = e.target;
	
			if (target.tagName === 'BUTTON' || target.classList.contains(closeBtn)) {
				hideModal()
			}
		})
	
		const timeOutModal = (selector, time) => {
			let display = false;
	
			setTimeout(() => {
				document.querySelectorAll('[data-modal]').forEach(item => {
					if (getComputedStyle(item).display !== 'none') {
						display = true;
					}
				})
	
				if (!display) {
					document.querySelector(selector).style.display = 'block'
					document.querySelector(selector).classList.add('animated', 'fadeIn')
					document.body.style.overflow = 'hidden';
					document.body.style.marginRight = `${scrollWidth}px`;
				}
				
			}, time)
		}
	
		timeOutModal('.popup-consultation', 60000)
	}

	const getModalOnScroll = () => {
		window.addEventListener('scroll', () => {
			if (document.documentElement.clientHeight + window.pageYOffset >= (document.documentElement.scrollHeight - 1)) {
				if (!dir) {
					document.querySelector('.fixed-gift').click();
				}
			}
		})
	}
	

	bindModal('.button-design', '.popup-design', 'popup-design');
	bindModal('.button-consultation', '.popup-consultation', 'popup-consultation');
	bindModal('.fixed-gift', '.popup-gift', 'popup-gift');
	getModalOnScroll();
}

export default modals;