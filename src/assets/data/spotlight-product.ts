export interface SpotlightProduct {
  id: number;
  userId: number;
  name: string;
  image: string;
  description: string;
}

const spotlightProducts: SpotlightProduct[] = [
  {
    id: 1,
    userId: 1,
    name: "Product 1",
    image: "/assets/product-img/product.png",
    description: "This is product 1",
  },
  {
    id: 2,
    userId: 2,
    name: "Product 2",
    image: "/assets/product-img/product.png",
    description: "This is product 2",
  },
  {
    id: 3,
    userId: 3,
    name: "Product 3",
    image: "/assets/product-img/product.png",
    description: "This is product 3",
  },
];

export default spotlightProducts;
