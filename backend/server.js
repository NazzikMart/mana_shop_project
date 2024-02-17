const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const saltRounds = 10; 
const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "usbw",
  database: "mana_shop",
});

db.connect((err) => {
  if (err) {
    console.error("Неможливо підключитися до MySQL:", err);
    throw err;
  }
  console.log("Підключено до MySQL");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const registrationValidation = [
  check("firstName").isLength({ min: 1 }).withMessage("Ім'я обов'язкове"),
  check("number").isMobilePhone().withMessage("Недійсний номер телефону"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Пароль повинен бути принаймні 6 символів"),
];

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/register", registrationValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstName, number, password } = req.body;

  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      console.error("Помилка хешування паролю:", err);
      return res.status(500).send("Внутрішня помилка сервера");
    }

    db.query(
      "INSERT INTO users (first_name, phone_number, password) VALUES (?, ?, ?)",
      [firstName, number, hashedPassword],
      (err, result) => {
        if (err) {
          console.error("Помилка виконання запиту:", err);
          res.status(500).send("Внутрішня помилка сервера");
        } else {
          res
            .status(200)
            .json({ userId: result.insertId, message: "Реєстрація успішна" });
        }
      }
    );
  });
});

app.post("/register", registrationValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstName, number, password } = req.body;

  db.query(
    "INSERT INTO users (first_name, phone_number, password) VALUES (?, ?, ?)",
    [firstName, number, password],
    (err, result) => {
      if (err) {
        console.error("Помилка виконання запиту:", err);
        res.status(500).send("Внутрішня помилка сервера");
      } else {
        res
          .status(200)
          .json({ userId: result.insertId, message: "Реєстрація успішна" });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Сервер працює на порті ${port}`);
});
