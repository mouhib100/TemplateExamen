const mongoose = require("mongoose");
const colors = require("colors");

mongoose.connect("mongodb://127.0.0.1:27017/ExamenNodeDemo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .once("open", () => {
    console.log("Database connected !".bgGreen);
  })
  .on("error", (error) => {
    console.log(`Database connection error : ${error}`.bgRed);
  });

module.exports = mongoose;
