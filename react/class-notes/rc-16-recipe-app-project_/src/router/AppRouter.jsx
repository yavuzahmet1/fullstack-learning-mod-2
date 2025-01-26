import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "../pages/login/Login"
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import NotFound from "../pages/errorPage/NotFound"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exct path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={< NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter