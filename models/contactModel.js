const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add contact email address"],
    },
    phone: {
      type: String,
      required: [true, "Please add contact phone number"],
    },
  },
  {
    timeStamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
