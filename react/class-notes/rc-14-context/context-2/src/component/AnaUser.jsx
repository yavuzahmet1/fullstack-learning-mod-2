import { useContext } from "react"
import { KullaniciContext } from "../context/KullaniciProvider"



const AnaUser = () => {
  const { users, changeWidth } = useContext(KullaniciContext)


  return (
    <div>
      {
        users.map((item) => (
          <div key={item.id}>
            <h3>{item.login}</h3>
            <img src={item.avatar_url} width={item.width} alt="" />
            <div>
              <label htmlFor="">Image width(px)</label>
              <input type="text" onChange={(e) => changeWidth(item.id, e.target.value)} />
            </div>
          </div>
        )

        )
      }

    </div >
  )
}

export default AnaUser