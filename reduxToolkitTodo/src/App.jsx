import { useState } from 'react'
import Todos from './components/Todos.jsx'
import AddTodo from './components/AddTodo'

function App() {
 
  return (
    <>
      <h1>Learn about redux toolkit </h1> 
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
