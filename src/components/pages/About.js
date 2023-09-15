import { color } from "@mui/system";
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
        <h3 style={{ margin: "20px" }}>
          Welcome to my portfolio website!   
        </h3>
        <h3 style={{ margin: "20px" }}>
          My name is Sidhant Puntambekar and I
          am currently a Bioinformatics Analyst at Bionano Genomics in San Diego, California.
        </h3>
        <h3 style={{ margin: "20px" }}>
          While my main passions are Computer Science and Molecular Biology, I am infatuated with learning about all subject
          areas.
        </h3>
        <h3 class="text-red-500">
          Some of my hobbies include playing chess, playing electric guitar, reading up on
          military history, and following Denver area sports teams (<span style={{color: "orange"}}>Broncos</span>, <span style={{color: "yellow"}}>Nuggets</span>, <span style={{color: "#FF2400"}}>Avalanche</span>, <span style={{color: "#C0C0C0"}}>Rockies</span>).
        </h3>
        <h3>I also enjoy listening to music and watching movies.</h3>
          
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
