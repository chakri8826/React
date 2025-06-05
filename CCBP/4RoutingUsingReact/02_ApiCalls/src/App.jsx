import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import BlogsList from "./components/BlogsList";
import NotFound from "./components/NotFound";
import BlogItemDetails from "./components/BlogItemDetails";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<BlogsList />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs/:id" element={<BlogItemDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
