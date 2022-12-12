const singleProductDOM = document.querySelector(".product");
const url = "https://course-api.com/javascript-store-single-product?id=";

const fetchProduct = async () => {
  singleProductDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    // console.log(window.location.search);
    // console.log(id);
    const list = await fetch(url + id);
    const data = await list.json();
    return data;
  } catch (error) {
    singleProductDOM.innerHTML = `<p class="error">There was an error</p>`;
  }
};
const displayProduct = (product) => {
  const { description, colors, image, name, price, company } = product.fields;
  document.title = name.toUpperCase();
  const output = ` <img src="${image[0].url}" class="img" alt="${name}" />
    <div class="product-info">
      <h3>${name}</h3>
      <h5>${company}</h5>
      <span>$${price / 100}</span>
      <div class="colors">
        ${colors
          .map((color) => {
            return `<span class="product-color" style="background: ${color}"></span>`;
          })
          .join("")}
      </div>
      <p>
        ${description}
      </p>
      <button class="btn">Add</button>
    </div>`;
  //   console.log(product);
  singleProductDOM.innerHTML = `<div class="product-wrapper">
       ${output}
  </div>`;
};
const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};
start();
