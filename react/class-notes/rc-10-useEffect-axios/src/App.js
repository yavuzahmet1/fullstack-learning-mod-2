// API ENDPOINTS
// GET tutorials/ get all Tutorials
// GET tutorials/:id/ get Tutorial by id
// POST tutorials/ add new Tutorial
// PUT tutorials/:id/ update Tutorial by id
// PATCH tutorials/:id/ patch Tutorial by id
// DELETE tutorials/:id/ remove Tutorial by id
// DELETE tutorials/ remove all Tutorials

import './App.css';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
