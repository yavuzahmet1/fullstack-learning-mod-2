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
const{setUser,setPass,user,pass}=useContext(RecipeContext)




const navigate=useNavigate()

const handleSubmit=(e)=>{
  e.preventDefault()

  localStorage.setItem("username",user)
  localStorage.setItem("password",pass)

navigate("/home")

}


  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />

        <Header>{"<Clarusway/>"}Recipe</Header>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="username"
            required
            onChange={(e) => setUser(e.target.value)}
          />

          <StyledInput
            type="password"
            placeholder="password"
            required
            onChange={(e) => setPass(e.target.value)}
          />

          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
