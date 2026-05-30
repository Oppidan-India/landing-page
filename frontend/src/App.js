import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Internship from "./components/Internship.js";
import Contact from "./components/Contact";

function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/internship" element={<Internship />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;