import {getData} from './services/post'

const showContent = () => {
	const buttonStyles = document.querySelector('.button-styles');

	const getContent = () => {

		getData('http://localhost:3000/styles')
			.then(res => {
				createCards(res)
			})

		function createCards(response) {
			response.forEach(item => {
				const div = document.createElement('div');
				div.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
				div.innerHTML = `
					<div class=styles-block>
						<img src=${item.src} alt>
						<h4>${item.title}</h4>
						<a href="${item.link}">Подробнее</a>
					</div>
				`;
				document.querySelector('.wrapper').append(div)
			})
			buttonStyles.remove();
		}
	}

	buttonStyles.addEventListener('click', getContent);
}

export default showContent;