import React from 'react'
import styled from 'styled-components'

function Item({ id, title, price, category, description, image }) {
    return (
        <ListItem>

            <img src={image} alt='img' />
            <div className='itemdescription'>
                <h3>{title}</h3>
            </div>

        </ListItem>

        31.25
    https://www.youtube.com/watch?v=VNI8ee5JAuw&list=PLQFVrdkuSKRXTH-97vseXrDYXnKOHxId6&index=14
    )
}

export default Item

const ListItem = styled.div`
height:300px;
width: 400px;
border: 1px solid red;
border-radius: 25px;
`


