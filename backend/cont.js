const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
const PORT = 3003;

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
    CREATE TABLE IF NOT EXISTS contacts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      phone VARCHAR(15) NOT NULL,
      comment TEXT
    )
  `;
  connection.query(createTableQuery, (err, result) => {
    if (err) {
      console.error("Помилка при створенні таблиці:", err.message);
      throw err;
    }
    console.log("Таблиця 'contacts' успішно створена або вже існує.");
  });
});

app.post("/contactData", (req, res) => {
  console.log(req.body);
  const { name, phone, comment } = req.body;
  const sql = "INSERT INTO contacts (name, phone, comment) VALUES (?, ?, ?)";
  connection.query(sql, [name, phone, comment], (err, result) => {
    if (err) {
      console.error("Помилка при збереженні даних у базу даних:", err.message);
      res
        .status(500)
        .json({ error: "Помилка сервера. Будь ласка, спробуйте ще раз." });
      return;
    }
    console.log("Дані успішно збережено у базі даних.");
    res.status(201).json({ message: "Дані успішно збережено у базі даних." });
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});