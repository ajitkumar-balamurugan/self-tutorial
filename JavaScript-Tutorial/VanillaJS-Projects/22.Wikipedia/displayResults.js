import getElement from "./getElement.js";
const results = getElement(".results");
export default (data) => {
  if (data.length === 0) {
    results.innerHTML =
      '<div class="error">Please enter a valid search term</div>';
    return;
  }
  const result = data
    .map((item) => {
      const { pageid, snippet, title } = item;
      // console.log({ pageid, snippet, title });
      return `<a href="http://en.wikipedia.org/?curid=${pageid}" target="_blank">
        <h4>${title}</h4>
        <p>
        ${snippet}
        </p>
      </a>`;
    })
    .join("");
  results.innerHTML = `<div class="articles">${result}</div>`;
};
