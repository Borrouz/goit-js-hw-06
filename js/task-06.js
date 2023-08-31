'use strict'

const input = document.getElementById('validation-input');

const handler = (e) => {
    if (Number(e.currentTarget.value.length) === Number(e.currentTarget.dataset.length)){
        input.classList.remove('invalid')
        input.classList.add('valid');
    } else if (Number(e.currentTarget.value.length) === 0){
        input.classList.remove('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
    return input
}

input.addEventListener('blur', handler);