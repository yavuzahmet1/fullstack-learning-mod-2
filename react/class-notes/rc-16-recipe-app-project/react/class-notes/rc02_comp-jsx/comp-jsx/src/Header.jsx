//* Harici bir dosya icerisinde olusturulan bir component
//* export default ile proje icerisinde herhangi bir yerde
//* kullanima acilmis olur. Kullanmak icin hedef
//* dosyada import .... from "./..." ile import yapmak yeterlidir.

//? Header Component

//* arrow func. with default export (rafce)
const Header = () => {
  //? JS alanı
  const mesaj = "Hello FS-18";
  return (
    //? JSX alanı

    <header>
      {/* JSX alanı yorum satırı */}
      {/* //* JSX içerisinde JS ifadeleri süslü parantez "{}" içerisinde yazılır */}
      {/* //* JSX elementlerinde "class" yerine "className" kullanılır */}
      <h1 className="par"> {mesaj} </h1>
    </header>
  );
};

export default Header;

//* arrow func. with named export (rafc)
//! import {} from "./..." şeklinde süslü içinde import edilir
// export const Header = () => {
//   return (
//     <div>Header</div>
//   )
// }

//* function declaration with default export (rfce)
// function Header() {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header
