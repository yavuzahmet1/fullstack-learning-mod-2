import './App.scss';
import Header from './components/header/Header';
import ProductList from './components/products/ProductList';

import { products, categories } from "./helper/data"

function App() {

  return (
    <div className="App">
      {/* <h1>Product App</h1> */}
      <Header categories={categories} title="Product Lists" />
      <ProductList products={products} />
    </div>
  );
}

export default App;
