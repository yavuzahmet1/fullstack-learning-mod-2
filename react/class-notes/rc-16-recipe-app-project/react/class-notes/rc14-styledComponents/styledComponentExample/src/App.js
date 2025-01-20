import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import ContainerSSS from "./components/styles/ContainerSSS";
import { ThemeProvider } from "styled-components";


const style={
 responsivE:"724px",
 golge:"0 10px 10px rgba(0,0,0,0.15)",

}




const App = () => {
  return (
    <ThemeProvider theme={style}>
      <ContainerSSS>
        <Header />
        <Card />
      </ContainerSSS>
    </ThemeProvider>
  );
};

export default App;
