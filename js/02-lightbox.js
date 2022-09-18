import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const images = galleryItems
  .map((image) => {
    return `
    <a class="gallery__item" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
    </a>
`;
  })
  .join("");

gallery.innerHTML = images;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
