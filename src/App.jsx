import "./index.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Reflections from "./pages/Reflections";

const App = () => {
  return (
    <>
      <div className="bg-black flex-col p-20">
        <Navbar className="margin-[0]" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Reflections />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
