import { useState } from "react";
import { StudentContext } from "./context/StudentContext";
import Home from "./components/Home"
import data from "./data"
import OgrenciItem from "./components/OgrenciItem";



const App = () => {

  const [students, setStudents] = useState(data);

  const changeColor = (id, newColor) => {
    setStudents(setStudents.map((a) => a.id === id ? { ...a, color: newColor } : a));



    return (
      // 2-Bütün projeye gönderilmek üzere ilk home u göderilecek elemanlar ve Context sayfasıyla sarmallayalım yani privade edelim
      <StudentContext.Provider value={{ students, changeColor }}>
        <Home />
        <OgrenciItem />
      </StudentContext.Provider>
    );
  };
}

export default App;
