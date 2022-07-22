const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });



// connected to dabase
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log(`Database error  ${error}`);
  });
