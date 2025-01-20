import React, { useState } from "react";

const DataStorage = () => {
  // const [ad, setAd] = useState("Ali")
  // const [soyad, setSoyad] = useState("Güven")
  // const [meslek,setMeslek]=useState("Developer")

  const [user, setUser] = useState({
    ad: "Mehmet",
    soyad: "Ser",
    meslek: "Developer",
  });

  // flag kullanımı
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <h2 className="text-center m-2">Birde Fazla Veri ile Çalışma</h2>

    {
        // short circuit
        visible &&    <div className="bg-secondary">
        <p>AD:{user.ad}</p>
        <p>SOYAD:{user.soyad}</p>
        <p>MESLEK:{user.meslek}</p>
      </div>
    }

   

      <button
        className="btn btn-primary"
        onClick={() => setUser({ ad: "Ayşe", soyad: "Mer", meslek: "Manager" })}
      >
        Güncelle
      </button>

      {/* Sadece adı güncelleyip diğelerini aynen alacaksak, spread ile ekleme yapacağız. */}
      {/* <button className="btn btn-primary m-1" onClick={()=>setUser({ad:"Ayşe"})} >Ad Güncelle</button> */}
      <button
        className="btn btn-primary m-1"
        onClick={() => setUser({ ...user, ad: "Ayşe" })}
      >
        Ad Güncelle
      </button>
      <button
        className="btn btn-primary m-1"
        onClick={() => setUser({ ...user, soyad: "Mer" })}
      >
        Soyad Güncelle
      </button>

      {/* /* -------------------------------------------------------------------------- */}

      <button className="btn btn-danger"  onClick={()=>setVisible(!visible)}>
        {visible ? "gizle" : "göster"}
      </button>
    </div>
  );
};

export default DataStorage;
