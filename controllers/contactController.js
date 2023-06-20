const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@public

exports.getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc Create a contact
//@route POST /api/contacts
//@public

exports.createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});

//@desc Get one contact
//@route GET /api/contacts/:id
//@public

exports.getContactById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get one contact by id" });
});

//@desc Update one contact
//@route PUT /api/contacts/:id
//@public

exports.updateContactById = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "Update one contact by id" });
});

//@desc Delete one contact
//@route DELETE /api/contacts/:id
//@public

exports.deleteContactById = asyncHandler(async (req, res) => {
  res.status(204).json({ message: "Delete one contact by id" });
});
