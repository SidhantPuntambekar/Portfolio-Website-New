import React from "react";

const Experience = ({ experience, currentIndex, length }) => {
  var image = require(`../img/${experience.imgFileName}`);

  const experienceStyle = {
    height: "150px",
    width: "100%",
    color: "white",
    textAlign: "left",
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const leftMargin = {
    float: "left",
    width: "90%",
    margin: "auto",
    display: "block",
  };

  const rightMargin = {
    float: "right",
    width: "10%",
    paddingTop: "10px",
  };

  return (
    <div style={experienceStyle}>
      <div style={leftMargin}>
        <h1>{experience.organization}</h1>
        <h3>{experience.role}</h3>

        {experience.bullets.map((pt, x) => (
          <>
            <h4>{pt}</h4>
            <br></br>
          </>
        ))}
      </div>

      <div style={rightMargin}>
        <img
          src={image.default}
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            maxHeight: experience.imgSize,
          }}
          alt={experience.organization}
        />
      </div>
    </div>
  );
};

export default Experience;
