const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const PORT = 3001;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "usbw",
  database: "mana_shop",
});

connection.connect((err) => {
  if (err) {
    console.error("Помилка підключення до бази даних:", err.message);
    throw err;
  }
  console.log("Підключено до бази даних MySQL");
  

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS orders (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      phoneNumber VARCHAR(255) NOT NULL,
      deliveryMethod VARCHAR(255) NOT NULL,
      npOffice VARCHAR(255),
      paymentMethod VARCHAR(255) NOT NULL,
      totalSum DECIMAL(10, 2) NOT NULL
    )
  `;
  connection.query(createTableQuery, (err, result) => {
    if (err) {
      console.error("Помилка створення таблиці:", err.message);
      throw err;
    }
    console.log("Таблиця 'orders' створена або вже існує");
  });
});

app.post("/api/orders", (req, res) => {
  const { name, phoneNumber, deliveryMethod, npOffice, paymentMethod, totalSum } = req.body;
  const sql = `
    INSERT INTO orders (name, phoneNumber, deliveryMethod, npOffice, paymentMethod, totalSum) 
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const values = [name, phoneNumber, deliveryMethod, npOffice, paymentMethod, totalSum];
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Помилка при збереженні даних у базу даних:", err.message);
      res.status(500).json({ error: "Помилка сервера. Будь ласка, спробуйте ще раз." });
      return;
    }
    console.log("Дані успішно збережено у базі даних.");
    res.status(201).json({ message: "Дані успішно збережено у базі даних." });
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});