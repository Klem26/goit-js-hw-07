const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsRef = document.querySelector('#ingredients')

// console.log(ingredientsRef)

const getIngredients = item => {
    const newItem = document.createElement('li')
    newItem.textContent = item;
    return newItem;
}
const ingredientsList = ingredients.map(getIngredients)
 
ingredientsRef.append(...ingredientsList)


