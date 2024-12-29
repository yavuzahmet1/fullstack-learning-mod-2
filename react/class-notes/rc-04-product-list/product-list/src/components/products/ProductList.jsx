import React from 'react'
import './Products.scss';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
    return (
        <div className='products-list'>
            {
                products.map((product) => <ProductCard key={product.id}{...product} />
                )
            }
        </div>
    )
}

export default ProductList