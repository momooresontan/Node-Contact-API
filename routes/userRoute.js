const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/register");

router.post("/login");

router.get("/me");

module.exports = router;
