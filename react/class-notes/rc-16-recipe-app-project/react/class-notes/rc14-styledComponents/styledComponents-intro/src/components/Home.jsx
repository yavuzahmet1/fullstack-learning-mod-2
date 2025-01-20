import React from 'react'
import DivStyle from './style/ContainerStyle'
import HeaderS, { LinkS } from './style/HeaderStyle'
import ButtonS, { TomatoButton } from './style/ButonStyle'

const Home = () => {
  return (
    <DivStyle>
      <HeaderS>merhaba</HeaderS>

      <LinkS href="#">LINK</LinkS>

      <ButtonS bengisu>tıkla1</ButtonS>
      <ButtonS yunus>tıkla2</ButtonS>
      <ButtonS>tıkla3</ButtonS>

      <TomatoButton>tıkla4</TomatoButton>
      <TomatoButton abdullah>tıkla5</TomatoButton>
    </DivStyle>
  );
}

export default Home