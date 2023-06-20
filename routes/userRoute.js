const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {
  res.status(201).json({ message: "User has been created" });
});

router.post("/login", (req, res) => {
  res.status(201).json({ message: "User logged in" });
});

router.get("/me", (req, res) => {
  res.status(201).json({ message: "Current user" });
});

module.exports = router;
