'use strict'


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeButton = document.querySelector('.change-color');
const body = document.querySelector('body');
const spanColor = document.querySelector('.color');

changeButton.addEventListener('click', onClickButton);

function onClickButton() {
  body.style.backgroundColor = spanColor.textContent = getRandomHexColor();
}