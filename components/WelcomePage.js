import React from 'react';
import groceryBg from '../assets/grocery-bg.jpg'; // ensure this image exists

function WelcomePage({ setPage }) {
  return (
    <div
      style={{
        height: '100vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${groceryBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        fontFamily: 'Poppins, sans-serif',
        animation: 'fadeIn 1.2s ease-in',
        color: '#fff',
        textAlign: 'center'
      }}
    >
      {/* Login Button */}
      <button
        onClick={() => setPage('login')}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '10px 25px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '600',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
          transition: '0.3s'
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#45a049')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#4CAF50')}
      >
        Login
      </button>

      {/* Title */}
      <h1
        style={{
          fontFamily: '"Playfair Display", serif',
          fontSize: '2.8rem',
          marginBottom: '0.3rem',
          letterSpacing: '1px',
          animation: 'fadeInUp 1.2s ease-in',
          textShadow: '2px 2px 10px rgba(0,0,0,0.4)'
        }}
      >
        Welcome to
      </h1>

      {/* App Name */}
      <h1
        style={{
          fontFamily: '"Lobster", cursive',
          fontSize: '5rem',
          color: '#ffde59',
          textShadow: '0 0 25px rgba(255, 222, 89, 0.8)',
          letterSpacing: '2px',
          animation: 'fadeInUp 1.5s ease-in'
        }}
      >
        SmartBasket 🛒
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: '1.4rem',
          color: '#f1f1f1',
          opacity: 0.9,
          animation: 'fadeInUp 2s ease-in',
          marginTop: '10px'
        }}
      >
        Fresh groceries. Fast delivery. Every day.
      </p>

      {/* Contact Info */}
      <p
        style={{
          position: 'absolute',
          bottom: '20px',
          fontSize: '1rem',
          color: '#ddd',
          opacity: 0.8
        }}
      >
        📞 Contact us: support@smartbasket.com | +91 98765 43210
      </p>

      {/* Animations & Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Playfair+Display:wght@600&display=swap');
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

export default WelcomePage;
