import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems
    .map((galleryIt) =>
        `<a class="gallery__link" href=${galleryIt.original}> 
                <img class="gallery__image" src =${galleryIt.preview} alt="${galleryIt.description}"/>
        </a>
        `)
    .join("");

gallery.insertAdjacentHTML("beforeend", markup);
  
const lightbox = new SimpleLightbox(".gallery__link", { captionSelector: "img", captionsData: "alt", captionPosition: "bottom", captionDelay: 250 });

