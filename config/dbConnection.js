const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const DB = process.env.DB_CONNECTION_STRING.replace(
  "<password>",
  process.env.DB_PASSWORD
);

const connectDb = async () => {
  try {
    const connect = await DB;
    console.log("Database connected: ", connect);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
