//? ayrı dosyaya taşıdık
// const Header = () => {
//   return <p>I am header</p>;
// };

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    //* JSX elementleri birden fazla olduğu takdirde mutlaka bir parent element ile sarmallanmalıdır. Bunun için div, section vb. kapsayıcı elementler kullanılabileceği gibi boş React Fragment elementi "<></>" de kullanılabilir. Fragmentlar DOM'da yer kaplamaz.
    <>
      <h1>JSX - Components</h1>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
