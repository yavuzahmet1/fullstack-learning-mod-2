import React from 'react'
import ProductStyle from './Products.scss';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
    return (
        <div className={ProductStyle.card}>
            {
                products.map((product) => <ProductCard key={product.id}{...product} />
                )
            }
        </div>
    )
}

export default ProductList