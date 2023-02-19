const buttonDecrement = document.querySelector(
  `button[data-action="decrement"]`
);
const buttonIncrement = document.querySelector(
  `button[data-action="increment"]`
);
const valueEl = document.querySelector("#value");

let counterValue = 0;

const counterDecrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const counterIncrement = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};


buttonDecrement.addEventListener("click", counterDecrement);

buttonIncrement.addEventListener("click", counterIncrement); 
