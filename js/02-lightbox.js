import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const mainGalleryBoxRef = document.querySelector('.gallery');

function createGalleryitemMarkup(array) {
  return array
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" 
            alt="${description}" />
    </a>`;
    })
    .join('');
}

function replaceMarkupToDoc(markupString) {
  mainGalleryBoxRef.innerHTML = markupString;
}
// function onImgClick(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   // const imageLink = event.target.closest('a').href;

//   // console.log(event.target.alt);
//   // console.log(imageLink);

//   // lightbox.open(`<img src="${imageLink}"/>`);
// }

replaceMarkupToDoc(createGalleryitemMarkup(galleryItems));

new SimpleLightbox('.gallery a', {
  overlayOpacity: 1,
  captionsData: 'alt',
  captionDelay: 250,
});
