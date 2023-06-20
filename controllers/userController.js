const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//@desc Register a user
//@route POST /api/users/register
//@public

exports.registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already created!");
  }

  //Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("User data invalid!");
  }
  res.status(201).json({ message: "User has been created" });
});

//@desc Login user
//@route POST /api/users/login
//@public

exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  res.status(201).json({ message: "User logged in" });
});

//@desc Current user
//@route GET /api/users/me
//@private

exports.getMe = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "Current user" });
});
