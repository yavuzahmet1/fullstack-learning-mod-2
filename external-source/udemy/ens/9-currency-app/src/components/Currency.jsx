import React from 'react'
import "../css/currency.css"
import { FaCircleArrowRight } from "react-icons/fa6";
import { Button } from "react-bootstrap"

const Currency = () => {
    return (
        <div className='currency-container'>
            <div className='head'>
                <h3 className='header mt-3 mb-3 rounded-2 p-2'>Currency App</h3>
            </div>
            <div className='currency'>
                <input type="number" className='amount' />
                <select className="from-currency-option" id="">
                    <option value="USD">USD</option>
                    <option value="EURO">EURO</option>
                    <option value="TL">TL</option>
                </select>
                <FaCircleArrowRight style={{ fontSize: "2.5rem", borderRadius: "60%", color: "aqua" }}
                />
                <select className="to-currency-option" id="">
                    <option value="TL">TL</option>
                    <option value="USD">USD</option>
                    <option value="EURO">EURO</option>
                </select>
                <input type="number" className='amount' />

            </div>
            <div className='button'>
                <Button className='btn btn-warning fw-bolder'>exchange</Button>
            </div>

        </div>
    )
}

export default Currency