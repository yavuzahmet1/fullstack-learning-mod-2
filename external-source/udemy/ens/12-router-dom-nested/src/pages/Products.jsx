import React from 'react'
import Product from '../components/Product'
import data from "../helper/data"

const Products = () => {
    return (
        <div>
            {
                data && data.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default Products