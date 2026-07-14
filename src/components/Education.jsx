import React from "react";
import { FiBook } from "react-icons/fi";

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="wrap">
        <div className="education-left">
          <div className="edu-icon">
            <FiBook size={28} className="teal-dark-icon" />
          </div>
          <div>
            <h3>Education</h3>
            <div className="edu-detail">
              Fullstack Web Development Certification — TripleTen College
            </div>
          </div>
        </div>
        <div className="edu-year">Graduated 2026 </div>
      </div>
    </section>
  );
};

export default Education;
