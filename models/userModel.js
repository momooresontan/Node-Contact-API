const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a user name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter user email address"],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Please enter user phone number"],
  },
});
