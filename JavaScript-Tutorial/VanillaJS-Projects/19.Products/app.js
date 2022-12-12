const url = "https://course-api.com/javascript-store-products";

const productsDOM = document.querySelector(".products-center");

const fetchProducts = async () => {
  productsDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const list = await fetch(url);
    const data = await list.json();
    return data;
    // console.log(data);
  } catch (error) {
    productsDOM.innerHTML = `<p class="error">There was an error</p>`;
  }
};

const displayProducts = (theArray) => {
  const list = theArray
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      return `<a class="single-product" href="product.html?id=${id}">
    <img
      src="${img}"
      class="single-product-image img"
      alt="${title}"
    />
    <footer>
      <h5 class="name">${title}</h5>
      <span class="price">$${price / 100}</span>
    </footer>
  </a>`;
    })
    .join("");
  productsDOM.innerHTML = `<div class="products-container">
          ${list}
  </div>`;
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
  //   console.log(data);
};
start();
