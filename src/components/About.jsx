import React from "react";
import { FiUser } from "react-icons/fi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="about-icon">
          <FiUser size={36} className="teal-dark-icon" />
        </div>
        <div className="about-body">
          <div className="eyebrow">Get to know me</div>
          <h2 style={{ marginBottom: "18px" }}>About Me</h2>
          <p>
            Result-oriented Fullstack Developer with comprehensive knowledge in
            building responsive, scalable end-to-end web applications.
            Proficient across modern frontend and backend environments including
            React, Node.js, and Express.
          </p>
          <p>
            Expert at leveraging advanced AI-assisted engineering tools to
            achieve highly optimized code quality, clean architecture, and rapid
            feature implementation.
          </p>
          <p>
            I have strong problem-solving capabilities, an analytical mindset,
            and an adaptable approach optimized for fast-paced, collaborative
            technical teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
