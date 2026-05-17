import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import CartPage from "../pages/cart";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Checkout from "../pages/Checkout";

import UserDashboard from "../pages/UserDashboard";
import AdminDashboard from "../pages/AdminDashboard";

function App() {
  return (
    <Routes>

      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* Product Details */}
      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />

      {/* Checkout */}
      <Route
        path="/checkout/:id"
        element={<Checkout />}
      />

      {/* Cart */}
      <Route
        path="/cart"
        element={<CartPage />}
      />

      {/* Login */}
      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

      {/* Register */}
      <Route
        path="/register"
        element={<RegisterPage />}
      />

    </Routes>
  );
}

export default App;