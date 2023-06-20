const asyncHandler = require("express-async-handler");

//@desc Register a user
//@route POST /api/users/register
//@public

exports.registerUser = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "User has been created" });
});

//@desc Login user
//@route POST /api/users/login
//@public

exports.loginUser = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "User logged in" });
});

//@desc Current user
//@route GET /api/users/me
//@private

exports.getMe = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "Current user" });
});
