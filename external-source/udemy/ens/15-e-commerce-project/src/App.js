// import { useDispatch } from 'react-redux';
import './App.css';
import Header from './components/Header';
import PageContainer from './container/PageContainer';
// import getAllProduct from "./redux/slices/productSlice"
import ProductList from './components/ProductList';
import RouterConfig from './config/RouterConfig';

function App() {
  // const dispatch = useDispatch()
  // console.log(dispatch(getAllProduct()))

  return (
    <div>
      <PageContainer >
        <Header />
        <RouterConfig />
        {/* <ProductList /> */}
      </PageContainer>
    </div>
  );
}

export default App;
