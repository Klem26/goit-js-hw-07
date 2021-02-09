

const inputRef = document.querySelector('#font-size-control');
console.log(inputRef)
const spanRef = document.querySelector('#text');


inputRef.addEventListener('change', onInputChange);


function onInputChange(event) {
      const currentValue = event.target
    // console.log(currentValue)
    // spanRef.style.backgroundColor = 'teal';
    spanRef.style.fontSize = inputRef.value+'px'
}