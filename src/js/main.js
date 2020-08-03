import modals from './modules/modals';
import slider from './modules/slider';
import showContent from './modules/showContent';
import form from './modules/form';
import mask from './modules/mask';
import checkTextInput from './modules/checkTextInput';
import calc from './modules/calc';
import filter from './modules/filter';
import photosEvent from './modules/photosEvent';
import hint from './modules/hint';
import burger from './modules/burger';
import scroll from './modules/scroll';
import drag from './modules/drag';

window.addEventListener('DOMContentLoaded', () => {
	'use strict'

	modals();
	slider();
	showContent();
	form();
	mask();
	checkTextInput();
	calc({
		size: 'size',
		material: 'material',
		options: 'options',
		promoCode: '.promocode',
		price:  '.calc-price',
	});
	filter({
		btns: '.portfolio-menu',
		photos: '.portfolio-block',
		sharp: '.portfolio-no'
	});
	photosEvent({
		sizeBlock: '.sizes-wrapper',
		imagies: 'img',
	});
	hint();
	burger();
	scroll();
	drag();
})