import React, { useState } from 'react';

function NavBar({ onButtonClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onButtonClick();
  };

  return (
    <div className={`navbar-container ${isMenuOpen ? 'open' : ''}`}>
      <button className="hamburger-btn" onClick={toggleMenu}>
        {isMenuOpen ? (
          <span className="close-icon">X</span> 
        ) : (
          <span className="hamburger-icon">≡</span>
        )}
      </button>
      
      <div className={`menu ${isMenuOpen ? 'show' : ''}`}>
        <ul>
          <li><a href="#profile" onClick={toggleMenu}>Profil</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projets</a></li>
          <li><a href="#add-project" onClick={toggleMenu}>Ajouter Projet</a></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
