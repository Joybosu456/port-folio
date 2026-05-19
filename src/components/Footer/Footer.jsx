import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h2 className="logo text-gradient">JB.</h2>
          <p className="footer-tagline">Building dynamic, premium web experiences.</p>
        </div>
        <div className="footer-socials">
          <a href="#" className="social-link" aria-label="Github"><FaGithub size={20} /></a>
          <a href="#" className="social-link" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
          <a href="mailto:joybosu456@gmail.com" className="social-link" aria-label="Email"><Mail size={20} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Joy Basu. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
