
import { useContext } from 'react'
import AnaUser from './AnaUser'
import { KullaniciContext } from '../context/KullaniciProvider'

const Isimler = () => {

const {users}=useContext(KullaniciContext)

 
  return (
    <div>
     {users.slice(0,4).map((a)=>(
<div style={{textAlign:"center", backgroundColor:"pink"}}>

  {a.login}
</div>

     ))}
        {/* <AnaUser users={users}/> */}
        <AnaUser/>

    </div>
  )
}

export default Isimler