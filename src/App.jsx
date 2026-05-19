import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Experience from './sections/Experience/Experience';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
