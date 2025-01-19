import React, { useContext } from 'react'
import { RecipeContext } from '../../context/RecipeProvider'

const RecipeCard = () => {

  const{yemekler}=useContext(RecipeContext)
  console.log(yemekler);
  
  return (
    <div>RecipeCard</div>
  )
}

export default RecipeCard