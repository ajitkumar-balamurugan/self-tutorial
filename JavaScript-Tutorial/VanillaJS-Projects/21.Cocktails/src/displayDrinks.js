import getElement from "./getElement.js";
const errorSpace = getElement(".title");
const container = getElement(".section-center");

const displayDrinks = (drinks) => {
  if (!drinks) {
    errorSpace.textContent = "No item matched your search";
    container.innerHTML = null;
    return;
  }
  const list = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      return `<a href="drink.html">
      <article class="cocktail" data-id="${id}">
        <img src="${image}" alt="${name}" />
        <h3>${name}</h3>
      </article>
    </a>`;
    })
    .join("");
  errorSpace.textContent = "";
  container.innerHTML = list;
  return container;
};

export default displayDrinks;
