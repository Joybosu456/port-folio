import { ArrowRight, Download } from 'lucide-react';
import resume from '../../assets/Resume (7).pdf';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero section container">
      <div className="hero-content animate-fade-in">
        <h2 className="hero-greeting">Hello, I'm</h2>
        <h1 className="hero-name text-gradient">Joy Basu</h1>
        <h3 className="hero-role">Frontend Developer</h3>
        <p className="hero-description">
          With 4.5 years of experience building dynamic, scalable, and responsive web applications.
          I specialize in creating premium digital experiences using React, Next.js, and modern CSS.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary flex-center">
            View My Work <ArrowRight size={20} className="ml-2" />
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
          <a href={resume} className="btn-secondary resume-download" download="Joy-Basu-Resume.pdf">
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glass-panel code-snippet">
          <div className="dots">
            <span></span><span></span><span></span>
          </div>
          <pre><code>{`const developer = {
  name: "Joy Basu",
  role: "Frontend Dev",
  experience: "4.5 Years",
  skills: ["Reactjs", "Next.js","JavaScript" ,"TypeScript","Redux]
};`}</code></pre>
        </div>
      </div>
    </section>
  );
};

export default Hero;
