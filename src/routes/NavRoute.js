import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Registrasi";
import Contact from "../pages/Contact";
// import Home from "../pages/Home";

const NavRoute = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route exact path="/Home" element={<Home />} /> */}
    </Routes>
  );
};

export default NavRoute;
