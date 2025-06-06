import React from "react";

const Experience = ({ experience }) => {
  const image = require(`../img/${experience.imgFileName}`);

  const experienceStyle = {
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

  const leftColumn = {
    flex: "1 1 70%",
    paddingRight: "15%",
    minWidth: "250px",
  };

  const rightColumn = {
    flex: "0 0 auto",
    paddingTop: "10px",
  };

  const imageStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    maxHeight: experience.imgSize,
    maxWidth: "120px",
  };

  return (
    <div style={experienceStyle}>
      <div style={leftColumn}>
        <h1 style={{ margin: 0 }}>{experience.organization}</h1>
        <h3 style={{ marginTop: "10px" }}>{experience.role}</h3>

        {experience.bullets.map((pt, i) => (
          <h4 key={i} style={{ lineHeight: "1.5", marginTop: "10px" }}>
            {pt}
          </h4>
        ))}
      </div>

      <div style={rightColumn}>
        <a href={experience.website} target="_blank" rel="noopener noreferrer">
          <img
            src={image.default}
            alt={experience.organization}
            style={imageStyle}
          />
        </a>
      </div>
    </div>
  );
};

export default Experience;
