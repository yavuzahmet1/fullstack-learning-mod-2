import React from 'react'
import { useEffect } from 'react'
import useStockCall from '../hook/useStockCall'

const Firms = () => {

  const {getFirms}=useStockCall()
  
  useEffect(()=>{
  getFirms()
  },[])



  return (
    <div>Firms</div>
  )
}

export default Firms