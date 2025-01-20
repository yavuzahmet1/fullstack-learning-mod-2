### Suspense ve Lazy (Performans Optimizasyon Teknikleri)

React'ta `Suspense` Componenti ve `lazy` metodları, uygulamalarda gecikmeli yüklemeleri ve kod bölmelerini kolaylaştırmak için kullanılan iki önemli tekniktir.

##### Suspense:
React Suspense, asenkron verilerin, kod yüklemelerinin ve diğer gecikmeli işlemlerin daha etkili yönetilmesini sağlayan bir bileşendir. Bir uygulama, genellikle veri alıp işlemek, API çağrıları yapmak veya dinamik bileşenleri yüklemek gibi gecikmeli işlemlerle karşılaşabilir. Bu gibi durumlarda, Suspense kullanarak kullanıcı deneyimini iyileştirebilir ve uygulamanın daha iyi çalışmasını sağlayabiliriz.
Kullanımı:


```jsx
Copy code
import React, { Suspense } from 'react';

const MyComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* Gecikmeli bileşenler veya asenkron işlemler burada yer alır */}
    </Suspense>
  );
};
```

`<Suspense>` bileşeni, fallback prop'u ile verilen bileşeni yüklerken gecikmeli işlem sırasında gösterilecek içeriği belirler. Örnekteki <div>Loading...</div> bileşeni, asenkron işlem tamamlanana kadar kullanıcılara gösterilecektir.

**Document Linki => https://react.dev/reference/react/Suspense**

##### Lazy:
React.lazy(), kodu yüklemeyi geciktiren bir fonksiyondur. Bu, büyük boyutlu bileşenlerin yalnızca ihtiyaç duyulduğunda yüklenmesini sağlayarak, ana uygulamanın ilk yükleme süresini azaltmamıza yardımcı olur.
Kullanımı:

```jsx
import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const MyComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};
```


React.lazy() ile yüklenen bileşen, sadece <LazyComponent /> ifadesi kullanıldığında yüklenecektir. Bu, uygulamanın başlangıçta küçük kalmasına ve daha büyük bileşenlerin kullanıcı ihtiyacına göre yüklenmesine olanak tanır.

**Document Linki => https://react.dev/reference/react/lazy**

Bir noktada unutmamanız gereken önemli bir detay, React.lazy() yalnızca default export'ları destekler. Eğer yükleyeceğiniz bileşende default export yoksa, o bileşeni Suspense ve lazy kullanarak yükleyemezsiniz. Bu durumda, kod bölmeleri (code splitting) için başka yöntemler kullanmanız gerekebilir.

Projects sayfasında kullanım örneği var. Performans optimizasyonu üst düzey bir konu şuan sadece varlığından haberdar olmanız yeterli.Ayrıntılı incelemek için dökümana bakabilirsiniz.


