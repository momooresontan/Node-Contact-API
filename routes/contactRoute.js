const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});
router.post("/", (req, res) => {
  res.status(200).json({ message: "Create a new contact" });
});
router.get("/:id", (req, res) => {
  res.status(200).json({ message: "Get one contact by id" });
});
router.put("/:id", (req, res) => {
  res.status(200).json({ message: "Update one contact by id" });
});
router.delete("/:id", (req, res) => {
  res.status(200).json({ message: "Delete one contact by id" });
});

module.exports = router;
