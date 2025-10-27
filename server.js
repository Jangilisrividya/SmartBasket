// server.js
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MySQL connection
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'grocery_app'
});

// Register user
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const [existing] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    if (existing.length > 0) {
      return res.json({ success: false, message: 'Username already exists' });
    }
    await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

// Login user
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
    if (rows.length > 0) res.json({ success: true, user: rows[0] });
    else res.json({ success: false, message: 'Invalid username or password' });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
