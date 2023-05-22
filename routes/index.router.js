const express = require("express");
const router = express.Router();
// ==============================|| Imported routes ||============================== //
const platRouter = require("./plats.router");
const contactRouter = require("./contacts");

router.use("/plat", platRouter);
router.use("/contact", contactRouter);

module.exports = router;
