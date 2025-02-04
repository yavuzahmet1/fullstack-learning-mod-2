import { useDispatch } from 'react-redux';
import './App.css';
import Header from './components/Header';
import PageContainer from './container/PageContainer';
import getAllProduct from "./redux/slices/productSlice"
import ProductList from './components/ProductList';

function App() {
  // const dispatch = useDispatch()
  // console.log(dispatch(getAllProduct()))

  return (
    <div>
      <PageContainer >
        <Header />
        <ProductList />
      </PageContainer>
    </div>
  );
}

export default App;
