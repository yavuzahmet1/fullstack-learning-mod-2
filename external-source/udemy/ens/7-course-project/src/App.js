import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { courses } from './helper/data.js';
import Course from './components/Course.jsx';
import "./css/Course.css"



function App() {
  return (
    <div className="App">
      <Header />

      {
        courses?.map(course => {
          return <Course key={course.id} course={course} />
        })
      }
    </div>
  );
}

export default App;
