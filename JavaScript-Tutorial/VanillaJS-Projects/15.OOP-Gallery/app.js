function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

class Gallery {
  constructor(element) {
    console.log(this);
    this.container = element;
    this.list = [...element.querySelectorAll(".img")];
    this.modal = getElement(".modal");
    this.modalImg = getElement(".main-img");
    this.modalImages = getElement(".modal-images");
    this.imageName = getElement(".image-name");
    this.closeBtn = getElement(".close-btn");
    this.prevBtn = getElement(".prev-btn");
    this.nextBtn = getElement(".next-btn");
    this.closeModal = this.closeModal.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.chooseImage = this.chooseImage.bind(this);
    this.container.addEventListener("click", this.openModal.bind(this));
  }
  openModal(e) {
    if (e.target.classList.contains("img")) {
      this.modalImg.src = e.target.src;
      // console.log(e.target.title);
      this.imageName.innerHTML = `<h3 class="image-name">${e.target.title}</h3>`;
      this.modalImages.innerHTML = this.list
        .map((img) => {
          return `<img
        src="${img.src}"
        title="${img.title}"
        id="${img.dataset.id}"
        class="${
          e.target.dataset.id === img.dataset.id
            ? "modal-img selected"
            : "modal-img"
        }"
        alt="${img.alt}"
      />`;
        })
        .join("");

      this.modal.classList.add("open");
      this.closeBtn.addEventListener("click", this.closeModal);
      this.prevBtn.addEventListener("click", this.prevImage);
      this.nextBtn.addEventListener("click", this.nextImage);
      this.modalImages.addEventListener("click", this.chooseImage);
    }
  }
  closeModal() {
    this.modal.classList.remove("open");
    this.closeBtn.removeEventListener("click", this.closeModal);
    this.prevBtn.removeEventListener("click", this.prevImage);
    this.nextBtn.removeEventListener("click", this.nextImage);
    this.modalImages.removeEventListener("click", this.chooseImage);
  }
  nextImage() {
    const selected = this.modalImages.querySelector(".selected");
    const next =
      selected.nextElementSibling || this.modalImages.firstElementChild;
    selected.classList.remove("selected");
    next.classList.add("selected");
    this.modalImg.src = next.src;
    // console.log(e.target.title);
    this.imageName.innerHTML = `<h3 class="image-name">${next.title}</h3>`;
  }
  prevImage() {
    const selected = this.modalImages.querySelector(".selected");
    const prev =
      selected.previousElementSibling || this.modalImages.lastElementChild;
    selected.classList.remove("selected");
    prev.classList.add("selected");
    this.modalImg.src = prev.src;
    // console.log(e.target.title);
    this.imageName.innerHTML = `<h3 class="image-name">${prev.title}</h3>`;
  }
  chooseImage(e) {
    const selected = this.modalImages.querySelector(".selected");
    this.modalImg.src = e.target.src;
    // console.log(e.target.title);
    this.imageName.innerHTML = `<h3 class="image-name">${e.target.title}</h3>`;
    selected.classList.remove("selected");
    e.target.classList.add("selected");
  }
}

// Gallery.prototype.closeModal = function
// Gallery.prototype.nextImage = function
// Gallery.prototype.prevImage = function
// Gallery.prototype.chooseImage = function

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
