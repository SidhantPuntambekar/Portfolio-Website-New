import React, { useState } from "react";
import "./index.css";
import Header from "./components/pages/Header.js";
import About from "./components/pages/About.js";
import Education from "./components/pages/Education.js";
import Experiences from "./components/pages/Experience.js";
import Projects from "./components/pages/Projects.js";
import Blog from "./components/pages/Blog.js";
import Carousel from "./components/Carousel.js";
import Travel from "./components/Travel.js";
import HistoryBlog from "./components/pages/HistoryBlog.js";
import ChessBlog from "./components/pages/ChessBlog.js";

function App(props) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [popupIndex, setPopupIndex] = useState("");
  const [currentPage, setCurrentPage] = useState("home");

  const style = {
    marginLeft: "10%",
    marginRight: "10%",
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <About />
            <Education />
            <Experiences />
            <Projects />
            <Blog setCurrentPage={setCurrentPage} />
            <Travel />
            <Carousel />
          </>
        );
      case "history":
        return <HistoryBlog setCurrentPage={setCurrentPage} />;
      case "chess":
        return <ChessBlog setCurrentPage={setCurrentPage} />;
      default:
        return <h1>404 Not Found</h1>;
    }
  };

  return (
    <div>
      <Header />
      <div style={style}>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;