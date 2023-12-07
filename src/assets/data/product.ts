export interface Product {
    id: number;
    userId: number;
    name: string;
    image: string;
    description: string;
    productCategory: string;
    sales: number;
}

const products: Product[] = [
    {
        id: 1,
        userId: 1,
        name: "Product 1",
        image: "/assets/product-img/product.png",
        description: "This is product 1",
        productCategory: "Clothes",
        sales: 10,
    },
    {
        id: 2,
        userId: 2,
        name: "Product 2",
        image: "/assets/product-img/product.png",
        description: "This is product 2",
        productCategory: "Sports",
        sales: 5,
    },
    {
        id: 3,
        userId: 3,
        name: "Product 3",
        image: "/assets/product-img/product.png",
        description: "This is product 3",
        productCategory: "Shoes",
        sales: 8,
    },
    {
        id: 4,
        userId: 4,
        name: "Product 4",
        image: "/assets/product-img/product.png",
        description: "This is product 4",
        productCategory: "Clothes",
        sales: 15,
    },
    {
        id: 5,
        userId: 5,
        name: "Product 5",
        image: "/assets/product-img/product.png",
        description: "This is product 5",
        productCategory: "Clothes",
        sales: 20,
    },
    {
        id: 6,
        userId: 6,
        name: "Product 6",
        image: "/assets/product-img/product.png",
        description: "This is product 6",
        productCategory: "Clothes",
        sales: 25,
    },
    {
        id: 7,
        userId: 7,
        name: "Product 7",
        image: "/assets/product-img/product.png",
        description: "This is product 7",
        productCategory: "Clothes",
        sales: 30,
    },
    {
        id: 8,
        userId: 8,
        name: "Product 8",
        image: "/assets/product-img/product.png",
        description: "This is product 8",
        productCategory: "Clothes",
        sales: 35,
    },
    {
        id: 9,
        userId: 9,
        name: "Product 9",
        image: "/assets/product-img/product.png",
        description: "This is product 9",
        productCategory: "Clothes",
        sales: 40,
    },
];

export default products;
