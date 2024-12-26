import './App.css';
import ProductData from './ProductData';


function App() {
  return (
    <div className="App">
      <ProductData productName="Shoes" price={150} />
      <ProductData />
    </div>
  );
}

export default App;
