const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(e) {
  e.preventDefault();
  const elem = e.currentTarget.elements;
  const emailValue = elem.email.value;
  const emailName = elem.email.name;
  const passwordValue = elem.password.value;
  const passwordName = elem.password.name;

  if (emailValue === "" || passwordValue === "") {
    return alert("Please fill in all the fields!");
  }
  const obj = { [emailName]: emailValue, [passwordName]: passwordValue };

  console.log(obj);

  e.currentTarget.reset();
}
