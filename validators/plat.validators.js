const yup = require("yup");

const PlatSchemaValidator = yup.object().shape({
  plat_name: yup
    .string()
    .required("Title is required")
    .max(8, "Title must not exceed 8 characters")
    .test("unique", "Title must be unique", function (value) {
      return isTitleUnique(value);
    }),
  nbre_ingredients: yup
    .number()
    .typeError("Price must be a number")
    .required("Price is required")
    .positive("Price must be a positive number")
    .max(5, "Number of ingredients must not exceed 5"),
  description: yup
    .string()
    .required("Description is required")
    .matches(/^[a-zA-Z\s]*$/, "Description must contain only letters"),
  category: yup.string().required("Category is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .required("Price is required")
    .positive("Price must be a positive number"),
  plat_image: yup.string().required("Image is required"),
});

module.exports = {
  PlatSchemaValidator,
};
