import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Favorites,
  ProductDetail,
  Product,
  Cart,
  Login,
  Register,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminUserPage from "./pages/admin/AdminUserPage";

function App() {
  return (
    <React.Fragment>
      <ToastContainer position="bottom-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/admin/*">
          <Route path="users" element={<AdminUserPage />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
