const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("Book Store connected to MongoDB");
  } catch (err) {
    console.error(err.message);

    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
