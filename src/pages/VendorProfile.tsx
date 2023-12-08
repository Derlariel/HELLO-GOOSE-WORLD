import VendorBanner from "../component-banner/banner.tsx";
import Product from "../assets/data/product.ts";
import Items from "../component-items/Items";
import SmallBanner from "../component-banner/small-banner.tsx";
import Category from "../component-category/Category";
import MoreButton from "../component-button-more/MoreButton";
import CategoryItems from "../component-category/Category-Items";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function getPopluarProduct(userID: number) {
  //Get all products from the vendor
  const userProducts = Product.filter((product) => product.userId === userID);

  // Sort products by sales value in descending order
  const sortedProducts = userProducts.sort((a, b) => b.sales - a.sales);

  // Get the top 3 highest selling products
  const topProducts = sortedProducts.slice(0, 3);

  // Repeat the last product if there are less than 3 products
  while (topProducts.length < 3) {
    topProducts.push(topProducts[topProducts.length - 1]);
  }

  return topProducts;
}

function VendorProfile() {
  const userID = useLocation().state?.userId;
  const topProducts = getPopluarProduct(userID);

  const popular_product = topProducts.map((product) => (
    <Items
      id={product.id}
      content={product.image}
      name={product.name}
      description={product.description}
    ></Items>
  ));

  const [selectedCategory, setSelectedCategory] = useState("Clothes");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <VendorBanner userID={userID} />
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mt-8 2xl:ml-[4%] lg:ml-[3%] mb-4">
          Popular Products
        </h1>
        <div className="flex flex-nowrap justify-around">{popular_product}</div>
      </div>
      <SmallBanner userID={userID} />
      <div className="2xl:ml-[3%] lg:ml-[1%]">
        <Category onCategoryClick= {handleCategoryClick} />
      </div>
      {/** Category-product that's like spotlight**/}
      <div>
        <CategoryItems name={selectedCategory} amount={3}  ownerID={userID} />
      </div>
      <MoreButton />
    </>
  );
}

export default VendorProfile;
