const express = require("express");
const contactController = require("../controllers/contactController");

const router = express.Router();

router.get("/", contactController.getAllContacts);
router.post("/", contactController.createContact);
router.get("/:id", contactController.getContactById);
router.put("/:id", contactController.updateContactById);
router.delete("/:id", contactController.deleteContactById);

module.exports = router;
