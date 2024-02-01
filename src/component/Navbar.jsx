import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelopeOpenText, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import Music from './Music';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('hero');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 300;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        setActiveTab(section.getAttribute('id'));
      }
    });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className={`nav-item ${activeTab === 'hero' ? 'active' : ''}`} onClick={() => scrollToSection('hero')}>
          <div className="nav-btn">
            <FontAwesomeIcon icon={faHome} color={activeTab === 'hero' ? 'var(--blue)' : 'var(--gray-color)'} />
            <p>Home</p>
          </div>
        </div>
        <div className={`nav-item ${activeTab === 'section-2' ? 'active' : ''}`} onClick={() => scrollToSection('section-2')}>
          <div className="nav-btn">
            <FontAwesomeIcon icon={faEnvelopeOpenText} color={activeTab === 'section-2' ? 'var(--blue)' : 'var(--gray-color)'} />
            <p>Event</p>
          </div>
        </div>
        <div className={`nav-item ${activeTab === 'section-3' ? 'active' : ''}`} onClick={() => scrollToSection('section-3')}>
          <div className="nav-btn">
            <FontAwesomeIcon icon={faMicrophone} color={activeTab === 'section-3' ? 'var(--blue)' : 'var(--gray-color)'} />
            <p>Podcast</p>
          </div>
        </div>
        <div className="nav-item">
          <div className="nav-btn song">
            <Music />
            <p>Song</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
