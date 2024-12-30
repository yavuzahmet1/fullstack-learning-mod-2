import './App.css';
import Events from './components/events/Events';
import UseStateHook from './components/useStateHook/UseStateHook';
import DataStorage from './components/useStateHook/DataStorage';
import ClassComp from './components/classcomponent/ClassComp';


function App() {
  return (
    <div className="text-center bg-warning">
      {/* <h1>React Events</h1> */}
      {/* <Events/> */}
      {/* <UseStateHook/> */}
      {/* <DataStorage/> */}
      <ClassComp/>
    </div>
  );
}

export default App;
