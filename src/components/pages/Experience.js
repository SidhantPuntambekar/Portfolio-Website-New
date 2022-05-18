import React from "react";
import data from "../../res/info.json";
import Experience from "../Experience.js";

const Experiences = () => {
  const experience = data.experiences;
  const style = {
    alignItems: "center",
    textAlign: "center",
    position: "relative"
  };

  return (
    <div style={style}>
      <h2>Experience</h2>
      {experience.map((experience, x) => (
        <Experience
          experience = {experience}
          currentIndex = {x}
          length = {experience.length}
        />
      ))}
    </div>
  );
};

export default Experiences;
