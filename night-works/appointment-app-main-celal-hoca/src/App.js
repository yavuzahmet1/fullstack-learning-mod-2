import "./App.css";
import AppointmentList from "./components/AppointmentList/AppointmentList";
import Doctors from "./components/Doctors/Doctors";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Doctors />
      <AppointmentList />
    </div>
  );
}

export default App;
