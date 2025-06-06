import React from "react";

const School = ({ school }) => {
  var image = require(`../img/${school.imgFileName}`);

  const educationStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
    textAlign: "left",
    position: "relative",
    padding: "20px 0",
    gap: "20px",
    flexWrap: "wrap",
  };

  const leftStyle = {
    flex: "1 1 70%",
    paddingRight: "15%",
    minWidth: "250px",
  };

  const rightStyle = {
    flex: "0 0 auto",
    paddingTop: "10px",
  };

  const imageStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    maxHeight: school.imgSize,
    maxWidth: "120px",
  };

  return (
    <div style={educationStyle}>
      <div style={leftStyle}>
        <h1>{school.name}</h1>
        <h3>{school.descriptor1}</h3>
        <p>{school.descriptor2}</p>
        <p>{school.descriptor3}</p>
      </div>

      <div style={rightStyle}>
        <a href={school.website} target="_blank" rel="noopener noreferrer">
          <img
            src={image.default}
            style={imageStyle}
            alt={school.name}
          />
        </a>
      </div>
    </div>
  );
};

export default School;