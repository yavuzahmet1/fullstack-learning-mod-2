import React from 'react'
import DivStyle from './style/ContainerStyle'
import HeaderS, { LinkS } from './style/HeaderStyle'
import ButtonS, { TomatoButton } from './style/ButonStyle'

const Home = () => {
  return (
    <DivStyle>
      <HeaderS>Hello!</HeaderS>
      <LinkS href=''>Link</LinkS>
      <ButtonS bengisu>Click</ButtonS>
      <ButtonS>Click</ButtonS>
      <ButtonS>Click</ButtonS>
      <TomatoButton abdullah>Click</TomatoButton>
      <TomatoButton>Click</TomatoButton>


    </DivStyle>
  )
}

export default Home