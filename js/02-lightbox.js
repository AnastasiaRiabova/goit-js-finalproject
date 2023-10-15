import { galleryItems } from './gallery-items.js';

const galleryContainerRef = document.querySelector('.gallery');
galleryContainerRef.addEventListener('click', (e) => {
  e.preventDefault()
})
const createMarkup = (ref) => {
  const images = galleryItems.map(({ preview, original, description }, ind) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
       class="gallery__image"
       src="${preview}"
       alt="${description}"
      />
    </a>
  </li>`}).join('')

  ref.insertAdjacentHTML("afterbegin", images)
}
createMarkup(galleryContainerRef)

new SimpleLightbox('.gallery__link', {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
