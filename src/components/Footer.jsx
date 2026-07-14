import React from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <h2>Let's Connect</h2>
            <p className="footer-lede">
              I'm open to new opportunities and interesting projects. Feel free
              to reach out!
            </p>
            <a
              href="mailto:tal000018@gmail.com"
              className="btn btn-primary btn-sm"
            >
              Contact Me{" "}
              <FiMail
                size={14}
                style={{ marginLeft: "6px", display: "inline" }}
              />
            </a>
          </div>

          <div className="footer-col">
            <h4>Reach me</h4>
            <ul>
              <li>
                <FiMail size={16} className="teal-icon" />{" "}
                <a href="mailto:tal000018@gmail.com">tal000018@gmail.com</a>
              </li>
              <li>
                <FiPhone size={16} className="teal-icon" />{" "}
                <a href="tel:0507954707">050-7954707</a>
              </li>
              <li>
                <FiMapPin size={16} className="teal-icon" /> Israel
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Elsewhere</h4>
            <ul>
              <li>
                <FiGithub size={16} className="teal-icon" />
                <a
                  href="https://github.com/talchekol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/talchekol
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 Tal Chekol. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
