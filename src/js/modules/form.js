import { postData } from './services/post';

const form = () => {
	const forms = document.querySelectorAll('form'),
		upload = document.querySelectorAll('[name="upload"]');

	const parth = {
		picture: './assets/server.php',
		question: './assets/question.php',
	};

	const message = {
		sucsess: 'Спасибо за обращение!',
		loading: 'Загрузка...',
		error: 'Ошибка загрузки',
		spinner: 'assets/img/spinner.gif',
		ok: 'assets/img/ok.png',
		fail: 'assets/img/fail.png'
	};

	let file;

	upload.forEach(item => {
		item.addEventListener('change', (e) => {
			e.preventDefault();
			file = item.previousElementSibling;
			const fileName = item.files[0].name.split('.');
			if (fileName[0].length >= 6) {
				item.previousElementSibling.textContent = 
				fileName[0].slice(0, 6) + '...' + fileName[1];
			} else {
				file.textContent = item.files[0].name;
			}
			
		})
	})

forms.forEach(item => {
	item.addEventListener('submit', (e) => {
		e.preventDefault();

		const div = document.createElement('div');
		div.classList.add('status');
		item.parentNode.append(div);

		item.classList.add('animated', 'fadeOutUp');

		setTimeout(() => {
			item.style.display = 'none';
		}, 400);

		let img = document.createElement('img');
		img.src = message.spinner;
		img.classList.add('animated', 'fadeInUp');
		div.appendChild(img);

		let statusMessage = document.createElement('p')
		statusMessage.textContent = message.loading
		div.append(statusMessage);

		let API;

		item.closest('.popup-design') || item.closest('.calc-form') ? API = parth.picture : API = parth.question;

		const formData = new FormData(item);

		if (item.closest('.calc-form ')) {
			formData.append('calcPrice', document.querySelector('.calc-price').value);
			console.log('true');
		}

		postData(formData, API)
			.then(data => {
				console.log(data);
				img.src = message.ok;
				statusMessage.textContent = message.sucsess;
			})
			.catch(() => {
				img.src = message.fail;
				statusMessage.textContent = message.error;
			})
			.finally(() => {
				item.reset();
				setTimeout(() => {
					div.remove()
					item.style.display = 'block';
					item.classList.remove('fadeOutUp');
					item.classList.add('fadeInUp');
				}, 3000)
				if (item.closest('.popup-design') || item.closest('.calc-form')) {
					file.textContent = 'Файл не выбран';
				}
				if (item.closest('.calc-form ')) {
					document.querySelector('.calc-price').textContent = 'Для расчета нужно выбрать размер картины и материал картины'
				}
			})
	})
})

}

export default form 