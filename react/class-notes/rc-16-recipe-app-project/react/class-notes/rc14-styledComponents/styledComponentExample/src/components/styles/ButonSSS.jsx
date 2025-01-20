import styled from 'styled-components';

const ButtonSSS = styled.button`

color:${({ahmet})=> ahmet || "white"};
background-color: ${({recep})=> recep ? "#A62440": "white"};

  border: 1px solid #a62440;
  border-radius: 5px;
  padding: 1rem 1.2rem;
  font-size: 1.1rem;
  margin: 2rem 0.5rem;
  cursor: pointer;
`;

export const DetayButton = styled(ButtonSSS)`
  border-left: 3px solid blue;
  border-radius: 20px 0;
  color: tomato;
  background-color: white;
`;



export default ButtonSSS;
