import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Chak from "./Chakri.jsx"
import React from "react";

// function MyApp(){
//   return (
//     <h1>Function in main.jsx</h1>
//   )
// }

//this wont work bcoz react expects props in another way
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };


//GIVING DIRECTLY IT WORKS
// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit
//   Google</a>
// )


//GIVING DIRECTLY PROPS AS THE WAY HOW REACT EXPECTS THEM
const anotherUser = " ChakradharK"
const reactElement =React.createElement(
  'a',
  { href:"https://google.com", target: "_blank" },
  "Click me to visit Google",
  anotherUser
);
createRoot(document.getElementById("root")).render(
  // <>
    reactElement
    // anotherElement
    //  reactElement   --> it does not work bcoz actually react may derive tree in another manner*/
    // <MyApp /> 
    // <App />
    // <Chak /> 
  // </>
); 





