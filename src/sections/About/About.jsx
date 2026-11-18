import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './About.css';

const About = () => {
  const skills = [
    "ReactJs", "NextJs", "JavaScript", "TypeScript", 
    "HTML5", "CSS3", "SASS", "SCSS", 
    "Tailwind CSS", "BootStrap", "Material UI", 
    "ViteJs", "Jest (unit testing)", "Gitlab", 
    "FileZilla", "Performance Optimization", 
    "Code splitting", ".Net(Basic)", "AI-Cursor", "Antigravity"
  ];

  return (
    <section id="about" className="about section container">
      <div className="section-header">
        <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
        <div className="section-line"></div>
      </div>
      
      <div className="about-content">
        <div className="about-text glass-panel">
          <p>
            I am a passionate <strong>Frontend Developer</strong> based in Gangnapur, Nadia. 
            With over <strong>4.5 years of experience</strong>, I specialize in building responsive, high-performance, and visually stunning web applications.
          </p>
          <p>
            My journey has led me to work with amazing companies like Helo.ai, Bajaj Broking Ltd, and BridgeLabze Solution Ltd. 
            I love tackling complex problems and turning them into intuitive, user-friendly interfaces.
          </p>
          <div className="about-socials">
            <a
              href="https://github.com/Joybosu456"
              className="about-social-link"
              aria-label="GitHub"
              title="https://github.com/Joybosu456"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/joy-web-developer/"
              className="about-social-link"
              aria-label="LinkedIn"
              title="https://www.linkedin.com/in/joy-web-developer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://wa.me/916296582055"
              className="about-social-link"
              aria-label="WhatsApp"
              title="https://wa.me/916296582055"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>
        
        <div className="skills-container">
          <h3 className="skills-title">My Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-badge glass-panel">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
