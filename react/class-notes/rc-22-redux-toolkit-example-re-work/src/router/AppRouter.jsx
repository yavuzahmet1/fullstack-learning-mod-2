import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import News from "../pages/News";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import PrivateRouter from "./PrivateRouter";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<PrivateRouter/>}>
          <Route path="" element={<News />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter