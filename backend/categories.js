const express = require('express');
const mysql = require('mysql');
const fs = require('fs');

const app = express();
const port = 5007;

const db_connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'usbw',
  database: 'mana_shop'
});


db_connection.connect((err) => {
  if (err) {
    console.error('Помилка підключення до бази даних: ' + err.stack);
    return;
  }
  console.log('Успішне підключення до бази даних');
});


app.get('/categories', (req, res) => {
    const sql = 'SELECT * FROM Categories';
    db_connection.query(sql, (err, result) => {
      if (err) {
        console.error('Помилка запиту до бази даних: ' + err.stack);
        res.status(500).send('Помилка сервера');
        return;
      }
      const jsonData = JSON.stringify(result, null, 2);
      fs.writeFile( "../src/json/categorie.json",
      '{"categorie" :' + jsonData + "}", (err) => {
        if (err) {
          console.error('Помилка запису у файл: ' + err.stack);
          res.status(500).send('Помилка сервера');
          return;
        }
        console.log('Дані записані у файл categorie.json');
        res.send('Дані записані у файл categorie.json');
      });
    });
  });




app.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`);
});