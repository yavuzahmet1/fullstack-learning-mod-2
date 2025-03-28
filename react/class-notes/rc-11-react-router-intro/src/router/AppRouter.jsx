import React from "react";
import Home from "../pages/Home";
import MyNavbar from "../components/MyNavbar";
import Teacher from "../pages/Teacher";
import CourseCard from "../pages/CourseCard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactForm from "../pages/ContactForm";
import NotFound from "../pages/NotFound";
import Paths from "../pages/Paths";
import CardDetails from "../pages/CardDetails";
import TeacherDetails from "../pages/TeacherDetails";

const AppRouter = () => {
  return (
    <Router>
      <MyNavbar />
      {/* "/" (ana yol) tüm yollara dahil edilmiştir, bu nedenle onu
         "/" ile başlayan diğer yollardan ayırt etmek için exact anahtar kelimesine sahip olması gerekir .
      
         
          */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/teacher/:name" element={<TeacherDetails />} />


        <Route path="/courses" element={<CourseCard />} />
        <Route path="/courses/:name" element={<CardDetails />} />

        <Route path="/contact" element={<ContactForm />} />
        <Route path="/paths" element={<Paths />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
