const ref = {
  item: document.querySelectorAll(".item"),
  categories: document.querySelector("#categories"),
};

console.log(`Number of categories:  ${ref.item.length}`);
console.log(ref.item);
ref.item.forEach((element) => {
  const title = element.querySelector("h2").textContent;
  console.log(`Category: ${title}`);
  const total = element.querySelectorAll("li");
  console.log(`Elements: ${total.length}`);
});
