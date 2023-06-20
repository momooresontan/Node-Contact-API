const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a user name"],
      unique: [true, "Username already taken!"],
    },
    email: {
      type: String,
      required: [true, "Please enter user email address"],
      unique: [true, "Email address already taken!"],
    },
    password: {
      type: String,
      required: [true, "Please enter user password"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
