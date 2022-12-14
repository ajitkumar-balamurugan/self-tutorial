import getElement from "./getElement.js";
import fetchResults from "./fetchResults.js";
import displayResults from "./displayResults.js";

const form = getElement(".form");
const formInput = getElement(".form-input");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let data = await fetchResults(formInput.value);
  console.log(data);
  displayResults(data);
});
