'use strict'

const sizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');
text.style.fontSize = `${sizeControl.value}px`

const handler = (e) => {
    text.style.fontSize = `${e.currentTarget.value}px`;
}

sizeControl.addEventListener('input', handler)

