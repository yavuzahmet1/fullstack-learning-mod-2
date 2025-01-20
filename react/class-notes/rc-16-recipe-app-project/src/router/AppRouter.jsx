import React from "react";
import Navbar from "../components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from '../pages/details/Details'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />

      </Routes>


    </BrowserRouter>
  );
};

export default AppRouter;
