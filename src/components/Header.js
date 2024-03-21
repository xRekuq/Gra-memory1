import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/game">Gra</Link></li>
          <li><Link to="/login">Logowanie</Link></li>
          <li><Link to="/register">Rejestracja</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;