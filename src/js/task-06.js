const inp = document.querySelector("#validation-input");
const dataLength = document.querySelector("#validation-input[data-length]");

inp.addEventListener("blur", () => {
  if (inp.value.length !== 6) {
    inp.classList.remove("valid");
    inp.classList.add("invalid");
  } else if (inp.value.length === 6) {
    inp.classList.remove("invalid");
    inp.classList.add("valid");
  }
});
