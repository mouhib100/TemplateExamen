const express = require("express");

const platRouter = express.Router();

const {
  addPlat,
  UpdateOnePlat,
  deletePlat,
  getPlat,
  getAllPlats,
} = require("../controllers/Plat.controller");

//validators
const validate = require("../middleware/SchemaValidation");

const { PlatSchemaValidator } = require("../validators/plat.validators");

const multer = require("multer");
const upload = require("../middleware/uploadImage");

platRouter.post(
  "/",
  upload.single("plat_image"),
  addPlat,
  validate(PlatSchemaValidator)
);
platRouter.get("/allplats", getAllPlats);
platRouter.get("/:id", getPlat);
platRouter.put("/update/:id", UpdateOnePlat);
platRouter.delete("/delete/:id", deletePlat);

module.exports = platRouter;
