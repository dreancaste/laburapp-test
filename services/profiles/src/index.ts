import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

import pool from './db';
import auth, { AuthRequest } from './middleware/auth';

app.get('/', (req, res) => {
  res.send('Profiles Service is running');
});

app.get('/me', auth, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const profile = await pool.query('SELECT * FROM user_profiles WHERE user_id = $1', [req.user.userId]);
    if (profile.rows.length === 0) {
      // If no profile, create one
      const newProfile = await pool.query(
        'INSERT INTO user_profiles (user_id) VALUES ($1) RETURNING *',
        [req.user.userId]
      );
      return res.json(newProfile.rows[0]);
    }
    res.json(profile.rows[0]);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.put('/me', auth, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const { first_name, last_name, profile_picture_url, bio, date_of_birth, address } = req.body;

    const updatedProfile = await pool.query(
      'UPDATE user_profiles SET first_name = $1, last_name = $2, profile_picture_url = $3, bio = $4, date_of_birth = $5, address = $6 WHERE user_id = $7 RETURNING *',
      [first_name, last_name, profile_picture_url, bio, date_of_birth, address, req.user.userId]
    );

    res.json(updatedProfile.rows[0]);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


app.listen(port, () => {
  console.log(`Profiles service listening at http://localhost:${port}`);
});
