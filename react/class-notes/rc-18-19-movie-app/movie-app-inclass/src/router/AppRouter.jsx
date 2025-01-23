import React from 'react'
import Navbar from "../components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Register from "../pages/Register";
import Login from "../pages/Login";
import Main from "../pages/Main";

// toastContainer de Browser da görünsün diye browserRouter sarmalını üst component olan indexedDB.js de yaptık
const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/logout' element={<Register />} /> */}
      </Routes>
    </>
  )
}

export default AppRouter