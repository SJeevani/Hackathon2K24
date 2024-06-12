import React from 'react';
import Navbar from './navbar/NavBar';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;