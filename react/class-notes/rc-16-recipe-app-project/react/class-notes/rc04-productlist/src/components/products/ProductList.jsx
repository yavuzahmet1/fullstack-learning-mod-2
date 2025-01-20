import ProductCard from "./ProductCard"

import "./Products.scss"

const ProductList = ({products}) =>{
// console.log(products)
    return(
        <div className="products-list">
            {
                products.map((products)=> <ProductCard key={products.id} {...products} /> )
            }
        </div>
    )
}
export default ProductList