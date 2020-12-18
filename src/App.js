import React from "react";
import MouseParticles from "react-mouse-particles";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

import './App.css';
import './App.scss';
import Navbar from "./components/Navbar";






function App() {
  
  
  return (
    <>
   
  <Navbar />
 
  <MouseParticles
          g={1}
          color="random"
          cull="MuiSvgIcon-root,MuiButton-root"
          level={6}
        />
 
  <LandingPage />
    
    <Footer />
  </>
);
}

export default App;
