import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const PlayerCard = ({ img, name, statistics }) => {
    const [imgShow, setImgShow] = useState(true);

    const change = () => {
        setImgShow(!imgShow)
    }
    return (
        <div>
            <Card onClick={change}>
                {imgShow ? (
                    <img variant="top" src={img} className='player-img' />) : (
                    <ul className='m-auto'>
                        {statistics.map((item, index) => {
                            return <li>{item}</li>
                        })}
                    </ul>
                )

                }
                <footer className='fw-bold d-flex justify-content-center'>
                    <p>{name}</p>
                </footer>
            </Card>
        </div>
    )
}

export default PlayerCard