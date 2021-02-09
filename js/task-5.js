

const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');



inputRef.addEventListener('input', onInputChange);


function onInputChange(event) {
    event.currentTarget.value === ''
    ? spanRef.textContent = 'незнакомец'
    :spanRef.textContent = event.currentTarget.value;
    
}
// function onInputChange(event) {
//     if (event.currentTarget.value === '') {
//        console.log(spanRef.textContent = 'незнакомец') 
//     } else {
//         console.log(spanRef.textContent = event.currentTarget.value)
//     }

//  }