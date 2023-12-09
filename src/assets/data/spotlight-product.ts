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
    userId: 5,
    name: "Wave",
    image: "/assets/product-img/wave.jpg",
    description: "Wave Love Emma Myers !!",
  },
  {
    id: 2,
    userId: 2,
    name: "Hua Pee",
    image: "/assets/product-img/Shadow-lord.JPG",
    description: "My Anime !! ",
  },
  {
    id: 2,
    userId: 3,
    name: "Rayong",
    image: "/assets/product-img/rayong.jpg",
    description: "I love Rayong !! ",
  },
];

export default spotlightProducts;
