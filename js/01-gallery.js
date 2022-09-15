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

let instance = null;

function onItemClick(event) {
  event.preventDefault();
  const elem = event.target;
  document.addEventListener('keydown', closeOnEscape);

  if (elem.nodeName !== 'IMG') {
    return;
  }

  instance = basicLightbox.create(`<img src="${elem.dataset.source}">`, {
    onClose: () => {
      document.removeEventListener('keydown', closeOnEscape);
    },
  });

  instance.show();
}

function closeOnEscape(event) {
  // console.log(event.code);
  if (event.code === 'Escape') {
    instance.close();
  }
}
