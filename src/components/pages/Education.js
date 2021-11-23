import React from "react";
import data from "../../res/info.json"
import School from "../School.js";

const Education = () => {
  const education = data.schools;
  const style = {
    alignItems: "center",
    textAlign: "center",
  };

  return (
    <div style={style}>
      <h2>Education</h2>
      {education.map((school, x) => (
        <School school={school} />
      ))}
    </div>
  );
};

export default Education;
