import { useContext } from "react"
import { KullaniciContext } from "../context/KullaniciProvider"

// import { useUserCntxt } from "../context/KullaniciProvider";



const AnaUser = () => {

const {users,changeWidth}=useContext(KullaniciContext)

// const {users,changeWidth}=useUserCntxt()//!2. yoldan consuming

  return (
    <div>
      {users.map((a) => (
        <div>
          <h3>
            {a.login}
          </h3>

          <img src={a.avatar_url} alt="" 
            width={a.width}
          />

          <div>
            <label htmlFor=""> Image width(px)</label>
            <input type="number"
             onChange={(e)=>changeWidth(a.id,e.target.value)}
             />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AnaUser