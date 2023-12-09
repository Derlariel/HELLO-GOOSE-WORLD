import Nav from "./Nav";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Product from "../pages/Product";
import UploadItem from "../pages/UploadItem";
import Chat from "../pages/Chat";
import VendorProfile from "../pages/VendorProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";

const App = () => {
  return (
    <div className="bg-[#fdf4f4]">
      <Nav />
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Home />} />
        <Route path="/uploadItem" element={<UploadItem/>} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/vendorprofile" element={<VendorProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
