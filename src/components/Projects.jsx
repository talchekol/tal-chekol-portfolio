import React from "react";

const featuredProject = {
  title: "Booking App",
  tag: "Multi-Tenant SaaS Platform",
  desc: "A production-grade appointment booking platform for service businesses such as barbershops and salons. Every business gets its own public booking page, admin dashboard, staff, services and clients, all fully isolated on a shared backend and database.",
  highlights: [
    "Multi-tenant architecture with row-level data isolation per business",
    "Passwordless SMS login via Twilio Verify OTP, with rate limiting",
    "JWT auth with sliding session refresh and live role re-validation",
    "Admin panel for services, staff, blocked days, broadcasts and appointment swaps",
  ],
  stack: [
    "React",
    "Tailwind CSS",
    "React Router",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma",
    "JWT",
    "Twilio",
    "Vercel",
    "Render",
    "Neon",
  ],
  frontendCode: "https://github.com/talchekol/booking-app-frontend",
  backendCode: "https://github.com/talchekol/booking-app-backend",
  demoLink: "https://booking-app-frontend-red.vercel.app/",
  image: "/booking-app-client.png",
};

const projectList = [
  {
    title: "Doli Crypto",
    tag: "Fullstack Web Application",
    desc: "An innovative crypto-tracking platform or application showcasing specialized decentralized data handling and clean user dashboard flows.",
    stack: ["React", "CSS", "Node.js", "Express", "MongoDB", "Vercel"],
    frontendCode: "https://github.com/talchekol/DoliCrypto/tree/main/frontend",
    backendCode: "https://github.com/talchekol/DoliCrypto-Backend",
    demoLink: "https://doli-crypto.vercel.app/home",
    image: "/DoliCrypto-image.png",
  },
  {
    title: "What To Wear",
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
    tag: "Responsive Frontend Application",
    desc: "An interactive image-sharing platform built with JavaScript, HTML5 and CSS3. Fully responsive and pixel-perfect from desktop to mobile.",
    stack: ["JavaScript", "HTML5", "CSS3"],
    codeLink: "https://github.com/talchekol/se_project_aroundtheus",
    demoLink: "https://talchekol.github.io/se_project_aroundtheus/",
    image: "/aroundtheus-image.png",
  },
];

const ProjectActions = ({ project }) => (
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
);

const StackPills = ({ stack }) => (
  <div className="stack-pills">
    {stack.map((tech, tIndex) => (
      <span key={tIndex}>{tech}</span>
    ))}
  </div>
);

const Projects = () => {
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

        {/* הפרויקט הראשי - כרטיס רחב לבד למעלה */}
        <div className="project-card project-featured">
          <div className="project-thumb">
            <img
              src={featuredProject.image}
              alt={`${featuredProject.title} Preview`}
            />
          </div>
          <div className="project-body">
            <span className="project-badge">&#9733; Main Project</span>
            <span className="project-tag">{featuredProject.tag}</span>
            <h3>{featuredProject.title}</h3>
            <p>{featuredProject.desc}</p>
            <ul className="project-highlights">
              {featuredProject.highlights.map((item, hIndex) => (
                <li key={hIndex}>{item}</li>
              ))}
            </ul>
            <StackPills stack={featuredProject.stack} />
            <ProjectActions project={featuredProject} />
          </div>
        </div>

        {/* פרויקטים משניים - שורה אחת למטה */}
        <div className="project-grid project-grid-secondary">
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
                <h4 className="project-subtitle">Learning Project</h4>
                <p>{project.desc}</p>
                <StackPills stack={project.stack} />
                <ProjectActions project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
