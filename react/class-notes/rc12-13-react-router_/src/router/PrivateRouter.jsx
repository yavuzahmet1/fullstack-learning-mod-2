import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {

const name="ipek"
const password="1234"


  return name==="ipek" && password==="1234" ? (<Outlet/>) : (<Navigate to="/login"/>)
}
// kullanici doğru  isim girdiyse Outlet komponenti sayesinde istenilen sayfaya git, yanlışlık varsa Navigate ile bulunduğun yerde (Login) kal ya da başka path veriledebilir
export default PrivateRouter