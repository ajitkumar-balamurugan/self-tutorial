import fetchDrinks from "./src/fetchDrinks.js";
import displayDrinks from "./src/displayDrinks.js";
import getElement from "./src/getElement.js";
import setDrink from "./src/setDrink.js";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

const showDrink = async (url) => {
  //fetch
  const data = await fetchDrinks(url);
  const drinks = data.drinks;
  console.log(drinks);
  //display
  const section = await displayDrinks(drinks);
  if (section) {
    setDrink(section);
  }
};

const form = getElement(".search-form");
const input = getElement('[name="drink"]');

form.addEventListener("keyup", function (e) {
  e.preventDefault();
  const value = input.value;
  if (!value) {
    showDrink(url);
  } else {
    showDrink(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`
    );
  }
});
window.addEventListener("DOMContentLoaded", showDrink(url));
