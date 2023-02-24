const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredList = document.querySelector('#ingredients');

ingredients.map(element => {
  const ingredItem = document.createElement('li');
  ingredItem.classList.add("item");
  ingredItem.textContent = element;
  ingredList.append(ingredItem);
});

