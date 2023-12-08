export interface Product {
    id: number;
    userId: number;
    name: string;
    image: string;
    description: string;
    productCategory: string;
    price: number;
    sales: number;
}

const products: Product[] = [
    {
        id: 1,
        userId: 1,
        name: "Product 1",
        image: "https://sundayafternoons.com/cdn/shop/products/caribbean-hat_lifestyle_woman_600x@2x.jpg?v=1630536196",
        description: "This is product 1",
        productCategory: "Clothes",
        price: 100,
        sales: 10,
    },
    {
        id: 2,
        userId: 2,
        name: "Product 2",
        image: "/assets/product-img/product.png",
        description: "This is product 2",
        productCategory: "Sports",
        price: 50,
        sales: 5,
    },
    {
        id: 3,
        userId: 3,
        name: "Product 3",
        image: "/assets/product-img/product.png",
        description: "This is product 3",
        productCategory: "Shoes",
        price: 80,
        sales: 8,
    },
    {
        id: 4,
        userId: 4,
        name: "Product 4",
        image: "/assets/product-img/product.png",
        description: "This is product 4",
        productCategory: "Clothes",
        price: 150,
        sales: 15,
    },
    {
        id: 5,
        userId: 5,
        name: "Product 5",
        image: "/assets/product-img/product.png",
        description: "This is product 5",
        productCategory: "Clothes",
        price: 200,
        sales: 20,
    },
    {
        id: 6,
        userId: 6,
        name: "Product 6",
        image: "/assets/product-img/product.png",
        description: "This is product 6",
        productCategory: "Clothes",
        price: 250,
        sales: 25,
    },
    {
        id: 7,
        userId: 7,
        name: "Product 7",
        image: "/assets/product-img/product.png",
        description: "This is product 7",
        productCategory: "Clothes",
        price: 300,
        sales: 30,
    },
    {
        id: 8,
        userId: 8,
        name: "Product 8",
        image: "/assets/product-img/product.png",
        description: "This is product 8",
        productCategory: "Clothes",
        price: 350,
        sales: 35,
    },
    {
        id: 9,
        userId: 9,
        name: "Product 9",
        image: "/assets/product-img/product.png",
        description: "This is product 9",
        productCategory: "Clothes",
        price: 400,
        sales: 40,
    },
];

export default products;

export function addProduct(product: Product) {
    products.push(product);
}