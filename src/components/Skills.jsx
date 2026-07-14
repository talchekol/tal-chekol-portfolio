import React from "react";
import { FiCode, FiDatabase, FiTool, FiCpu } from "react-icons/fi";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FiCode size={22} />,
      isTeal: false,
      items: [
        "React",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Responsive Web Design",
      ],
    },
    {
      title: "Backend & DB",
      icon: <FiDatabase size={22} />,
      isTeal: true,
      items: [
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "RESTful API Integration",
        "Google cloud",
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <FiTool size={22} />,
      isTeal: false,
      items: ["Git", "GitHub", "Postman", "Figma", "Vercel"],
    },
    {
      title: "AI Engineering",
      icon: <FiCpu size={22} />,
      isTeal: true,
      items: [
        "ChatGPT",
        "Claude",
        "Gemini",
        "Prompt engineering & code optimization",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">What I work with</div>
          <h2>Technical Skills</h2>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>
              <div className={`skill-icon ${category.isTeal ? "teal" : ""}`}>
                {category.icon}
              </div>
              <h3>{category.title}</h3>
              <ul>
                {category.items.map((skill, sIndex) => (
                  <li key={sIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
