
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("Ahmet");
  const [age, setAge] = useState("21");
  const [friends, setFriends] = useState(["Halim", "Vaktim", "Yaren"]);

  console.log(age, name)

  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <h2>{age}</h2>

      <button onClick={() => setName("Ali")}>Chanege Name</button>
      <button onClick={() => setAge(39)}>Change Age</button>
      <hr />
      {
        friends.map((friend, index) => (
          <div key={index}>{friend}</div>
        ))}

      <button onClick={() => setFriends([...friends, "aaaa"])}>add new friend</button>
      <button onClick={() => setFriends(friends.map(friend => friend === "Yaren" ? "Yerinde" : friend))}>Yaren manuplate Yerinde</button>
      <hr />

      {/*//?peki neden push methodu ile bu işlemi yapamıyoruz
 //!React'te push gibi yöntemlerin doğrudan kullanılmasının önerilmemesinin sebebi, React'in state değişikliklerini tespit etme şeklidir. React, useState hook'u ile tanımlanmış bir state'in referansının (yani bellekteki adresinin) değişip değişmediğine bakar. Eğer aynı referansı kullanan bir array üzerinde değişiklik yaparsanız, React bunu algılayamaz ve bileşeni yeniden render etmez. 
 //!React'te state'i güncellerken, her zaman eski state'in kopyasını alıp üzerinde değişiklik yapmalısınız. Bu, React'in referansın değiştiğini fark etmesini sağlar.
 //!push: Array'i doğrudan değiştirir (mutasyon yapar). React'in değişikliği algılamasını engeller.
 //!spread operator ([...]) veya concat gibi yöntemler: Yeni bir array döndürür (immütabiliteyi korur). React değişikliği algılar ve UI'yi günceller.

 // 1-Yeni bir arkadaş eklemek:
 setFriends([...friends, "YeniArkadaş"]);

 //2-Bir arkadaş silmek: Örneğin, "Vaktim" adındaki arkadaşı silmek için:
 setFriends(friends.filter(friend => friend !== "Vaktim"));

 //3-Bir arkadaşın adını güncellemek: Örneğin, "Halim" adını "Halim Yeni" olarak değiştirmek için:

 setFriends(friends.map(friend => friend === "Halim" ? "Halim Yeni" : friend));

//4-Tüm listeyi sıfırlamak:
setFriends([]);

//5-Arkadaşları alfabetik sıraya dizmek:
setFriends([...friends].sort());

//*Her durumda, React bu güncellemeleri takip eder ve bileşen yeniden render edilir. Böylece UI, state'deki değişikliklere göre otomatik olarak güncellenir

//*React'in immütabilite (immutability) prensibi, uygulamanızdaki state'i doğrudan değiştirmek yerine, eski state'in bir kopyasını oluşturup üzerinde değişiklik yapmayı ve bu yeni değeri React'e bildirmeyi ifade eder. Bu prensip, React'in performanslı ve güvenilir bir şekilde çalışmasını sağlar.

//? Neden İmmütabilite Önemli? 
1-Performans Optimizasyonu: React, bileşenlerin yeniden render edilmesi gerektiğini anlamak için referans karşılaştırması (shallow comparison) yapar. Eğer bir state doğrudan değiştirilirse (mutasyon yapılırsa), eski ve yeni state'in referansları aynı kalır. Bu durumda React, değişiklik olmadığını varsayar.

2-İmmütabiliteyi sağladığınızda, her state güncellemesinde yeni bir referans oluşturulur. Bu, React'in değişikliği hızlı bir şekilde algılamasını sağlar.

3-Predictability (Tahmin Edilebilirlik): İmmütabilite, uygulamanın önceki durumlarını korumayı kolaylaştırır. Örneğin, bir state değişikliğinden önceki durumu bir değişkende saklayabilir ve gerektiğinde geri dönebilirsiniz (örneğin, "geri al" işlevleri için).

4-Debugging (Hata Ayıklama): İmmütabilite sayesinde geçmiş state'lere kolayca ulaşabilirsiniz. Bu, uygulamanın nasıl bir yol izlediğini anlamak için önemlidir ve hata ayıklamayı kolaylaştırır.

5-Yan Etkilerin Önlenmesi: Doğrudan değişiklikler (mutasyonlar), beklenmedik yan etkilere yol açabilir. İmmütabilite, bu tür durumların oluşmasını engeller.

//*arkadaşlar benim gibi useState() bir React nesnesi olduğu halde neden const [ x, y ] = useState() şeklinde destruct edilmesini mantığa oturtamayanlar için: useState() bir nesne döndürüyor gibi görünse de, aslında iki elemanlı bir array döndürüyormuş. O yüzden köşeli parantez kullanarak destruct ediliyor...

 // */}

    </div>
  );
}

export default App;
