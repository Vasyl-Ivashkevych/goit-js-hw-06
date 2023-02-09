const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredList = document.querySelector('#ingredients');

const elements = [];

for (const ingredient of ingredients) {
  const value = ingredient;
  const ingredItem = document.createElement('li');
  ingredItem.textContent = value;
  elements.push(ingredItem);

  console.log(ingredItem);
}

ingredList.append(...elements);
console.log(ingredList);