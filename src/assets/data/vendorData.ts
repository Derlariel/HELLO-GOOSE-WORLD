
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
        backgroundImage: "https://wegotthiscovered.com/wp-content/uploads/2023/01/Emma-1.jpg?w=1200",
        profileImage: "https://www.davishighnews.com/wp-content/uploads/2021/01/hermione-675x900.jpg",
        smallBanner: "https://png.pngtree.com/background/20211215/original/pngtree-sakura-trees-flowers-pink-beautiful-banner-picture-image_1499423.jpg",
    },
];

export default vendorData;
