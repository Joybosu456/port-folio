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
      desc: "Worked on the development of an Electronic Know Your Customer (EKYC) onboarding platform, designed to streamline the customer verification process for financial services. The platform aimed to offer a secure, user-friendly experience for customers to complete their KYC requirements online, improving efficiency and compliance with regulatory standards.",
      tags: ["React", "SCSS", "Bootstrap", "Axios"]
    },
    {
      title: "E-KYC 3.0",
      company: "Bajaj Broking",
      desc: "Worked on the development of an Electronic Know Your Customer (EKYC) onboarding platform, designed to streamline the customer verification process for financial services. The platform aimed to offer a secure, user-friendly experience for customers to complete their KYC requirements online, improving efficiency and compliance with regulatory standards.",
      tags: ["React(ViteJS)", "SCSS", "Hooks", "Bootstrap", "Axios"]
    },
    {
      title: "Telecaller Dashboard",
      company: "Bajaj Broking",
      desc: "Developed a frontend solution to enhance the EKYC onboarding process by integrating a telecaller support system. Designed and implemented a dedicated dashboard for telecallers using React.js. The dashboard included features for monitoring ongoing onboarding processes, viewing client statuses, and accessing real-time issue reports, allowing instant support.",
      tags: ["React", "SCSS", "Bootstrap", "Axios"]
    },
    {
      title: "RM Portal",
      company: "Bajaj Broking",
      desc: "Contributed to the development of a Risk Management Portal, providing tools for risk assessment, tracking, and reporting. The project aimed to address issues faced by clients during onboarding and enable telecallers to provide real-time assistance, thereby improving the overall customer experience and reducing onboarding friction.",
      tags: ["React", "SCSS", "Ant-Design", "REST API"]
    },
    {
      title: "IAM",
      company: "Bajaj Broking",
      desc: "Developed and optimized an IAM system for managing user roles, permissions, and authentication with a focus on security and user management.",
      tags: ["Vite", "SCSS", "Recoil"]
    },
    {
      title: "cosmos",
      company: "Bajaj Broking",
      desc: "An internal administrative dashboard for managing client portfolios and market data tracking.",
      tags: ["React", "Charts.js", "SCSS"]
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
              <a href="#" className="project-link" aria-label="Live Demo">
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
