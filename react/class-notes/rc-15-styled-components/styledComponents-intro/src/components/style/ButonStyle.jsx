import styled from 'styled-components';

const ButtonS = styled.button`
  color: ${({ bengisu }) => bengisu ? "blue" : "red"};
  background-color: ${({ bengisu, yunus }) => bengisu ? "lightblue" : yunus ? "blue" : "brown"};
  cursor: pointer;
  font-size: 2rem;
  padding: 1rem 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  &:hover{
    transform: scale(0.95);
  }
`;

export const TomatoButton = styled(ButtonS)`
color: aqua;
background-color: ${({ abdullah }) => abdullah ? "blue" : "yellow"};
border-radius: 2rem;
border: none;
`


export default ButtonS;
