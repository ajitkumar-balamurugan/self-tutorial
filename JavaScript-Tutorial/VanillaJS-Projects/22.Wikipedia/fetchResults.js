import getElement from "./getElement.js";
const results = getElement(".results");
export default async (searchText) => {
  if (!searchText) {
    results.innerHTML = '<div class="error">Please enter a search term</div>';
    return;
  }
  results.innerHTML = '<div class="loading"></div>';
  const apiURL = `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=30&format=json&origin=*&srsearch=${searchText}`;
  let data = await fetch(apiURL);
  data = await data.json();
  data = data.query.search;
  //   console.log(data);
  return data;
};
