const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredList = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
  const ingredItem = document.createElement('li');
  ingredItem.classList.add("item");
  ingredItem.textContent = element;
  return ingredItem;
});

ingredList.append(...elements);