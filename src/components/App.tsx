import Nav from "./Nav";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Product from "../pages/Product";
import UploadItem from "../pages/UploadItem";
import Chat from "../pages/Chat";

const App = () => {
  return (
    <div className="bg-[#fdf4f4]">
      <Nav />
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Home />} />
        <Route path="/uploadItem" element={<UploadItem userID={1} />} />
        <Route
          path="/src/product-conponent/Product.tsx"
          element={<Product />}
        />
        <Route path="/chat" element={<Chat />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
