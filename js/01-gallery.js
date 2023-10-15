import { galleryItems } from "./gallery-items.js";

const galleryContainerRef = document.querySelector(".gallery");

let lightBoxInstance
const handleImageClick = (e) => {
  e.preventDefault()
  const handleEscape = (e) => {
    if (e.key === 'Escape') lightBoxInstance.close()
  }
  lightBoxInstance = basicLightbox.create(`
      <img alt="image" src="${e.target.dataset.source}" width="auto" height="auto">
  `, {
    onShow: () => { document.addEventListener('keydown', handleEscape) },
    onClose: () => { document.removeEventListener('keydown', handleEscape) },
  })
  lightBoxInstance.show()
}

galleryContainerRef.addEventListener('click', handleImageClick)
const createMarkup = (ref) => {
  const images = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
      />
    </a>
  </li>`}).join('')

  ref.insertAdjacentHTML("afterbegin", images)
}
createMarkup(galleryContainerRef)
