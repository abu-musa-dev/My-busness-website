import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="main-layout">
      {/* কমন হেডার বা নেভিগেশন বার */}
      <header style={{ padding: '15px', background: '#f8f9fa', textAlign: 'center', borderBottom: '1px solid #ddd' }}>
        <h2 style={{ margin: 0 }}>My E-Commerce Header</h2>
      </header>

      {/* এখানে চাইল্ড পেজগুলো রেন্ডার হবে */}
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Outlet />
      </main>

      {/* কমন ফুটার */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;