import "./index.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Reflections from "./pages/Reflections";
import ProjectShowcase from "./components/ProjectShowcase";

const App = () => {
  return (
    <>
      <div className="bg-black w-full flex-col pt-20 px-2">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<ProjectShowcase />} />
          <Route path="/blog" element={<Reflections />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
