import React from 'react'
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Product = ({ product }) => {
    const { id, name, price } = product;
    const navigate = useNavigate();

    return (
        <div>
            <div>Product Detail</div>
            <h3>Name : {name}</h3>
            <h3>Price : {price}</h3>
            <Button onClick={() => navigate("/product-details/" + id)}>Detail</Button>
        </div>
    )
}

export default Product