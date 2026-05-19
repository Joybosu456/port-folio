import React from 'react';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "Helo.ai",
      role: "Frontend Developer",
      duration: "Recent",
      description: "Worked on core projects including helo-ecosystem and Helo-library. Focused on delivering high-performance UI and reusable components."
    },
    {
      company: "Bajaj Broking Ltd",
      role: "Frontend Developer",
      duration: "Previous",
      description: "Developed and maintained multiple enterprise-level applications: ekyc, cosmos, HNI-ekyc, and ekyc2.0."
    },
    {
      company: "BridgeLabze Solution Ltd",
      role: "Frontend Developer",
      duration: "Past",
      description: "Started my journey here, gaining strong foundational experience in building web applications."
    }
  ];

  return (
    <section id="experience" className="experience section container">
      <div className="section-header">
        <h2 className="section-title">Work <span className="text-gradient">Experience</span></h2>
        <div className="section-line"></div>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">
              <Briefcase size={20} />
            </div>
            <div className="timeline-content glass-panel">
              <span className="timeline-duration">{exp.duration}</span>
              <h3 className="timeline-role">{exp.role}</h3>
              <h4 className="timeline-company text-gradient">{exp.company}</h4>
              <p className="timeline-desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
