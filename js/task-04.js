const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const buttonDecrement = document.querySelector(`button[data-action="decrement"]`);
const buttonIncrement = document.querySelector(`button[data-action="increment"]`);
const valueEl = document.querySelector('#value');

buttonDecrement.addEventListener('click', function () {
    counter.decrement();
    valueEl.textContent = counter.value;
});

buttonIncrement.addEventListener('click', function () {
    counter.increment();
    valueEl.textContent = counter.value;
});


