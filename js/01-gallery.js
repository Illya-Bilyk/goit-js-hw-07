import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

galleryRef.insertAdjacentHTML("beforeend", markup);

galleryRef.addEventListener("click", galleryClick);

function galleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const currentImageSrc = e.target.dataset.source;
  modal(currentImageSrc);
}

function modal(imgSrc) {
  const openImage = basicLightbox.create(`<img src="${imgSrc}">`);
  openImage.show();
  const visible = openImage.visible();

  if (visible) {
    document.addEventListener("keydown", function closeImageOnButton(e) {
      console.log(e);
      if (e.code === "Escape") {
        openImage.close();
        document.removeEventListener("keydown", closeImageOnButton);
      }
    });
  }
}

// function closeImageOnButton(keyCode) {
//   if (keyCode.code === "Escape") {
//     openImage.close();
//   }
// }
