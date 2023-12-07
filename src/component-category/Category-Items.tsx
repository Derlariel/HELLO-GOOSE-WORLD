import Items from "../component-items/Items";
import Product from "../assets/data/product";

interface CategoryItemsProps {
    name: string;
    amount: number;
    ownerID?: number;
}

function CategoryItems({ name , amount , ownerID }: CategoryItemsProps) {
    let categoryItems = null;

    if (ownerID) {
        categoryItems = Product.filter((product) => product.productCategory === name)
        .slice(0, amount)
        .map((product) => (
            <Items
                content={product.image}
                name={product.name}
                description={product.description}
            ></Items>
        ));
    }else {
        categoryItems = Product.filter((product) => product.productCategory === name && product.userId === ownerID)
        .slice(0, amount)
        .map((product) => (
            <Items
                content={product.image}
                name={product.name}
                description={product.description}
            ></Items>
        ));
    }
    
    

    if (categoryItems.length < amount) {
        const lastItem = categoryItems[categoryItems.length - 1];
        while (categoryItems.length < amount) {
            categoryItems.push(lastItem);
        }
    }

    const groupedCategoryItems = [];
    for (let i = 0; i < categoryItems.length; i += 3) {
        groupedCategoryItems.push(categoryItems.slice(i, i + 3));
    }

    return (
        <div className="flex flex-col mt-3">
            {groupedCategoryItems.map((group, index) => (
                <div key={index} className="flex justify-around">
                    {group}
                </div>
            ))}
        </div>
    );
}

export default CategoryItems;
