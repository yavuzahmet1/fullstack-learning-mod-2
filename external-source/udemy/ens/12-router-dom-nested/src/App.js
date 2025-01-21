import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Employee from "./components/Employee"
import Company from "./components/Company"
import ProductDetails from './pages/ProductDetails';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='/about' element={<About />} >
          <Route path='employee' element={<Employee />} />
          <Route path='company' element={<Company />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFoundPage />} />

      </Routes>
    </div>
  );
}

export default App;
