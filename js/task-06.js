'use strict'

const input = document.getElementById('validation-input');

const handler = (e) => {
    console.log(e);
    if (Number(e.currentTarget.value.trim().length) === Number(e.currentTarget.dataset.length)){
        input.classList.remove('invalid')
        input.classList.add('valid');
    } else if (Number(e.currentTarget.value.trim().length) === 0){
        input.classList.remove('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
    return input
}

input.addEventListener('blur', handler);