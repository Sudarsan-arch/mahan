import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pristabhumi from './components/Pristabhumi';
import Biography from './components/Biography';
import Gallery from './components/Gallery';
import VisionChat from './components/VisionChat';
import Footer from './components/Footer';
import './index.css';

const Section = {
  Home: 'home',
  Pristabhumi: 'pristabhumi',
  Biography: 'biography',
  Gallery: 'gallery',
  Vision: 'vision'
};

const App = () => {
  const [activeSection, setActiveSection] = useState(Section.Home);

  return (
    <div className="bg-green-gradient relative flex flex-col overflow-x-hidden min-h-screen">
      <Navbar activeSection={activeSection} />
      
      <main className="flex-grow relative z-10 pt-4">
        {/* Home Section */}
        <div id={Section.Home} onClick={() => setActiveSection(Section.Home)}>
          <Hero />
        </div>

        {/* Pristabhumi Section */}
        <div id={Section.Pristabhumi} onClick={() => setActiveSection(Section.Pristabhumi)}>
          <Pristabhumi />
        </div>

        {/* Biography Section */}
        <div id={Section.Biography} onClick={() => setActiveSection(Section.Biography)}>
          <Biography />
        </div>

        {/* Gallery Section */}
        <div id={Section.Gallery} onClick={() => setActiveSection(Section.Gallery)}>
          <Gallery />
        </div>

        {/* Vision Section */}
        <div id={Section.Vision} onClick={() => setActiveSection(Section.Vision)}>
          <VisionChat />
        </div>
      </main>

      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
