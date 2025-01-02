const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/FormData", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error", err);
    process.exit(1);
  }
};

module.exports = connectDb;
