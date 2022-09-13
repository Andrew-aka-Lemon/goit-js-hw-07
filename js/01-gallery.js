import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryMainBlockRef = document.querySelector('.gallery');
// console.log(galleryMainBlockRef);

galleryMainBlockRef.addEventListener('click', onItemClick);

function doItemsGalleryMarkup(objectImages) {
  const galleryItems = objectImages
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
    })
    .join('');
  return galleryItems;
}

galleryMainBlockRef.insertAdjacentHTML('beforeend', doItemsGalleryMarkup(galleryItems));

function onItemClick(event) {
  event.preventDefault();
  const elem = event.target;

  if (elem.nodeName !== 'IMG') {
    return;
  }

  //   console.dir(elem);

  const instance = basicLightbox.create(`<img src="${elem.dataset.source}">`);
  //   const instance = basicLightbox.create(`${elem}`);
  instance.show();

  //   const openedImage = document.querySelector('.basicLightbox');
  //   console.log(openedImage);

  document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
      console.log(event.code);
    }
  });
}

// function closeOnEscape(event) {
//   console.log(event.code);
//   if (event.code === 'Escape') {
//     instance.close();
//     openedImage.removeEventListener('keydown', closeOnEscape);
//   }
// }
