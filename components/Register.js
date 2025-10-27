// src/components/Register.js
import React, { useState } from 'react';

function Register({ setShowRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.success) {
        alert('Registered successfully! Please login.');
        setShowRegister(false);
      } else {
        alert('Registration failed: ' + data.message);
      }
    } catch (err) {
      alert('Server error: ' + err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account?{' '}
        <span onClick={() => setShowRegister(false)} style={{color:'blue',cursor:'pointer'}}>Login</span>
      </p>
    </div>
  );
}

export default Register;