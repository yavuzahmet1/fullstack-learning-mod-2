import Doctors from '../components/Doctors';
import AppointmentList from '../components/AppointmentList';

function Home() {
  return (
    <>
      <h1> CLARUS HOSPITAL</h1>
      <h3>Our Doctors</h3>
      <Doctors />
      <h3>Appointment List</h3>
      <AppointmentList />
    </>
  );
}

export default Home;
