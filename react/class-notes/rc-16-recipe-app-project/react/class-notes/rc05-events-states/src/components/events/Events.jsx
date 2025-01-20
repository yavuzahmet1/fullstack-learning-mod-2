import React from "react";

const Events = () => {

    let message=""

  const handleTikla = (e) => {
    alert("Tıklandı");
    console.log("event çalıştı");
    console.log(e);
  };

  const mesajYaz = (msg) => {
    console.log(msg);
  };

  const degistir=()=>{
    message="Merhaba Cohort 18 in güzel insanları"
    console.log(message)
  }

  return (
    <div>
      <h2 className="text-black display-4">React Events</h2>
      {/* ************************************************************************** */}
      {/* 1.yöntem ( en sık kullanacağımız- referansını çağırma) */}
      <button onClick={handleTikla} className="btn btn-primary m-2">
        TIKLA
      </button>
      {/* Bu şekilde bir kullanım sayfa yenilendiğinde çalışmasınıa sebep olacak.Bazı durumlarda da sonsuz döngüye sokacaktır */}
      {/* <button onClick={handleTikla()} className="btn btn-primary m-2" >TIKLA</button> */}

      {/* ************************************************************************** */}

      {/*2. Doğrudan çağırma - callback function kullanarak*/}
      <button onClick={() => alert("silindi")} className="btn btn-danger m-2">
        SİL
      </button>

      {/* Parametre kullanımı */}
      <button
        className="btn btn-success"
        onClick={() => mesajYaz("Parametre gönderimi yapıldı")}
      >
        Mesaj Yaz
      </button>
      {/* <button className="btn btn-success" onClick={mesajYaz("Parametre gönderimi yapıldı")} >Mesaj Yaz</button> */}

      <button className="btn btn-secondary m-2" onClick={degistir}  >DEĞİŞTİR</button>
      <p>O mesaj buraya gelecek:{message}</p>
    </div>

/* -------------------------------------------------------------------------- */
//! message console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
//* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
//* static olarak kabul etmesinden kaynaklanir.

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
//? 1. Hooks (Functional Components).
//? 2. Statefull Classes (Class Components).

//? Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.

/* -------------------------------------------------------------------------- */



  );
};

export default Events;
