import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from "./LoginStyles"

const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={""} />
        <Header>{"<Clarusway/>"}Recipe</Header>
        <StyledForm>
          <StyledInput />
          <StyledInput />
          <StyledButton>Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login