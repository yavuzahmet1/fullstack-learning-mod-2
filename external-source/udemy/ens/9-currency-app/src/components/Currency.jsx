import React, { useEffect, useState } from 'react'
import "../css/currency.css"
import { FaCircleArrowRight } from "react-icons/fa6";
import { Button } from "react-bootstrap"
import axios from "axios"

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const API_KEY = "fca_live_SHfhkhHpcCqcWoh51LimrBv7LznOwdcLJRS9ZKcl";

const Currency = () => {

    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState();
    const [currencyList, setCurrencyList] = useState([])

    useEffect(() => {
        const getCurrencyList = async () => {
            try {
                const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}`);
                const currencyKeys = Object.keys(response.data.data)// keyleri seçtik 
                setCurrencyList(currencyKeys)//listede
            } catch (error) {
                console.log(error)

            }
        };
        getCurrencyList()
    }, [])// useEffect ile sadece birkez çalıştırdık

    const exchange = async () => {
        try {
            const res = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
            // console.log(fromCurrency)
            setResult((res.data.data[toCurrency] * amount).toFixed(2));

            // console.log(res.data.data[toCurrency] * amount)
            // console.log(amount)
            // console.log(fromCurrency)
            // console.log(toCurrency)
            // console.log(result)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='currency-container'>
            <div className='head'>
                <h3 className='header mt-3 mb-3 rounded-2 p-2'>Currency App</h3>
            </div>
            <div className='currency'>
                <input
                    type="number"
                    className='amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} />
                <select
                    className="from-currency-option"
                    onChange={(e) => setFromCurrency(e.target.value)}
                    value={fromCurrency}>
                    {
                        currencyList.map((currency) => (
                            <option key={currency} value={currency} >{currency}</option>
                        ))
                    }
                </select>
                <FaCircleArrowRight style={{ fontSize: "2.5rem", borderRadius: "60%", color: "aqua" }}
                />
                <select
                    className="to-currency-option"
                    onChange={(e) => setToCurrency(e.target.value)}
                    value={toCurrency}>
                    {
                        currencyList.map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))
                    }

                </select>
                <input
                    type="number"
                    className='amount'
                    value={result || ""} readOnly
                    onChange={(e) => setResult(e.target.value)} />

            </div>
            <div className='button'>
                <Button
                    className='btn btn-warning fw-bolder'
                    onClick={exchange}
                >exchange</Button>
            </div>

        </div>
    )
}

export default Currency