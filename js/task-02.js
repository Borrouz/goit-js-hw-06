const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const container = document.querySelector('#ingredients');
const result = [...ingredients].map((e) => {
  const li = document.createElement('li');
  li.textContent = e;
  li.classList.add('item');
  return li
})
console.log(result);


container.append(...result)


