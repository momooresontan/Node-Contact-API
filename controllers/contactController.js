//@desc Get all contacts
//@route GET /api/contacts
//@public

exports.getAllContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};
