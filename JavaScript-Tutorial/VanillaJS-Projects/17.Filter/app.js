let filteredProducts = [...products];

const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
  const allProducts = filteredProducts
    .map((product) => {
      return `<article class="product">
    <img
      src="${product.image}"
      class="product-img img"
      alt=""
    />
    <footer>
      <h5 class="product-name">${product.title}</h5>
      <span class="product-price">$${product.price}</span>
    </footer>
  </article>`;
    })
    .join("");
  if (allProducts === "") {
    productsContainer.innerHTML = `Sorry, No Products`;
    // console.log(allProducts);
  } else {
    productsContainer.innerHTML = allProducts;
  }
};
displayProducts();

const inputForm = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

inputForm.addEventListener("keyup", () => {
  const searchedValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLocaleLowerCase().includes(searchedValue);
  });
  displayProducts();
});

const allCompanies = document.querySelector(".companies");
const displayCompanies = () => {
  const companies = [
    "All",
    ...new Set(products.map((product) => product.company)),
  ]
    .map((company) => {
      //   console.log(company);
      return `<button class="company-btn" data-id="${company}">${company}</button>`;
    })
    .join("");
  return companies;
};
allCompanies.innerHTML = displayCompanies();

allCompanies.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("company-btn")) {
    const chosenCompany = element.dataset.id;
    if (chosenCompany === "All") {
      filteredProducts = products;
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === chosenCompany;
      });
    }
    searchInput.value = "";
    displayProducts();
  }
});
