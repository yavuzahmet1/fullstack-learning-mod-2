import styled from 'styled-components';

const ButtonS = styled.button`

color:${({bengisu})=>   bengisu ? "blue":"red"};

background-color: ${({bengisu,yunus})=>  bengisu ? "lightblue": yunus ? "blue" :"brown"};

cursor: pointer;
padding:1rem 1.5rem;
font-family:Arial, Helvetica, sans-serif;
font-size: 30px;
&:hover{ transform:scale(0.95)}

`;

export const TomatoButton=styled(ButtonS)`

color:tomato;
width:300px;

border-radius: 5px;

background-color: ${({abdullah})=> abdullah ? "aqua" : "green"};
`



export default ButtonS;
