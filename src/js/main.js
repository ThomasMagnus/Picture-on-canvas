import modals from './modules/modals';
import slider from './modules/slider';
import showContent from './modules/showContent';
import form from './modules/form';
import mask from './modules/mask';
import checkTextInput from './modules/checkTextInput';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', () => {
	'use strict'

	modals();
	slider();
	showContent();
	form();
	mask();
	checkTextInput();
	calc();
})