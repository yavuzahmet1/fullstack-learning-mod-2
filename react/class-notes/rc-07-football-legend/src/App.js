import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Legends from "./components/Legends";


function App() {
  return (
    <Container className="text-center mt-5">  {/*<div className="container">*/}
      <Header />
      <Legends />
    </Container>
  );
}

export default App;
