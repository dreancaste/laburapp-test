import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

import pool from './db';
import bcrypt from 'bcrypt';

app.get('/', (req, res) => {
  res.send('Authentication Service is running');
});

app.post('/register', async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({ error: 'Email, password, and role are required' });
    }

    // Check if role exists
    const roleRes = await pool.query('SELECT role_id FROM roles WHERE role_name = $1', [role]);
    if (roleRes.rows.length === 0) {
      return res.status(400).json({ error: 'Invalid role' });
    }
    const roleId = roleRes.rows[0].role_id;

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Insert the new user
    const newUser = await pool.query(
      'INSERT INTO users (email, password_hash, role_id) VALUES ($1, $2, $3) RETURNING user_id, email, role_id, created_at',
      [email, passwordHash, roleId]
    );

    res.status(201).json(newUser.rows[0]);
  } catch (err: any) {
    if (err.code === '23505') {
      return res.status(409).json({ error: 'Email already exists' });
    }
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

import jwt from 'jsonwebtoken';

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Check if user exists
    const userRes = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userRes.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = userRes.rows[0];

    // Check password
    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT
    if (!process.env.JWT_ACCESS_SECRET || !process.env.JWT_REFRESH_SECRET) {
      throw new Error('JWT secrets are not defined');
    }
    const accessToken = jwt.sign(
      { userId: user.user_id, role: user.role_id },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: '15m' } // Short-lived access token
    );

    const refreshToken = jwt.sign(
      { userId: user.user_id },
      process.env.JWT_REFRESH_SECRET,
      { expiresIn: '7d' } // Long-lived refresh token
    );

    // Store refresh token in the database
    await pool.query('UPDATE users SET refresh_token = $1 WHERE user_id = $2', [refreshToken, user.user_id]);

    res.json({ accessToken, refreshToken });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.post('/refresh', async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return res.sendStatus(401);
  }

  try {
    if (!process.env.JWT_ACCESS_SECRET || !process.env.JWT_REFRESH_SECRET) {
      throw new Error('JWT secrets are not defined');
    }

    const decoded: any = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    // Check if refresh token is in the database
    const userRes = await pool.query('SELECT * FROM users WHERE user_id = $1 AND refresh_token = $2', [decoded.userId, refreshToken]);
    if (userRes.rows.length === 0) {
      return res.sendStatus(403);
    }

    const user = userRes.rows[0];

    const accessToken = jwt.sign(
      { userId: user.user_id, role: user.role_id },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: '15m' }
    );

    res.json({ accessToken });
  } catch (err) {
    res.sendStatus(403);
  }
});

app.listen(port, () => {
  console.log(`Authentication service listening at http://localhost:${port}`);
});
