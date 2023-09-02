'use strict'

const form = document.querySelector('.login-form');
form.addEventListener('submit', formSubmit);

function formSubmit (e) {
    e.preventDefault()
    const formElements = e.currentTarget.elements;
    const mail = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    if (mail === '' || password === '') {
        alert('Please fill in all the fields!');
        return
    } else {
        const formData = {mail, password}
        console.log(formData);
        form.reset()
    }
}
