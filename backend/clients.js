const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
app.use(cors());
const port = 5000;

// Підключення до бази даних MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Ваше ім'я користувача
  password: 'usbw', // Ваш пароль
  database: 'mana_shop' // Назва вашої бази даних
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});

// Парсер JSON-даних
app.use(bodyParser.json());

// Обробник POST-запиту для зберігання даних з форми
app.post('/submit', (req, res) => {
    const { name, phoneNumber } = req.body;

  // Вставка даних в базу даних
  const sql = 'INSERT INTO clients (name, phone_number) VALUES (?, ?)';
  db.query(sql, [name, phoneNumber], (err, result) => {
    if (err) throw err;
    console.log('Data inserted successfully');
    res.send('Data inserted successfully');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});