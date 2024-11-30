import { useState } from "react";
import Banner from "./components/Banner.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Signup from "./pages/Signup.jsx";
import Contact from "./pages/Contact.jsx";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Products from "./pages/Products.jsx";
import ProductCard from "./components/ProductCard.jsx";

export default function App() {
  return (
    <>
      <Banner />
      <Navbar />

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}
