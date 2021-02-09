const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const createGallery = pictur => {

    const newItemRef = document.createElement('li');
    newItemRef.classList.add('item');

    const newPicturRef = document.createElement('img');
    newPicturRef.src = pictur.url;
    newPicturRef.alt = pictur.alt;

    newItemRef.appendChild(newPicturRef)
    return newItemRef
}


const newGallerry = images.map(item => createGallery(item))
const galleryRef = document.querySelector('#gallery');
galleryRef.classList.add('list');
    
galleryRef.append(...newGallerry)