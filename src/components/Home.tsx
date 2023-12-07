import Index from "../component-spotlight/Spotlight";
import Items from "../component-items/Items";
import Headline from "../component-product/Headline";
import Category from "../component-category/Category";
import MoreButton from "../component-button-more/MoreButton";
import spotLight_Product from "../assets/data/spotlight-product";
import CategoryItems from "../component-category/Category-Items";
import { useState } from "react";

function Home() {
  const spotList = spotLight_Product.map((Product) => (
    <Items
      content={Product.image}
      name={Product.name}
      description={Product.description}
    ></Items>
  ));

  const [selectedCategory, setSelectedCategory] = useState("Clothes");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Index />
      <Headline />
      <div className="flex flex-nowrap justify-around">{spotList}</div>
      <div className="">
        <Category categories={["Clothes", "Shoes", "Sports"]} onCategoryClick={handleCategoryClick} />
      </div>
      {/** Category-product that's like spotlight**/}
      <div>
        <CategoryItems name={selectedCategory} amount={6} />
        {/** Category-product component-items2 **/}
      </div>
      <MoreButton />
    </div>
  );
}

export default Home;
