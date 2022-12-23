import React from "react";
import Resume from "../../res/SidhantPuntambekarResumeSpring23.pdf";

const About = () => {
  const style = {
    alignItems: "center",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const buttonStyle = {
    backgroundColor: "#EEA47FFF",
    border: "none",
    color: "black",
    padding: "10px",
    textAlign: "center",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
    borderRadius: "8px",
    marginTop: "20px",
    marginBottom: "20px",
    fontWeight: 800
  };

  return (
    <div style={style}>
      <h2>About Me</h2>
      <div>
        <h3 style={{ margin: "20px" }}>
          Welcome to my portfolio website! My name is Sidhant Puntambekar and I
          am currently a senior undergraduate at the University of Colorado
          Boulder.  
        </h3>
        <h3 style={{ margin: "20px" }}>
          I am majoring in Computer Science and minoring
          in Computational Biology as well as Molecular, Cellular, and Developmental Biology. 
        </h3>
        <h3 style={{ margin: "20px" }}>
          While my main passions are Computer Science
          and Molecular Biology, I am infatuated with learning about all subject
          areas. Some of my other favorite activities are chess, reading up on
          military history, playing electric guitar, and doing Tae
          Kwon Do. I also enjoy listening to music and watching movies.
        </h3>
          
        <a href={Resume} without rel="noopener noreferrer" target="_blank">
          <button
            trailingIcon="picture_as_pdf"
            label="Resume"
            style={buttonStyle}
          >
            View Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
