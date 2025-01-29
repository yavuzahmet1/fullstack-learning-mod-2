import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";

import { arttir, azalt, sifirla } from "../../redux/actions/counterActions";

const Counter = () => {
  // değişkenler (useState diyelim) useSelector hook ile getirilir
  // reducerden gelenler buraya yazıldı
  const { sayac, text1 } = useSelector((state) => state.counterReducer)

  //action ile gelenler buraya yazıldı
  const dispatch1 = useDispatch()

  return (
    <div className="app">
      <h2 className="counter-header"> Counter with Redux</h2>
      <h1>{sayac} </h1>
      {/* sayac */}
      <h2>{text1} </h2>
      {/* text1 */}
      <div>
        <button
          className="counter-button positive"
          // onClick={()=>arttir()}
          onClick={() => dispatch1(arttir())}
        >
          ARTTIR
        </button>

        <button
          className="counter-button zero"
          onClick={() => dispatch1(sifirla())}
        >
          RESET
        </button>
        <button
          className="counter-button negative"
          onClick={() => dispatch1(azalt())}
        >
          AZALT
        </button>
      </div>
    </div>
  );
}

export default Counter