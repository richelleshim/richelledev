// import "./index.css";
// import Navbar from "./components/Navbar";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import AboutMe from "./pages/AboutMe";
// import Contact from "./pages/Contact";
// import Projects from "./pages/Projects";
// import Reflections from "./pages/Reflections";
// import ProjectShowcase from "./components/ProjectShowcase";

// const App = () => {
//   return (
//     <>
//       <div className="bg-black w-full flex-col pt-20 px-2">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/aboutme" element={<AboutMe />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/blog" element={<Reflections />} />
//         </Routes>
//       </div>
//     </>
//   );
// };

// export default App;

import "./index.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Import desktop components
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Reflections from "./pages/Reflections";

// Import mobile components
import MobileAbout from "./mobile/pages/MobileAbout";
import MobileProjects from "./mobile/pages/MobileProjects";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen width on load and resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Add event listener

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-black w-full flex-col pt-20 px-2">
      <Navbar />
      <Routes>
        {isMobile ? (
          // Mobile routes
          <>
            <Route path="/" element={<MobileAbout />} />
            <Route path="/aboutme" element={<MobileAbout />} />
            <Route path="/projects" element={<MobileProjects />} />
          </>
        ) : (
          // Desktop routes
          <>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Reflections />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
