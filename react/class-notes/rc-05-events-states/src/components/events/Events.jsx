import React from 'react'

const Events = () => {
    const handleClick = (event) => {
        alert("clicked")
        console.log(event.target.innerHTML)
    }

    const changeMessage = () => {
        let message = "Hello chort 18"

    }
    return (
        <div>
            <h2 className='text-black display-4 bg-warning'>React Events</h2>
            <button onClick={handleClick} className='btn btn-primary m-3'>Click</button>
            <button onClick={handleClick} className='btn btn-danger m-3 '>Delete</button>
            <button onClick={changeMessage} className='btn btn-success m-3 '>Message Write</button>
            <p>This Area </p>

            {/* //! message console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
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
//? Yaygin kullanim Fonksiyonel Component'lerdir. */}

        </div>
    )
}

export default Events