import React from "react";

const Header = () => {
  const image = require("../../img/me.jpg");

  return (
    <div className="jumbotron">
      <div className="jumbotron-text">
        <img className="center_circle_image" src={image.default} />
        <h1>Hi!</h1>
        <h2>I'm Sidhant Puntambekar</h2>
        <p>Computer Scientist | Computational Biologist</p>
      </div>

      <div className="jumbotron-social">
        <ul className="ul-social">
          <li className="li-social-links">
            <a className="social" href="mailto:sidhantnp@yahoo.com">
              <i class="fa fa-RegEnvelope" aria-hidden="true"></i>
            </a>
          </li>
          <li className="li-social-links">
            <a
              className="social"
              href="https://github.com/SidhantPuntambekar"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li className="li-social-links">
            <a
              className="social"
              href="https://www.linkedin.com/in/sidhant-puntambekar/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li className="li-social-links">
            <a
              className="social"
              href="https://www.instagram.com/sidhantnp"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li className="li-social-links">
            <a
              className="social"
              href="https://twitter.com/sidhantnp"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li className="li-social-links">
            <a
              className="social"
              href="https://www.reddit.com/user/XLongshotz68"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa fa-reddit" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
