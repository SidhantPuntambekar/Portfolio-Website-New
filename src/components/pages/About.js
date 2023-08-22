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
    <div className="container-about">
      <div style={style}>
      <h2>About Me</h2>
      <div>
        <h4 style={{ margin: "20px" }}>
          Welcome to my portfolio website! My name is Sidhant Puntambekar and I
          am currently a Bioinformatics Analyst at Bionano Genomics in San Diego, California.  
        </h4>
        <h4 style={{ margin: "20px" }}>
          While my main passions are Computer Science
          and Molecular Biology, I am infatuated with learning about all subject
          areas. Some of my favorite hobbies are playing chess, playing electric guitar, reading up on
          military history, and doing Tae Kwon Do. I also enjoy listening to music and watching movies.
        </h4>
          
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
    </div>
  );
};

export default About;
