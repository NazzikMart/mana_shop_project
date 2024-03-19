const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3006;

// Підключення до бази даних MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "usbw",
  database: "mana_shop",
});

// Підключення до бази даних
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");

  // Створення таблиці, якщо вона ще не існує
  const createTableQuery = `CREATE TABLE IF NOT EXISTS iphone (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL
    )`;
  connection.query(createTableQuery, (err, result) => {
    if (err) throw err;
    console.log("Table created successfully");
  });
});

// Розбір тіла запиту в JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Маршрут для обробки POST-запитів форми
app.post("/iphone", (req, res) => {
  const { name, phone } = req.body;

  // Вставка даних у базу даних
  const insertQuery = `INSERT INTO iphone (name, phone) VALUES (?, ?)`;
  connection.query(insertQuery, [name, phone], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).send("Error inserting data into database");
      return;
    }
    console.log("Data inserted successfully");
    res.send("Data inserted successfully");
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
