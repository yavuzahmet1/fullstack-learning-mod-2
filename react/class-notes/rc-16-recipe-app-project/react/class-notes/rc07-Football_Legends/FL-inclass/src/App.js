import  Container  from "react-bootstrap/Container";
import Header from "./components/header/Header";
import LegendContainer from "./components/legends/LegendContainer";


function App() {
  return (
    <Container className="text-center mt-5">  {/*<div className="container">*/}
        <Header/>
        <LegendContainer/>
    </Container>
  );
}

export default App;
