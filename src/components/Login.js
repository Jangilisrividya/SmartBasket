// src/components/Login.js
import React, { useState } from 'react';

function Login({ setUser, setCart, setShowRegister, setPage }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();

      if (data.success) {
        setUser(data.user);
        setCart([]); // empty cart initially
        setPage('home'); // ✅ redirect to Home after successful login
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert('Server error: ' + err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account?{' '}
        <span
          onClick={() => setShowRegister(true)}
          style={{ color: 'blue', cursor: 'pointer' }}
        >
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;