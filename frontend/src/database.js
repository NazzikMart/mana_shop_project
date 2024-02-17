import { Sequelize } from "sequelize";

const db = new Sequelize("mana_shop", "root", "usb", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
