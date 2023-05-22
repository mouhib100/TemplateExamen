const mongoose = require("mongoose");

const PlatSchema = new mongoose.Schema(
  {
    plat_name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
      validate: {
        validator: function (value) {
          return value > 0;
        },
        message: "Le poids doit être supérieur à zéro.",
      },
      max: 4,
    },
    nbre_ingredients: {
      type: Number,
      required: true,
      min: 0,
      validate: {
        validator: function (value) {
          return value > 0;
        },
        message: "Le poids doit être supérieur à zéro.",
      },
    },
    description: {
      type: String,
      required: true,
    },
    plat_image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Plat", PlatSchema);
