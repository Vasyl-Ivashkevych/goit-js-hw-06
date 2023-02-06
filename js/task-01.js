const elementCategory = document.querySelectorAll('li.item');
console.log('Number of categories:' , elementCategory.length);

const titleCategory = document.querySelectorAll('h2');
console.log('Category:', titleCategory[0].textContent);

const listOfCategory = document.querySelectorAll('li ul');
const itemOfCategory = listOfCategory[0].querySelectorAll('li');
console.log('Elements:', itemOfCategory.length);

console.log('Category:', titleCategory[1].textContent);
const itemOfCategory2 = listOfCategory[1].querySelectorAll('li');
console.log('Elements:', itemOfCategory2.length);

console.log('Category:', titleCategory[2].textContent);
const itemOfCategory3 = listOfCategory[2].querySelectorAll('li');
console.log('Elements:', itemOfCategory3.length);