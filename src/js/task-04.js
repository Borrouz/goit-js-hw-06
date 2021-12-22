const refs = {
  btn1: document.querySelector("[data-action='decrement']"),
  btn2: document.querySelector("[data-action='increment']"),
  addCounterValue: document.querySelector("#value"),
};

let counterValue = 0;
const decrement = () => {
  counterValue -= 1;
  refs.addCounterValue.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  refs.addCounterValue.textContent = counterValue;
};

refs.btn1.addEventListener("click", decrement);
refs.btn2.addEventListener("click", increment);
