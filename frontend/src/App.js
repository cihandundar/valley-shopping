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
  Checkout,
  Success,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserPage from "./pages/Admin/UserPage";
import CategoryPage from "./pages/Admin/Categories/CategoryPage";
import UpdateCategoryPage from "./pages/Admin/Categories/UpdateCategoryPage";
import CreateCategoryPage from "./pages/Admin/Categories/CreateCategoryPage";
import CreateProductPage from "./pages/Admin/Products/CreateProductPage";
import ProductPage from "./pages/Admin/Products/ProductPage";
import UpdateProductPage from "./pages/Admin/Products/UpdateProductPage";
import DashboardPage from "./pages/Admin/DashboardPage";
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
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />

        <Route path="/admin/*">
          <Route index element={<DashboardPage />} />
          <Route path="users" element={<UserPage />} />
          <Route path="categories" element={<CategoryPage />} />
          <Route path="categories/create" element={<CreateCategoryPage />} />
          <Route
            path="categories/update/:id"
            element={<UpdateCategoryPage />}
          />
          <Route path="products/create" element={<CreateProductPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="products/update/:id" element={<UpdateProductPage />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
