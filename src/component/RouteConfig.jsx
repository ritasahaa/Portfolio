import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import HireMe from "./HireMe";
import Experience from "./Experience";
import Education from "./Education";
import Resume from "./Resume";
import ParticleEffect from './ParticleEffect';




const HomeWithNavbar = () => (

    <>
      <Navbar />
      <About />
      <ParticleEffect />

      <Skills />
      <Projects />
      <HireMe/>
      <Experience/>
      <Education />
    </>
)
  
  const ResumeWithNavbar = () => (
    <>
      <Navbar />
      <Resume />
    </>
  );

const RouteConfig = () => {
    return (
        <BrowserRouter>
        <Routes>
          {/* Route for the main page */}
          <Route path="/" element={<HomeWithNavbar />} />
          
          {/* Route for the "/resume" page */}
          <Route path="/resume" element={<ResumeWithNavbar />} />
        </Routes>
      </BrowserRouter>

    )
}

export default RouteConfig