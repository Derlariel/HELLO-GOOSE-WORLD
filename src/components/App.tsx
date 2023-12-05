import Index from "../component-spotlight/Spotlight";
import Items from "../component-items/Items";
import Headline from "../component-product/Headline";
import Category from "../component-category/Category";
import MoreButton from "../component-button-more/MoreButton";
import Nav from "./Nav"
import Footer from "./Footer"

import spotLight_Product from "../assets/data/spotlight-product"

const App = () => {
  const spotList = spotLight_Product.map(Product =>
      <Items
          content={Product.image}
          name={Product.name}
          description={Product.description}
        ></Items>
    ) 

  return (
    <div className="bg-[#fdf4f4]">
      <Nav />
      <Index />
      <Headline />
      <div className="flex flex-wrap justify-around">
        {spotList}
      </div>
      <Category />
      {/** Category-product that's like spotlight**/}
      <div>
        <div className="flex flex-wrap justify-around mt-3">
          {/** Category-product component-items1 **/}

          <Items
            content="Product-Image"
            name="Name"
            description="description description description description description description"
          ></Items>
          <Items
            content="Product-Image"
            name="Name"
            description="description description description description description description"
          ></Items>
          <Items
            content="Product-Image"
            name="Name"
            description="description description description description description description"
          ></Items>
        </div>
        {/** Category-product component-items2 **/}
        <div className="flex flex-wrap justify-around mt-3">
          <Items
            content="Product-Image"
            name="Name"
            description="description description description description description description"
          ></Items>
          <Items
            content="Product-Image"
            name="Name"
            description="description description description description description description"
          ></Items>
          <Items
            content="Product-Image"
            name="Name"
            description="description description description description description description"
          ></Items>
        </div>
        {/** Category-product that's like spotlight**/}
      </div>
      <MoreButton />
      <Footer />
    </div>
  );
};

export default App;
