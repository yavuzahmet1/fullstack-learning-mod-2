import './App.css';
import { useState } from 'react';

function App() {
  const [address, setAddress] = useState({ title: "Adana", zip: 11144 });

  const [settings, setSettings] = useState({
    theme: {
      mode: "dark",
      color: "blue",
    },
    notifications: true,
  });

  return (
    <div className="App">
      <h2>Address</h2>
      <p>{address.title} {address.zip}</p>
      <br />
      <button onClick={() => setAddress({ ...address, title: "Ankara" })}>Manuple Address</button>
      <hr /><br></br>
      <h2>Settings Theme Changes</h2>
      <button onClick={() => setSettings({
        ...settings,
        theme: {
          ...settings.theme, // 'theme' objesini kopyala
          mode: "light",      // 'mode' alanını değiştir
        },
      })}>Setting Theme</button>

      {/* //*Obje State'i Güncelleme
      React'te state doğrudan değiştirilmez, yeni bir obje oluşturulup setState fonksiyonuna geçirilir. Bu nedenle, obje state'i güncellerken mevcut objeyi kopyalamanız gerekir. 
      
      1-Spread operatörü (...) kullanarak eski objeyi kopyalayabilir ve sadece değiştirmek istediğiniz alanı güncelleyebilirsiniz,arraylerde olduğu gibi

      2- Partial State Güncellemesi
Obje state'lerde, setState çağrıldığında tüm objenin güncellenmesi gerektiğini unutmayın. Sadece bir alanı güncellemek istiyorsanız bile tüm obje yeniden oluşturulmalıdır.

//! Obje State'leriyle Çalışırken Dikkat Edilmesi Gerekenler

1->Immutable Olmalı: Obje state'leri doğrudan değiştirilmeye çalışılmamalıdır.
Yanlış kullanım->settings.theme.mode = "light";
setSettings(settings);

2->Performans Sorunları: Çok büyük objelerle çalışıyorsanız, her güncellemede tüm objeyi yeniden oluşturmak performans sorunlarına yol açabilir. Bu durumda:

State'i daha küçük parçalara bölmeyi düşünebilirsiniz.
State yönetim kütüphaneleri (Redux, Zustand gibi) kullanabilirsiniz.

3->Objelerin Karmaşıklığı: Çok derin objelerle çalışıyorsanız, bu kodunuzu karmaşık ve hataya açık hale getirebilir. Derin objeler için Immer gibi kütüphaneler kullanarak daha kolay güncelleme yapabilirsiniz.

4->Alternatif: useReducer
Eğer obje state'iniz karmaşık hale gelirse, React'in useReducer hook'unu kullanmayı düşünebilirsiniz. Bu, state değişikliklerini daha iyi organize etmenizi sağlar.

//*useReducer Nedir?
useReducer, bir state ve bu state'i değiştirmek için bir "reducer" fonksiyonu kullanır. useState'e benzer bir işlev görür, ancak:

Daha karmaşık state mantıkları için uygundur.
Farklı türlerdeki güncellemeleri ayrıştırmak için daha iyi bir yapı sunar.

const [state, dispatch] = useReducer(reducer, initialState);

Reducer Fonksiyonu:

State'in nasıl değişeceğini tanımlayan bir fonksiyondur.
İki parametre alır:
Mevcut state (state)
Action (yapılacak güncellemenin türü ve isteğe bağlı veriler);

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

      */}

    </div>
  );
}

export default App;
