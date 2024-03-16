const baseUrl: string = "https://dummyjson.com/products";
type Products = {
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  category:
    | "smartphones"
    | "laptops"
    | "fragrances"
    | "skincare"
    | "groceries"
    | "home-decoration"
    | "furniture"
    | "tops"
    | "womens-dresses"
    | "womens-shoes"
    | "mens-shirts"
    | "mens-shoes"
    | "mens-watches"
    | "womens-watches"
    | "womens-bags"
    | "womens-jewellery"
    | "sunglasses"
    | "automotive"
    | "motorcycle"
    | "lighting";
  thumbnail: string;
};

async function getProducts(): Promise<Products[]> {
  const res = await fetch(baseUrl);
  const data = await res.json();
  return data.products as Products[];
}

async function searchProducts(searchInput: string): Promise<Products[]> {
  const url = baseUrl + `/search?q=${searchInput}`;

  const res = await fetch(url);
  const data = await res.json();

  return data.products as Products[];
}

export { getProducts, searchProducts };
