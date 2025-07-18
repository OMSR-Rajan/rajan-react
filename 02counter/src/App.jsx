import React, { useState } from 'react'
import './App.css'

function App() {
  
  // let counter = 0;
 let [counter, setCounter] = useState(0);


  const addValue = () => {
    console.log("Value Added",counter);
    setCounter (counter++);
    
  }
  const removeValue = () => {
    setCounter(counter--);
  }
  return (
    <>
     <h1>Welcome to Code Journey </h1>
    

     <button onClick={addValue} >Add Value</button>

     
     <br /> 
      <h2>Counter Value = {counter}</h2>
      <br />

     <button onClick={removeValue}>Remove Value </button>

    </>
  )
}

export default App
