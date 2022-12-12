import getElement from "./getElement.js";
import getUser from "./getUser.js";
import displayUser from "./displayUser.js";

const btn = getElement(".btn");

const showUser = async () => {
  const person = await getUser();
  displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
