import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/styles.css';
import Header from './components/Header';
import Hero from './components/Hero';  // Importar Hero con 'H' mayúscula
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />  {/* Añadir Hero component */}
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);