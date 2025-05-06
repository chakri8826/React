import React from "react";
import ReactDOM from "react-dom/client"; // ✅ use 'react-dom/client'
import App from "./App"; // or Gallery if that's your root component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
  