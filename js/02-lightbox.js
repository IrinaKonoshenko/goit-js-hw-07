import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const images = galleryItems
  .map((image) => {
    return `
    <li>
      <a class="gallery__item" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
      </a>
    </li>
`;
  })
  .join("");

gallery.innerHTML = images;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
