import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "helo-ecosystem",
      company: "Helo.ai",
      desc: "A comprehensive ecosystem platform built for Helo.ai to manage various AI-driven workflows.",
      tags: ["React", "Next.js", "TypeScript"]
    },
    {
      title: "Helo-library",
      company: "Helo.ai",
      desc: "A robust, reusable component library used across multiple Helo.ai applications to maintain design consistency.",
      tags: ["React", "Storybook", "CSS Modules"]
    },
    {
      title: "E-KYC",
      company: "Bajaj Broking",
      desc: "Built a remote identity-verification platform for financial institutions supporting Aadhaar, PAN and Passport document submission with real-time automated validation via API integrations. Reduced manual intervention and improved onboarding speed, fraud prevention and compliance.",
      tags: ["React.js", "REST APIs", "HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://ekyc.bajajfinservsecurities.in"
    },
    {
      title: "E-KYC 3.0",
      company: "Bajaj Broking",
      desc: "Built a remote identity-verification platform for financial institutions supporting Aadhaar, PAN and Passport document submission with real-time automated validation via API integrations. Reduced manual intervention and improved onboarding speed, fraud prevention and compliance.",
      tags: ["React.js", "Vite", "REST APIs", "SCSS", "JavaScript"],
      liveUrl: "https://ekyc.bajajfinservsecurities.in"
    },
    {
      title: "AI-Cursor Code Telecaller",
      company: "Bajaj Broking",
      desc: "Developed a frontend solution integrating telecaller assistance for E-KYC onboarding, providing real-time support during onboarding and helping reduce friction in the customer experience.",
      tags: ["React", "SCSS", "Bootstrap", "Axios"],
      liveUrl: "https://cosmos.bajajfinservsecurities.in"
    },
    {
      title: "RM Portal",
      company: "Bajaj Broking",
      desc: "Contributed to a Risk Management Portal providing tools for risk assessment, tracking and reporting.",
      tags: ["React", "SCSS", "Ant-Design", "REST API"],
      liveUrl: "https://cosmos.bajajfinservsecurities.in"
    },
    {
      title: "IAM",
      company: "Bajaj Broking",
      desc: "Developed and optimized an Identity and Access Management system for managing user roles, permissions and authentication with a focus on security.",
      tags: ["React.js", "REST APIs", "HTML5", "CSS3", "TypeScript"],
      liveUrl: "https://iam.bajajfinservsecurities.in"
    },
    {
      title: "Trading Portal (BFSL Trading Application)",
      company: "Bajaj Broking",
      desc: "Built a responsive, user-friendly trading portal displaying real-time stock market data with dynamic charts, live market updates and portfolio management. Implemented secure user authentication and integrated RESTful APIs with Redux for efficient state management.",
      tags: ["React.js", "Redux", "REST APIs", "HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://bfsltrade.bajajfinservsecurities.in/base/login"
    },
    {
      title: "HNI-ekyc",
      company: "Bajaj Broking",
      desc: "Specialized KYC flow tailored for High Net-worth Individuals with custom verification steps.",
      tags: ["React", "Formik", "API Integration"]
    }
  ];

  return (
    <section id="projects" className="projects section container">
      <div className="section-header">
        <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
        <div className="section-line"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card glass-panel">
            <div className="project-content">
              <span className="project-company">{project.company}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-links">
              <a href="#" className="project-link" aria-label="View Source">
                <FaGithub size={20} />
              </a>
              <a
                href={project.liveUrl || "#"}
                className="project-link"
                aria-label="Live Demo"
                target={project.liveUrl ? "_blank" : undefined}
                rel={project.liveUrl ? "noopener noreferrer" : undefined}
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
