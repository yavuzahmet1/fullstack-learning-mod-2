import { useState } from "react";
import LifeCycleMethods from "./components/LifeCycleMethods";
import UseEffectHook from "./components/UseEffectHook";
import User from "./components/User";

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="container text-center mt-4">
      <button onClick={() => setVisible(!visible)} className="btn btn-danger">
        {visible ? "Gizle" : "Göster"}
      </button>
      {/* {visible && <LifeCycleMethods />} */}
      {/* {visible && <UseEffectHook />} */}
      {visible && <User />}
    </div>
  );
}

export default App;
