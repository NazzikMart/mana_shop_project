const mysql = require("mysql");

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

let query = "SELECT * FROM `users`";

db.query(query, (err, date) => {
  for (let index = 0; index < date.length; index++) {
    const element = date[index];
    console.log(
      element.first_name,
      element.phone_number,
      element.password,
      element.id
    );
  }
});
