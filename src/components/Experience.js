import React from "react";

const Experience = ({ experience }) => {
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
        <h1>{experience.name}</h1>

        <h3>{experience.descriptor1}</h3>
        <h3>{experience.descriptor2}</h3>
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
          alt={experience.name}
        />
      </div>
    </div>
  );
};

export default Experience;
