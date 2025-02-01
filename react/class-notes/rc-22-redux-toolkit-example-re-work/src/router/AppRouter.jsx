import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "../pages/News";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>deed</div>
      <Navbar />

      <Routes>

        <Route path="" element={<News />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter