import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Favorites,
  ProductDetail,
  Product,
  Cart,
  SignIn,
  SignUp,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer, Navbar } from "./components";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-right" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
