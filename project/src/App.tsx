import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <main>
        <Hero />
        <Intro />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-center py-6">
        <p className="text-gray-400">© 2024 Archit Verma. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;