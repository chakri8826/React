import { useState } from 'react'
import './App.css'
import {useCurrencyInfo} from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'

function App() {
  const [amt,setAmt] = useState(0)
  const [convertedAmt,setConvertedAmt] = useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  
  const swap=()=>{
    setFrom((from)=>to)
    setTo((to)=>from)
    setConvertedAmt(amt)
    setAmt(convertedAmt)
  }
  
  const currInfo = useCurrencyInfo(from)
  let options = Object.keys(currInfo)
  const convert = ()=>{
    setConvertedAmt(amt * currInfo[to]);
  }

  

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/26690662/pexels-photo-26690662/free-photo-of-interior-of-an-ice-cave.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amt={amt}
                onAmtChange={(amt) => {
                  setAmt(amt);
                }}
                options={options}
                setCurr={from}
                onCurrChange={(curr) => {
                  setFrom(curr);
                }}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                onClick={() => swap()}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amt={convertedAmt}
                onAmtChange={(amt) => {
                  setAmt(amt);
                }}
                options={options}
                setCurr={to}
                onCurrChange={(curr) => {
                  setTo(curr);
                }}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
