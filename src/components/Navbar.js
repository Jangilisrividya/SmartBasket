import React from 'react';
import '../App.css';

function Navbar({ setPage, setUser, setPageToWelcome }) {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <span className="highlight">Smart</span>Basket 🛒
      </h1>
      <div className="nav-buttons">
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('cart')}>Cart</button>
        <button
          className="logout-btn"
          onClick={() => {
            setUser(null);
            setPageToWelcome();
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;