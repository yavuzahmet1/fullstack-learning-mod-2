import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import { RecipeContext } from '../../context/RecipeProvider'
import asci from "../../assets/home.svg"
import { HomeImg, ImgDiv } from './HomeStyles'
import RecipeCard from './RecipeCard'
const Home = () => {

const{yemekler}=useContext(RecipeContext)


  return (
    <div>
      <Header />

      {yemekler.length > 0 ? (
        <div>
          <RecipeCard/>
        </div>
      ) : (
        <ImgDiv>
          <HomeImg src={asci} alt="" />
        </ImgDiv>
      )}
    </div>
  );
}

export default Home