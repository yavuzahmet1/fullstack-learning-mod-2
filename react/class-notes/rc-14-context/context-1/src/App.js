import { useState } from "react";
import Home from "./components/Home";
import { StudentContext } from "./context/StudentContext";
import data from "./data"
const App = () => {

  const [students, setStudents] = useState(data)

  const changeColor = (id, newRenk) => {

    setStudents(students.map((a) => a.id === id ? { ...a, color: newRenk } : a))
    // tamircinin içinde bir condition kullanılacaksa, (mesela id si tutanı değiştir, tutmazsa aynen kalsın gibi) && (shortcircuit) kullanamayız, ternary kullanmalıyız, çünkü && li yazımda, set tamirci değişikliği yapar, diğerlerini yok sayar

  }




  return (
    //! 2- bütün projeye gönderilmek üzere ilk Home u, gönderilecek elemanlar ve Context sayfasıyla sarmallayalım (provide edelim)
    <StudentContext.Provider value={{ students, changeColor }}>
      <Home />
    </StudentContext.Provider>
  );
};

export default App;