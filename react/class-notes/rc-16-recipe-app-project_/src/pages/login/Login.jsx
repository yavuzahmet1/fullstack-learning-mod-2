import React, { useContext } from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import mealSvg from "../../assets/meal.svg"
import { RecipeContext } from "../../context/RecipeProvider";
import { useNavigate } from "react-router-dom";
const Login = () => {






  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />

        <Header>{"<Clarusway/>"}Recipe</Header>

        <StyledForm >
          <StyledInput
            type="text"
            placeholder="username"
            required
          />

          <StyledInput
            type="password"
            placeholder="password"
            required
          />

          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
