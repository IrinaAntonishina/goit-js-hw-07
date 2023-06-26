import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
const createMarkup = galleryItems.map(({preview, original, description}) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`
}).join('');

galleryList.insertAdjacentHTML('afterbegin', createMarkup)
console.log(galleryItems);

galleryList.addEventListener('click', (evt) => {
    evt.preventDefault();
    const imgEl = evt.target.closest('.gallery__link')
    if(!imgEl){
        return;
    } 

})
new SimpleLightbox('.gallery a', { captionsData:"alt", captionDelay:250, })