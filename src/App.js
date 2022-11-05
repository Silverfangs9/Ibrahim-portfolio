import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import Contact from "./components/contact";
import Navbar from "./components/Navbar/navbar.compnents";
import Project from "./components/project/project.compnent";

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
};

export default App;
