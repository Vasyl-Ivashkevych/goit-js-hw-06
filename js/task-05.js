const inputEl = document.querySelector('#name-input');
const textEl = document.querySelector('#name-output');

inputEl.addEventListener('input',onInputChange);

function onInputChange(event) {
   textEl.textContent = inputEl.value !== '' ? event.currentTarget.value : 'Anonymous';
};
