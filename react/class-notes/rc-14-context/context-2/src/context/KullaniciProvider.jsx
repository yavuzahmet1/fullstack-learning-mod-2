import { useEffect } from "react";
// import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";


//! 1-create context
export const KullaniciContext = createContext()

const KullaniciProvider = ({ children }) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users").then(res => res.json()).then(data => setUsers(data));
    }, [])

    const changeWidth = (id, px) => {
        setUsers(users.map((a) => a.id === id ? { ...a, width: px } : a))
    }

    return (
        <KullaniciContext.Provider value={{ users, changeWidth }}>
            {children}


        </KullaniciContext.Provider>
    )
}

//!Consuming burada yaparsak ihtiyaç duyan child larda bir daha çağırmıyoruz (opsiyonel tercih etmeyebilir, eski yoldan yani verileri çağıran sayfalara useContext yazarak devam edebilirsiniz.)(custom hooks);
// export const useUserCntxt = () => {
//     return useContext(KullaniciContext)
// }

export default KullaniciProvider;