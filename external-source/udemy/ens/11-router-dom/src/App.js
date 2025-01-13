import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home"
import Product from "./pages/Product"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import NotFoundPage from "./pages/NotFoundPage"
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
