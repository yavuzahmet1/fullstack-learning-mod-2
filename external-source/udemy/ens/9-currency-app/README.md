# Döviz Çevirici Uygulaması

Bu proje, **React** ile geliştirilmiş basit bir **Döviz Çevirici Uygulaması**dır. Gerçek zamanlı döviz kuru verilerini bir API'den alır ve farklı para birimleri arasında dönüşüm yapılmasını sağlar.

## Özellikler

- [Free Currency API](https://freecurrencyapi.com/) kullanılarak canlı döviz kurları alınır.
- Belirli bir para birimindeki miktarı başka bir para birimine dönüştürme imkanı sunar.
- `From` ve `To` döviz seçimleri, API'den dinamik olarak yüklenir.
- Dönüştürülen miktar gerçek zamanlı olarak görüntülenir.
- Kullanıcı dostu ve responsive bir arayüz sunar.

doviz-cevirici/
├── public/
├── src/
│   ├── components/
│   │   └── Currency.jsx       # Döviz çevirici ana bileşeni
│   ├── css/
│   │   └── currency.css       # Uygulama için stiller
│   ├── App.js                 # Ana bileşen
│   └── index.js               # Giriş noktası
├── package.json
└── README.md                  # Dokümantasyon


## Kullanılan Teknolojiler

- **React**: Arayüz geliştirme.
- **Bootstrap**: Responsive tasarım.
- **Axios**: API taleplerini gerçekleştirme.
- **React Icons**: İkon kullanımı.

##Bağımlılıkları Yükleyin
- **pnpm install
- **pnpm start