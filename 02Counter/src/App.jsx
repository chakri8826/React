import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(0);
  //cant update in UI
  // let counter=0;
  let addVal = ()=>{
    // counter++;
    setCounter(counter+1);
    if(counter===20){
      setCounter(0)
    }
    console.log("Hii ra "+counter);
  }

  let removeVal = ()=>{
    setCounter(counter-1);
    if(counter===0){
      setCounter(0);
    }
    console.log("Bye ra"+counter);
  }
  return (
    <>
      <h1>Chakradhar</h1>
      <h1>Counter Val: {counter}</h1>
      <button onClick={addVal}>Increment</button>
      <br />
      <br />
      <button onClick={removeVal}>Decrement</button>
    </>
  ) 
}

export default App
