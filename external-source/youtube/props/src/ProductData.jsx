import React from 'react'

function ProductData(props) {

    console.log(props)
    return (
        <div>
            <div>ProductData</div>
            <hr />
            <div>
                <div>name:{props.productName}</div>
                <div>price:{props.price}$</div>
            </div>
            <hr />
            <div>
                <div>name:T-Shirt</div>
                <div>price:200$</div>
            </div>
            <hr />
            <div>
                <div>name:Computer</div>
                <div>price:1000$</div>
            </div>
        </div>
    )
}

export default ProductData