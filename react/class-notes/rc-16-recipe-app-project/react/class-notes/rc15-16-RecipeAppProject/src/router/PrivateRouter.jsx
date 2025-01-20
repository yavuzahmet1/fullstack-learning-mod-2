import React, { useContext } from 'react'
import { RecipeContext } from '../context/RecipeProvider'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
const {user,pass}=useContext(RecipeContext)


  return user==="ipek" && pass==="1234" ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateRouter

// !Navigate'i şu durumlarda kullanın: İşleme süreci sırasında otomatik veya koşullu gezinmeye ihtiyacınız varsa (örneğin, başarılı bir oturum açma işleminden sonra yeniden yönlendirme vb.).

//! useNavigate'i şu durumlarda kullanın: Kullanıcı eylemlerine veya olaylarına (örneğin, düğmeye tıklama, form gönderme veya benzeri etkileşimli olaylar) yanıt olarak gezinmenin gerçekleşmesini istiyorsanız.