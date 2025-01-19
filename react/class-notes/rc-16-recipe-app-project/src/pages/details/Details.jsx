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
 
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{} </h1>
        <img style={{ cursor: "pointer" }} src={dietsvg} alt="" />
      </HeaderContainer>

      <DetailPart>
        <OtherPart>
          <>Nutrients</>

          <span>
            {}
            {}
            {}
          </span>
          <span>
            {}
            {}
            {}
          </span>
          <span>
            {}
            {}
            {}
          </span>
          <span>
            {}
            {}
            {}
          </span>
          <span>{} </span>
          <span>Calories:{} </span>
          {/* digest key i ile bize 29 elemanlı bir dizi geliyor, biz onun 4 elemanını bastırmak için slice kullandık */}
          <span>
            {
              <p key={ ""}>
                {}: {}
              </p>
           }
          </span>
        </OtherPart>

        <ImgContainer>
          <img src={ ""} alt="" />
        </ImgContainer>

        <IngredContainer>
          {
            <div key={""}>
              <p>
               
              </p>
            </div>
          }
        </IngredContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;
