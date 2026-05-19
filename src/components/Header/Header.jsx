import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#hero" className="logo text-gradient">JB.</a>
        
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#experience" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Experience</a>
          <a href="#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#contact" className="nav-link btn-primary" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
