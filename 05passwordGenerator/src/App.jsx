import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [pswd, setpswd] = useState("");

  const password = useRef(null)

  const copyPasswordToClipboard = useCallback(()=>{
    //selection the total text which is copied
    password.current?.select()
    //selecting in only given range
    // password.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password.current.value)
  },[password])


  //useCallback used for memoizing it stores values in cache memory and updates if there are any new updates
  const pswdGenerator = useCallback(() => {
    let pswd = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (charAllowed) str += "!@#$%&'()*+,-./:;<=>?@[]^_`{|}~€";
    if (numberAllowed) str += "0123456789";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pswd += str.charAt(char);
    }
    setpswd(pswd);
  }, [length, numberAllowed, charAllowed, setpswd]);


  //WHEN WE WANT A METHOD TO USE MULTIPLE TIMES WE USE useEffect HOOK
  useEffect(() => {
    pswdGenerator();
  }, [length, numberAllowed, charAllowed, pswdGenerator]);

  return (
    <>
      <div className="max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-center text-orange-500 bg-gray-700">
        <h1 className="text-white text-2xl p-4 my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden p-4">
          <input
            readOnly
            type="text"
            value={pswd}
            placeholder="Password"
            className=" rounded-xl outline-none w-full py-1 px-3"
            ref={password}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none rounded-lg bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div> 

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
            {/* </div>
            <div className="flex items-center gap-x-1"> */}
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />  
            <label htmlFor="numberInput">Numbers</label>
            {/* </div> */}
            {/* <div className="flex items-center gap-x-1"> */}
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}
export default App
