const mongoose = require("mongoose");
const Plat = require("../models/Plat.model");

exports.addPlat = async (req, res) => {
  try {
    const plat = new Plat({
      plat_name: req.body.plat_name,
      price: req.body.price,
      nbre_ingredients: req.body.nbre_ingredients,
      description: req.body.description,
      plat_image: req.file.filename,
    });
    const savedPlat = await plat.save();
    res.status(201).json({
      plat: savedPlat,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

exports.UpdateOnePlat = async (req, res) => {
  const { id } = req.params;

  try {
    await PlatSchema.findByIdAndUpdate(id, {
      $set: { ...req.body },
    });

    const updatedPlat = await PlatSchema.findById(id); //fetch the updated "plat" document

    if (!updatedPlat) {
      return res.status(404).json({ error: "Plat not found" });
    }

    return res.status(200).send({ msg: "plat updated sucessfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update plat" });
  }
};

//DELETE Plat
exports.deletePlat = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPlat = await PlatSchema.findByIdAndDelete(id);
    return res
      .status(200)
      .send({ msg: "plat deleted successfully", deletedPlat });
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

//getAPlat
exports.getPlat = async (req, res) => {
  const { id } = req.params;
  try {
    const getPlat = await PlatSchema.findById(id);
    return res.status(200).send({ msg: "plat fetched successfully", getPlat });
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

//GET allPOSTs
exports.getAllPlats = async (req, res) => {
  try {
    const plats = await PlatSchema.find();
    return res.status(200).send({ msg: "get all plats successfully", plats });
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};
