import './App.css'
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from './redux/counterSlice'
import { useState } from 'react'

function App() {

  const [inputValue, setInputValue] = useState("")

  const { value } = useSelector((store) => store.counter)

  const dispatch = useDispatch()


  console.log(value)

  const inputSubmit = (e) => {
    e.preventDefault()
    setInputValue(Number(e.target.value))


  }

  return (
    <div>
      <div>{value}</div>
      <button style={{ margin: 3 }} onClick={() => dispatch(increment())}>increase</button>
      <button onClick={() => dispatch(decrement())}>decrease</button>
      <input type='text' onChange={inputSubmit} />
      <button onClick={() => dispatch(incrementByAmount(parseInt(inputValue)))}>Add</button>
    </div>
  )
}

export default App
