//* JSX'de stillendirme farkli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{backgroundColor:"red"}})
//* 3-) Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Module CSS, Material UI, Styled Component, Sass, Bootstrap, Tailwind, Emotion, Ant Design v.b harici kutuphaneler kullanilabilir.

//! External css
//! CSS dosyalari dogrudan import edilir. Export edilmelerine gerek yoktur.
//? CSS dosyalari import "path" seklinde eklenir.
import "./Main.css";

//? Dahili bir resim eklemek icin import yapmak gereklidir.
//? ancak public klasöründeki resimler importsuz bir şekilde
//? erisilebilir.
import sunset from "./images/sunset.webp";

//?local ve global style değişkeni
const headerStyle = {
  color: "teal",
  backgroundColor: "lightGray",
  fontWeight: "bold",
};

const Main = () => {
  return (
    <main>
      {/* JSX */}
      {/* //* Inline CSS, (key-value), notasyon olarak camelCase */}
      <h2 style={{ color: "red", backgroundColor: "gray" }}>Main Section</h2>
      <h3 style={headerStyle}>Other Header</h3>
      {/* //* External CSS'den stil geldi */}
      <p className="par">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        debitis, optio repellat eos quaerat ullam eveniet sint? Voluptatibus
        error soluta corporis fuga nemo, eveniet id laudantium sequi vitae
        tempore veniam?
      </p>
      <p className="par2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
        explicabo.
      </p>
      <div>
        <img
          className="img"
          src="https://cdn.pixabay.com/photo/2023/12/15/22/37/mountains-8451480_1280.jpg"
          alt=""
        />
        {/* //* Lokal ortamımızda buluna bir resmi dogrudan path vererek cagiramayiz. Bunun yerine import yaparız */}
        <img className="img" src={sunset} alt="" />
        {/* //* Public klasöründeki resimlere doğrudan ulaşıbildiği için yol vererek eriştik. Ana dizin) */}
        <img className="img" src="./volcano.webp" alt="" />
      </div>
    </main>
  );
};

export default Main;
