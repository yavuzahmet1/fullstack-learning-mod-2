import React from 'react'
import { useSelector } from 'react-redux'

const FirmsCard = () => {

    const {firms}=useSelector((state)=>state.stock)

    console.log("firms",firms)

  return (
    <div>FirmsCard</div>
  )
}

export default FirmsCard