import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section container">
      <div className="section-header">
        <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
        <div className="section-line"></div>
      </div>

      <div className="contact-content glass-panel">
        <div className="contact-info">
          <h3 className="contact-heading">Let's Connect</h3>
          <p className="contact-desc">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <a href="mailto:joybosu456@gmail.com">joybosu456@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-text">
                <h4>Phone</h4>
                <a href="tel:6296582055">6296582055</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>Gangnapur, Nadia, 741238</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn-primary form-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
