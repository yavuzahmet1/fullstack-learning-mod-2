import Home from "../pages/home/Home";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";
import NotFound from "../components/Error/NotFound";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          }>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

//! navbar ve footerın notfound sayfasında gözükmesini istemediğimiz için yukarıdaki yapıyı kurduk
