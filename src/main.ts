import { getProducts, searchProducts } from "./modules/fetch.ts";
import { displayProducts, errorHandler } from "./modules/display.ts";

const prodContainer = document.querySelector(
  "#products-container"
) as HTMLDivElement;
const form = document.querySelector("#search-form") as HTMLFormElement;

getProducts().then((data) => {
  for (const product of data) {
    displayProducts(
      product.title,
      product.description,
      product.price,
      product.rating,
      product.stock,
      product.category,
      product.thumbnail,
      prodContainer
    );
  }
});

form.addEventListener("submit", searchHandler);

function searchHandler(event: Event) {
  event.preventDefault();
  prodContainer.innerHTML = "";
  let searchInput = document.querySelector("#search-field") as HTMLInputElement;
  searchProducts(searchInput.value).then((data) => {
    if (data.length <= 0) errorHandler("404 Product not found", prodContainer);
    for (const product of data) {
      displayProducts(
        product.title,
        product.description,
        product.price,
        product.rating,
        product.stock,
        product.category,
        product.thumbnail,
        prodContainer
      );
    }
  });
  form.reset();
}
