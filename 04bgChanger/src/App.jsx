import {useState} from "react"
function App() {
  const [color, setColor] = useState("purple")
  let colorChange = (color)=>{
    setColor(color)
  }
      // <div className="w-full h-screen duration-200"nstyle={{backgroundColor: color}}>
      // <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      //   <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      //     <button
      //     onClick={() => setColor("red")}
      //     className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      //     style={{backgroundColor: "red"}}
      //     >Red</button>

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="hover:bg-red-700 bg-red-600 outline-none px-4 py-1 rounded-full text-white shadow-lg"
            // style={{ background: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("black")}
            className="hover:bg-gray-700 bg-black outline-none px-4 py-1 rounded-full text-white shadow-lg"
            // style={{ background: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("blue")}
            className="hover:bg-blue-800 bg-blue-700 outline-none px-4 py-1 rounded-full text-white shadow-lg"
            // style={{ background: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="hover:bg-green-700 bg-green-800 outline-none px-4 py-1 rounded-full text-white shadow-lg"
            // style={{ background: "Green" }}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}
export default App