import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);

  const addValue = () => {
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
  }

  const removeClick = () => {
    setCounter(counter - 1)
  }

  return ( 
    <>
     
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2> 

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeClick}
      >remove value {counter}</button>
      <p>{counter}</p>
    </>
  )
}

export default App
