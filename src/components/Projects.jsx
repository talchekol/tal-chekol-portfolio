import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "Doli Crypto",
      subtitle: "PRO",
      tag: "Fullstack Web Application",
      desc: "An innovative crypto-tracking platform or application showcasing specialized decentralized data handling and clean user dashboard flows.",
      stack: ["React", "CSS", "Node.js", "Express", "MongoDB", "Vercel"],
      frontendCode:
        "https://github.com/talchekol/DoliCrypto/tree/main/frontend",
      backendCode: "https://github.com/talchekol/DoliCrypto-Backend",
      demoLink: "https://doli-crypto.vercel.app/home",
      image: "/DoliCrypto-image.png",
    },
    {
      title: "What To Wear",
      subtitle: "MID",
      tag: "Fullstack Web Application",
      desc: "A comprehensive responsive web application with a React frontend and a Node.js/Express REST API backend, using MongoDB and Mongoose for persistent data.",
      stack: ["React", "CSS", "Node.js", "Express", "MongoDB", "Google cloud"],
      frontendCode: "https://github.com/talchekol/se_project_react",
      backendCode: "https://github.com/talchekol/se_project_express",
      demoLink: "https://www.wtwr-tc.jumpingcrab.com/",
      image: "/wtwr-image.png",
    },
    {
      title: "Around The US",
      subtitle: "Begginner",
      tag: "Responsive Frontend Application",
      desc: "An interactive image-sharing platform built with JavaScript, HTML5 and CSS3. Fully responsive and pixel-perfect from desktop to mobile.",
      stack: ["JavaScript", "HTML5", "CSS3"],
      codeLink: "https://github.com/talchekol/se_project_aroundtheus",
      demoLink: "https://talchekol.github.io/se_project_aroundtheus/",
      image: "/aroundtheus-image.png",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Recent work</div>
            <h2>Featured Projects</h2>
          </div>
          <a
            href="https://github.com/talchekol"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all"
          >
            View All Projects &rarr;
          </a>
        </div>
        <div className="project-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-thumb">
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="project-body">
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                {project.subtitle && (
                  <h4 className="project-subtitle">{project.subtitle}</h4>
                )}
                <p>{project.desc}</p>
                <div className="stack-pills">
                  {project.stack.map((tech, tIndex) => (
                    <span key={tIndex}>{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.demoLink && project.demoLink !== "#" && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark btn-sm"
                    >
                      Live Demo &#8599;
                    </a>
                  )}

                  {/* אם קיימים גם קוד פרונט וגם קוד בק, נרנדר 2 כפתורים נפרדים */}
                  {project.frontendCode && project.backendCode ? (
                    <>
                      <a
                        href={project.frontendCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark btn-sm"
                      >
                        Frontend Code
                      </a>
                      <a
                        href={project.backendCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark btn-sm"
                      >
                        Backend Code
                      </a>
                    </>
                  ) : (
                    /* אחרת, אם מדובר בפרויקט קלאסי, נציג כפתור יחיד של View Code */
                    (project.codeLink || project.frontendCode) && (
                      <a
                        href={project.codeLink || project.frontendCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark btn-sm"
                      >
                        View Code
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
