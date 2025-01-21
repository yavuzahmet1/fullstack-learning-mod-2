import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../helper/data'


const ProductDetails = () => {
    const { id } = useParams()
    //console.log(id)
    const product = products.find((item) => item.id === Number(id));
    return (
        <div>
            <h2>Product Detail</h2>
            <hr />
            {
                product ? (
                    <>
                        <h5>Product : {product.product}</h5>
                        <h5>Price   : {product.price}</h5>
                    </>
                ) : (<h1>Not Found</h1>)
            }
        </div>

    )
}

export default ProductDetails