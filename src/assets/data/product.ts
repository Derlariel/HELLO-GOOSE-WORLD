export interface Product {
    id: number;
    userId: number;
    name: string;
    image: string;
    description: string;
    sales: number;
}

const products: Product[] = [
    {
        id: 1,
        userId: 1,
        name: "Product 1",
        image: "/assets/product-img/product.png",
        description: "This is product 1",
        sales: 10,
    },
    {
        id: 2,
        userId: 2,
        name: "Product 2",
        image: "/assets/product-img/product.png",
        description: "This is product 2",
        sales: 5,
    },
    {
        id: 3,
        userId: 3,
        name: "Product 3",
        image: "/assets/product-img/product.png",
        description: "This is product 3",
        sales: 8,
    },
];

export default products;
