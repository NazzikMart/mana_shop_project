const express = require("express");
const mysql = require("mysql2");
const fs = require("fs");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "usbw",
  database: "mana_shop",
});
 
app.get("/exportData", (req, res) => {
  const query = "SELECT * FROM products";

  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const jsonData = JSON.stringify(results, null, 2);
    fs.writeFile(
      "../src/json/product.json",
      '{"product" :' + jsonData + "}",
      (err) => {
        console.log(err);
      }
    );

    res.json({ message: "Data exported to products.json" });
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
