import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../css/NavBar.css';
import logo from '../Images/logo.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const updateLoginStatus = () => {
      const user = localStorage.getItem('user');
      setIsLoggedIn(user !== null);
    };

    // Initial check
    updateLoginStatus();

    // Listen for changes in localStorage
    window.addEventListener('storage', updateLoginStatus);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('storage', updateLoginStatus);
    };
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
    window.dispatchEvent(new Event('storage')); // Notify other components
  };

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <Link className="nav-brand" to="/">
          <img src={logo} alt="Restaurant Logo" className="nav-logo" />
          Skill-Up
        </Link>
        <div className="hamburger-menu" onClick={toggleMenu}>
          ☰
        </div>
        <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          {isLoggedIn ? (
            <>
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/Courses">Courses</Link>
              <Link className="nav-link" to="/Registration">Register</Link>
              <Link className="nav-link" to="/Gallery">Gallery</Link> 
              <Link className="nav-link" to="/Profile">Profile</Link>
              <Link className="nav-link" to="/Logout" onClick={handleLogout}>Log out</Link>
            </>
          ) : (
            <>
              {location.pathname !== '/Login' && (
                <Link className="nav-link" to="/Login">Login</Link>
              )}
              {location.pathname !== '/SignUp' && (
                <Link className="nav-link" to="/SignUp">Sign Up</Link>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
