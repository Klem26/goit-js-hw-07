

const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');


 

let counterValue = 0;

function incrementFn(){
     counterValue += 1
     
    valueRef.textContent = counterValue
  
}
function  decrementFn() {
    counterValue -= 1 
    
    valueRef.textContent = counterValue
  
}
 incrementBtnRef.addEventListener('click', incrementFn);
decrementBtnRef.addEventListener('click', decrementFn)