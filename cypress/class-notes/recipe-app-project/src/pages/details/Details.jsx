import React from "react";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngredContainer,
  OtherPart,
} from "./DetailsStyles";
import dietsvg from "../../assets/diet.svg";
import { useLocation, useNavigate } from "react-router-dom";
const Details = () => {
 
const{state:{recipe}}=useLocation()
console.log(recipe);


  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{recipe.label} </h1>
        <img style={{ cursor: "pointer" }} src={dietsvg} alt="" />
      </HeaderContainer>

      <DetailPart>
        <OtherPart>
          <>Nutrients</>

          <span>
            {recipe.totalNutrients.CA.label}:
            {Math.round(recipe.totalNutrients.CA.quantity)}
            {recipe.totalNutrients.CA.unit}
          </span>
          <span>
            {recipe.totalNutrients.CHOLE.label}:
            {Math.round(recipe.totalNutrients.CHOLE.quantity)}
            {recipe.totalNutrients.CHOLE.unit}
          </span>
          <span>
            {recipe.totalNutrients.ENERC_KCAL.label}:
            {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </span>
          <span>
            {recipe.totalNutrients.CHOCDF.label}:
            {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
            {recipe.totalNutrients.CHOCDF.unit}
          </span>
          <span>{recipe.totalWeight} </span>
          <span>Calories:{Math.round(recipe.calories)} </span>
          {/* digest key i ile bize 29 elemanlı bir dizi geliyor, biz onun 4 elemanını bastırmak için slice kullandık */}
          <span>
            {recipe.digest.slice(0, 4).map((item, index) => (
              <p key={index}>
                {item.label}: {Math.round(item.total)}
              </p>
            ))}
          </span>
        </OtherPart>

        <ImgContainer>
          <img src={recipe.image} alt="" />
        </ImgContainer>

        <IngredContainer>
          {recipe.ingredientLines.map((item, index) => (
            <div key={index}>
              <p>{index+1} * {item}</p>
            </div>
          ))}
        </IngredContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;
