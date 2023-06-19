const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/api/contacts", (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
