import React from "react";
import {
    FaRegEnvelope,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaReddit,
  } from "react-icons/fa"

const Header = () => {
  const image = require("../../img/me.jpg");

  const iconStyle = { color: "white", fontSize: "1.5em", margin: 10 }
  return (
    <div className="jumbotron">
      <div className="jumbotron-text">
        <img className="center_circle_image" src={image.default} />
        <h1>Hello!</h1>
        <h2>I'm Sidhant Puntambekar</h2>
        <h3>Computer Scientist | Computational Biologist</h3>
        <a className="social" href="mailto:sidhantnp@yahoo.com">
                <FaRegEnvelope style={iconStyle} />   
        </a>
        <a
              className="social"
              href="https://github.com/SidhantPuntambekar"
              target="_blank"
              rel="noreferrer"
            >
                <FaGithub style={iconStyle}/>
        </a>
        <a
              className="social"
              href="https://www.linkedin.com/in/sidhant-puntambekar/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin style={iconStyle}/>
            </a>
        <a
            className="social"
            href="https://www.instagram.com/sidhantnp"
            target="_blank"
            rel="noreferrer"
        >
            <FaInstagram style={iconStyle}/>
        </a>
        <a
            className="social"
            href="https://twitter.com/sidhantnp"
            target="_blank"
            rel="noreferrer"
        >
            <FaTwitter style={iconStyle}/>
        </a>
        <a
            className="social"
            href="https://www.reddit.com/user/XLongshotz68"
            target="_blank"
            rel="noreferrer"
        >
            <FaReddit  style={iconStyle}/>
        </a>
      </div>
    </div>
  );
};

export default Header;
