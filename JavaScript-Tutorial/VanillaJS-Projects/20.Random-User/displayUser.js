import getElement from "./getElement.js";
const userTitle = getElement(".user-title");
const userValue = getElement(".user-value");
const image = getElement(".user-img");
const icons = [...document.querySelectorAll(".icon")];

const displayUser = (person) => {
  image.src = person.image;
  userTitle.textContent = `My name is`;
  userValue.textContent = person.name;
  document.title = person.name;
  removeActiveClass(icons);
  icons[0].classList.add("active");
  icons.forEach((item) => {
    item.addEventListener("click", () => {
      const label = item.dataset.label;
      userTitle.textContent = `My ${label} is`;
      userValue.textContent = person[label];
      removeActiveClass(icons);
      item.classList.add("active");
      console.log(person[label]);
    });
  });
};

const removeActiveClass = (array) => {
  array.forEach((item) => {
    item.classList.remove("active");
  });
};

export default displayUser;
