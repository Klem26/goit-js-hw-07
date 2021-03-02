

const inputRef = document.querySelector('#validation-input');
const dataLengthAtrRef = inputRef.getAttribute('data-length');
console.log(dataLengthAtrRef)

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    const currentValue = event.target
    if (currentValue.value.length === Number(dataLengthAtrRef)) {
        currentValue.classList.add('valid') 
        currentValue.classList.remove('invalid') 
    } else {
        currentValue.classList.add('invalid') 
        currentValue.classList.remove('valid') 
     }
}