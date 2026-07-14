import React from "react";
import { FiMapPin, FiPhone, FiMail, FiGithub } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div>
          <div className="eyebrow">Fullstack Developer</div>
          <h1>
            Tal <span className="accent">Chekol</span>
          </h1>
          <h1>
            I Design, code, and Deploy.
            <span className="accent">Seamlessly.</span>
          </h1>

          <p className="lede">
            Transforming complex concepts into high-performance web apps,
            bridging the gap between pixel-perfect React interfaces and robust
            backends.
          </p>
          <ul className="hero-meta">
            <li>
              <FiMapPin size={16} className="teal-icon" /> Israel
            </li>
            <li>
              <FiPhone size={16} className="teal-icon" /> 050-7954707
            </li>
            <li>
              <FiMail size={16} className="teal-icon" /> tal000018@gmail.com
            </li>
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
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects &rarr;
            </a>
            <a href="#contact" class="btn btn-outline-dark">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="avatar-mark">TC</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
