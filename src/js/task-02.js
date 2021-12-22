const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsAll = document.querySelector("#ingredients");

const allElement = ingredients.map((elem) => {
  const ingridientItem = document.createElement("li");
  ingridientItem.textContent = elem;

  return ingridientItem;
});
ingredientsAll.append(...allElement);

console.log(ingredientsAll);
