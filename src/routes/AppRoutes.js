import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Products,
  About,
  Basket,
  Contact,
  Product,
  Login,
} from "../pages";
import { useSelector } from "react-redux";

function AppRoutes() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <Router>
        <Routes>
          <Route path="https://sabaembroidery.onrender.com/" element={<Home />} />
          <Route
            path="/best-selling"
            element={<Products title="best selling" categories />}
          />
          <Route path="/best-selling/item/:itemId" element={<Product />} />
          <Route path="/products/item/:itemId" element={<Product />} />
          <Route
            path="/products"
            element={<Products title="our products" categories />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/basket" element={isLoggedIn ? <Basket /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            path={`/reset-password/:resetToken/:user_id`}
            element={<Login />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
