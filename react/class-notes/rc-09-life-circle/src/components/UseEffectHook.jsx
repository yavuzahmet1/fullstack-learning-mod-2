//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componentler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

//! useEffect(() => {
//*   /* ComponentDidMount code */
//*      Kodlar
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [state1, state2]);

//! useEffect(() => {
//?   /* ComponentDidMount code */
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);
import { useEffect, useState } from "react";
const UseEffectHook = () => {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("");

    //* dependancy array yoksa her renderda çalışır
    //   useEffect(() => {
    //     console.log("ben her renderda çalışırım");
    //   });

    //! componentDidMount
    useEffect(() => {
        console.log("2-componentDidMount");
    }, []); //* dependency array boş olduğu için fonksiyonun gövdesi sadece ilk render sonrasında (bir kere) çalışır.

    //! componentDidMount + componentDidUpdate
    useEffect(() => {
        console.log("3-componentDidUpdate");
    }, [counter]); //? counter state'i her degistiginde fonksiyonun gövdesi tekrar calisti. Bu durumda gövde hem mounting de hem de updating de calismis oldu.

    console.log("1-rendering");
    return (
        <div className="container text-center">
            <h1 className="text-danger">LIFECYCLE METHODS</h1>
            <h3>COUNT={counter} </h3>
            <h4>{name}</h4> <button onClick={() => setCounter(counter + 1)} className="btn btn-info">
                INC
            </button>
            <button onClick={() => setName("Felix")} className="btn btn-success">
                Felix
            </button>
        </div>
    );
};
export default UseEffectHook