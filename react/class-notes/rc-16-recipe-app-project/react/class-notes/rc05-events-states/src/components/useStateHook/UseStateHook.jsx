//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede tanimlanmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react/hooks#state-hooks
//* =============================================================

import React, { useState } from "react";

const UseStateHook = () => {

  const [counter, setCounter] = useState(0);

  const arttir = () => setCounter(counter + 1);
//  const arttir = () => setCounter((prevCount)=>prevCount + 1);
// Önceki state al ve sonra güncelle. Eski halini  yakala ve arttır diyebilir.Stateler asenkron çalışır. Arkaplanda güncellenir.Ama en fazla bu şekilde yakalanıyor.


  return (
    <div>
      <h2 className="text-center">USESTATE HOOK</h2>
      <h3>Count:{counter}</h3>
      <button className="btn btn-primary m-2" onClick={arttir}>
        ☝
      </button>

      {/* /* -------------------------------------------------------------------------- */}
      <button
        className="btn btn-primary m-2"
        onClick={() => setCounter(counter - 1)}
      >
        👇
      </button>

      {/*  -------------------------------------------------------------------------- */}

      {/* //? Eger setCounter metodunu callback ile yazmazsak bu metot ilk acilistan itibaren doğrudan cagirilmis olur. Bu durumda da counter state'ini gunceller. State guncellendigi icinde component re-render olur. Re-render ise yeniden setCounter araciligi ile state'in guncellenmesine yol acar ve sonsuz donguye girer */}
      {/* <button className="btn btn-primary m-2" onClick={setCounter(counter-1)}>
        👇
      </button> */}


    <button className="btn btn-danger" onClick={()=>setCounter(0)}   >Sıfırla</button>

    </div>
  );
};

export default UseStateHook;
