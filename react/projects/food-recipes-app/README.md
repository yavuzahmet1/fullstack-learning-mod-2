# React & Sass Mini Projesi: Yemek Tarifleri Uygulaması

Bu proje, React ile bir "Yemek Tarifleri" uygulaması yaparak aşağıdaki konuları pekiştirmenizi sağlayacak:

- React bileşenlerinin (Components) kullanımı
- JSX ile dinamik içerik oluşturma
- Props ile veri aktarımı
- Sass ile temel stillendirme

## Proje Hedefleri

- Birden fazla React bileşeni oluşturmak
- Props ile bileşenler arasında veri taşımak
- JSX ile dinamik içerik oluşturmak
- Sass kullanarak stilleri özelleştirmek

---

## Başlangıç

### Gereksinimler

- Node.js ve npm (veya yarn)
- Bir kod editörü (Örneğin, Visual Studio Code)

### Adımlar

1. **Yeni bir React projesi oluşturun:**

   ```bash
   npx create-react-app react-sass-recipes
   cd react-sass-recipes
   ```

2. **Sass'ı projeye ekleyin:**

   ```bash
   npm install sass
   ```

3. **Proje klasör yapısını düzenleyin:**

   Klasör yapınız şu şekilde olmalı:

   ```
   src/
   ├── components/
   │   ├── RecipeCard.jsx
   │   ├── RecipeCard.scss
   │   ├── RecipeList.jsx
   │   └── RecipeList.scss
   ├── App.jsx
   ├── App.scss
   ├── index.js
   └── index.css
   ```

4. **Bileşenleri oluşturun:**

   - `RecipeCard.jsx`: Tek bir tarif kartını temsil eden bileşen.
   - `RecipeList.jsx`: Tariflerin bir listesini içeren bileşen.
   - `App.jsx`: `RecipeList` bileşenini kullanarak ana uygulamayı oluşturun.

5. **Stilleri oluşturun:**

   - `RecipeCard.scss`: Tarif kartının görünümünü düzenleyin (örneğin, kart gölgesi, resim boyutu).
   - `RecipeList.scss`: Tarif listesinin genel düzenini oluşturun.
   - `App.scss`: Uygulamanın genel düzenini ekleyin (örneğin, ortalama, genel yazı tipi).

---

## Yapılacaklar

1. **RecipeCard Bileşeni:**

   - Tarif adını, açıklamasını ve resmini props ile alın.
   - Tarif kartını stilize etmek için Sass kullanın (örneğin, kart gölgesi, kenarlık).

2. **RecipeList Bileşeni:**

   - Tarif verilerini bir liste olarak oluşturun.
   - Listeyi `RecipeCard` bileşenlerini kullanarak görüntüleyin.

3. **Sass ile Stiller:**

   - `RecipeCard.scss` ile tarif kartlarına görsel bir düzen kazandırın (örneğin, resim, metin hizalaması).
   - `RecipeList.scss` ile liste düzenini oluşturun (örneğin, kartların alt alta veya yan yana sıralanması).
   - `App.scss` ile sayfa düzenini oluşturun (örneğin, ortalama, arka plan rengi).

---

## Örnek Tarif Verisi

`RecipeList.jsx` dosyasında aşağıdaki gibi bir veri kullanabilirsiniz:

```javascript
const recipes = [
  { id: 1, name: "Spaghetti Carbonara", description: "Kremalı ve lezzetli bir İtalyan tarifi.", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Tavuk Çorbası", description: "Soğuk kış günleri için mükemmel bir çorba.", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Cheesecake", description: "Tatlı ihtiyacınızı karşılayacak harika bir tatlı.", image: "https://via.placeholder.com/150" },
];
```

---

## Geliştirme İpuçları

- **Bileşen Bölme:**
  Eğer proje büyürse, bileşenleri daha küçük parçalara ayırabilirsiniz.

- **Sass Özellikleri:**
  Sass değişkenlerini, iç içe geçmiş stilleri (`nesting`) ve diğer özellikleri kullanmayı deneyin.

- **Dinamik Veri:**
  Tarifi detaylı görüntülemek için bir olay işleyici ekleyebilirsiniz.

---

## Ekstra Geliştirme Fikirleri

- Tarif detaylarını göstermek için bir modal veya yeni bir sayfa ekleyin.
- Tarifleri kategoriye göre filtreleme özelliği ekleyin.
- Favorilere tarif eklemek için bir buton ekleyin.
- Medya sorguları ile uygulamayı mobil uyumlu hale getirin.

---

Bu adımları takip ederek hem React hem de Sass konusunda pratik yapabilirsiniz. Başarılar dilerim!