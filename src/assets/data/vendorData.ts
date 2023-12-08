interface vendorDataInterface {
  userId: number;
  name: string;
  quote: string;
  backgroundImage: string;
  profileImage: string;
  smallBanner: string;
}

const vendorData: vendorDataInterface[] = [
  {
    userId: 1,
    name: "Emma Watson",
    quote: "My life is my love 💖",
    backgroundImage:
      "https://wegotthiscovered.com/wp-content/uploads/2023/01/Emma-1.jpg?w=1200",
    profileImage:
      "https://www.davishighnews.com/wp-content/uploads/2021/01/hermione-675x900.jpg",
    smallBanner:
      "https://png.pngtree.com/background/20211215/original/pngtree-sakura-trees-flowers-pink-beautiful-banner-picture-image_1499423.jpg",
  },
  {
    userId: 2,
    name: "Hua Pee Shadow lord!",
    quote: "My Darkness is my love 💖",
    backgroundImage:
      "https://w0.peakpx.com/wallpaper/642/440/HD-wallpaper-anime-the-eminence-in-shadow.jpg",
    profileImage: "/assets/product-img/Shadow-lord.JPG",
    smallBanner:
      "https://png.pngtree.com/background/20211215/original/pngtree-sakura-trees-flowers-pink-beautiful-banner-picture-image_1499423.jpg",
  },
];

export default vendorData;
