// simple mock data to use instead of backend
const products = [
  {
    id: "1",
    title: "Classic White T-Shirt",
    description: "100% cotton casual tee",
    price: 14.99,
    images: ["https://picsum.photos/seed/101/800/600"],
    category: "tops",
    sizes: ["S","M","L","XL"]
  },
  {
    id: "2",
    title: "Blue Denim Jacket",
    description: "Stylish denim jacket",
    price: 59.99,
    images: ["https://picsum.photos/seed/102/800/600"],
    category: "outerwear",
    sizes: ["M","L","XL"]
  },
  {
    id: "3",
    title: "Black Joggers",
    description: "Comfortable jogger pants",
    price: 29.99,
    images: ["https://picsum.photos/seed/103/800/600"],
    category: "bottoms",
    sizes: ["S","M","L"]
  }
];

export const fetchProducts = async () => {
  // emulate network delay
  await new Promise((r) => setTimeout(r, 200));
  return products;
};

export const fetchProductById = async (id) => {
  await new Promise((r) => setTimeout(r, 150));
  return products.find((p) => p.id === id);
};