

const inputRef = document.querySelector('#validation-input');
const dataLengthAtrRef = inputRef.getAttribute('data-length');
console.log(dataLengthAtrRef)

inputRef.addEventListener('focus', onInputFocus);
inputRef.addEventListener('blur', onInputBlur);
inputRef.addEventListener('input', onInputChange);

function onInputFocus() {
    console.log('Focus')
}

function onInputBlur() {
    console.log('Blur')
}


function onInputChange(event) {
    const currentValue = event.target
    // console.log(currentValue)
  
    if (currentValue.value.length >= dataLengthAtrRef) {
        currentValue.classList.add('valid') 
        currentValue.classList.remove('invalid')
    } else {
        
        currentValue.classList.add('invalid') 
        currentValue.classList.remove('valid')
     }
}