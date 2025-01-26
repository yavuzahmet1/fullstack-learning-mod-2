import styled from "styled-components";

export const LoginContainer = styled.div`
  /* resmin olduğu div */
  background-image: url("https://picsum.photos/1600/900");
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border:2px solid red; */
`;

export const FormContainer = styled.div`
  /* yuvarlak yer */
  /* width: 600px; */
  min-width: 600px;
  height: 600px;
  background-color: rgba(0, 173, 181, 0.5);
  border-radius: 50%;
  border: 2px solid #e1f1dd;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.h1`
  /* clarusway başlığı yazan yer */
  color: white;
  font-family: "Girassol", sans-serif;
  font-size: 3rem;
`;

export const StyledInput = styled.input`
  /* username giriş inputları */
  height: 50px;
  font-size: 2rem;
  width: 250px;
  border-radius: 5px;
  font-family: "Girassol", sans-serif;
  /* inuta girilen yazıyı büyük harf yapar */
  background-color: rgba(0, 0, 0, 0.6);
  border: none;
  color: white;
  margin: 1rem;
  text-indent: 20px;
`;

export const StyledForm = styled.form`
  /* 3 kutunun olduğu form */
  background: pink;
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`

/* login butonu */
  font-size: 2rem;
  font-family: "Girassol", sans-serif;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  cursor: pointer;
  margin: 1rem;
`;

export const StyledImg = styled.img`
  /* yuvarlağın içindeki üstteki küçük resim */

  width: 150px;
  margin: 1rem;
`;
