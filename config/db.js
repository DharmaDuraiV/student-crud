const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/demo";
const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("conneted to mongodb server");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
