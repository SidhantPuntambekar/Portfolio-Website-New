import React from "react";
import { useState } from "react";
import "./index.css";
import Header from "./components/pages/Header.js";
import About from "./components/pages/About.js";
import Education from "./components/pages/Education.js";
import Experiences from "./components/pages/Experience.js";
import Projects from "./components/pages/Projects.js";
import Blog from "./components/pages/Blog.js";
import Carousel from "./components/Carousel.js";
import Travel from "./components/Travel.js"
//import Footer from "./components/pages/Footer.js";
//import Popup from "./components/Popup.js";

function App(props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [popupIndex, setPopupIndex] = useState("");

  const style = {
    marginLeft: "10%",
    marginRight: "10%",
  };

  return (
    <div className="container">
      <Header />
      <div style={style}>
        <About />
        <Education />
        <Experiences />
        <Projects trigger = {buttonPopup} setTrigger = {setButtonPopup} index = {popupIndex} setIndex = {setPopupIndex}/>
        <Blog />
        <Travel />
        <Carousel />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
