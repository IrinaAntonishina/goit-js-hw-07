import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');


const createMarkup = galleryItems.map(({preview, original, description}) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
       <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
       />
     </a>
     </li>`
}).join('');

galleryList.insertAdjacentHTML('afterbegin', createMarkup)


galleryList.addEventListener('click', evt => {
    evt.preventDefault();
    const linkEl = evt.target.closest('.gallery__link')
    if(linkEl){
        const href = linkEl.getAttribute('href')
        const instance = basicLightbox.create(createModalMarkup(href))
        instance.show();
        linkEl.addEventListener('keydown', (event) =>{
            if(event.key === 'Escape'){
                instance.close()
            }
            
            })
    }else{return}
    
        
        
})

function createModalMarkup (link) {
    return `<img
    class="gallery__image"
    src="${link}"
    data-source="${link}"
  />`
}

