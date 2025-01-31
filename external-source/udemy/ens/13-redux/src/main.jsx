import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from "./redux/store.jsx"
import { Provider } from "react-redux"

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
