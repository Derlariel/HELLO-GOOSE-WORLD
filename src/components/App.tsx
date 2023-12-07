import Nav from "./Nav";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Product from "../product-conponent/product";

const App = () => {
  return (
    <div className="bg-[#fdf4f4]">
      <Nav />
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Home />} />
        <Route path="/src/components/Home.tsx" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
