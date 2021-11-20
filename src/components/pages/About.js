import React from "react";
import Resume from "../../res/SidhantPuntambekarResume.pdf";

const About = () => {
  const style = {
    alignItems: "center",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const buttonStyle = {
    backgroundColor: "blue",
    border: "none",
    color: "white",
    padding: "10px",
    textAlign: "center",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
    borderRadius: "8px",
    marginBottom: "20px",
  };

  return (
    <div style={style}>
      <h2>About Me</h2>
      <div stlye={{ float: "right" }}>
        <h4 stlye={{ marginBottom: "25px" }}>
          Welcome to my portfolio website! My name is Sidhant Puntambekar and I
          am currently a sophomore undergraduate at the University of Colorado,
          Boulder. I am currently majoring in Computer Science and plan to minor
          in Molecular, Cellular, and Developmental Biology and Computational
          Biology. While my main passions are in the areas of Computer Science
          and Molecular Biology, I am infatuated with learning about all subject
          areas. Some of my other favorite activities are chess, reading up on
          military history, playing the guitar, playing the drums, and doing Tae
          Kwon Do. I also enjoy listening to music and watching movies.
        </h4>
        <a href={Resume} without rel="noopener noreferrer" target="_blank">
          <button
            trailingIcon="picture_as_pdf"
            label="Resume"
            style={buttonStyle}
          >
            Click this button to view my Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
