import React from 'react'
import useStockCall from '../hook/useStockCall'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Brands = () => {

  const {getStockData}=useStockCall()
  const {brands}=useSelector((state)=>state.stock)

useEffect(()=>{
  getStockData("brands")
},[])

  return (
    <div>Brands</div>
  )
}

export default Brands