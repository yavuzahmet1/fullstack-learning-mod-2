import styled from "styled-components";

export const MainContainer = styled.div`
  /* arama yapıldığında açılan yiyecek kartlarının kutusu RECİPECARD*/
  display: flex;
  flex-wrap: wrap;
  /* sığmayan taşsın düşsün */
  /* flex-direction: row; */
  justify-content: center;
  /* height: fit-content; */
  /* border:3px solid red; */
`;

export const Cards = styled.div`
  /* search den sonra çıkan herbir yiyecek kart RECİPECARD*/
  height: 300px;
  background: #e1f1dd;
  padding: 5px;
  border-radius: 3px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
  box-shadow: 8px 8px 5px black;
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
    /* box-shadow: none özelliğinin yavaşça uygulanmasını sağlar; */
  }
`;

export const RecipeHeader = styled.h1`
  /* kartlardaki yiyeceklerin adları */
  font-size: 1.5rem;
  text-align: center;
`;
export const RecipeImage = styled.img`
  /* kartların içindeki resimler RECİPECARD */
  height: 150px;
  border-radius: 10px;
  border:2px solid red;
`;

export const Button = styled.button`
  /* view more  buton */
  background-color: #00adb5;
  padding: 5px;
  /* outline: none; */
  height: 2rem;
  border: none;
  margin: 10px;
  border-radius: 3px;
  cursor: pointer;
`;



export const ImgDiv = styled.div`
  /* anasayfadaki aşçı resminin en dış kutusu */

 text-align: center;
  margin: 50px;
  /* background-color: #00adb5; */
  background-color: coral;
`;

export const HomeImg = styled.img`
  /* ana sayfadaki esas resim */
  width: 80%;
  max-width: 750px;
  background-color:pink;
`;
