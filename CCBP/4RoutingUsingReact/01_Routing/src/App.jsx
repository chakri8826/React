import {BrowserRouter,Route} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import { Routes } from "react-router-dom";
const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/contact" Component={Contact} />
      <Route path="*" Component={NotFound} />
    </Routes>
  </BrowserRouter>
);

export default App; 