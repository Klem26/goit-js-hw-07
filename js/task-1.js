const categoriesListRef = document.querySelector('#categories')

const itemCategoriesRef = document.querySelectorAll('.item')


const quantityCategory = categoriesListRef.children.length;
console.log(`В списке ${quantityCategory} категории.`)

function showCategories() {
    itemCategoriesRef.forEach(element => {
       
    console.log(`Категория:${element.firstElementChild.textContent}`)
    console.log(`Количество элементов:${element.lastElementChild.children.length}`)
 });
}

showCategories();

//   const  showCategories = itemCategoriesRef.forEach((item, index) => { 
//    console.log(`Категория: ${item.textContent} \nКоличество элементов: ${itemCategoriesRef[index].children.length}`);
//  })