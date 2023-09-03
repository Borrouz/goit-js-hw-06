const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

const handler = (e) => {
    nameOutput.textContent = e.currentTarget.value.trim();
    
}


nameInput.addEventListener('input', handler);