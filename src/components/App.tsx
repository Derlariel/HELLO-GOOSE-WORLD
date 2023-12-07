import Nav from "./Nav";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Product from "../pages/Product";
import UploadItem from "../pages/UploadItem";

const App = () => {
  return (
    <div className="bg-[#fdf4f4]">
      <Nav />
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Home />} />
        <Route path="/src/components/Home.tsx" element={<Home />} />
        <Route path="/uploadItem" element={<UploadItem userID={1} />} />
        <Route
          path="/src/product-conponent/Product.tsx"
          element={<Product />}
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
