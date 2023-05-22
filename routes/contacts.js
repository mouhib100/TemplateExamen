var Contact = require("../models/contact.js");
var express = require("express");
var router = express.Router();

router.post("/", async function (req, res) {
  try {
    const contact = new Contact({
      FullName: req.body.FullName,
      Phone: req.body.Phone,
    });

    const newcontact = await contact.save();

    console.log(newcontact);
    res.json(": Contact :" + newcontact._id + " added");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/", function (req, res) {
  Contact.find((err, contacts) => {
    res.json({
      name: contacts.FullName,
      Phone: contacts.Phone,
      //   title: "Contact list",
      //   cont: contacts
    });
  });
});

module.exports = router;
