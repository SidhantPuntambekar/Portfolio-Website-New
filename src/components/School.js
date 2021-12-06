import React from "react";

const School = ({ school }) => {
  var image = require(`../img/${school.imgFileName}`);

  const educationStyle = {
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
    paddingLeft: "30px"
  };

  return (
    <div style={educationStyle}>
      <div style={leftMargin}>
        <h1>{school.name}</h1>

        <h3>{school.descriptor1}</h3>
        <h3>{school.descriptor2}</h3>
      </div>

      <div style={rightMargin}>
        <img
          src={image.default}
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            maxHeight: school.imgSize,
          }}
          alt={school.name}
        />
      </div>
    </div>
  );
};

export default School;
