'use strict'

const dec = document.querySelector('button[data-action = "decrement"]');
const inc = document.querySelector('button[data-action = "increment"]');
const value = document.getElementById("value");
console.log(value);

let counterValue = 0;
dec.addEventListener("click", () => {
    counterValue -= 1;
    value.textContent = counterValue;
    
})

inc.addEventListener("click", () => {
    counterValue +=1;
    value.textContent = counterValue;
})
