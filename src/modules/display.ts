function displayProducts(
  title: string,
  description: string,
  price: number,
  rating: number,
  stock: number,
  category: string,
  image: string,
  container: HTMLDivElement
): void {
  const productCard = document.createElement("div");

  const productImg = document.createElement("img");
  productImg.src = image;

  const titleEl = document.createElement("h2");
  titleEl.innerText = title;

  const descriptionEl = document.createElement("h3");
  descriptionEl.innerText = description;

  const priceEl = document.createElement("p");
  priceEl.innerText = "Price: " + price.toString();

  const ratingEl = document.createElement("p");
  ratingEl.innerText = "Rating: " + rating.toString();

  const stockEl = document.createElement("p");
  stockEl.innerText = "Stock: " + stock.toString();

  //low stock warning, also added that is shows green if its above 50//
  if (stock < 10) stockEl.style.color = "red";
  else if (stock > 50) stockEl.style.color = "green";

  const categoryEl = document.createElement("p");
  categoryEl.innerText = "Category: " + category;

  const AddtoCartBtn = document.createElement("button");
  AddtoCartBtn.innerText = "Add to cart";

  productCard.append(
    productImg,
    titleEl,
    descriptionEl,
    priceEl,
    ratingEl,
    stockEl,
    categoryEl,
    AddtoCartBtn
  );

  productCard.classList.add("card-styling-products");

  container.append(productCard);
}

function errorHandler(errorMsg: string, container: HTMLDivElement): void {
  const errorEl = document.createElement("h1");
  errorEl.innerText = errorMsg;

  container.append(errorMsg);
}

export { displayProducts, errorHandler };
