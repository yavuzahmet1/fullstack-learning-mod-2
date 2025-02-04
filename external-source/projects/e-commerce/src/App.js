import './App.css';
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Item from './components/Item';

function App() {
  const [items, setItems] = useState([]);

  const getProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products")
    const result = await data.json()
    console.log(result)
    setItems(result)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div >
      <Header>
        <input type="text" placeholder="search item " />
        <button>Search</button>
      </Header>
      <Items>
        {
          items.map((product) => (
            <Item key={product.id} image={product.image} title={product.title} price={product.price} description={product.description} category={product.category} />
          ))
        }
      </Items>
    </div>
  );
}

export default App;

const Header = styled.header`
display: flex;
justify-content: center;
align-items: center;
min-height: 10vh;
border-bottom: 1px solid red;
font-size: 1rem;

input{
  padding: 0.5rem;
  margin-right: 5px;
  width: 300px;
  outline: none;
}

button{
  padding: 0.5rem;
  margin-right: 5px;
  transition: .2s ease;
  cursor: pointer;
}
button:hover{
  background-color: black;
  color: aliceblue;
  border: none;
}
`
const Items = styled.div`
margin-top: 20px;
display: grid;
grid-template-columns: repeat(auto-fit,400px);
gap: 0.7rem;
min-height: 80vh;
width: 90vw;
margin: 10px auto;

`
