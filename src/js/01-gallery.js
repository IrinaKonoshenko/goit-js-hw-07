import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const images = galleryItems
  .map((image) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img
          class="gallery__image"
          src="${image.preview}"
          data-source="${image.original}"
          alt="${image.description}"
        />
      </a>
    </div>
`;
  })
  .join("");

gallery.innerHTML = images;

gallery.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  basicLightbox
    .create(
      `
		<img src="${event.target.dataset.source}">
	`
    )
    .show();
});
