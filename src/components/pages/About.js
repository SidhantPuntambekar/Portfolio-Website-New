import { color } from "@mui/system";
import React from "react";
import Resume from "../../res/SidhantPuntambekarResume2024-2025.pdf";

const About = () => {
  const style = {
    alignItems: "center",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const textStyle = {
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
        <h2 style={{ alignItems: "center"}}>About Me</h2>
      </div>
      
      <div style={textStyle}>
      <div>
        <h4 style={{ margin: "20px", lineHeight: "1.5" }}>
          👋 Hello! My name is Sidhant Puntambekar. Welcome to my corner of the internet!
        </h4>
        <h4 style={{ margin: "20px", lineHeight: "1.5" }}>
          Academically, I find computer science and molecular biology to not only be extremely fascinating as separate disciplines, but also tremendously interconnected as novel algorithms and computational workflows are needed to make sense of increasingly complex and unstructured biological data.     
        </h4>
        <h4 h4 style={{ margin: "20px", lineHeight: "1.5" }}>
        While I mainly spend most of my time working and researching at the intersection of these two fields, I also enjoy learning about all sorts of topics in science, technology, engineering, math, history, and geography.
        </h4>
        <h4 style={{ margin: "20px", lineHeight: "1.5"}}>
          Currently, I am employed as a bioinformatician and software developer at Boston Children's Hospital in Boston, Massachusetts.
          Although I call Boston home for the moment, I am originally from Boulder, Colorado and have previously lived in San Diego, California.
        </h4>
        <h4 style={{ margin: "20px", lineHeight: "1.5" }} class="text-red-500">
          I also have a wide variety of hobbies that I pursue in my spare time; I enjoy playing chess and studying games of the past to improve my own skills, playing musical instruments including the electric guitar and piano, 
          reading about various military history topics, learning languages such as Spanish and German, running, travelling around the world, and following Denver area sports teams (such as the <span style={{color: "orange"}}>Broncos</span>, <span style={{color: "yellow"}}>Nuggets</span>, <span style={{color: "#FF2400"}}>Avalanche</span>, and <span style={{color: "#C0C0C0"}}>Rockies</span>).
          Recently, I started following Formula 1 racing.
        </h4>
        <h4 style={{ margin: "20px",  }} >You can often find me listening to rock music, hiking, watching classic movies and TV shows, and exploring Boston on the weekends.</h4>
      </div>
    </div>
    <div style={style}>
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
