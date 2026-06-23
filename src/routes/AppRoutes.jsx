import React from "react";
import { Routes, Route } from "react-router-dom";

// --- লেআউট ইম্পোর্ট ---
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

// --- পেজ ইম্পোর্ট ---
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import CartPage from "../pages/cart"; 
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Checkout from "../pages/Checkout";
import UserDashboard from "../pages/UserDashboard";

// --- অ্যাডমিন পেজ ইম্পোর্ট ---
import AdminDashboard from "../pages/AdminDashboard";
import AddProductPage from "../pages/AddProductPage";
import ManageInventoryPage from "../pages/ManageInventoryPage";
import VouchersPage from "../pages/VouchersPage";

// --- কম্পোনেন্ট ইম্পোর্ট ---
import Shop from "../components/Shop";
import Categories from "../components/Categories";
import About from "../components/About";
import CustomersPage from "../pages/CustomersPage"; // নতুন কাস্টমার পেজ ইম্পোর্ট
import ReportsPage from "../pages/ReportsPage";
import SettingsPage from "../pages/SettingsPage";


function AppRoutes() {
  return (
    <Routes>
      
      {/* ১. পাবলিক পেজ সমূহ (যা MainLayout-এর অধীনে থাকবে) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
      </Route>

      {/* ২. লগইন ও রেজিস্ট্রেশন (সাধারণত কোনো লেআউট থাকে না) */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* ৩. অ্যাডমিন প্যানেল পেজ সমূহ (যা AdminLayout-এর অধীনে থাকবে) */}
      <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-product" element={<AddProductPage />} />
        <Route path="/admin/manage-inventory" element={<ManageInventoryPage />} />
        <Route path="/admin/vouchers" element={<VouchersPage />} />
        <Route path="/admin/customers" element={<CustomersPage />} />
        <Route path="/admin/reports" element={<ReportsPage />} /> 
        <Route path="/admin/settings" element={<SettingsPage />} /> 

 

      </Route>

      {/* ৪. ভুল পেজের জন্য ৪MD Not Found */}
      <Route path="*" element={<div style={{ padding: '50px', textAlign: 'center' }}><h2>404 Page Not Found</h2></div>} />
      
    </Routes>
  );
}

export default AppRoutes;