const elementCategory = document.querySelectorAll('li.item');
console.log(elementCategory);
console.log('Number of categories:' , elementCategory.length);

const titleCategory = document.querySelectorAll('h2');
console.log('Category:', titleCategory[0].textContent);

// const lastChildItem = elementCategory.previousSibling;
// console.log(lastChildItem);