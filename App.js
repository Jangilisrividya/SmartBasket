import React, { useState } from 'react';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import WelcomePage from './components/WelcomePage';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [showRegister, setShowRegister] = useState(false);
  const [page, setPage] = useState('welcome'); // Show Welcome Page first

  return (
    <div className="app-container">
      {page === 'welcome' ? (
        <WelcomePage setPage={setPage} />
      ) : !user ? (
        showRegister ? (
          <Register setShowRegister={setShowRegister} />
        ) : (
          <Login  setUser={setUser}
              setCart={setCart}
              setShowRegister={setShowRegister}
              setPage={setPage} />
        )
      ) : (
        <>
          <Navbar setPage={setPage} setUser={setUser} setShowRegister={setShowRegister} setCart={setCart} setPageToWelcome={() => setPage('welcome')} />
          {page === 'home' ? (
            <Home cart={cart} setCart={setCart} user={user} />
          ) : (
            <Cart cart={cart} setCart={setCart} user={user} />
          )}
        </>
      )}
    </div>
  );
}

export default App;