const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); 

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'user_form_db'
});


app.post('/api/users', async (req, res) => {
  try {
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      birthDay, 
      occupation, 
      sex, 
      profileBase64 
    } = req.body;

    const sql = `
      INSERT INTO users 
        (firstName, lastName, email, phone, birthDay, occupation, sex, profileBase64) 
      VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const values = [
      firstName, 
      lastName, 
      email, 
      phone, 
      birthDay, 
      occupation, 
      sex, 
      profileBase64
    ];

    const [result] = await pool.execute(sql, values);
    console.log('Data saved! New ID:', result.insertId);
    res.json({ success: true, id: result.insertId });

  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(port, () => {
  console.log(`🚀 Backend server is running at http://localhost:${port}`);
});