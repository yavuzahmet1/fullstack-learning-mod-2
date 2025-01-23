import React from 'react'
import Navbar from "../components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Register from "../pages/Register";

// toastContainer de Browser da görünsün diye browserRouter sarmalını üst component olan indexedDB.js de yaptık
const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default AppRouter