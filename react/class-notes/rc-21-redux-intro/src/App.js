import React from 'react'
import Counter from './components/counter/Counter'
import Todo from "./components/todo/Todo";
import "./App.css";
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        {/* <Counter /> */}
        <Todo/>
      </Provider>
    </div>
  );
}

export default App