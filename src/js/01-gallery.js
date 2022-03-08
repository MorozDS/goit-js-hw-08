// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const listRef = document.querySelector(".gallery");

const galleryList = galleryItems.map(item => `
<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>
`).join('');



listRef.insertAdjacentHTML('beforeend', galleryList) 

 listRef.addEventListener('click',galleryClick)

 


function galleryClick(event) {
     
    if (event.target.nodeName !== 'IMG') {
        return;
    }
   
    event.preventDefault();
    modalShow(event.target.dataset.source)
}





function modalShow(src) {
    const instance = basicLightbox.create(`
    <img src="${src}"  height="100vh" display: block>
`,
   
        {
            onShow: () => {
                window.addEventListener("keydown", onEscClick);
            }
        },
        
      
        {
            onClose: () => {
                window.removeEventListener("keydown", onEscClick);
            }
        },
    
    );
    function onEscClick(event) {
  if (event.code === 'Escape') {
    instance.close();
    }  
}
   
instance.show()
}